function game(){

    document.getElementById("btn1").innerHTML="Start Game"


    var id1 = document.querySelector("#td1")
    var id2 = document.querySelector("#td2")
    var id3 = document.querySelector("#td3")
    var id4 = document.querySelector("#td4")
    var id5 = document.querySelector("#td5")
    var id6 = document.querySelector("#td6")
    var id7 = document.querySelector("#td7")
    var id8 = document.querySelector("#td8")
    var id9 = document.querySelector("#td9")


    id1.addEventListener("click", function(){
        id1.textContent = 'X'
    })
    id1.addEventListener("dblclick",function(){
        id1.textContent = 'O'
    })

    id2.addEventListener("click", function(){
        id2.textContent = 'X'
    })
    id2.addEventListener("dblclick",function(){
        id2.textContent = 'O'
    })


    id3.addEventListener("click", function(){
        id3.textContent = 'X'
    })
    id3.addEventListener("dblclick",function(){
        id3.textContent = 'O'
    })


    id4.addEventListener("click", function(){
        id4.textContent = 'X'
    })
    id4.addEventListener("dblclick",function(){
        id4.textContent = 'O'
    })

    id5.addEventListener("click", function(){
        id5.textContent = 'X'
    })
    id5.addEventListener("dblclick",function(){
        id5.textContent = 'O'
    })


    id6.addEventListener("click", function(){
        id6.textContent = 'X'
    })
    id6.addEventListener("dblclick",function(){
        id6.textContent = 'O'
    })


    id7.addEventListener("click", function(){
        id7.textContent = 'X'
    })
    id7.addEventListener("dblclick",function(){
        id7.textContent = 'O'
    })


    id8.addEventListener("click", function(){
        id8.textContent = 'X'
    })
    id8.addEventListener("dblclick",function(){
        id8.textContent = 'O'
    })

    id9.addEventListener("click", function(){
        id9.textContent = 'X'
    })
    id9.addEventListener("dblclick",function(){
        id9.textContent = 'O'
    })
}