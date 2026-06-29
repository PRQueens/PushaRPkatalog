function toggleMenu(){
const m=document.getElementById("mobileMenu");
m.style.display=m.style.display==="block"?"none":"block";
}

document.getElementById("search").addEventListener("input",e=>{
const v=e.target.value.toLowerCase();
document.querySelectorAll(".card,table").forEach(el=>{
el.style.display=el.innerText.toLowerCase().includes(v)?"":"none";
});
});
