/**
 * Returns true of a given parameter is not null and not undefined.
 * @param any any input is feasible
 * @return {boolean} true if defined, otherwise false
 */
export const exists = any => any !== null && typeof any !== 'undefined';

export function LEN(arr) {
    if(!Array.isArray(arr)) return 0;
    return arr.length;
}

export function search(arr, fn) {
    if(LEN(arr) === 0) return undefined;
    
    for(let i=0; i<arr.length; i++) {
        let res = fn(arr[i]);
        if(res[0] !== undefined) return res;
    }
    return fn(undefined);
}

export function whiteSpace(c) { return c === ' ' || c === '\t'; }
export function lineStart(str, pos) {
    if(pos > 0 ) pos--;
    else return pos;
    while(pos >= 0 && whiteSpace(str[pos]) ) pos--;
    return pos+1;
}

export function strInsert(base, index, str) {
    let first = base.substr(0, index);
    return first+str+base.substr(index);
}

export function cons(a,b) {
    return ({ head: a, tail: b})
}

export function indent(n) {
     n = +n;
     if(isNaN(n) || n<=0) return "";
     return '    '+indent(n-1);
 }

