//Gets the header element
const header = document.querySelector('header');

//Gets all the section elements
const sections = document.querySelectorAll('section');

//Gets the section element with the class of 'current'
const currentSection = document.querySelector('section.current');

//Gets the sections that comes after the 'current' section(previously selected)
const nextSection = currentSection.nextElementSibling;

//Gets the h2 'node' from the section before 'current' section
const previousH2 = currentSection.previousElementSibling.querySelector('h2');

//Gets the div that contains the section that has an h2 with the class of 'highlight'
const highlightDiv = document.querySelector('h2.highlight').parentNode.parentNode;

//Gets all sections that contain an h2
const sectionsWithH2 = document.querySelectorAll('section:has(h2)');

//Console logged em all! ಥ‿ಥ
console.log(header);
console.log(sections);
console.log(currentSection);
console.log(nextSection);
console.log(previousH2);
console.log(highlightDiv);
console.log(sectionsWithH2);