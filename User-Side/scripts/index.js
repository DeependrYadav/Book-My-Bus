const moving_bus = document.querySelector('#moving-bus');

function toggleStickyNavbar() {
  if (window.scrollY > navbar.offsetTop) {
  moving_bus.classList.add('moving-bus-sticky');
  } else {
  moving_bus.classList.remove('moving-bus-sticky');
  }
}


window.addEventListener('scroll', toggleStickyNavbar);


  const amenitiesData = [
    { icon: "fa-wifi", name: "Wifi" },
    { icon: "fa-couch", name: "Pillow" },
    { icon: "fa-bottle-water", name: "Water Bottle" },
    { icon: "fa-lightbulb", name: "Reading Lights" },
    { icon: "fa-plug", name: "Charging Point" },
    { icon: "fa-tv", name: "Central Television" },
    { icon: "fa-headset", name: "24x7 Support" }
  ];
  
  function createAmenityElement(icon, name) {
    const amenityDiv = document.createElement("div");
    amenityDiv.classList.add("box");
  
    const amenityContent = document.createElement("div");
    amenityContent.classList.add("amenity");
  
    const iconElement = document.createElement("i");
    iconElement.classList.add("fas", icon);
    amenityContent.appendChild(iconElement);
  
    const nameElement = document.createElement("h2");
    nameElement.textContent = name;
    amenityContent.appendChild(nameElement);
  
    amenityDiv.appendChild(amenityContent);
  
    return amenityDiv;
  }
  
  function displayAmenities(startIndex) {
    const slider = document.querySelector(".slider");
    slider.innerHTML = "";
  
    for (let i = startIndex; i < startIndex + 6; i++) {
      const index = i % amenitiesData.length;
      const amenity = createAmenityElement(amenitiesData[index].icon, amenitiesData[index].name);
      slider.appendChild(amenity);
    }
  }
  
  let currentSlide = 0;
  const totalBoxes = amenitiesData.length;
  const sliderContainer = document.querySelector(".slider-container");
  
  function slideToNext() {
    currentSlide = (currentSlide + 6) % totalBoxes;
    displayAmenities(currentSlide);
  }
  
  displayAmenities(currentSlide);
  setInterval(slideToNext, 3000); // Adjust the interval time as needed (3000ms = 3 seconds)
  

  
  