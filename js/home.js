const element = document.getElementsByTagName('span');

element[0].addEventListener("mouseenter", function () {
  // code to execute when the cursor enters the element
  document.getElementsByClassName('logo')[0].style.color = 'rgb(235, 50, 17)';
  element[0].style.color = 'white';
  element[0].style.transition = 'all 0.4s ease 0s';
  
});
element[0].addEventListener("mouseleave", function() {
  // code to execute when the cursor leaves the element
  document.getElementsByClassName('logo')[0].style.color = 'white';
  element[0].style.color = 'rgb(235, 50, 17)';
  element[0].style.transition = 'all 0.4s ease 0s';
  
});
