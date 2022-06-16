import "./Login.css"
import { InputLogin } from './components/inputlogin/InputLogin'
import { CardLogin } from "./components/cardlogin/CardLogin"
import { useState } from "react"
export const LoginLayout = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  return (
    <div className="w-1/4 h-3/4">
      <CardLogin>
          <InputLogin class="mb-10 w-2/3 h-10 rounded-lg font-bold text-center" onChange={e => setEmail(e)} label="Email" name="login" type="text" value={email} />
          <InputLogin class="w-2/3 h-10 rounded-lg font-bold text-center" onChange={e => setSenha(e)} label="Senha" name="senha" type="password" value={senha} />
      </CardLogin>
    </div>
  )
}