'use strict'
document.addEventListener("DOMContentLoaded", () => {
    console.log('Скрипт отработал корректно')
    /*1. Появление форм*/
    /* 
        *   Алгоритм
        *
        *   1. Начало.
        *   2. Получаем кнопку
        *   3. Проверка условия: нажатие на кнопку.
        *       3.1. Да: открыть форму
        *           3.1.1 Проверка условия: нажатие на крестик для выхода
        *               3.1.1.1. Да: закрыть форму
        *               3.1.1.2. Нет: возвращаемся в "открыть форму"
        *       3.2. Нет: Конец
        *   4. Конец
        * 
        *   Блок-схема: /images/Block-schema.png
        */
    const signup = document.querySelectorAll(".signup");
    signup.forEach((item, index) => {
    item.addEventListener ('click', (event) => {
    event.preventDefault();
        console.log("Перейти");
    });
    });
});

