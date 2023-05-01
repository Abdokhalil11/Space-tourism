let crewLink = document.querySelector(".crew");
let person = "Anousheh Ansari";

let changePerson = (e) => {
  person = e.dataset.link;
  crew();
};

const crew = async () => {
  try {
    const respond = await fetch("../starter-code/data.json");
    let result = await respond.json();
    let people = result.crew;
    // crew
    landing.innerHTML = `
    <div class="container">
    <div class="text">
    <p class="meet active"><span>03</span> MEET YOUR CREW</p>
    ${people.map(
      (el) =>
        `<p class='role ${el.name == person ? "active" : ""}' data-link='${
          el.name
        }'">${el.role}</p>`
    )}
    ${people.map(
      (el) =>
        `<p class='name ${el.name == person ? "active" : ""}' data-link='${
          el.name
        }'">${el.name}</p>`
    )}
    ${people.map(
      (el) =>
        `<p class=' bio ${el.name == person ? "active" : ""}' data-link='${
          el.name
        }'">${el.bio}</p>`
    )}
    <div class="dots">
    ${people.map(
      (el) =>
        `<div class="dot ${el.name == person ? "active" : ""}" data-link='${
          el.name
        }' onclick='changePerson(this)'"></div class="dot">`
    )}
    </div>
    </div>
    <div class="image">
    ${people.map(
      (el) =>
        `<img src="${el.images.webp}"class='${
          el.name == person ? "active" : ""
        }' data-link='${el.name}'">`
    )}
    </div>
    </div>
    `;
  } catch (err) {
    console.log(Error`:${err}`);
  }
};

crewLink.onclick = () => {
  crew();
  document.body.className = "";
  document.body.classList.add("crew");
};
