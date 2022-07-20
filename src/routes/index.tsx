import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { CreatePromotions, Home, Login, RequestRegistration } from "../pages";


export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/criarcadastro" element={<RequestRegistration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/promocoes" element={<CreatePromotions />} />

        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
    </BrowserRouter>
  )
}