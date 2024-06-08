let a=7;
let b=8;
// console.log(a+b)

let arr= [1,2,3,4,5,6,7,8,9,0];
// let value= arr.includes(7)
// console.log(value)

let thirdNO= arr[2];
// console.log(thirdNO)
// let c= arr.push(10);
// console.log(arr)

// let d= arr.pop();
// console.log(arr)

function area(a,b){
    return a*b;
}
let e= area(4,5);
// console.log(e)

let celsius= 30;
function celsiusToFarehnite() {
    return  (9/5 * celsius) + 32;
}
let g= celsiusToFarehnite();
// console.log(g + "°F")

let farehnite= 400;
function farehniteToCelsius(){
    return  (farehnite - 32) * 5/9;
}
let cel= farehniteToCelsius();
// console.log(cel+ "°C")

let kelvin = 330;
function kelvinToCelsius(){
    return kelvin -273
}
// console.log(kelvinToCelsius())

function celsiusToKelvin(){
    return celsius + 273
}
// console.log(celsiusToKelvin())


let i= arr.reverse();
// console.log(i);

let no = 40;
if(no%2==0){
    // console.log("even");
}
else{
    // console.log("odd");
}

let sum=0;
for (let i=0; i<=10; i++){
    sum+=i ;
}
// console.log(sum)

// let arr1= [5,3,24,56,7,8,50,35];
// arr1.forEach(e => {
//     // console.log(e)
// });

// let add=0;
// for(let i=0; i<arr1.length;i++){
// add+=arr1[i]
// }
// let avg= add/ arr1.length;
// console.log(avg);


let arr2= [1,5,2,5,7,8,"ilisha",true, "hiii",90];
let j=arr2.slice(2,6);//6th index is not included
// console.log(j);

let arr3= [];
let k= arr3.length;
if(k == 0){
    // console.log("array is empty");
}

for (let i=0; i<arr2.length; i++){
    let a= arr2[i];
    let b= typeof a;

    if(b== "number"){
        // console.log("yes, it contain number");
    }
    else{
        // console.log("And it contains other datatypes as well");
    }
}

// let m= arr4.includes(typeof arr4[i] == "number")
// console.log(m)

let arr4= [5,3,24,56,7,8,1,2,3,4,5,6,7,8,9];
arr4.forEach(e => {
    if (e%2 !== 0){
        // console.log("odd")
    }
    else{
        // console.log("even")
    }
});

let n= arr4.indexOf(7);
// console.log(n)


let givenNo=7;
for (let i=0; i<arr4.length; i++){
    let a= arr4[i];
// console.log(a* givenNo);
}
//we can also do this using foreach loop
arr4.forEach(e => {
    // console.log(e*givenNo)
});

let no1= 12;
let no2= 4;
if (no1>no2){
    // console.log(no1+" is maximum")
}
else{
    // console.log(no2+" is minimum")
}

if (no1<no2){
    // console.log(no1+" is minimum")
}
else{
    // console.log(no2+" is maximum")
}

let arr5= [5,3,24,56,7,8,1];
for (let i=1; i<arr5.length; i++){
    // console.log(arr5[i]);
}
let max= Math.max(...arr5);
// console.log(max)

let compare= (a,b)=>{
    return a-b
}
let sort= arr5.sort(compare);
// console.log(sort)//accending order

//console.log(sort[1]);// use to find second smallest no. in an array

let secNo= sort.reverse();
//console.log(secNo)//decesnding order

let o= 35;
if(o%5==0 && o%7==0){
    // console.log("it is divisible by 5 and 7 both")
}
else{
    // console.log("it not divisible by both")
}

let No= 5;
let product=1;
for(let i=1; i<=No; i++){
    product*=i
}
// console.log(product)

let que=" Write a JavaScript program to check if the given number falls within the given aray. H";
let yourNo= 78;
let yourArr=[1,2,56,779,30,3455,334,21,11,4];
let ans= yourArr.includes(yourNo)
// console.log(ans)

let que1="Write a JavaScript program to check if the given number falls within the given range. H";
if (yourNo>0 && yourNo <50){
    // console.log("yes this falls under the range of 0 to 50")
}
else{
    // console.log("no this doesn't falls under this range")
}

let num= 121;
let sqr= Math.sqrt(num);
// console.log(sqr);

