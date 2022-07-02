 const  product =[
 {
  title:"Velociped",
  price: 5500,
 },
 {
  title: "car",
  price: 5500,
 },
 {
  title: "car",
  price: 5500,
 },
 {
  title: "car",
  price: 5500,
 }
];
 
 const form= document.querySelector("form");
const root=document.querySelector(".root");


product.forEach(({title, price})=>{
  const divElem= document.createElement("div");
  const titleElem = document.createElement("p"); 
  const priceElem= document.createElement("p"); 

 titleElem.innerText= title; 
  priceElem.innerText= price;

  divElem.classList.add("cont");
 divElem.append( titleElem, priceElem); 
 root.append(divElem);
})





  form.addEventListener("submit" , (event)=>{
    event.preventDefault();
  
    const secDiv = document.createElement("div");
    const preisInp  = document.createElement("p");
    const titleInp = document.createElement("p");

    const {title, price}=event.target;

     preisInp.innerText = title.value; 
    titleInp.innerText= price.value;
    secDiv.classList.add("cont");
  
    secDiv.append( titleInp, preisInp);
    root.append(secDiv);
    title.value ="";
    price.value="";

 }) ;