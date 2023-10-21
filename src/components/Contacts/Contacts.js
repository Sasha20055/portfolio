import React from "react";
import ContactForm from "../common/ContactForm";
import "./Contacts.sass"

const Contacts = (props) => {
  return (
    <section className="contacts">
      <div className="container">
        <div className="row">
          <div className="col-12 flex-center flex-column">
            <h1>Связаться со мной</h1>
            <ContactForm />
            <a href="https://github.com/" className="github"></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts