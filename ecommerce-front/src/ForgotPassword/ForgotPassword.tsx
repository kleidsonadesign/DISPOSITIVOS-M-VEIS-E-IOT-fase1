import { useNavigate } from 'react-router-dom'
import './ForgotStyle.css'

const ForgotPassword = () => {
    const navigate = useNavigate()
    return (
        <div id="forgotContainer">
            <form>
                <h4> Preencha os dados corretamente </h4>
                <label>Email</label>
                <input type="email" />

                <label>Repetir Email</label>
                <input type="email" />

                <label>Digite seu CPF</label>
                <input type="text" />

                <button onClick={() => {navigate("/")}}>Enviar</button>
            </form>
        </div>
    )
}

export default ForgotPassword