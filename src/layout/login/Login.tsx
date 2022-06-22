import "./Login.scss"
import { InputLogin } from './components/inputlogin/InputLogin'
import { LabelLogin } from "./components/labellogin/LabelLogin"
import { CardLogin } from "./components/cardlogin/CardLogin"
import { ButtonLogin } from "./components/button/ButtonLogin"
import React, { useState, useCallback, useMemo } from "react"

import ILogin from './interfaces/index'

import ServiceLogin  from './services/index'



export const LoginLayout = () => {

  const [login, setLogin] = useState<ILogin>({
    login: '',
    senha: ''
  } as ILogin)

  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.currentTarget.name]: e.currentTarget.value })
  }, [login])

  const handleLogin = async ():Promise<void> => {
    try {
      const result = await ServiceLogin.save(login)
      console.log(result)
    } catch (error) {
      console.log("Ocorreu um erro")
    }
  }

  return (
    <div className="w-1/4 h-3/4 ">
      <div className="triangle">

      </div>
      <CardLogin>
        <div className="w-full h-3/5 flex flex-col justify-center ">
          <LabelLogin text={"Login"}>
            <InputLogin className=" w-2/3 mb-5 h-10 rounded-lg outline-none text-center active:bg-cyan-800 focus:ring focus:ring-cyan-800" onChange={handleChange} name={"login"} type={"text"} />
          </LabelLogin>

          <LabelLogin text="Senha">
            <InputLogin className="w-2/3 h-10 rounded-lg outline-none text-center active:bg-cyan-800 focus:ring focus:ring-cyan-800" onChange={handleChange} name={"senha"} type={"password"} />
          </LabelLogin>
        </div>
        <div className="w-1/4 b flex justify-center items-end">
          <ButtonLogin className={"rounded-lg h-10 w-full font-bold bg-cyan-900 text-white"} onClick={handleLogin} textButton="Login" />
        </div>
      </CardLogin>
    </div>
  )
}