const produkData=[
{ id:1,nama:"Premium Hoodie",harga:500000,img:"https://images.unsplash.com/photo-1520975916090-3105956dac38"},
{ id:2,nama:"Luxury Shirt",harga:420000,img:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"},
{ id:3,nama:"Denim Jacket",harga:650000,img:"https://images.unsplash.com/photo-1542060748-10c28b62716f"},
{ id:4,nama:"Elegant Blazer",harga:700000,img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d"},
{ id:5,nama:"Modern T-Shirt",harga:250000,img:"https://images.unsplash.com/photo-1520975661595-6453be3f7070"},
{ id:6,nama:"Casual Pants",harga:380000,img:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a"}
];

let cart=[];
const container=document.getElementById("produkContainer");

function render(){
container.innerHTML="";
produkData.forEach(p=>{
container.innerHTML+=`
<div class="card reveal">
<img src="${p.img}">
<h4>${p.nama}</h4>
<p>Rp ${p.harga.toLocaleString()}</p>
<button onclick="add(${p.id})">Tambah</button>
</div>`;
});
}

function add(id){
cart.push(produkData.find(p=>p.id===id));
update();
}

function update(){
document.getElementById("cartCount").innerText=cart.length;
let total=0;
let items="";
cart.forEach(i=>{
total+=i.harga;
items+=`<p>${i.nama} - Rp ${i.harga.toLocaleString()}</p>`;
});
document.getElementById("cartItems").innerHTML=items;
document.getElementById("totalHarga").innerText=total.toLocaleString();
}

function toggleCart(){
document.getElementById("cartBox").classList.toggle("active");
}

function checkout(){
let pesan="Halo, saya ingin memesan:%0A";
cart.forEach(i=>{ pesan+=`- ${i.nama}%0A`; });
window.open(`https://wa.me/6281234567890?text=${pesan}`);
}

function scrollToProduk(){
document.getElementById("produk").scrollIntoView();
}

/* SCROLL REVEAL */
function revealOnScroll(){
let reveals=document.querySelectorAll(".reveal");
reveals.forEach(el=>{
let windowHeight=window.innerHeight;
let elementTop=el.getBoundingClientRect().top;
if(elementTop < windowHeight-100){
el.classList.add("active");
}
});
}
window.addEventListener("scroll",revealOnScroll);

render();
revealOnScroll();