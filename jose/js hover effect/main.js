// in a js file we first get the html documents
// DOM and keep in memory by vars
// then we select these vars perbuilt atribs like the color
// or add event listeners to them to do some thing

var headone=document.querySelector('#one');
function ct(){
    headone.textContent = 'man this worked out'
};
headone.onmouseenter() 
// function(){
//     ;
//     headone.style.color='red';
// }
// );