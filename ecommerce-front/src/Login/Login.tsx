import { useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react';
import { toast } from 'react-toastify';
const Login = () => {

  const navigation = useNavigate()
  let [email, setEmail] = useState({value: '', dirty: false});
  let [password, setPassword] = useState({value: '', dirty: false});
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleErrorEmail = () => {
    if(!email.value && email.dirty) {
      return (<label className='error'>Campo Obrigatório*</label>)
    } else if (!emailRegex.test(email.value) && email.dirty) {
      return (<label className='error'>Email inválido*</label>)
    } else {
      return  (<label className='error'></label>)
    }
  }
  const handleErrorPassword = () => {
    if(!password.value && password.dirty) {
      return (<label className='error'>Campo Obrigatório*</label>)
    } else {
      return (<label className='error'></label>)
    }
  }

  const validForm = (e: any) => {
    e.preventDefault()
    let hasError = false;
    if(!emailRegex.test(email.value) || !email.value) {
      setEmail({value: email.value, dirty: true})
      hasError = true;
    }
    if(!password.value) {
      setPassword({value: password.value, dirty: true})
      hasError = true;
    }
    if(!hasError) {
      toast.success("Usuário Logado com sucesso",
        {
          style: {
            backgroundColor: '#FFFF',
            color: '#000',
          },
        }
      );
      navigation('home')
    }
  }
  return (
    <div id="loginContainer">

        <form>
            <h1> Login </h1>
            <p> Preencha seus dados corretamente.</p>
            <label htmlFor="email"> Email </label>
            <input value={email.value} onChange={(event) => setEmail({value: event.target.value, dirty: true})} name="email" type="email" />
            {handleErrorEmail()}

            <label htmlFor="password"> Password </label>
            <input value={password.value} onChange= {(e) => setPassword({value: e.target.value, dirty: true})} name="password" type="password"/>
            {handleErrorPassword()}
            <a href="forgotPassword"> Esqueceu sua senha? </a>
            <button onClick = {(e) => validForm(e)}> Acessar </button>
        </form>
    </div>
  )
}

export default Login