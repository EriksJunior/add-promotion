import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { CreatePromotions, Home, Login } from "../pages";

export const Routes = () =>{
  return(
    <BrowserRouter>
      <Switch>
        <Route  path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/promocoes" element={<CreatePromotions />}/>


        <Route path="*" element={<Navigate to={"/home"}/>}/>
      </Switch>
    </BrowserRouter>
  )
}