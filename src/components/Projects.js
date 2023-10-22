import React from "react";
import "../styles/header.css"

export default function Projects() { 

  return (
    <div className="projects-component">
        <section>

            <div class="mobile-project-header">
                <h2>Projecten</h2>
                <ul class="filter-item-list" id="filterList-mobile">      
                <li class="active">Klimaatadaptatie</li>
                <li>Waterkwaliteit</li>
                <li>B-RAIN</li>
                </ul>
                <input class="searchbar" type="search" id="search" name="search" placeholder="Zoek een project"/>
            </div>

            <div class="project-view-container">
                <article class="projects">
                <div class="set-max-height">
                    <span class="anchor" id="projecten"></span>
                    <div class="filter-row">
                    <h2>Projecten</h2>
                    <ul class="filter-item-list" id="filterList">
                        <li class="active">Klimaatadaptatie</li>
                        <li>Waterkwaliteit</li>
                        <li>B-RAIN</li>
                    </ul>
                    <input class="searchbar" type="search" id="search" name="search" placeholder="Zoek een project"/>
                    </div>
            
                    <div class="project-list-container">
                        <ul class="project-list">
                                <a href="/projecten/project-slug">
                                <li id="project-slug">
                                    <div class="horizontal-flex">
                                    <img src="#" alt=""/>
                                    <div class="project-text">
                                        <span>categorie</span>
                                        <h3>titel</h3>
                                        <p>intro</p>
                                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                    </div>
                                    </div>
                                </li>
                                </a>
                        </ul>
                    </div>
                </div>

                </article>
                <div class="mobile-porject-list">
                    <ul>
                        <a href="/projecten/project-slug">
                            <li id="project-slug-mobile">
                            <div class="horizontal-flex">
                                <img src="#" alt=""/>
                                <div class="project-text">
                                <span>categorie</span>
                                <h3>titel</h3>
                                <i class="fa fa-arrow-right" aria-hidden="true"></i>
                                </div>
                            </div>
                            </li>
                        </a>
                    </ul>
                </div>
                <article class="project-map">
                <div id="map"></div>
                </article>
                
            </div>
        </section>
    </div>
    
  );
};