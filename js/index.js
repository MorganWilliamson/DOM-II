/* Recommended options: 
* `mouseover`
* `keydown`
* `wheel`
* `load`
* `focus`
* `resize`
* `scroll`
* `select`
* `dblclick`
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

*/

const h1 = document.querySelector('.logo-heading');

h1.addEventListener('mouseover', (event) => {
    h1.style.color = '#f2d45c';
});

h1.addEventListener('mouseout', (event) => {
    h1.style.color = 'black';
});




const links = document.querySelector('.nav-link');


