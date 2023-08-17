import './Contacto.css'

function Contacto () {
    return <section className="footer" id="contacto">
        <h2 className="formcontato__title">Contacto</h2>
        <h3 className="formcontato__subtext">¿Quieres contactarme?</h3>
        <h3 className="formcontato__subtext">Complete el siguiente formulario y me pondré en contacto con usted lo antes posible. </h3>
        <div className='formcontato__contacto'>
            <div class="formcontato--esquerda">
                <img class="formcontato__img" src="img/contact_image.png"/>
            </div>
            <div class="formcontato__text">
                <form class="formcontato__form" name="form">
                    <input class="formcontato__input" type="text" name="nombre" placeholder="Nombre" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?!.*[ !@#$%^&*_=+-]).{6,12}$"/>
                    <div>
                        <input class="formcontato__input" type="email" name="email" placeholder="E-mail" required/>
                    </div>
                    <input class="formcontato__input" type="text" name="asunto" placeholder="Asunto" required/> 
                </form>
                <textarea class="formcontato__textarea" rows="5" cols="40" id="mensagem" name="mensaje" placeholder="Mensaje" required></textarea>
                <button type="submit" class="formcontato__botao">Enviar mensaje</button>
            </div>
        </div>
        <div class="footer__rodape">
            <p>&copy Copyright  |  Karina Canela</p>
            <p>2023</p>
        </div>
    </section>

}


export default Contacto;

