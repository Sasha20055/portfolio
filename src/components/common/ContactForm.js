import "./ContactForm.sass" 
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mwkdawra');

  if (state.succeeded) {
    return <p>Отправлено, вскоре отвечу!</p>;
  }

  return (
    <form method="POST" onSubmit={handleSubmit} className="d-flex flex-column gap-2 contactForm">
      <div className='contactFormName'>
        <input id="name" className="bg-dark" type="text" name="name" placeholder='ФИО/Компания' required />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>
      <div className='contactFormAddress'>
        <input id="email" className="bg-dark" type="email" name="email" placeholder='Электронная почта' required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div className='contactFormMessage'>
        <textarea id="message" className="bg-dark" name="message" placeholder='Сообщение' required></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className='contactFormSbm'>
        <button type="submit" disabled={state.submitting} className="bg-dark text-light">
          Отправить
        </button>
        <ValidationError errors={state.errors} />
      </div>
    </form>
  );
}