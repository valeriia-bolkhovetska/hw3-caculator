// Спрашиваем число.
// Проверяем что введено число и оно больше 0;
// Если нажата отмена или пустая строка или значение невалидно, переспрашиваем
// Посчитать сумму все четных чисел до этого числа включительно // 2+4+6+8+10
// Посчитать сумму все нечетных чисел до этого числа включительно // 1+3+5+7+9
// Выводим результат
// Сумма четных: 30
// Сумма нечетных: 25


let numberone = getNumber();
let sumeven =getSumEven(numberone)
let sumodd = getSumOdd(numberone)
showResult(sumeven, sumodd);

function getNumber() {
    let number = prompt('enter number');

    while (isNumberInvalid(number)) {
        number = prompt('enter number again');
    }

    return +number;
}

function isNumberInvalid(number) {
    return number === null || number.trim() === '' || isNaN(number) || number < 0;
}

function getSumEven(numberone) {
    let i=0;
    let result = 0;
    
    while (i <= numberone) {
        if (i % 2 === 0) {
            result += i;
        }

        i++;
    }
    return result;
}

function getSumOdd(numberone) {
    let i = 0;
    let result = 0;

    while (i <= numberone) {
        if (i % 2 === 1) {
            result += i;
        }
        
        i++;
    }

    return result;
}

function showResult (odd, even) {
    alert (`odd sum: ${odd} even sum: ${even}`);
}
 

