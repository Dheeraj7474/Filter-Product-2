const elec = document.getElementById("elec");
const all_products = document.getElementById("all_products");
const clothing = document.getElementById("clothing");
const hg = document.getElementById("hg");
const i1Input = document.getElementById("i1");
const font = document.getElementById("font");
const topButtons=[elec,all_products,clothing,hg]

const elecP = ["sp","Laptop"]
const clothP = ["shirt","Hoodie"]
const hgp = ["cm","Blender"]
const prods = [elecP,clothP,hgp]
function resetVisibility(i){
    let v=0
    while(v<prods.length){
        console.log(v)
        if(i===prods[v]){
            i.forEach(element=>{
                console.log(element)
                document.getElementById(element).style.visibility='visible';
            })
        }
        else{
            prods[v].forEach(element=>{
                console.log("should be hidden" + element)
                document.getElementById(element).style.visibility='hidden';
            })
        }
        v++;
    }
}
font.addEventListener('click',find);
const hoga=["home","garden"];
function find(){
    const inp = i1Input.value.trim()
    console.log(inp.toLowerCase())
    if(inp.toLowerCase()==="electronics"){
        console.log("hey")
        electro();
    }
    if(inp.toLowerCase()==="clothing"){
        console.log("hey")
        cloth();
    }
    if(hoga.includes(inp) || inp.toLowerCase()==="home"){
        console.log("hey")
        hog();
    }
}
elec.addEventListener('click',electro);
function electro(){
    document.getElementById("i1").value="electronics";
    resetButtons(elec)
    resetVisibility(elecP)
};
all_products.addEventListener('click',()=>{
    resetButtons(all_products);
    const elements = document.querySelectorAll('.icons');
    elements.forEach(element => {
        element.style.visibility = 'visible';
    });
});
clothing.addEventListener('click',cloth)
function cloth(){
    resetButtons(clothing)
    resetVisibility(clothP)
};
hg.addEventListener('click', hog)
function hog(){
    document.getElementById("i1").value="Home & Garden";
    resetButtons(hg)
    resetVisibility(hgp)
};
function resetButtons(i){
    topButtons.forEach(element => {
        if(element==i){
            i.style.border="2px solid red";
        }
        else{
            element.style.border='none'
        }
    });
    return
}