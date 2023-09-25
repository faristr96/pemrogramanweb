//navbar fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixnav = header.offsetTop;

    if(window.pageYOffset > fixnav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
};
// for three line
const threeLine = document.querySelector( '#threeline');
const navMenu = document.querySelector('#nav-menu');

threeLine.addEventListener('click', function(){
    threeLine.classList.toggle('threeline-active')
    navMenu.classList.toggle('hidden');
});