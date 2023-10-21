import React from "react";
import "./Projects.sass"

const Projects = (props) => {
  return (
    <section className="projects">
      <div className="projects__container container">
        <div className="projects__row row">
          <h1>Проекты:</h1>
          <ul className="projects__items d-flex flex-wrap justify-content-between gap-3">
            <li className="projects__item bg-dark">
              <h3 className="projects__item-header text-center m-2">
                Социальная сеть
              </h3>
              <p className="projects__item-description text-light p-3">
                Этот проект на данный момент является наиболее крупным из всех моих проектов, который есть в моем портфолио.
                Начал разрабатывать по youtube плейлисту <a href="https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8"> Путь самурая </a>
                канала <a href="https://www.youtube.com/@ITKAMASUTRA"> IT-KAMASUTRA </a>, и вскоре продолжил дорабатывать проект сам.Ему я обязан множеством новых знаний.
                Социальную сеть я множество раз переделывал, изучая новые архитектурные подходы и постепенно двигаясь дальше.
                В этом проекте я использовал TypeScript, SASS, React, Redux, Axios, и еще порядка 10 библиотек.
                С нуля изучил множество из выше перечисленного
              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">React</li>
                <li className="projects__item-tool">Sass</li>
                <li className="projects__item-tool">TypeScript</li>
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Rest-api</li>
                <li className="projects__item-tool">axios</li>
                <li className="projects__item-tool">JavaScript</li>
              </ul>
              <div className="projects__item-buttons d-flex gap-3 justify-content-end">
                <a className="projects__item-website text-info" href="https://sasha20055.github.io/Social-Network">Посетить вебсайт</a>
                <a className="projects__item-gitHub text-info" href="https://github.com/Sasha20055/Social-Network">Код проекта</a>
              </div>
            </li>
            <li className="projects__item bg-dark">
              <h3 className="projects__item-header text-center m-2">
                Сайт-лендинг по продвижению заказов
              </h3>
              <p className="projects__item-description text-light p-3">
                Этот лендинг делал довольно недавно, по сравнению с прошлыми.
                Сайт зделан с целью того, чтобы на практике закрепить верстку одностраничных сайтов
                с использованием библиотеки Bootstrap. Также применил Sass, и библиотеку для создания
                слайдеров <a href="https://kenwheeler.github.io/slick"> Slick-slider </a> с Jquery.
              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">Javascript</li>
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Sass</li>
                <li className="projects__item-tool">Bootstrap</li>
                <li className="projects__item-tool">Jquery</li>
                <li className="projects__item-tool">Slick-slider</li>
              </ul>
              <div className="projects__item-buttons d-flex gap-3 justify-content-end">
                <a className="projects__item-website text-info" href="https://sasha20055.github.io/landing-Promotion-of-marketplaces">Посетить вебсайт</a>
                <a className="projects__item-gitHub text-info" href="https://github.com/Sasha20055/landing-Promotion-of-marketplaces">Код проекта</a>
              </div>
            </li>
            <li className="projects__item bg-dark">
              <h3 className="projects__item-header text-center m-2">
                Таблица адресов с Яндекс картой
              </h3>
              <p className="projects__item-description text-light p-3">
                Проект разрабатывал с целью практики создания React-redux приложений
                с использоваем сторонних API, таких как <a href="https://pbe-react-yandex-maps.vercel.app/en/"> react-yandex-maps </a>.
                В этом проекте сам зделал примитивную REST-API, БД которой хранится локально в папке проекта в json формате. Использовал
                Express для создания REST-API.
              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">React</li>
                <li className="projects__item-tool">react-yandex-maps</li>
                <li className="projects__item-tool">JavaScript</li>
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Sass</li>
                <li className="projects__item-tool">Rest-api</li>
                <li className="projects__item-tool">Express</li>
              </ul>
              <div className="projects__item-buttons d-flex gap-3 justify-content-end">
                <a className="projects__item-gitHub text-info" href="https://github.com/Sasha20055/react-address-table">Код проекта</a>
              </div>
            </li>
            <li className="projects__item bg-dark">
              <h3 className="projects__item-header text-center m-2">
                Сайт-лендинг онлайн школы
              </h3>
              <p className="projects__item-description text-light p-3">
                Этот лендинг зделал с целью изучения верстки на практике без применения Bootstrap
                библиотеки. Для создания слайдера применил
                <a href="https://kenwheeler.github.io/slick"> Slick-slider </a>, для эффекта плавного появления
                элементов при прокрутке страницы библиотеку <a href="https://wowjs.uk"> Wow.js </a>.
                Зделал checkbox, который меняет цену на курс (Месячный/Годовой).
              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Sass</li>
                <li className="projects__item-tool">Wow.js</li>
                <li className="projects__item-tool">Slick-slider</li>
                <li className="projects__item-tool">Jquery</li>
                <li className="projects__item-tool">JavaScript</li>
              </ul>
              <div className="projects__item-buttons d-flex gap-3 justify-content-end">
                <a className="projects__item-website text-info" href="https://sasha20055.github.io/SchoolCours-Landing">Посетить вебсайт</a>
                <a className="projects__item-gitHub text-info" href="https://github.com/Sasha20055/SchoolCours-Landing">Код проекта</a>
              </div>
            </li>
            <li className="projects__item bg-dark">
              <h3 className="projects__item-header text-center m-2">
                Сайт-лендинг школьного класса
              </h3>
              <p className="projects__item-description text-light p-3">
                Этот лендинг зделал как годовой проект по Информатике и Обществознанию еще в 11 классе.
                В нем хранятся проекты по Обществознанию учеников 11 класса. Применил в проекте переход к
                Гугл-таблице из за неопытности на тот момент и упрощения функционала.
                Сайт получился довольно простым, но свой функционал он выполнил. Использовал Html, sass, Javascript, Jquery,
                <a href="https://kenwheeler.github.io/slick"> Slick-slider </a>.

              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Sass</li>
                <li className="projects__item-tool">Slick-slider</li>
                <li className="projects__item-tool">Javascript</li>
                <li className="projects__item-tool">Google-table</li>
              </ul>
              <div className="projects__item-buttons d-flex gap-3 justify-content-end">
                <a className="projects__item-website text-info" href="https://sasha20055.github.io/-school-class-website">Посетить вебсайт</a>
                <a className="projects__item-gitHub text-info" href="https://github.com/Sasha20055/-school-class-website">Код проекта</a>
              </div>
            </li>
            <li className="projects__item bg-dark">
              <h3 className="projects__item-header text-center m-2">
                Многофункциональное модальное окно
              </h3>
              <p className="projects__item-description text-light p-3">
                За это модальное окно я получил свой первый заработок, но не скажу что его разработка была
                без проблем. Это модальное окно содержит много логики, которую и надо было прописать в JavaScript.
                В ходе выполнения я выучил много чего интересного ( Работа с выбранными файлами, анимация, закрепил на практике JavaScript и т.д ).
                Использовал в проекте Html, Sass и Javascript.
              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Sass</li>
                <li className="projects__item-tool">Javascript</li>
                <li className="projects__item-tool">Form</li>
              </ul>
              <div className="projects__item-buttons d-flex gap-3 justify-content-end">
                <a className="projects__item-website text-info" href="https://sasha20055.github.io/modal-window">Посетить вебсайт</a>
                <a className="projects__item-gitHub text-info" href="https://github.com/Sasha20055/modal-window">Код проекта</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
