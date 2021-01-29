import asAST  import 'json-to-ast';
import { lineStart, search,LEN, cons } import '';


class PackageAST  {
    constructor(pkg, node=undefined, offset=0, root=undefined) {
        this.pkg = pkg;
        this.ast = node || asAST(pkg, { loc: true, data: 'package.json'});
        //this.offset = offset===undefined? lineStart(pkg, this.ast.loc.start.offset) : offset;
        this.offset = offset===undefined? this.ast.loc.start.offset : offset;
        this.root = root || this;
        this.edits = undefined;
        if(this.root === this) this.edits = [];
    }
    
    clone(node, offset) {
        return new PackageAST(this.pkg, node, offset, this.root);
    }
    path(pathStr, sep='/') {
       let res = this._path(pathStr.split(sep),this.ast, undefined);
       return res;
    }
    
    _path(pathArr,ast, astPath) {
        astPath = astPath || ast;
        if(pathArr.length > 0 && ast !== undefined) {                  
           //console.log(pathArr,ast)
        	switch(ast.type) {
            	case 'Array':
                case 'Object': {
                    //console.log('Object', ast.children, pathArr);
                    if( LEN(ast.children) > 0) {
                        let newPath = cons(ast,astPath);
                        let n = search(ast.children, (e => this._path(pathArr,e, newPath)) );
                        return n;
                    }
                    return [undefined, astPath];
                     
               }
               case 'Property':
                    let n = this.elem(ast,pathArr[0]);
                    if(!n) return [undefined, astPath];
                    if(LEN(pathArr) === 1 ) {
                    	return [this.clone(n), astPath];
                    }
                    else {
                        return this._path(pathArr.slice(1),n.value, cons(ast,astPath));
                    }
            }
        } 
        return [undefined, astPath];
    }
        
    elem(ast,name) {
        let match = (ast.type === 'Property' && ast.key.type === 'Identifier' && ast.key.value === name ); 
        return match ? ast : undefined;
    }
    nextNonWhiteSpace(endPos) {
        let end = endPos || this.end;
        let pkg = this.pkg;
        let len = pkg.length;
        let c = pkg[end];
        while(end < len && ( c === ' ' || c === '\t' || c === '\r' || c === '\n') ) {
            c = pkg[++end];
            console.log('nws',c);
        }
        //if( c ) return end-1;
        return end;
    }
    endOfLine(pos) {
       let end = pos;
        let pkg = this.pkg;
        let len = pkg.length;
        let c = pkg[end];
        while(end < len && ( c === ' ' || c === '\t' || c === '\r') ) {
            c = pkg[end++];
        }
        if( c !== '\n' ) return end-1;
        return end;        
    }
    indent(str) {
       let pkg = this.pkg;
       let start = lineStart(pkg,this.start);
       let indentStr = pkg.substring(start, this.start);
       return str.split('\n').map(s => indentStr+s).join('\n');
    }
    append(str) {
        let pkg = this.pkg;
        let end = this.nextNonWhiteSpace();
        let c = pkg[end];
        console.log('next',pkg.substr(end, 20));
        if(c === ',') this.root.edits.push(['i', end, '\r\n'+this.indent(str)+',']);
        else if(c === '}' || c === ']'  )  this.root.edits.push(['i', end-1, ',\r\n'+this.indent(str)]);
    }

    get start() { return this.offset; }
    get end() { return this.ast.loc.end.offset; }
    get str() {
        return this.pkg.substring(this.start, this.end);
    }
};

export default PackageAST;
