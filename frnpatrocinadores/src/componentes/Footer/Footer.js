import React, { Component  } from 'react';
import {  IoIosHome, IoLogoFoursquare, IoMdPerson } from 'react-icons/io';
import { AiOutlineLogin } from "react-icons/ai";
import {  GiReceiveMoney  } from 'react-icons/gi';
import { FaBlogger } from "react-icons/fa";
import {  NavLink } from 'react-router-dom';
import './Footer.css';

export default class Footer extends Component{
  constructor(){
    super();
    this.state = {
      counter:0
    }
    //Cualquier propio que ocupemos en una clase requiere
    // realizar el bind para poder acceder al estado y al api del componente.
    this.counterUpdate = this.counterUpdate.bind(this);
  }
  counterUpdate(e){
    e.preventDefault();
    e.stopPropagation();
    this.setState({counter:this.state.counter+1});
  }
  render(){
    return (
      <footer>
        <nav>
         <ul>
            <li><NavLink to="/"><IoIosHome />Inicio</NavLink></li>
            <li><NavLink to="/functions"><IoLogoFoursquare /> Funciones</NavLink></li>
            <li><NavLink to="/price"><GiReceiveMoney /> Precio</NavLink></li>
            <li><NavLink to="/testimonies"><IoMdPerson /> Testimonios</NavLink></li>
            <li><NavLink to="/blog"><FaBlogger /> Blog</NavLink></li>
            <li><NavLink to="/login"><AiOutlineLogin /> Ingresar</NavLink></li>
          </ul>
        </nav>
      </footer>
    );
  }
}

/*
Un componente en clase tiene de forma predeterminada
un conjunto de eventos que se ejecutan en distintos
puntos del ciclo de vida de un componente.

construye

mount

disponible

actualizacion

desmonta

destruye



 */
