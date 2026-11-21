
const products = [
 {id:1,name:"Classic T-Shirt",price:799,cat:"Men"},
 {id:2,name:"Denim Jacket",price:1999,cat:"Men"},
 {id:3,name:"Floral Dress",price:1499,cat:"Women"},
 {id:4,name:"Casual Hoodie",price:1299,cat:"Unisex"},
 {id:5,name:"Slim Fit Jeans",price:1799,cat:"Men"},
 {id:6,name:"Summer Top",price:999,cat:"Women"}
];

function addToCart(id){
 const p=products.find(x=>x.id===id);
 let cart=JSON.parse(localStorage.getItem("stylehubCart")||"[]");
 const found=cart.find(x=>x.id===id);
 if(found) found.qty++;
 else cart.push({...p,qty:1});
 localStorage.setItem("stylehubCart",JSON.stringify(cart));
 alert(p.name+" added to cart!");
}

function renderCart(){
 const box=document.getElementById("cartItems");
 if(!box)return;
 const cart=JSON.parse(localStorage.getItem("stylehubCart")||"[]");
 if(!cart.length){box.innerHTML="<p>Your cart is empty.</p>";return;}
 let total=0;
 box.innerHTML=cart.map(x=>{
   const sub=x.price*x.qty; total+=sub;
   return `<div class="cart-row"><div><strong>${x.name}</strong><br><span class="badge">${x.cat}</span></div><div>₹${x.price}</div><div>Qty: ${x.qty}</div><div>₹${sub}</div></div>`;
 }).join("");
 document.getElementById("cartTotal").textContent="₹"+total;
}
document.addEventListener("DOMContentLoaded",renderCart);
