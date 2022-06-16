import "./login.css"
import {LayoutLogin} from '../../layout/login'
import {InputLogin} from './components/inputlogin/InputLogin'
import { useState } from "react"
export const Login = () =>{

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return(
    <div>
      <InputLogin onChange={e => setEmail(e)} label="Email" name="login" type="text" value={email}/>
      {email}
      <InputLogin onChange={e => setSenha(e)} label="Senha" name="senha" type="password" value={senha}/>
      {senha}
    </div>
  )
}