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
    document.getElementById('changeMap').innerHTML = '<iframe width="425" height="220" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-119.21951293945314%2C36.110143066608245%2C-117.93411254882814%2C36.88071909009633&amp;layer=mapnik" style="border: 1px solid black"></iframe>';

})

btn2.addEventListener('click', () => {
    img.src = 'img/Camp5.jpg';
    document.getElementById('demo').innerHTML = 'Yosemite National Park';
    document.getElementById('descrChange').innerHTML = 'Located in Californias Sierra Nevada mountains. Famed for its giant, ancient sequoia trees, and for Tunnel View, the iconic vista of towering Bridalveil Fall';
    document.getElementById('ratingChange').innerHTML = '(39.1K)';
    document.getElementById('changeMap').innerHTML = '<iframe width="425" height="200" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-120.1849365234375%2C37.461778479617486%2C-118.89953613281251%2C38.21876193471268&amp;layer=mapnik" style="border: 1px solid black"></iframe>';
})

btn3.addEventListener('click', () => {
    img.src = 'img/Camp3.jpeg';
    document.getElementById('demo').innerHTML = 'Crater Lake National park';
    document.getElementById('descrChange').innerHTML = 'Crater Lake National Park is in the Cascade Mountains of southern Oregon. Its known for its namesake Crater Lake, formed by the now-collapsed volcano, Mount Mazama and the beautiful trails.';
    document.getElementById('ratingChange').innerHTML = '(11.8K)';
    document.getElementById('changeMap').innerHTML = '<iframe width="425" height="220" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.45567321777345%2C42.75306280054232%2C-121.81297302246095%2C43.10399092988393&amp;layer=mapnik" style="border: 1px solid black"></iframe>';
})



hamburger.addEventListener('click', () => {
    navUL.classList.toggle('show');
})

