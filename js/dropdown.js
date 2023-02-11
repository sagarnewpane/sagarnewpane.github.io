dropdown = document.querySelector('.dropdown');
dropdown.onclick = function(){
    navBar = document.querySelector('nav');
    navBar.classList.toggle('active');
    console.log('clicking');
}