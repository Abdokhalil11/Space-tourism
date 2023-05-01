let dedesLink = document.querySelector(".destinations");
let start = document.querySelector(".explorer")
let change = (e) => {
  active = e.dataset.link;
  destination();
};

let active = "Mars";
const destination = async () => {
  try {
    const respond = await fetch("../starter-code/data.json");
    let result = await respond.json();
    // destinations
    let dedes = result.destinations;
    landing.innerHTML = `
    <div class="container">
<div class="image">
  <p class='title'><span>02</span>Pick your destination</p>
  ${dedes.map(
    (el) =>
      `<img src="${el.images.png}" class=${
        el.name == active ? "active" : ""
      } data-link ="${el.name}">`
  )}
</div>
<div class="text">
  <div class="names">
    ${dedes.map(
      (el) =>
        `<span data-link ="${el.name}"
      onclick="change(this)"
        class= "${el.name == active ? "active" : ""}"
        >${el.name}</span>`
    )}
  </div>
  <div class="plant">
  ${dedes.map(
    (el) =>
      `<p data-link ="${el.name}" 
      class=${el.name == active ? "active" : ""}>${el.name}</p>`
  )}
</div>
  <div class="descript">
    ${dedes.map(
      (el) => `<p data-link ="${el.name}"
      class=${el.name == active ? "active" : ""}
      >${el.description}</p>`
    )}
  </div>
  <div class="more-info">
      ${dedes.map(
        (el) =>
          `<p data-link ="${el.name}" class=${
            el.name == active ? "active" : ""
          }">
          <span>Est. travel time</span>
          ${el.travel}</p>`
      )}
      
      ${dedes.map(
        (el) =>
          `<p data-link ="${el.name}" class=${
            el.name == active ? "active" : ""
          }">
          <span>Est. travel time</span>
          ${el.distance}
          </p>`
      )}
</div>
</div>
    `;
  } catch (err) {
    console.log(Error`:${err}`);
  }
};

dedesLink.onclick = () => {
  destination();
  document.body.className = "";
  document.body.classList.add("dest");
};


start.onclick = ()=>{
  destination();
  document.body.classList.add("dest");
  console.log("ok")
}