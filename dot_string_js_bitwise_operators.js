const main = (string) => {
    let container = new Array(2 << (string.length - 1) - 1).fill(string);
    container.map((current, id) => {
        for (let i = 0; i < current.length; i++) {
            switch ((id >> i) & 00000001) {
                case 1:
                    if (typeof current === 'string') current = current.split('');
                    current[i] += '.';
                    container[id] = current.join('');
                    break;
                case 0: break;
            }
        }
    })
    return container;
}
console.log(main('abcde'));


////// or

const main_ = (string) => {
    let container = new Array(2 << (string.length - 1) - 1).fill(string);
    container.map((current, id) => {
        if (typeof current === 'string') current = current.split('');
        current.map((char,index) =>{
            if (((id >> index) & 00000001) === 1) {
                    current[index] += '.';
                    container[id] = current.join('');
            }
        })
    })
    return container;
}
console.log(main_('abcde'));