"use client";

import React, { useRef } from "react";
import { IconButton } from "@mui/material";
import {
  ArrowBackIos,
  ArrowForwardIos,
  Biotech,         
  ScienceOutlined,
  Category,        
  LocalOffer,     
  ContactMail,     
  HomeOutlined,    
} from "@mui/icons-material";
import "./Carrusel.css";

const Carrusel = () => {
  const categories = [
    { icon: <Biotech />, label: "Análisis" },          
    { icon: <ScienceOutlined />, label: "Muestreo" },   
    { icon: <Category />, label: "Categorías" },        
    { icon: <LocalOffer />, label: "Ofertas" },        
    { icon: <ContactMail />, label: "Contacto" },      
    { icon: <HomeOutlined />, label: "Home" },         
    { icon: <Biotech />, label: "Análisis" },          
    { icon: <ScienceOutlined />, label: "Muestreo" },   
    { icon: <Category />, label: "Categorías" },        
    { icon: <LocalOffer />, label: "Ofertas" },        
    { icon: <ContactMail />, label: "Contacto" },      
    { icon: <HomeOutlined />, label: "Home" },         
    { icon: <Biotech />, label: "Maquinaria y equipos" },          
    { icon: <ScienceOutlined />, label: "Proveedores" },   
    { icon: <Category />, label: "Categorías" },        
    { icon: <LocalOffer />, label: "Ofertas" },        
    { icon: <ContactMail />, label: "Contacto" },      
    { icon: <HomeOutlined />, label: "Home" },         
  ];
  
const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <IconButton onClick={scrollLeft} className="carousel-btn">
        <ArrowBackIos />
      </IconButton>
      <div id="carousel" className="carousel-icons" ref={scrollRef}>
        {categories.map((category, index) => (
          <div key={index} className="carousel-item">
            <IconButton>{category.icon}</IconButton>
            <p>{category.label}</p>
          </div>
        ))}
      </div>
      <IconButton onClick={scrollRight} className="carousel-btn">
        <ArrowForwardIos />
      </IconButton>
    </div>
  );
};

export default Carrusel;
