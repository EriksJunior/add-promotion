import React, { useState, useCallback } from "react"
import { toast } from "react-toastify"

import { InputLogin } from './components/InputLogin/InputLogin'
import { LabelLogin } from "./components/LabelLogin/LabelLogin"
import { CardLogin } from "./components/CardLogin/CardLogin"
import { ButtonLogin } from "./components/Button/ButtonLogin"
import { ButtonRegistration } from "../RequestRegistration/components/Button/ButtonRegistration"
import { RequestRegistrationLayout } from "../RequestRegistration/RequestRegistration"

import ILogin from './interfaces/index'
import ServiceLogin from './services/index'

import "./Login.scss"


export const LoginLayout = () => {

  const [login, setLogin] = useState<ILogin>({
    login: '',
    senha: ''
  } as ILogin)

  const [showRegsitration, setShowRegsitration] = useState(false)


  const handleChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.currentTarget.name]: e.currentTarget.value })
  }, [login])

  const handleLogin = async (): Promise<void> => {
    toast.promise(
      ServiceLogin.save(login),
      {
        pending: 'Verificando usuario 🚀',
        success: 'Usuario logado 👍',
        error: 'Ocorreu um erro ao logar 🤯'
      }
    )
  }

  const handleRegistration = async (): Promise<void> => {
    showRegsitration ? setShowRegsitration(false) : setShowRegsitration(true)
  }

  return (
    <div className="w-full h-full flex justify-center items-center absolute">

      {showRegsitration ? (
        <div className="containerRegistration absolute">
          <RequestRegistrationLayout onClick={handleRegistration} />
        </div>
      ) : null}


      <div className="w-1/4 h-3/4">
        <div className="triangle">

        </div>
        <CardLogin>
          <div className="w-full h-3/5 flex flex-col mt-10 justify-center">
            <LabelLogin text={"Login"}>
              <InputLogin className=" w-2/3 mb-5 h-10 rounded-lg outline-none text-center active:bg-cyan-800 focus:ring focus:ring-cyan-800" onChange={handleChange} name={"login"} type={"text"} />
            </LabelLogin>

            <LabelLogin text="Senha">
              <InputLogin className="w-2/3 h-10 rounded-lg outline-none text-center active:bg-cyan-800 focus:ring focus:ring-cyan-800" onChange={handleChange} name={"senha"} type={"password"} />
            </LabelLogin>
          </div>
          <div className="w-full h-1/5 flex justify-between flex-col">
            <div>
              <ButtonLogin className={"w-1/4 rounded-lg h-10 font-bold bg-cyan-900 text-white"} onClick={handleLogin} textButton="Login" />
            </div>
            <div>
              <ButtonRegistration className="text-white hover:text-cyan-900 delay-100 transition-colors" onClick={handleRegistration} textButton="Cadastre-se" />
            </div>
          </div>
        </CardLogin>
      </div>
    </div>
  )
}