let yourArr1=[1,2,56,779,30,3455,334,21,11,4];
yourArr1.forEach((elements, index) => {
    // console.log( elements, index+1)
});
//or we can direct get the array lenght
// console.log(yourArr1.length)

let num1= 1233445677;
let num2= num1.toString();
let num3= num2.split('');
let num4= num3.reverse();
let num5= num4.join("");
// console.log(num5)
// or we can do this using funtion
function reverseNo(Num){
    let reversedNum=0;
    while(Num != 0){
        const digit= Num %10 //we get 4
        reversedNum= reversedNum*10 +digit //we get 4
       // Num= Num/10 //we get 23.4
        Num= Math.trunc(Num /10)// we get 23
        
    }
    return reversedNum
}
let thisNo= reverseNo(23545897651909)
// console.log(thisNo)

let name1= "ilisha";
let ar= Array.from(name1);
let str= ar.reverse();
// console.log(ar);
// console.log(str);
let rev= str.toString()
// console.log(rev)


// let name= 34785954;
// let ar= Array.from(String(name));
// let num= ar.reverse();
// console.log(ar);
// console.log(num);

//this split function is used to slipt the words
let text = "How are you doing today?";
const myArray = text.split(" ");
// console.log(myArray)


let que2=`to-do,
Remove duplicate elements from an array. H 
Check if an array contains duplicate elements. H `

let arr6=[1,2,3,57,87,23,1,2,34,5];

function duplicate(){
for(let i=0; i<arr6.length; i++){

    if(arr6.indexOf(arr6[i]) !== i){
        console.log("it contains duplicate of", arr6[i])
    }
    else{
        console.log(arr6[i])
    }

}   }
// duplicate()

let anArr= [1,2,1,2,3,4,5,6,7,56,78,3,4,5]
let remove= new Set(anArr);
// console.log(remove)

// let Arr= [1,2,3,4,5,6,7,8,9,0];
// let c= arr.push(10);
// console.log(Arr)
// or we can also do this
//console.log(Arr.push(10))// if we use this then we get array length

let Arr= [1,2,3,4,5,6,7,8,9,0];
let z= arr.reverse();
// console.log(z);
let B= Arr.length-1;
for(i=B; i>=0; i--){
    // console.log(Arr[i])
}

let Arr1= [1,2,3,4,5,6,7,8,9,0];
let value= Arr1.includes(7)
// console.log(value)

for(let i=0; i<=Arr1.length; i++){
    if(Arr1.indexOf(7)==i){
        // console.log("present")
        }
    // else{
    //     console.log("not present")
    // }    
}
// let no11 = 40;
// if(no11%2==0){
//     console.log("even");
// }
// else{
//     console.log("odd");
// }
function oddEven(){
    let num=39;
    if(num%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
// oddEven()

let arr10= [5,3,24,56,7,8,50,35];
let addition=0;
function sum1(){
for(let i=0; i<arr10.length; i++){
    addition+=arr10[i];
}   
console.log(addition)
}
// sum1();
for (let i=0; i<arr4.length; i++){
    // let a= arr4[i]%2
    if (arr4[i]%2 !== 0){
        // console.log(arr4[i])
    }
}

function maximum(no1,no2){
    if (no1>no2){
        console.log(no1+" is maximum")
    }
    else{
        console.log(no2+" is maximum")
    }
}
// maximum(2000,89)


function minimum(no1,no2){
    if (no1<no2){
        console.log(no1+" is minimum")
    }
    else{
        console.log(no2+" is minimum")
    }
}
// minimum(23,8)

let arr20= [1,5,2,5,7,8,"ilisha",true, "hiii",90];
let newArr=arr20.every(allNo);
function allNo(){
    return i==Number
}
// console.log(newArr)

let arr15= [5,3,24,56,7,8,1];
function maxi(){
    let maxNo=Math.max(...arr15)
    // spread operator is used bcz it spread the elem of this arr. bcz math.max allowes no as its argument
    // let n= Number.parseInt(maxNo)
    // console.log(n)

let newAr= arr15.slice(maxNo);
console.log(newAr)
}
// maxi()

// let newArray=[1,2,35,7,1,3,5,7,90,2,3,3,900,23,5,6,7,3,1000];
// function sorter(){
//     for(let i=0; i<newArray.length; i++){
//         console.log(newArray[i])
//     }
// }
// sorter()
// for(let i=0;i<newArray.length; i++){
//     console.log(newArray[i])
// }










