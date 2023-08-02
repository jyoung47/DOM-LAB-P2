// Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" }
    ]
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" }
    ]
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" }
    ]
  }
];

// Task 1.0
// Select and cache the <main>element in a variable named mainEl.
const mainEl = document.querySelector("main");
console.log(mainEl);

// Task 1.1
// Set the background color of mainElto the value stored in the --main-bgCSS custom property.

// Hint: Assign a string that uses the CSS var()function like this:
// 'var(--main-bg)'
mainEl.style.backgroundColor = "var(--main-bg)";

// Task 1.2
// Set the content of mainEl to <h1>SEI Rocks!</h1>.
mainEl.innerHTML = "<h1>Technical Tech Store</h1>";

// Task 1.3
// Add a class of flex-ctr to mainEl.
mainEl.setAttribute("class", "flex-ctr");

// Task 2.0
// Select and cache the <nav id="top-menu">element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");

// Task 2.1
// Set the height topMenuElelement to be 100%.
topMenuEl.style.height = "100%";

// Task 2.2
// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Task 2.3
// Add a class of flex-aroundto topMenuEl.
topMenuEl.setAttribute("class", "flex-around");

// Task 3.0
// Copy the following data structure to the top of script.js:

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.
// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.
// Set the new element's content to the value of the textproperty of the "link" object.
// Append the new element to the topMenuElelement.

for (let i = 0; i < menuLinks.length; i++) {
  const newElem = document.createElement("a");
  newElem.setAttribute("href", menuLinks[i].href);
  newElem.textContent = menuLinks[i].text;
  topMenuEl.append(newElem);
}

// Task 4.0
// Select and cache the <nav id="sub-menu">element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");

// Task 4.1
// Set the height subMenuElelement to be 100%.
subMenuEl.style.height = "100%";

// Task 4.2
// Set the background color of subMenuElto the value stored in the --sub-menu-bgCSS custom property.
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Task 4.3
// Add the class of flex-around to the subMenuElelement.
subMenuEl.setAttribute("class", "flex-around");

// Task 4.4
// Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// Task 4.5
// Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top = "0";

// Task 5.0
// Update the menuLinksarray in script.js to this:

// Task 5.1
// Select and cache the all of the <a>elements inside of topMenuElin a variable named topMenuLinks.

// Declare a global showingSubMenu variable and initialize it to false;
const topMenuLinks = topMenuEl.querySelectorAll("a");
let showingSubMenu = false;


//5.2 Attach a delegated 'click' event listener to topMenuEl. The first line of code of the event listener function should call the event object's preventDefault()method.
//The second line of code function should immediately return if 
//the element clicked was not an <a>element.

//console.logthe content of the <a>to verify the handler is working.
topMenuEl.addEventListener("click", (event) => {
event.preventDefault();
if (event.target.tagName !== "A") {
return;
}
console.log(event.target.textContent);
//5.3
if (event.target.classList.contains("active")) {
event.target.classList.remove("active");
showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  //5.4  the event listener should remove a class name of active
  //from each <a>element in topMenuLinks- whether the activeclass exists or not.
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }
  //5.5 Next, the event listener should add a class name of activeto the <a>element that was clicked.
  event.target.classList.add("active");

  // task 5.6 Set showingSubMenuto trueif the clicked <a>element's "link" object within menuLinkshas a subLinksproperty
    const anchorName = event.target.textContent;
  const menuLink = menuLinks.find((link) => {
    //find is like map, goes through everything in the array
    return link.text === anchorName; // returns boolean
  });

  if (menuLink === undefined) {
    return;
  }

  if (menuLink.subLinks) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  //task 5.7 
  const buildSubMenu = (sublinks) => {
    subMenuEl.innerHTML = "";
    for (let i = 0; i < sublinks.length; i++) {
      const newAnchor = document.createElement("a");
      newAnchor.setAttribute("href", sublinks[i].href);
      newAnchor.textContent = sublinks[i].text;
      subMenuEl.append(newAnchor);
    }
  };

  if (showingSubMenu) {
    buildSubMenu(menuLink.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
  }

  //task 6.4
  if (anchorName === "about") {
    mainEl.innerHTML = "<h1>about</h1>";
  }
});

/////THIS EVENT LISTENER IS FOR THE SUBMENU**********
// Task 6.0
subMenuEl.addEventListener("click", (event) => {
  event.preventDefault();
  if (event.target.tagName !== "A") {
    return;
  }
  console.log(event.target.textContent);

// task 6.1 Next, the event listener should:
//Set showingSubMenuto false.
//Set the CSS topproperty of subMenuElto 0.
  showingSubMenu = false;
  subMenuEl.style.top = "0";

  // task 6.2 Remove the class name of activefrom each <a>element in topMenuLinks- whether the activeclass exists or not.
  for (let i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove("active");
  }

  // task 6.3 Update the contents of mainElto the contents of the <a>element, within an <h1>, clicked within subMenuEl.
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
