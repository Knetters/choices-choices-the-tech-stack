import React from "react";
import "../styles/navbar.css"

export default function Navbar() {

    return (
        <div class="navbar">
            <div class="container flex-nav">
                <div class="nav-header">
                    <img class="logo" src="/img/logo_spatwater.png" alt="logo spatwater" />
                    <button class="nav-toggle" id="navToggle"><i class="ri-menu-line" /></button>
                </div>
                <nav class="nav-links" id="nav-links">
                    <ul>
                        <li class="nav-link"><a href="/">Home</a></li>
                        <li class="nav-link"><a href="/#over">Over</a></li>
                        <li class="nav-link"><a href="/#expertise">Expertise</a></li>
                        <li class="nav-link"><a href="/#projecten">Projecten</a></li>
                        <li class="nav-link"><a href="/#kennisbank">Kennisbank</a></li>
                        <li class="nav-link"><a href="/#team">Team</a></li>
                        <li class="nav-link"><a href="/#contact"><span>Contact</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
