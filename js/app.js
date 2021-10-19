/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
let counter = 0;
let sections = document.querySelectorAll("section");
const navBar = document.querySelector("#navbar__list");
const header = document.querySelector(".page__header");
/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//start creatSection
const createSection = () => {
  counter++;
  let Content = ` <section id="section${counter}" data-nav="Section ${counter}">
                  <div class="landing__container">
                  <h2>Section ${counter}</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus .</p>
                  <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor .</p>
                  </div>
                  </section>`;
  document.querySelector("main").insertAdjacentHTML("beforeend", Content); // to put the content (befor and after end and begin)
};
//end creteSection
//start createNav
const createNav = () => {
  navBar.innerHTML = " ";
  sections.forEach((section) => {
    let listItem = `<li><a href="#${section.id}"data-nav="${section.id}
                    "class="menu__link">
                    ${section.dataset.nav}</a></li>`;
    navBar.insertAdjacentHTML("beforeend", listItem);
  });
};
//end creeatNav

//start window scroll
window.onscroll = function () {
  document.querySelectorAll("section").forEach(active);
  let activeLink = navBar.querySelector(`[data-nav=${active.id}]`);

  if (
    active.getBoundingClientRect().top >= -350 &&
    active.getBoundingClientRect().top <= 150
  ) {
    active.classList.add("your-active-class");
    activeLink.classList.add("active-link");
  } else {
    active.classList.remove("your-active-class");
    activeLink.classList.remove("active-link");
  }
};

//end window scroll
//start
navBar.addEventListener("click", (event) => {
  if (event.target.dataset.nav) {
    document.getElementById(`${event.target.dataset.nav}`);
    setTimeout(() => {
      location.hash = `${event.target.dataset.nav}`;
    }, 200);
  }
});
//end
//start creat section
for (let i = 1; i < 5; i++) createSection();
createNav();
document.getElementById("btn").addEventListener("click", () => {
  createSection();
  createNav();
});
