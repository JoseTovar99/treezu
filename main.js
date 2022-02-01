const hamburger = document.getElementById('hamburger'); 
const navUL = document.getElementById('nav');

let img = document.querySelector('#CampSection');
let btn1 = document.querySelector('.btnFullScreen1');
let btn2 = document.querySelector('.btnFullScreen2');
let btn3 = document.querySelector('.btnFullScreen3');

btn1.addEventListener('click', () => {
    img.src = 'img/Camp1.jpg';
    document.getElementById('demo').innerHTML = 'Sequoia National Park';
    document.getElementById('descrChange').innerHTML = 'Huge mountains, rugged foothills, deep canyons, vast caverns, and the worlds largest trees.';
    document.getElementById('ratingChange').innerHTML = '(12.5K)';

})

btn2.addEventListener('click', () => {
    img.src = 'img/Camp5.jpg';
    document.getElementById('demo').innerHTML = 'Yosemite National Park';
    document.getElementById('descrChange').innerHTML = 'Located in Californias Sierra Nevada mountains. Famed for its giant, ancient sequoia trees, and for Tunnel View.';
    document.getElementById('ratingChange').innerHTML = '(39.1K)';
})

btn3.addEventListener('click', () => {
    img.src = 'img/Camp3.jpeg';
    document.getElementById('demo').innerHTML = 'Crater Lake National park';
    document.getElementById('descrChange').innerHTML = 'Crater Lake National Park is in the Cascade Mountains of southern Oregon. Its known for its namesake Crater Lake, formed by the now-collapsed volcano, Mount Mazama and the beautiful trails.';
    document.getElementById('ratingChange').innerHTML = '(11.8K)';
})



hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
})

