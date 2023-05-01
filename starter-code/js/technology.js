let techLink = document.querySelector(".technology");
let tech = "Launch vehicle";

let changetech = (e) => {
  tech = e.dataset.link;
  technology();
};

const technology = async () => {
  try {
    const respond = await fetch("../starter-code/data.json");
    let result = await respond.json();
    let technologys = result.technology;
    // technology
    landing.innerHTML = `
    <div class="container">
    <div class="text">
    <div class="dots">
    ${technologys.map(
      (el) =>
        `<div class="dot ${el.name == tech ? "active" : ""}" data-link='${
          el.name
        }' onclick='changetech(this)'"></div>`
    )}
    </div>
    <div>
    <p class=" termo active">THE TERMINOLOGY…</p>
    ${technologys.map(
      (el) =>
        `<p class='name ${el.name == tech ? "active" : ""}' data-link='${
          el.name
        }'">${el.name}</p>`
    )}
    ${technologys.map(
      (el) =>
        `<p class='description ${el.name == tech ? "active" : ""}' data-link='${
          el.name
        }'">${el.description}</p>`
    )}
    </div>
    </div>
    <div class="image">
    ${technologys.map(
      (el) =>
        `<img src='${el.images.portrait}' class='portrait ${
          el.name == tech ? "active" : ""
        }' data-link='${el.name}'">`
    )}
    ${technologys.map(
      (el) =>
        `<img src='${el.images.landscape}' class='landscape ${
          el.name == tech ? "active" : ""
        }' data-link='${el.name}'">`
    )}
    </div>
    </div>
    `;
  } catch (err) {
    console.log(Error`:${err}`);
  }
};

techLink.onclick = () => {
  technology();
  document.body.className = "";
  document.body.classList.add("technology");
};
