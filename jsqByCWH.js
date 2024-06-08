let an = "hello";
let b= 5;
// console.log(an+b)

// console.log(typeof an)

const c= {
    car: "audi",
    model:"au56",
    no: 151
}
// c=56;
// console.log(c) -------- typerror

c.keyModel="remote";
// console.log(c)

let dictionary= {
    "enjoy": "happiness",
    "krishna": "sb kuch",
    "prem":"kanha",
    "shanti":"basuri",
    "madhav": "samarpan"
}
// console.log(dictionary)

let d= 20;
if(d>10 && d<20){
    // console.log("yes")
}

let day= "sunday";
switch(day){
    case "monday": 
    console.log("monday"); 
    break;
    case "tuesday": 
    console.log("tuesday"); 
    break;
    case "wednesday": 
    console.log("wednesday"); 
    break;
    case "thursday": 
    console.log("thursday"); 
    break;
    case "friday": 
    console.log("friday"); 
    break;
    case "saturday": 
    console.log("saturday"); 
    break;
    case "sunday": 
    console.log("sunday");
    break;
    default: 
    console.log("none");
}

let e= 16;
if (e%2==0 && e%3==0){
    // console.log("it is divisible by 2 and 3");
}

if (e%2==0 || e%3==0){
    // console.log("it is divisible by 2 or 3");
}

let age= 19;
// (age>18)? console.log("you can drive"): console.log("you can not drive");

let obj={
    harry: 96,
    tannu: 55,
    ishu: 100,
}
let f= Object.keys(obj)
// console.log(f)
for(let i=0; i<f.length; i++){
    // console.log(obj[f[i]])
}

let object={
    name:"ilisha",
    number:"xxxxxx5570",
    marks:94
}
for(let keys in object){
    // console.log(object[keys])
}

let g=1;
// while(g<10){
//     // console.log(g)
//     g++
// }
do{
    // console.log(g)
    g++;
}
while(g<10);

let h;
let i=7;
// while(i != h){
// h=prompt("enter any no. b/w 1 to 10")
// console.log("try again")
// }
// console.log("congrats")

function mean(a,b,c,d,e){
    return (a+b+c+d+e)/2 ;
}
// console.log(mean(1,2,3,4,5));

// console.log("har\" ".length);
let str="Ilisha Jaiswal";
// console.log(str.includes("isha"));
// console.log(str.startsWith("ili"));
// console.log(str.endsWith("wal"));
// console.log(str.toLocaleLowerCase());
let str1="please give me rs1000";
let k= str1.slice(17);
// console.log(k);
let l= str1.replace("1000", "2000");
// console.log(l);


let arr=[1,2,3,4,5,6,7,8];
// let ad= prompt("enter any no.")
// let m= Number.parseInt;
// let n=arr.push(ad)// this will give the arr length
// console.log(arr)// to get the updated arr


// let o;
// while(h!=0){
    // o=prompt("enter any no.")// this adds as a string
    // let m= Number.parseInt(o);// add as a no.
    // console.log("add more")
    // arr.push(m)
// }
// console.log(arr)

let arr1= [10,2,12,20,40,60,57,54,30,35,70]
for( let i=0; i<arr1.length; i++){
    // console.log(arr1[i]);
    if (arr1[i] % 10 == 0){
        // console.log(arr1[i])
    }
}

let newarr=[]
for(let i=0; i<arr.length; i++ ){
let a= arr[i]
function sqr(){
let b= a*a
newarr.push(b)
}
sqr()
}
// console.log(newarr)

let product= 1;
for(let i=1; i<=7; i++){
    product*=i
}
// console.log(product)

// let age1= prompt("enter your age");
// let ab = Number.parseInt(age1);
// (ab > 18) ? alert("you can drive") : alert("you can not drive");

// let age= prompt("enter your age");
// let a = Number.parseInt(age);
// (a > 18) ? alert("you can drive") : alert("you can not drive");
// if(confirm("do u want again")== true){
//     let newage=age;
// console.log("done")
// }
// if(a < 0){
//     console.error("negative no")
// }

// {/* <a href="www.codewithharry.com" id="anchor">codewithharry</a> */}
// let no=prompt("enter any no");
// let an= Number.parseInt(no);
// if(an > 4){
// let b= document.getElementById("anchor");
// b.innerHTML=`
// <a href="www.google.com" id="anchor">google</a>
// `
// }
// let color= prompt("enter any color");
// let a= document.getElementById("p")
// switch(color){
// case "red": a.style.background="red"; break;
// case "blue": a.style.background="blue"; break;
// case "green": a.style.background="green"; break;
// case "yellow": a.style.background="yellow"; break;
// case "pink": a.style.background="pink"; break;
// case "wheat": a.style.background="wheat"; break;
// }

