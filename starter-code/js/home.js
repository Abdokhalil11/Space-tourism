// header

let bar = document.querySelector(".bar-icon");
let hide = document.querySelector(".close");
let list = document.querySelector("ul");

const hideAndShowList = () => {
  bar.addEventListener("click", () => {
    list.classList.remove("hide");
    list.classList.add("anim");
  });
  hide.addEventListener("click", () => {
    list.classList.add("hide");
  });
};

hideAndShowList();

let uls = document.querySelectorAll("ul li");

uls.forEach((ul)=>{
  ul.onclick= ()=>{
    uls.forEach((ul)=>{
      ul.classList.remove("active")
    })
    ul.classList.add("active")
  }
})

// home
let landing = document.querySelector(".landing");
let home = document.querySelector(".home")

home.onclick = ()=>{
  homePage();
  document.body.className = "";
  document.body.classList.add("home");
}

const homePage = ()=>{
  landing.innerHTML = `
  <div class="container">
  <div class="text">
    <span class="so">So, you want to travel to</span>
    <p class="title" >Space</p>
    <p class="desc">
      Let’s face it; if you want to go to space, you might as well
      genuinely go to outer space and not hover kind of on the edge of it.
      Well sit back, and relax because we’ll give you a truly out of this
      world experience!
    </p>
  </div>
  <div class="explorer">
    <a class="start">Explore</a>
  </div>
  </div>
  `;
}
homePage();




// crew

// technology

