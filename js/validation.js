
function showError(id,msg){
 const el=document.getElementById(id);
 if(el) el.textContent=msg;
}
function clearErrors(){
 document.querySelectorAll(".error").forEach(e=>e.textContent="");
}
function validEmail(v){return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}
function validPhone(v){return /^[6-9]\d{9}$/.test(v)}
function validPin(v){return /^\d{6}$/.test(v)}

const reg=document.getElementById("registerForm");
if(reg){
 reg.addEventListener("submit",function(e){
   e.preventDefault(); clearErrors();
   let ok=true;
   const name=document.getElementById("name").value.trim();
   const email=document.getElementById("email").value.trim();
   const phone=document.getElementById("phone").value.trim();
   const pass=document.getElementById("password").value;
   const confirm=document.getElementById("confirmPassword").value;
   if(name.length<3){showError("nameError","Enter at least 3 characters.");ok=false}
   if(!validEmail(email)){showError("emailError","Enter a valid email.");ok=false}
   if(!validPhone(phone)){showError("phoneError","Enter a valid 10-digit mobile number.");ok=false}
   if(pass.length<8){showError("passwordError","Password must contain at least 8 characters.");ok=false}
   if(pass!==confirm){showError("confirmError","Passwords do not match.");ok=false}
   if(ok){document.getElementById("registerMsg").textContent="Registration form validated successfully.";document.getElementById("registerMsg").className="success";reg.reset()}
 });
}

const checkout=document.getElementById("checkoutForm");
if(checkout){
 checkout.addEventListener("submit",function(e){
   e.preventDefault(); clearErrors();
   let ok=true;
   const name=document.getElementById("cname").value.trim();
   const email=document.getElementById("cemail").value.trim();
   const phone=document.getElementById("cphone").value.trim();
   const address=document.getElementById("address").value.trim();
   const city=document.getElementById("city").value.trim();
   const pin=document.getElementById("pin").value.trim();
   if(name.length<3){showError("cnameError","Enter your full name.");ok=false}
   if(!validEmail(email)){showError("cemailError","Enter a valid email.");ok=false}
   if(!validPhone(phone)){showError("cphoneError","Enter a valid 10-digit mobile number.");ok=false}
   if(address.length<10){showError("addressError","Enter a complete address.");ok=false}
   if(city.length<2){showError("cityError","Enter your city.");ok=false}
   if(!validPin(pin)){showError("pinError","Enter a valid 6-digit PIN code.");ok=false}
   if(ok){document.getElementById("checkoutMsg").textContent="Order details validated successfully. Order placed for demonstration.";document.getElementById("checkoutMsg").className="success";checkout.reset();localStorage.removeItem("stylehubCart");renderCart()}
 });
}
