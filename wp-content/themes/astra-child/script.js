let mainLogo = document.getElementById('main-logo')

mainLogo.style.transition = "transform 0.5s ease-in-out";
mainLogo.addEventListener('mouseover', function(){
    this.style.transform = "scale(1.2)";
})
mainLogo.addEventListener('mouseout', function(){
    this.style.transform = "scale(1)";
})


