/* Recommended options: 
* `wheel`
* `resize`
* `scroll`
* `select`
* `drag / drop`

* Note: Drag and drop is a bit more advanced than the others: it's not actually a single type of event but several types that need to work together.
   
* [ ] Nest two similar events somewhere in the site and prevent the event propagation properly. Remember not all event types bubble.
* [ ] Stop the navigation items from refreshing the page by using `preventDefault()`

Some of the Available Classes in HTML: 
*"main-navigation" - targets <header>
*"logo-heading" - targets the h1
*"nav" - targets the nav
*"nav-link" - targets links in the nav
*"intro" - contains bus image and "Welcome to Fun Bus!" heading/paragraph

different event listeners added: 7 / 10

*/

/////////

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
});

////////

const h1 = document.querySelector('.logo-heading');

h1.addEventListener('mouseover', (event) => {
    h1.style.color = '#f2d45c';
});

h1.addEventListener('mouseout', (event) => {
    h1.style.color = 'black';
});

////////

const password = document.querySelector('input[type="password"]')

password.addEventListener('focus', (event) => {
    event.target.style.background = '#e35f4b';
});

password.addEventListener('blur', (event) => {
    event.target.style.background = '';
});

/////////

const nav = document.querySelector('.nav')

nav.addEventListener('dblclick', function (event) {
    nav.style.border = "3px dashed black";
});

document.addEventListener('keydown', (event) => {
    if (event.key = 65)
    nav.style.border = '3px solid green';
})

//////// 

