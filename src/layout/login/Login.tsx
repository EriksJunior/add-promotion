import "./Login.css"
import { InputLogin } from './components/inputlogin/InputLogin'
import { CardLogin } from "./components/cardlogin/CardLogin"
import { ButtonLogin } from "./components/button/ButtonLogin"
import { useState } from "react"
export const LoginLayout = () => {

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  async function handleLogin(): Promise<void> {
    await alert('Logou')
  }

  return (
    <div className="w-1/4 h-3/4 ">
      <div className="triangle">
      </div>
      <CardLogin>
        <div className="w-full h-3/5 flex flex-col justify-center ">
          <InputLogin className=" w-2/3 h-10 rounded-lg font-bold outline-none text-center active:bg-cyan-800 focus:ring focus:ring-cyan-800" onChange={e => setEmail(e)} label="Email" name="login" type="text" value={email} />
          <InputLogin className="w-2/3 h-10 rounded-lg font-bold outline-none text-center active:bg-cyan-800 focus:ring focus:ring-cyan-800" onChange={e => setSenha(e)} label="Senha" name="senha" type="password" value={senha} />
        </div>
        <div className="w-1/4 b flex justify-center items-end">
          <ButtonLogin className={"rounded-lg h-10 w-full font-bold bg-cyan-900 text-white"} onClick={handleLogin} textButton="Login" />
        </div>
      </CardLogin>
    </div>
  )
}