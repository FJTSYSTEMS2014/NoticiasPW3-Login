import React from 'react';
import {NavLink} from 'react-router-dom';
import img from '../../components/img/01.jpg';

function Navbar () {
  return (
    <div className="navbar-brand text-start my-0 my-sm-0" >
      {' '}<img src={img} className="img-fluid " alt="img-navbar" />
      <div className="navbar nav-container navbar navbar-expand-lg  bg-light">

        <NavLink
          exact
          to="/formulario"
          className="btn btn-outline-dark my-0 my-sm-0 p-1"
        >
          {' '}Crear URL
        </NavLink>
      
        <NavLink
          exact
          to="/google-br"
          className="btn btn-outline-success my-0 my-sm-0 p-2"
        >
          {' '}Noticias Do Brasil
        </NavLink>
        <NavLink
          exact
          to="/google-ar"
          className="btn btn-outline-primary my-0 my-sm-0 p-3"
        >
          {' '}Noticias Argentinas Destacadas
        </NavLink>

        <NavLink
          exact
          to="/arInTheWorld"
          className="btn btn-outline-success my-0 my-sm-0 p-2"
        >
          {' '} EEUU News
        </NavLink>
        <NavLink
          exact
          to="/general"
          className="btn btn-outline-danger my-0 my-sm-0"
        >
          {' '}General
        </NavLink>
        <NavLink
          exact
          to="/buscar"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Buscar
        </NavLink>
        <NavLink
          exact
          to="/ciencia"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Ciencia
        </NavLink>

        <NavLink
          exact
          to="/entretenimiento"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Entretenimiento
        </NavLink>
     
        <NavLink
          exact
          to="/tec"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Tecnologia
        </NavLink>
        <NavLink
          exact
          to="/salud"
          className="btn btn-outline-success my-0 my-sm-0"
        >
          {' '}Salud
        </NavLink>
        <NavLink
          exact
          to="/negocios"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Negocios
        </NavLink>
        <NavLink
          exact
          to="/deportes"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}Deportes
        </NavLink>
        <NavLink
          exact
          to="/QR_Generator"
          className="btn btn-outline-danger my-0 my-sm-0"
        >
          {' '}QR_Generator
        </NavLink>
        <NavLink
          exact
          to="/QR_Scann"
          className="btn btn-outline-dark my-0 my-sm-0"
        >
          {' '}QR_Scann
        </NavLink>

      </div>
    </div>
  );
}

export default Navbar;
