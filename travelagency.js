let btn1 = document.querySelector('.left1')
let btn2 = document.querySelector('.right1')

let img = document.querySelector('.testinomial_gallery')
let content = document.querySelector('.content')
let customername = document.querySelector('.customer_name')


const arr = ["link.jpeg", '12.jpg', 'download1.jpeg', 'download2.jpeg',
    'link.jpeg', 'download4.jpeg', 'download5.jpeg', 'download6.jpeg'];

const name1 = ['sahiba', 'bisma', 'aqsa', 'anum', 'maheen', 'awais', 'ali', 'sidra']

const text = ['Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quaerat',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quaerat',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quaerat',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quaerat',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quaerat',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quaerat',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quaerat',
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis quaerat']


btn1.addEventListener('click', backward)
btn2.addEventListener('click', forward)
let indexvalue = 0;

function start() {
    img.src = arr[indexvalue];
    customername.textContent = name1[indexvalue];
    content.textContent = text[indexvalue];

}

function forward() {
    indexvalue++;
    if (indexvalue >= arr.length) {
        indexvalue = 0;
    }

    start();
}

function backward() {
    indexvalue--;
    if (indexvalue < 0) {
        indexvalue = arr.length - 1;
    }

    start();

}

start();


