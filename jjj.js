
const h1=document.getElementById("first") 
console.log(h1)

h1.innerHTML=0


const plusCounter=function(){
    console.log("bas")
    h1.innerHTML++
}
const minusCounter=function(){
    console.log("al")
    h1.innerHTML--
}


const rAndom=function(){
    let a=Math.floor(Math.random()*100)
    console.log(a)
     h1.innerHTML=a
}

const changeColor=function(){
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
}
const changeColor1=function(){
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
}
