import React from "react";
import "./About.sass"
import {NavLink} from "react-router-dom"
import myPhoto from "../../assets/images/photo.jpg";
import css from "../../assets/images/css.svg"
import sass from "../../assets/images/sass.svg"
import nodeJs from "../../assets/images/nodeJs.svg"
import js from "../../assets/images/js.svg"
import bootstrap from "../../assets/images/bootstrap.svg"
import html from "../../assets/images/html.svg"
import git from "../../assets/images/git.svg"
import react from "../../assets/images/react.svg"
import redux from "../../assets/images/redux.svg"
import gitHub from "../../assets/images/gitHub.svg"

const About = (props) => {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="row about__row">
          <div className="col-md-6 ">
            <h1>О себе</h1>
            <h2>Николенко Александр</h2>
            <p>Фронтенд разработчик. Активно занимаюсь веб-разработкой уже 2 года.
              Мне 18 лет, учусь на первом курсе Краснодарского Государственного Технологического Университета. Сам проживаю в Краснодаре.
              Есть огромное стремление и упорство развиваться в It индустрии. Также есть Пэт-проекты, которые вы можете просмотреть в разделе <NavLink to={"/projects"}>ПРОЕКТЫ</NavLink>. Имею опыт совместной разработки проектов и
              успешно выполнял заказы по верстке лендингов, доработки react проектов, различных javascript
              функций на сайт и т.д.</p>
          </div>
          <div className="col-md-6 d-flex ">
            <div className="about__img d-flex m-md-auto">
              <img src={myPhoto} alt="photo" className="m-auto img-fluid" />
            </div>
          </div>
        </div>
        <div className="row about-skills__row m-md-0 m-auto">
          <ul className="about-skills__items d-flex flex-wrap gap-4 justify-content-center justify-content-md-start">
            <li className="about-skills__item about-item-html">
              <a href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics" title="html"><img src={html} alt="html"/></a>
            </li>
            <li className="about-skills__item about-item-css">
              <a href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics" title="css"><img src={css} alt="css" /></a>
            </li>
            <li className="about-skills__item about-item-js">
              <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" title="js"><img src={js} alt="js" /></a>
            </li>
            <li className="about-skills__item about-item-bootstrap">
              <a href="https://getbootstrap.com" title="bootstrap"><img src={bootstrap} alt="bootstrap" /></a>
            </li>
            <li className="about-skills__item about-item-sass">
              <a href="https://sass-scss.ru" title="sass"><img src={sass} alt="sass" /></a>
            </li>
            <li className="about-skills__item about-item-git">
              <a href="https://git-scm.com" title="git"><img src={git} alt="git" /></a>
            </li>
            <li className="about-skills__item about-item-nodeJs">
              <a href="https://nodejs.org" title="node js"><img src={nodeJs} alt="nodeJs" /></a>
            </li>
            <li className="about-skills__item about-item-react">
              <a href="https://ru.legacy.reactjs.org" title="react"><img src={react} alt="react" /></a>
            </li>
            <li className="about-skills__item about-item-redux">
              <a href="https://redux.js.org" title="redux"><img src={redux} alt="redux" /></a>
            </li>
            <li className="about-skills__item about-item-gitHub">
              <a href="https://github.com/Sasha20055" title="gitHub"><img src={gitHub} alt="gitHub" /></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
/*
*/


export default About