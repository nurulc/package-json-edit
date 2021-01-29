import { lineStart } from '../utils.js'; 


export function _nextNonWhiteSpace(endPos) {
        let end = endPos || this.end;
        let pkg = this.pkg;
        let len = pkg.length;
        let c = pkg[end];
        while(end < len && ( c === ' ' || c === '\t' || c === '\r' || c === '\n') ) {
            c = pkg[++end];
        }
        //if( c ) return end-1;
        return end;
    }
export function _endOfLine(pos) {
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
    
export function _indent(str) {
       let pkg = this.pkg;
       let start = lineStart(pkg,this.start);
       let indentStr = pkg.substring(start, this.start);
       return str.split('\n').map(s => indentStr+s).join('\n');
    }
    
export function _append(str) {
        let pkg = this.pkg;
        let end = this.nextNonWhiteSpace();
        let c = pkg[end];
        
        if(c === ',') this.root.edits.push(['i', end, '\r\n'+this.indent(str)+',']);
        else if(c === '}' || c === ']'  )  this.root.edits.push(['i', end-1, ',\r\n'+this.indent(str)]);
    }