// console.log(typeof window)
// console.log(typeof document)


/* <table>
    <th>student</th>
    <td>name</td>
    <td>ilisha</td>
    <td>class</td>
    <td>12</td>
    <!-- in veiw page source it doesnot add tbody but in inspect it adds tbody and trow automatically-->
</table> */

// <nav>
// <h1>hlo</h1>
// <h2>hii</h2>
// <h3>hye</h3>
// <h4>h</h4>
// </nav>
// document.getElementsByTagName("nav")[0].firstElementChild.style.color="red"


// <div>
//   <li>hlo</li>
//   <li>hi</li>
//   <li>hiii</li>
//   <li>hlw</li>
// </div>
// document.getElementsByTagName("div")[0].firstElementChild.style.color="red"
// document.getElementsByTagName("div")[0].lastElementChild.style.color="yellow"

/* <ol>
<li>hoisting</li>
<li>JavaScript</li>
<li>preparation</li>
<li>models</li>
<li>callback</li>
</ol>
let a= document.getElementsByTagName("li")
for(let i=0; i<a.length; i++){
a[i].style.background="red"
} */

// let a=Math.floor(Math.random() * 10)
// let b= prompt("enter a no.")
// if(b>a){
//     console.log("no is smaller than this")
// }
// else if(b<a){
//     console.log("no is greater than this")
// }

// else if(b==a){
//     console.log("👍 great")
// }
// else{
//     console.log("enter again")
// }



let arr13=[1, 44,3, 5,66,78,45,67,88,35,3,25,6]
function ran(arr){
let randomItem=Math.floor(Math.random() * arr.length);
let item= arr[randomItem]
document.write(item)
}
ran(arr13)
let anyNo=Math.floor(Math.random() * 100 + 1);
let guess;
let chance=0;
// guess= prompt("enter a no.")
++chance;//have to do this work
do{
guess= Number.parseInt(guess);
}while(guess!= anyNo)



    // <style>
    //   .bulb{
    //     height: 250px;
    //     width: 250px;
    //     background-image: url(https://www.shutterstock.com/image-vector/bulb-icon-idea-lighting-design-260nw-1269439888.jpg);
    //   }
    //   .bulbon{
    //     width: 200px;
    //     height: 200px;
    //     background-image: url(https://static.vecteezy.com/system/resources/thumbnails/003/706/329/small/glowing-light-bulb-isolated-on-white-background-symbol-concept-of-idea-knowledge-creativity-or-inspiration-simple-trendy-cute-cartoon-illustration-modern-flat-style-graphic-design-free-icon-free-vector.jpg);
    //     /* background-color: yellow; */
    //     object-fit:contain;
    //   }
    // </style>
    
/* <button onclick="alert('hello i am btn1')" >btn1</button>
<button onclick="alert('hello i am btn2')" >btn2</button>
<button onclick="alert('hello i am btn3')" >btn3</button>
<button onclick="alert('hello i am btn4')" >btn4</button>
<button onclick="alert('hello i am btn5')" >btn5</button>
<button onclick="alert('hello i am btn6')" >btn6</button>

<h1>bookmarks</h1>
<a href="https://google.com"><button>google</button></a>
<a href="https://facebook.com"><button>facebook</button></a>
<a href="https://instagram.com"><button>instagram</button></a>
<a href="https://twitter.com"><button>twitter</button></a>

<div>
  <button id="google">google</button>
  <button id="facebook">facebook</button>
  <button id="instagram">instagram</button>
  <button id="twitter">twitter</button>
</div>

<h2 class="bulb"> bulb</h2> */

// setInterval(() => {
//     let a= document.getElementsByClassName("bulb")[0];
// a.classList.toggle("bulbon")
// }, 1000);

// let e= document.getElementsByClassName("bulb")[0];
// e.addEventListener("click", function fun() {
//   e.classList.toggle("bulbon")
// })


// let a=document.getElementById("google")
// a.addEventListener("click", function(){
//   window.location="https://google.com"
//   window.focus()
// })

// let b=document.getElementById("facebook")
// b.addEventListener("click", function(){
//   window.location="https://facebook.com"
//   window.focus()
// })
// let c=document.getElementById("instagram")
// c.addEventListener("click", function(){
//   window.location="https://instagram.com"
//   window.focus()
// })
// let d=document.getElementById("twitter")
// d.addEventListener("click", function(){
//   window.location="https://twitter.com"
//   window.focus()
// })


// let btn1= document.getElementsByClassName("btn1")[0]
// btn1.addEventListener(onclick, document.write("btn1"));

