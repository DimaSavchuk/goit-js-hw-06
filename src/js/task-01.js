let list = document.querySelectorAll('.item')

console.dir(`Number of categories: ${list.length}`);
let num = 0;

list.forEach(element => {
    console.dir(`Category: ${element.firstElementChild.textContent}`);
    console.dir(`Elements: ${element.lastElementChild.getElementsByTagName('li').length}`)
});
