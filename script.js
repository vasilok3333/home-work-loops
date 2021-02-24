// Task 1
//Знайдіть суму всіх цифр від 1 до 100. 

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum, 'task1');

//Task 2 
// Є масив [1, 2, 3, 4, 5]. З допомогою  цикла for вивести всі елементи на екран.



let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i], 'task2')
}


//Task 3 
//Є масив [-1, 22, 3, 44, 5]. Виведіть максимальне значення. 


let arr1 = [-1, 22, 3, 44, 5];

//просто проходимо по циклу
let max = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }
}
console.log(max, 'task3')

//за допомогою sort()
let arr2 = arr1.slice().sort((a, b) => a - b); // sort() змінює массив на місці, тому використовую ще й slice() для копіювання массиву
console.log(arr2[arr2.length - 1], 'task3')

//чи можна просто Math.max() 

console.log(Math.max(...arr1), 'task3')


//Task 4 

//Попросити юзера ввести 8 чисел і скільки він ввів додатніх, відємних та нулів. Вивести статистику на екран. Також досмтатньо тільки 1 змінної для отримання даних від юзера. 
let array = [],
    zeroCount = 0,
    negativeCount = 0,
    positiveCount = 0;

for (let i = 0; i < 8; i++) {
    array[i] = +prompt('Введіть будь-яке число', '0');
}

// array = prompt('Введіть будь-яких вісім чисел через кому').split(','); --------- with one prompt 



for (let i = 0; i < array.length; i++) {
    if (array[i] < 0) {
        negativeCount++;
    } else if (array[i] > 0) {
        positiveCount++
    } else {
        zeroCount++
    }
}

alert(`Ви ввели ${positiveCount} додатних чисел, ${negativeCount} відємних чисел та ${zeroCount} нулів`, '------task4')

//Task 5 
//Надрукуйте табличку множення для числа  8 від 1 до 9. 8 х 1 = 8

const NUM = 8;

for (let i = 1; i <= 9; i++) {
    console.log(`${NUM} X ${i} = ${NUM * i}`)
}

//Task 6 
//Є масив з елементами 2, 5, 9, 15, 0, 4. З допомогою цикла for і оператора if вивести на екран цифри, які більше 3-х, але менше 10.

let numbers = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3 && numbers[i] < 10) {
        console.log(numbers[i], 'task6')
    }
}

//Task 7
//Створити калькулятор який буде зациклений. Запитати у юзера 2 числа та знак , провести математичну операцію, далі вивести результат і спитатись чи хоче юзер повторити?
let repeat;
do {
    let firstNumber = +prompt('Введіть перше число');
    let secondNumber = +prompt('Введіть друге число');
    let mathematicalAction = prompt('Введіть знак математичної операції: +, -, *, /');
    let result;

    switch (mathematicalAction) {
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        default:
            console.log("Вибачте, сталась помилка");
    }


    alert(`результат проведеної математичної операції становить ${result}`);
    repeat = confirm('Зробити ще одну математичну операцію?')

} while (repeat)
