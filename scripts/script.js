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

    //Динамический вывод навигационного меню
    const headerMenu = document.querySelector('.header__menu');
    if (headerMenu) {
        const headerList = headerMenu.querySelector('.menu__list');
        const menuData = {
            link1: {
                link: '#for__who',
                title: 'Для кого',
            },
            link2: {
                link: '#lessons',
                title: 'Как проходят уроки',
            },
            link3: {
                link: '#comparison',
                title: 'Преимущества',
            },
            link4: {
                link: '#contacts',
                title: 'Контакты',
            }
        }
        const createLink = (UrlLink, title) => {
            const link = `
            <li class="menu__item"><a href="${UrlLink}" class="menu-button">${title}</a></li>
            `;
            return link;
        }
        for (const linkItem in menuData) {
            const link = menuData[linkItem];
            const linkIndex = createLink(link.link, link.title);
            headerList.insertAdjacentHTML('beforeend', linkIndex);
        }
        const lastlink = `
            <li class="menu__item menu__item--right"><a class="menu-button" href="#"><img src="images/user1.png"
                                alt="" width='18' height='18'>Личный кабинет</a></li>
            `;
        headerList.insertAdjacentHTML('beforeend', lastlink);
        console.log('Навигацинное меню создано с помощью javascript!');
    }

    const ForWhoContainer = document.querySelector(".for__who");
    if (ForWhoContainer) {
        const dataTitleForWho = [
            "Для тех, кто хочет получать знания",
            "Для путешественников",
            "Для семейного образования",
            "Для спортсменов",
            "Для проживающих за рубежом",
        ];
        const titleForWho = ForWhoContainer.querySelectorAll(".for__who__text");
        titleForWho.forEach((item, index) => {
            item.textContent = dataTitleForWho[index];
           });
    }

});

