const main = (string) => {
    //Получаем кол-во вариантов по формуле 2 в степени n, где n - максимальное кол-во точек между буквами.
    //Get the number of options using the formula 2 to the power of 'n', where 'n' is the maximum number of dots between letters.
    let quantityVariants = Math.pow(2, (string.length - 1));
    //Создаем массив заготовок (строк) согласно количеству вариантов
    //Create an array of templates (strings) according to the number of options
    let container = new Array(quantityVariants).fill(string);
    //Создаем массив с наборами положений точек
    //Create an array with sets of dot positions
    let binaryArr = [...container].map((current, index) => (index.toString(2)).split('').reverse());
    binaryArr.map((currentBinaryArr,id) => {
        //Получаем текущую строку согласно текущего положения (индекса) массива "binaryArr"
        //Get the current line according to the current position (index) of the "binary Array"
        let currentString = container[id];
        currentBinaryArr.map((cur, index) => {
            if (cur === '1') {
                //Если все-таки единица, то и точка тоже есть))
                //Seems to have found the dot)))
                if (typeof currentString === 'string') {
                    //Если строка, то в массив
                    //If a string, then into an array
                    currentString = currentString.split('');
                }
                //Ставим точку возле элемента под индексом этой единицы
                //We put a dot near the element under the index of this 'one'
                currentString[index] += '.';
                //Массив в строку
                //Array to string
                container[id] = currentString.join('');
            }
        })
    })
    //Вернуть контейнер строк всех вариантов положения точки
    //Return a container of strings with all dot position options
    return container;
}
//Вызвать функцию и передать ей строку
//Call a function and pass a string to it
console.log(main('abcd'));