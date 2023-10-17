import React from "react";

export default function Expertise() {

    return (
        <section class="expertise section">
        <h2 class="expertise-title">Expertise</h2>

        <div class="expertise__wrapper">
            <div class="expertise__card">
            <img class="expertise3" src="img/Untitled4.png" alt="Illustratie klimaatadaptatie"/>
            <h3>Klimaatadaptatie</h3>
            <a
                href="#klimaat"
                class="button"
            >
                <p
                class="button_text2"
                >
                Meer
                informatie
                </p>
            </a>
            </div>

            <div
            class="expertise__card"
            >
            <img
                class="expertise2"
                src="img/Untitled3.png"
                alt="Illustratie waterkwaliteit"
            />
            <h3>
                Waterkwaliteit
            </h3>
            <a
                href="#waterkwaliteit"
                class="button"
            >
                <p
                class="button_text2"
                >
                Meer
                informatie
                </p>
            </a>
            </div>
            <div
            class="expertise__card"
            >
            <img
                class="expertise2"
                src="img/brainlogo.png"
                alt="Illustratie B-Rain"
            />
            <h3>
                B-Rain
            </h3>
            <a
                href="#brain"
                class="button"
            >
                <p
                class="button_text2"
                >
                Meer
                informatie
                </p>
            </a>
            </div>
        </div>
        </section>
    )
}
