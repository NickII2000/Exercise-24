/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство private. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

// Код возьмите из предыдущего домашнего задания

// let numberOfFilms;

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: true,
    start: function () {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while (this.count == '' || this.count == null || isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '');
            const b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && b.length <= 50) {
                this.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (this.count >= 10 && this.count <= 30) {
            console.log('Вы классический зритель');
        } else if (this.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    writeYourGenres: function () {
        // for (let i = 1; i <= 3; i++) {
        //     let genreChoose;
        //     genreChoose = prompt(`Ваш любимый жанр под номером ${i}`);
        //     if (genreChoose != '' && genreChoose != null) {
        //         this.genres[i - 1] = genreChoose;
        //         console.log('done');
        //     } else {
        //         i--;
        //         console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //     }
        // }
        for (let i = 1; i < 2; i++) {
            let genres;
            genres = prompt(`Введите Ваши любимые жанры через запятую`); //.trim();
            //      лав стори   ,  комедия, мелодрама    ,боевик,детский                      
            if (genres !== '' && genres != null) {
                this.genres = genres.toLowerCase().split(',');
                this.genres = this.genres.map(item => item = item.trim().toUpperCase()).sort();
                console.log('done');
            } else {
                i--;
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
            }
        }
        this.genres.forEach((item, index, array) =>
            console.log(`Любимый жанр ${index + 1} - это ${item}, из массива: [${array}]`));
    },
    showMyDB: function () {
        if (!this.private) {
            console.log(this);
        } else {
            console.log('Information about this Object is private');
        }
    },
    toggleVisibleMyDB: function () {
        this.private = !this.private;
    },
};

// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

// ---------------------------------------------------
const arr1 = ['zero', 'first', 'second'];
console.log(arr1[1]);

let userName = 'John';
let userNumber = 25;
userNumber = 24;

let storeName = 'McD';
const storeDescription = {
    budget: 10000,
    employees: ['Ivan', 'Boris', 'John'],
    products: {
        milk: 58,
        corn: 33,
    },
    open: true,
};
console.log(storeDescription);

// ---------------------------------------------------

const arr = [0, 11, 2, 13, 5];
arr.pop();
arr.push(6);
arr.shift();
arr.unshift(-1);
console.log(arr.sort((a, b) => a - b));

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// console.log(arr.length);

// for (let item of arr) {
//     console.log(item);
// }

arr.forEach((item, i, arr) => console.log(`элемент ${item} с номером ${i} массива [${arr}]`));

const str = 'z, x, y, a, b, c, d';
const arrString = str.split(', ');
console.log(arrString.sort().join('-'));


// ---------------------------------------------------

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function (plan) {
        const arr = [
            ...plan.skills.languages
        ];
        let str = `Мне ${plan.age} и я владею языками:`;
        arr.forEach(item => str += ` ${item.toUpperCase()}`);
        return str;
    }
};

function showExperience(plan) {
    return `${plan.skills.exp}`;
}

console.log(showExperience(personalPlanPeter));

function showProgrammingLangs(plan) {
    const obj = {
        ...plan.skills.programmingLangs
    };
    let str = '';
    for (let key in obj) {
        str += `Язык ${key} изучен на ${obj[key]}` + '\n';
    }
    return str;
}

console.log(showProgrammingLangs(personalPlanPeter));

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// ---------------------------------------------------

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(family) {
    let str;
    if (family.length === 0) {
        str = 'Семья пуста';
    } else {
        str = 'Семья состоит из: ';
        family.forEach(item => str += `${item} `);
    }
    return str;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(favoriteCities) {
    let str = '';
    favoriteCities.forEach((item, i, arr) => {
        if (i < arr.length - 1) {
            str += item.toLowerCase() + '\n';
        } else {
            str += item.toLowerCase();
        }
    });
    console.log(str);
}

standardizeStrings(favoriteCities);

// ---------------------------------------------------

const someString = 'This is some strange string';
// const someString = 5;

function reverse(str) {
    if (typeof (str) !== 'string') {
        return 'Ошибка!';
    }
    return [...str].reverse().join('');
    // return str.split('').reverse().join('');
}

console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    let str = 'Доступные валюты:\n';
    arr.forEach(item => {
        if (item !== missingCurr) {
            str += item + '\n';
        }
    });
    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'UAH'));

// ---------------------------------------------------

const shoppingMallData = {
    shops: [{
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0;
    data.shops.forEach(item => {
        square += item.width * item.length;
        console.log(square);
    });
    console.log(square);
    console.log(square * data.height * data.moneyPer1m3);

    if (data.budget >= square * data.height * data.moneyPer1m3) {
        return 'Бюджета достаточно';
    } else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));

// ---------------------------------------------------

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    const sortArr = arr.sort(),
        teamsArr = [],
        qTeams = 3;

    let recQTeams = 1,
        str = '',
        recArr = [],
        trigger = true;

    console.log(sortArr);

    if (sortArr.length === 3 * qTeams) {
        str = 'Оставшиеся студенты: -';
    } else {
        str = 'Оставшиеся студенты: ';
    }

    for (let i = 0; i < sortArr.length; i++) {
        console.log(recQTeams);

        if (recQTeams <= qTeams) {
            if (recArr.length === 2) {
                recArr.push(sortArr[i]);
                teamsArr.push(recArr);
                recArr = [];
                recQTeams++;
            } else {
                recArr.push(sortArr[i]);
            }
        } else {
            console.log('Работа со строкой');
            if (trigger) {
                trigger = false;
                str += `${sortArr[i]}`;
            } else {
                str += `, ${sortArr[i]}`;
            }
        }
    }
    teamsArr.push(str);

    return teamsArr;
}

console.log(sortStudentsByGroups(students));

// ---------------------------------------------------

const students1 = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    arr.sort();
    const a = [],
        b = [],
        c = [],
        rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}

sortStudentsByGroups(students1);

// ---------------------------------------------------

const students2 = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {

}

sortStudentsByGroups(students2);