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
        <InputLogin className="mb-10 w-2/3 h-10 rounded-lg font-bold outline-none text-center active:bg-cyan-800 focus:ring focus:ring-cyan-800" onChange={e => setEmail(e)} label="Email" name="login" type="text" value={email} />
        <InputLogin className="w-2/3 h-10 rounded-lg font-bold outline-none text-center active:bg-cyan-800 focus:ring focus:ring-cyan-800" onChange={e => setSenha(e)} label="Senha" name="senha" type="password" value={senha} />
      </CardLogin>
    </div>
  )
}