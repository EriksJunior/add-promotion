import { useNavigate  } from "react-router-dom"

export const CreatePromotions = () =>{
  const navigate = useNavigate();

  const handleClick = () =>{
    navigate('/login') //ao clicar sera mandado para a rota de login
  }

  return(
    <div>
      <p className="text-red-600">Criar promoções</p>
      <button onClick={handleClick}>Logar</button>
    </div>
  )
}