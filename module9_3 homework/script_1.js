// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. 
// В input можно ввести любое число.
// При клике на кнопку происходит следующее:
// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.

const btn = document.querySelector('.button');

btn.addEventListener('click', () => {
    const value1 = +document.getElementById('1').value;
    const value2 = +document.getElementById('2').value;

    let result = document.getElementById('j-result');
    result.textContent = '';
    if (!(value1 >= 100 && value1 <= 300 && value2 >= 100 && value2 <= 300)) {
        result.textContent = 'Одно из чисел вне диапазона от 100 до 300';
        return;
    }

    fetch(`https://picsum.photos/${value1}/${value2}`)
    .then((response) => {
        document.getElementById('res').src = response.url;
        });

        
     });
