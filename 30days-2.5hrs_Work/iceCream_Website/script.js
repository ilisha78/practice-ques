let scoop1= document.getElementById("scoop1");
let scoop2= document.getElementById("scoop2");
let scoop3= document.getElementById("scoop3");
let topping1= document.getElementById("topping1");
let topping2= document.getElementById("topping2");
let topping3= document.getElementById("topping3");

let btnScoop1= document.getElementById("btn-scoop1");
let btnScoop2= document.getElementById("btn-scoop2");
let btnScoop3= document.getElementById("btn-scoop3");
let btnTopping1= document.getElementById("btn-topping1");
let btnTopping2= document.getElementById("btn-topping2");
let btnTopping3= document.getElementById("btn-topping3");

let colours=["#ea0d0d", "rgb(136, 252, 136)", "rgb(244, 165, 178)", "#fc5e1f", " rgb(246, 172, 82)", "rgb(94, 8, 8)","rgb(192, 217, 242)" ];

btnScoop1.addEventListener("click", function(){
    const scoop1color = Math.round(Math.random() * (colours.length - 1));
    let a= colours[scoop1color].toString();
    // console.log(a);
scoop1.style.backgroundColor=a;
});
btnScoop2.addEventListener("click", function(){
    const scoop1color = Math.round(Math.random() * (colours.length - 1));
    let a= colours[scoop1color].toString();
    // console.log(a);
scoop2.style.backgroundColor=a;
});
btnScoop3.addEventListener("click", function(){
    const scoop1color = Math.round(Math.random() * (colours.length - 1));
    let a= colours[scoop1color].toString();
    // console.log(a);
scoop3.style.backgroundColor=a;
});
btnTopping1.addEventListener("click", function(){
    const scoop1color = Math.round(Math.random() * (colours.length - 1));
    let a= colours[scoop1color].toString();
    // console.log(a);
topping1.style.backgroundColor=a;
});
btnTopping2.addEventListener("click", function(){
    const scoop1color = Math.round(Math.random() * (colours.length - 1));
    let a= colours[scoop1color].toString();
    // console.log(a);
topping2.style.backgroundColor=a;
});
btnTopping3.addEventListener("click", function(){
    const scoop1color = Math.round(Math.random() * (colours.length - 1));
    let a= colours[scoop1color].toString();
    // console.log(a);
topping3.style.backgroundColor=a;
});


