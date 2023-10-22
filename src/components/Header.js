import React from "react";
import "../styles/header.css"

export default function Navbar() { 

  return (
    <div class="home-container">
        <section class="home" id="home">
            <section class="parallax">
                <img src="img/city.png" id="city" alt="city illustratie" />
                <img src="img/water.png" id="water" alt="water illustratie" />
                <img src="img/berg4.png" id="layer1" alt="berg illustratie" />
                <img src="img/berg3.png" id="layer2" alt="berg illustratie" />
                <img src="img/berg2.png" id="layer3" alt="berg illustratie" />
                <img src="img/huis.png" id="layer4" alt="huis illustratie" />
                <img src="img/bergje1.png" id="layer5" alt="berg illustratie" />

                <div id="text">
                    <h1 class="home-title">Een nieuwe generatie hydrologen</h1>
                    <h2><span class="home-content">Concreet op water en bodem</span></h2>
                </div>

                <img src="img/grondmobilee.png" id="ground" alt="grond illustratie" />
                <img src="img/bird.png" id="bird" alt="vogel illustratie" />
            </section>

            <section class="parallax2">
                <img src="img/city-full.png" id="city2" alt="city illustratie" />
                <img src="img/water-full.png" id="water2" alt="water illustratie" />
                <img src="img/berg4-full.png" id="layer1-2" alt="berg illustratie" />
                <img src="img/berg3-full.png" id="layer2-2" alt="berg illustratie" />
                <img src="img/berg2-full.png" id="layer3-2" alt="berg illustratie" />
                <img src="img/huisje-full.png" id="layer4-2" alt="huis illustratie" />
                <img src="img/berg1-full.png" id="layer5-2" alt="berg illustratie"/>

                <div id="text2">
                    <h1 class="home-title2">Een nieuwe generatie hydrologen</h1>
                    <span class="home-content2">Concreet op water en bodem</span>
                </div>

                <img src="img/backgroundfullfinall.png" id="ground2" alt="grond illustratie"/>
            <img src="img/bird-full.png" id="bird2" alt="vogel illustratie" />
        </section>
    </section>

    </div>
  );
};