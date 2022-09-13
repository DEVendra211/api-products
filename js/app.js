document.querySelector(".card")
document.querySelector(".load").style.display="inline";

 let url = "https://fakestoreapi.com/products"

fetch(url).then(i => i.json()).then(i => {
    let res = i
    let data = i
    
       res.forEach(i => {
        
        for (let i in data) {
            
            document.querySelector(".data").innerHTML+=`<div class="col-4 col-t-6 col-p-12"><div class="card"><img src="${res[i].image}"><h2>${res[i].title}</h2>
            <h3>$${res[i].price}</h3><p>${res[i].description}</p></div></div>`;
            
           
            
        }
       });
       document.querySelector(".data").innerHTML+=""
        
document.querySelector(".loader").style.display="none"
    
    console.log(res);
})