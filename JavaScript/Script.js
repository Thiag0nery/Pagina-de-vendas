var move = document.getElementById('navbar')
document.onscroll = function (){ testeScroll()}

function testeScroll(){
    if (document.documentElement.scrollTop >= 40){
       
        document.getElementById('navbar').style.boxShadow = 'none'
        document.getElementById('navbar').style.borderBottom = ' 1px solid black'
        document.getElementById('navbar').className = 'hover'
        move.addEventListener('mouseenter', entrou)
        move.addEventListener('mouseleave', saiu)
        
        
        function entrou(){
            document.getElementById('navbar').className = 'bg-secondary'
            document.getElementById('navbar').style.boxShadow = '0 1px 15px 2px black'
        }
        function saiu(){
            document.getElementById('navbar').className = 'hover'
            document.getElementById('navbar').style.boxShadow = 'none'
        }
        
        
    }
    else{
        document.getElementById('navbar').className -= 'hover'
        document.getElementById('navbar').className = 'bg-secondary'
        document.getElementById('navbar').style.boxShadow = '0 1px 15px 2px black'
        // document.documentElement.scrollTop = 0
        move.addEventListener('mouseleave', saiu)
        function saiu(){
            document.getElementById('navbar').className = 'bg-secondary'
            document.getElementById('navbar').style.boxShadow = '0 1px 15px 2px black'
        }
        // if(document.documentElement.scrollTop > 25){
        //     document.getElementById('navbar').style.position = 'fixed'
        // }
    }
    
    
}
var ponteiro = document.getElementsByClassName('nav-item')
ponteiro.addEventListener('mouseleave', passou)
function passou(){
    document.documentElement('nav-item').style.borderBottom = '1px solid red'
}
