console.log(window);
// window.alert(1);

// Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector("h1"));

// Multiple element
const items = document.querySelectorAll('.item');

// generally don't use 
// console.log(document.getElementsByClassName('item'));

console.log(items);
// items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';



const btn = document.querySelector('.btn');
// btn.style.background = 'red';
btn.addEventListener('mouseover', (e) => {
    e.preventDefault();
    // console.log(e.target);
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    ul.lastElementChild.innerHTML = '<h1>Hello<h1>';
})