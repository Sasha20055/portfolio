import React from "react";
import "./About.sass"
import myPhoto from "../../assets/images/photo.jpg";


const About = (props) => {
  return (
    <section className="about">
      <div className="container about__container">
        <div className="row about__row">
          <div className="col-md-6">
            <div className="about__img">
              <img src={myPhoto} alt="photo" className="m-auto"/>
            </div>
          </div>
          <div className="col-md-6">
            Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. За прошедшие годы текст L
          </div>
        </div>
      </div>
    </section>
  )
}

export default About