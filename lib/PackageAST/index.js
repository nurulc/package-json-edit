import asAST  from 'json-to-ast';
import { lineStart, search,LEN, cons } from '../utils';
import { _nextNonWhiteSpace,  _endOfLine, _indent, _append } from './strMethods';
import { _path } from './_path';


class PackageAST  {
    constructor(pkg, node=undefined, offset=0, root=undefined) {
        this.pkg = pkg; // string
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
        
    elem(ast,name) {
        let match = (ast.type === 'Property' && ast.key.type === 'Identifier' && ast.key.value === name ); 
        return match ? ast : undefined;
    }

    get start() { return this.offset; }
    get end() { return this.ast.loc.end.offset; }
    get str() {
        return this.pkg.substring(this.start, this.end);
    }
};

PackageAST.prototype._path =  _path;
PackageAST.prototype.endOfLine =  _endOfLine;
PackageAST.prototype.indent  _indent;
PackageAST.prototype.append  _append;
PackageAST.prototype.nextNonWhiteSpace = _nextNonWhiteSpace;

export default PackageAST;_nextNonWhiteSpace
