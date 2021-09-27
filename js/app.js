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

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
