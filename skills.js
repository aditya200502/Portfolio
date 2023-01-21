var progress = document.querySelectorAll('.skill-progress > div');
var skillscontainer = document.getElementById('skills-container');
window.addEventListener('scroll',checkscroll);
var animationdone = false;

function initialisebars(){
    for(var bar of progress){
        bar.style.width = 0 + '%';
    }
}

initialisebars();

function fillbars(){

        for(let bar of progress){
            let targetwidth = bar.getAttribute('data-bar-width');
            let currentwidth = 0;
            let interval = setInterval(function(){
                if(currentwidth > targetwidth){
                    clearInterval(interval);
                    return;
                }
                currentwidth++;
                bar.style.width = currentwidth + '%';
            },3);
        }
}

function checkscroll(){
    var coordinates = skillscontainer.getBoundingClientRect();
    if(!animationdone && coordinates.top < window.innerHeight){
        animationdone = true;
        console.log('Skills Section is visible');
        fillbars();
    }
    else if(coordinates.top < window.innerHeight){
        animationdone = false;
        initialisebars();
    }
}