import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import'./stylesNav.css'
import logo from "../../images/nerf this.png"
import { Link }  from 'react-router-dom'

export const NavBar = () => {
  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={logo} className="imagenLogo"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/productos/skirt">Skirts</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/productos/dress">Dresses</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/cart"><CartWidget/></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>     
  )
}