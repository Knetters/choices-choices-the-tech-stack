// nav toggle - select button and links
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");

// add event listener
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

let text = document.getElementById("text");
let layer1 = document.getElementById("layer1");
let layer2 = document.getElementById("layer2");
let layer3 = document.getElementById("layer3");
let layer4 = document.getElementById("layer4");
let layer5 = document.getElementById("layer5");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text.style.marginTop = value * 2.5 + "px";
  layer2.style.left = value * 0.3 + "px";
  layer1.style.left = value * -0.5 + "px";
  layer4.style.left = value * 0.3 + "px";
  layer5.style.left = value * 0.3 + "px";
  layer3.style.left = value * -0.3 + "px";
  layer2.style.top = value * 0.5 + "px";
  layer1.style.top = value * 1 + "px";
  layer3.style.top = value * 0.5 + "px";
});

let text2 = document.getElementById("text2");
let layer12 = document.getElementById("layer1-2");
let layer22 = document.getElementById("layer2-2");
let layer32 = document.getElementById("layer3-2");
let layer42 = document.getElementById("layer4-2");
let layer52 = document.getElementById("layer5-2");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  text2.style.marginTop = value * 2.5 + "px";
  layer22.style.left = value * 0.3 + "px";
  layer12.style.left = value * -0.5 + "px";
  layer42.style.left = value * 0.3 + "px";
  layer52.style.left = value * 0.3 + "px";
  layer32.style.left = value * -0.3 + "px";
  layer22.style.top = value * 0.5 + "px";
  layer12.style.top = value * 1 + "px";
  layer32.style.top = value * 0.5 + "px";
});

    // Setting up map
    var map = L.map('map', {
        center: [52.360956, 4.8964073],
        zoom: 10,
        minZoom: 10
      });
  
      // Define a custom icon
      var waterIcon = L.icon({
          iconUrl: '/assets/water-svgrepo-com.png', // Path to your custom PNG marker image
          iconSize: [32, 32], // Size of the icon
          iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
        });
  
        // Define a custom icon
        var climateIcon = L.icon({
          iconUrl: '/assets/cloud-svgrepo-com.png', // Path to your custom PNG marker image
          iconSize: [32, 32], // Size of the icon
          iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
        });
  
        // Define a custom icon
        var brainIcon = L.icon({
          iconUrl: '/assets/bolt-svgrepo-com.png', // Path to your custom PNG marker image
          iconSize: [32, 32], // Size of the icon
          iconAnchor: [16, 32], // Anchor point of the icon (center bottom)
        });
  
      // Leaflet map theme
      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',).addTo(map);
  
      // Loop through projecten
    //   data.projectens.forEach((project, index) => {
  
    //     if(project.categorie == "Klimaatadaptatie") {
    //       // Create a marker with the custom icon
    //       var marker = L.marker([project.plaats.latitude, project.plaats.longitude], {
    //         icon: waterIcon // Assign the custom icon to the marker
    //       }).addTo(map);
    //     }
  
    //     if(project.categorie == "Waterkwaliteit") {
    //       // Create a marker with the custom icon
    //       var marker = L.marker([project.plaats.latitude, project.plaats.longitude], {
    //         icon: climateIcon // Assign the custom icon to the marker
    //       }).addTo(map);
    //     }
  
    //     if(project.categorie == "B-rain") {
    //       // Create a marker with the custom icon
    //       var marker = L.marker([project.plaats.latitude, project.plaats.longitude], {
    //         icon: brainIcon // Assign the custom icon to the marker
    //       }).addTo(map);
    //     }
  
    //     // Add a hover event
    //     document.getElementById(project.slug).addEventListener('mouseover', function () {
    //       map.setView([project.plaats.latitude, project.plaats.longitude], 12);
    //     });
    //   });
  
  
  
    //   // Add a click event listener to the list items to toggle the "active" class
    //   var listItems = document.querySelectorAll('#filterList li');
  
    //   listItems.forEach(function (item) {
    //     item.addEventListener('click', function () {
    //       // Remove the "active" class from all list items
    //       listItems.forEach(function (li) {
    //         li.classList.remove('active');
    //       });
  
          // Add the "active" class to the clicked list item
    //       this.classList.add('active');
    //     });
    //   });
  
      // Add mobile logic for the same function as above
    //   var listItemsMobile = document.querySelectorAll('#filterList-mobile li');
  
    //   listItemsMobile.forEach(function (item) {
    //     item.addEventListener('click', function () {
    //       // Remove the "active" class from all list items
    //       listItemsMobile.forEach(function (li) {
    //         li.classList.remove('active');
    //       });
  
    //       // Add the "active" class to the clicked list item
    //       this.classList.add('active');
    //     });
    //   });