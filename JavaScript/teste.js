var box = document.getElementById('box')

box.addEventListener('mouseenter', click)

function click(){
    box.style.backgroundColor = 'red'
    box2.style.display = 'block'

    box2.addEventListener('mouseout', mouse)

    function mouse(){
        box2.style.display = 'none'
    }
    
}
