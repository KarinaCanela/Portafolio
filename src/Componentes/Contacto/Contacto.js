import { useRef } from 'react';
import './Contacto.css'
import emailjs from 'emailjs-com';
import { AiOutlineCopyrightCircle } from "react-icons/ai";

function Contacto () {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_tifngcu', 'template_sd0md1p', form.current, '9xXEkbvXWhGtrbrED')
            .then((result) => {
                alert('Correo enviado, Gracias por contactarme');
                window.location.reload();
            }, (error) => {
                console.log(error.text);
            });
    }

    return <section className="footer" id="contacto">
        <h2 className="formcontato__title">Contacto</h2>
        <h3 className="formcontato__subtext">¿Quieres contactarme?</h3>
        <h3 className="formcontato__subtext">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </h3>
        <div className='formcontato__contacto'>
            <div class="formcontato--esquerda">
                <img class="formcontato__img" src="img/contact_image.png"/>
            </div>
            <div class="formcontato__text">
                <form class="formcontato__form" name="form" ref={form} onSubmit={sendEmail}>
                    <div className='input__contacto'>                    
                        <input class="formcontato__input" type="text" name="user_name" placeholder="Nombre" required/>
                        <input class="formcontato__input" type="email" name="user_email" placeholder="E-mail" required/>
                        <input class="formcontato__input" type="text" name="asunto" placeholder="Asunto" required/> 
                    </div>
                <textarea class="formcontato__textarea" rows="5" cols="40" id="mensagem" name="message" placeholder="Mensaje" required></textarea>
                <button type="submit" class="formcontato__botao">Enviar mensaje</button>
                </form>
            </div>
        </div>
        <div class="footer__rodape">
            <p><AiOutlineCopyrightCircle/> Copyright  |  Karina Canela</p>
            <p>2023</p>
        </div>
    </section>

}


export default Contacto;

