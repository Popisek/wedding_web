const accomondationType = document.querySelector(".accomodation-type");
const acomodationRadios = document.getElementsByName("overNight");
const map = document.querySelector("iframe");

let isMobile = window.matchMedia("only screen and (max-width: 700px)").matches;

if (isMobile) {
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4243.2124524855!2d15.754836777684336!3d50.04996287151858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c332aba288ab5%3A0xe1d6c2f81956b154!2sRestaurace%20na%20Palub%C4%9B!5e1!3m2!1scs!2scz!4v1775783771532!5m2!1scs!2scz";
} else {
  map.src =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4243.2124524855!2d15.754836777684336!3d50.04996287151858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c332aba288ab5%3A0xe1d6c2f81956b154!2sRestaurace%20na%20Palub%C4%9B!5e1!3m2!1scs!2scz!4v1775783771532!5m2!1scs!2scz";
}


acomodationRadios.forEach((radio) => {
  radio.onclick = (e) => {
    const value = e.target.value;
    if (value === "ano") {
      accomondationType.style.display = "block";
    } else {
      accomondationType.style.display = "none";
    }
  };
});
