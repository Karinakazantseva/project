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
        item.addEventListener('click', (event) => {
            event.preventDefault();
            console.log("Перейти");
        });
    });
    const welcоmeButtonModal = document.querySelectorAll(".signup-open");
    const modalApplication = document.querySelector(".signups");
    if (welcоmeButtonModal && modalApplication) {
        welcоmeButtonModal.forEach((item, index) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                console.log("Перейти");
                modalApplication.removeAttribute("hidden");
            });
        });
        // welcоmeButtonModal.addEventListener("click", () => {
        //     modalApplication.removeAttribute("hidden");
        // });
    }
    window.addEventListener("click", (event) => {
        if (event.target === modalApplication) {
            modalApplication.setAttribute("hidden", true);
        }
    });
    const closeModalButton = document.querySelector(".signup__close");
    closeModalButton.addEventListener("click", () => {
        modalApplication.setAttribute("hidden", true);
    });
});

