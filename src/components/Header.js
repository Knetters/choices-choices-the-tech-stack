import React from "react";
import "../styles/header.css"

export default function Navbar() { 

    // let text = document.getElementById("text");
    // let layer1 = document.getElementById("layer1");
    // let layer2 = document.getElementById("layer2");
    // let layer3 = document.getElementById("layer3");
    // let layer4 = document.getElementById("layer4");
    // let layer5 = document.getElementById("layer5");

    // window.addEventListener("scroll", () => {
    //   let value = window.scrollY;

    //   text.style.marginTop = value * 2.5 + "px";
    //   layer2.style.left = value * 0.3 + "px";
    //   layer1.style.left = value * -0.5 + "px";
    //   layer4.style.left = value * 0.3 + "px";
    //   layer5.style.left = value * 0.3 + "px";
    //   layer3.style.left = value * -0.3 + "px";
    //   layer2.style.top = value * 0.5 + "px";
    //   layer1.style.top = value * 1 + "px";
    //   layer3.style.top = value * 0.5 + "px";
    // });

    // let text2 = document.getElementById("text2");
    // let layer12 = document.getElementById("layer1-2");
    // let layer22 = document.getElementById("layer2-2");
    // let layer32 = document.getElementById("layer3-2");
    // let layer42 = document.getElementById("layer4-2");
    // let layer52 = document.getElementById("layer5-2");

    // window.addEventListener("scroll", () => {
    //   let value = window.scrollY;

    //   text2.style.marginTop = value * 2.5 + "px";
    //   layer22.style.left = value * 0.3 + "px";
    //   layer12.style.left = value * -0.5 + "px";
    //   layer42.style.left = value * 0.3 + "px";
    //   layer52.style.left = value * 0.3 + "px";
    //   layer32.style.left = value * -0.3 + "px";
    //   layer22.style.top = value * 0.5 + "px";
    //   layer12.style.top = value * 1 + "px";
    //   layer32.style.top = value * 0.5 + "px";
    // });

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