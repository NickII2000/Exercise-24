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
            genres = prompt(`Введите Ваши любимые жанры через запятую`).trim();
            //      лав стори    ,  комедия, мелодрама    ,боевик,детский
            if (genres !== '' && genres != null) {
                this.genres = genres.toLowerCase().split(',');
                this.genres = this.genres.map(item => item = item.trim()).sort();
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
const arr = ['zero', 'first', 'second'];
console.log(arr[1]);

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