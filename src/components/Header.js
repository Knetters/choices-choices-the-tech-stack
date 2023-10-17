import React from "react";

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

        <style>
            {`
                .home-container {
                    overflow-x: hidden;
                    overflow-y: hidden;
                }
            
                .home-title {
                    color: var(--darkblue);
                    font-size: 1.5rem;
                    font-weight: var(--font-medium);
                    margin-bottom: 0.5rem;
                    margin-top: -16em;
                }
            
                .home-content {
                    color: var(--spat);
                    display: block;
                    font-size: 1rem;
                    font-weight: var(--font-semi-bold);
                    margin-bottom: 0.5rem;
                }
            
                .home-scroll {
                    color: var(--green);
                    font-size: 0.8em;
                    text-decoration: none;
                }
            
                /* PARALLAX */
                    .parallax2 {
                    display: none;
                }
            
                .parallax {
                    margin-top: 6em;
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 50rem;
                }
            
                #text {
                    position: absolute;
                    margin-left: 2em;
                }
            
                .parallax img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
            
                @media screen and (min-width: 454px) {
                .home-title {
                    margin-top: -13em;
                }
            
                .home-content {
                    font-size: 1.4em;
                }
            
                .home-scroll {
                    font-size: 1.2em;
                }
            
                #text {
                    padding-left: 1rem;
                }
            
                .parallax {
                    margin-top: -4rem;
                    height: 60rem;
                }
                }
            
                @media screen and (min-width: 568px) {
                .home-title {
                    font-size: 2.5em;
                    margin-top: -12em;
                }
            
                .home-content {
                    font-size: 1.7em;
                }
            
                .home-scroll {
                    font-size: 1.4em;
                }
            
                .parallax {
                    margin-top: -5rem;
                    height: 75rem;
                }
                }
            
                @media screen and (min-width: 720px) {
                #text {
                    padding: 0 3em 0 3em;
                }
            
                .home-title {
                    font-size: 2.8em;
                    margin-top: -14.3em;
                }
            
                .home-scroll {
                    font-size: 1.4em;
                }
            
                .parallax {
                    height: 95rem;
                }
                }
            
                @media screen and (min-width: 720px) {
                #text {
                    padding: 0 7em 0 7em;
                }
            
                .home-title {
                    font-size: 2.8em;
                    margin-top: -13em;
                }
                }
            
                @media screen and (min-width: 820px) {
                #text {
                    padding: 0 7em 0 7em;
                }
            
                .home-title {
                    font-size: 2.8em;
                    margin-top: -13em;
                }
                }
            
                @media screen and (min-width: 960px) {
                #text {
                    padding: 0 5em 0 5em;
                }
            
                .parallax {
                    height: 100rem;
                }
                }
            
                @media screen and (min-width: 1024px) {
                .parallax {
                    display: none;
                }
            
                #text {
                    display: none;
                }
            
                .parallax img {
                    display: none;
                }
            
                .parallax2 {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 75rem;
                }
            
                #text2 {
                    position: relative;
                    margin-left: 1em;
                }
            
                .parallax2 img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
            
                .home-content2 {
                    color: var(--spat);
                    font-size: 1.5em;
                    display: block;
                    font-weight: var(--font-semi-bold);
                    margin-bottom: var(--mb-0-75);
                }
            
                .home-title2 {
                    color: var(--darkblue);
                    font-size: 2rem;
                    margin-bottom: 0.5rem;
                    margin-top: -15em;
                }
            
                .home-scroll2 {
                    color: var(--green);
                    font-size: 1em;
                }
                }
            
                @media screen and (min-width: 1250px) {
                .parallax {
                    display: none;
                }
            
                #text {
                    display: none;
                }
            
                .parallax img {
                    display: none;
                }
            
                .parallax2 {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100rem;
                    margin-top: -12em;
                }
            
                #text2 {
                    position: absolute;
                    margin-left: -30em;
                }
            
                .parallax2 img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
                }
            `}
        </style>

    </div>
  );
};