export function stringiFy(node, indnt=0, litIndent=0) {
        switch(node.type) {
            case 'Literal': return indent(litIndent) + node.raw;
            case 'Property':  return indent(indnt)+node.key.raw + ": "+_toString(node.value,indnt+1); 
            case 'Object': return (
                " {\n"+ node.children.map(c => _toString(c,indnt+1)).join(',\n') + 
                '\n' + indent(indnt-1)+'}'
                );
            case 'Array': return (
                " [\n"+ node.children.map(c => _toString(c,indnt+1,indnt+1)).join(',\n') + 
                '\n' + indent(indnt-1)+']'
                );
        }
    }
