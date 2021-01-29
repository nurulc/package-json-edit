
  export function _path(pathArr,ast, astPath) {
        astPath = astPath || ast;
        if(pathArr.length > 0 && ast !== undefined) {                  
           //console.log(pathArr,ast)
        	switch(ast.type) {
            	case 'Array':
                case 'Object': return objOrArray(pathArr, ast,astPath);
               case 'Property':
            }
        } 
        return [undefined, astPath];
    }

function objOrArray(pathArr, ast,astPath) {
    //console.log('Object', ast.children, pathArr);
    if( LEN(ast.children) > 0) {
        let newPath = cons(ast,astPath);
        let n = search(ast.children, (e => this._path(pathArr,e, newPath)) );
        return n;
    }
    return [undefined, astPath];
}

function property(pathArr, ast,astPath) {
    let n = this.elem(ast,pathArr[0]);
    if(!n) return [undefined, astPath];
    
    if(LEN(pathArr) === 1 ) {
      return [this.clone(n), astPath];
    }
    return this._path(pathArr.slice(1),n.value, cons(ast,astPath));
}
