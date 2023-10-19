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
                Это самый крупный проект, который есть в моем портфолио.
                Мне потребовалось так много времени, чтобы довести проект до такого уровня.
                Я не смог закончить его из-за работы, но я сделал очень много.
                Этому проекту я обязан множеством новых знаний.
                В этом проекте я использовал TypeScript, SCSS, Firebase Authentication и MongoDB.
                В этом проекте я изучил MongoDB с нуля.
              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">React</li>
                <li className="projects__item-tool">Sass</li>
                <li className="projects__item-tool">TypeScript</li>
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Html</li>
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
                Это самый крупный проект, который есть в моем портфолио.
                Мне потребовалось так много времени, чтобы довести проект до такого уровня.
                Я не смог закончить его из-за работы, но я сделал очень много.
                Этому проекту я обязан множеством новых знаний.
                В этом проекте я использовал TypeScript, SCSS, Firebase Authentication и MongoDB.
                В этом проекте я изучил MongoDB с нуля.
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
                Это самый крупный проект, который есть в моем портфолио.
                Мне потребовалось так много времени, чтобы довести проект до такого уровня.
                Я не смог закончить его из-за работы, но я сделал очень много.
                Этому проекту я обязан множеством новых знаний.
                В этом проекте я использовал TypeScript, SCSS, Firebase Authentication и MongoDB.
                В этом проекте я изучил MongoDB с нуля.
              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">React</li>
                <li className="projects__item-tool">react-yandex-maps</li>
                <li className="projects__item-tool">JavaScript</li>
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Sass</li>
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
                Это самый крупный проект, который есть в моем портфолио.
                Мне потребовалось так много времени, чтобы довести проект до такого уровня.
                Я не смог закончить его из-за работы, но я сделал очень много.
                Этому проекту я обязан множеством новых знаний.
                В этом проекте я использовал TypeScript, SCSS, Firebase Authentication и MongoDB.
                В этом проекте я изучил MongoDB с нуля.
              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Sass</li>
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
                Это самый крупный проект, который есть в моем портфолио.
                Мне потребовалось так много времени, чтобы довести проект до такого уровня.
                Я не смог закончить его из-за работы, но я сделал очень много.
                Этому проекту я обязан множеством новых знаний.
                В этом проекте я использовал TypeScript, SCSS, Firebase Authentication и MongoDB.
                В этом проекте я изучил MongoDB с нуля.
              </p>
              <ul className="projects__item-tools d-flex gap-3 flex-wrap mb-3 text-light">
                <li className="projects__item-tool">Html</li>
                <li className="projects__item-tool">Sass</li>
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
                Это самый крупный проект, который есть в моем портфолио.
                Мне потребовалось так много времени, чтобы довести проект до такого уровня.
                Я не смог закончить его из-за работы, но я сделал очень много.
                Этому проекту я обязан множеством новых знаний.
                В этом проекте я использовал TypeScript, SCSS, Firebase Authentication и MongoDB.
                В этом проекте я изучил MongoDB с нуля.
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
