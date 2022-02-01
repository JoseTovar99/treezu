const hamburger = document.getElementById('hamburger'); 
const navUL = document.getElementById('nav');

let img = document.querySelector('#CampSection');
let btn1 = document.querySelector('.btnFullScreen1');
let btn2 = document.querySelector('.btnFullScreen2');
let btn3 = document.querySelector('.btnFullScreen3');

btn1.addEventListener('click', () => {
    img.src = 'img/Camp1.jpg';
    document.getElementById('demo').innerHTML = 'Sequoia National Park';
    document.getElementById('descChange').innerHTML = 'Huge mountains, rugged foothills, deep canyons, vast caverns, and the worlds largest trees.';
    document.getElementById('ratingChange').innerHTML = '(12.5K)';

})

btn2.addEventListener('click', () => {
    img.src = 'img/Camp5.jpg';
    
})

btn3.addEventListener('click', () => {
    img.src = 'img/Camp3.jpeg';
    
})



hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
})

