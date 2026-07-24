
    const products = [
      {
        id:1,
        name: "Wireless Headphones",
        price: 2499,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop"
      },
      {
        id:2,
        name: "Smart Watch",
        price: 5999,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop"
      },
      {
            id:3,
        name: "Running Shoes",
        price: 3299,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop"
      },
      {
            id:4,
        name: "Leather Backpack",
        price: 1899,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop"
      },
      {
            id:5,
        name: "Bluetooth Speaker",
        price: 1799,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop"
      },
      {
            id:6,
        name: "Sunglasses",
        price: 899,
        quantity: 2,
        image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&h=300&fit=crop"
      },
      {
            id:7,
        name: "Coffee Mug",
        price: 349,
        quantity: 3,
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=300&h=300&fit=crop"
      },
      {
        id:8,
        name: "Denim Jacket",
        price: 2999,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=300&fit=crop"
      },
      {
        id:9,
        name: "Yoga Mat",
        price: 999,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=300&h=300&fit=crop"
      },
      {
        id:10,
        name: "Gaming Mouse",
        price: 1499,
        quantity: 1,
        image: "https://images.pexels.com/photos/29259392/pexels-photo-29259392.jpeg"
      }
      
 
    ];

let localCartItem = JSON.parse(localStorage.getItem("cartData"))|| [];


async function productShow(){


  const productList = document.getElementById("product-list")

    productList.innerHTML = "";

      products.forEach((p)=>{

      productList.innerHTML += `
      
      <div class = "col-md-6 w-25 h-100">

      <div class = "card h-25 shadow">
      
      <img src="${p.image}" class = "card-img-top" height="350">

      <div class ="card-body text-center">
      
      <h4>${p.name}</h4>

      <h4>₹${(p.price / 100).toFixed(2)}</h4>

      <button class = "btn btn-success " onclick="addCart(${p.id})">Add to Cart</button>
      <button class="btn btn-warning" onclick = "UpdateModalBtn(${p.id})">Edit</button>

      <button class="btn btn-danger" onclick = "deleteProduct(${p.id})">Remove</button>
    
      </div>
      
      </div>
      </div>

      `
    })



}

productShow();



function addCart(id) {

  let product = localCartItem.find((e) => e.id == id);

  if (product) {

    product.qty++;

  } else {

    product = products.find((e) => e.id == id);

    if (!product) {
      return alert("Product not found");
    }

    localCartItem.push({
      ...product,
      qty: 1
    });
  }

  update();

  alert("Product added successfully");
}

  const update = () =>{

 localStorage.setItem("cartData", JSON.stringify(localCartItem)); 
    console.log(localStorage.getItem("cartData"))
 
  }


  function showCartModel(){


    let modal = new bootstrap.Modal(document.getElementById("cartmodal"))

    modal.show();
   
    
    updataData();
    total();
    
  }

  function updataData(){


    try{

      let table = document.getElementById("carttable");


      table.innerHTML = "";

      localCartItem.forEach((p)=>{

        table.innerHTML += `
        
        
        <tr>
        
        <td>${p.id}</td>
        <td><img src="${p.image}" class = "img-fluid" height="35px" width="35px"></td>
        
        <td>${p.name}</td>

        <td>${(p.price * p.qty)}</td>
        <td>

        <div class ="d-flex gap-2">
        <button class = "btn btn-danger" onclick="decrease(${p.id})"> - </button>
        
        ${p.qty}
        <button class="btn btn-success" onclick="increase(${p.id})">+</button>
        </div>
    
       
        </td>

        <td>

        <button class = "btn btn-danger" onclick="remove(${p.id})">remove</button>
        
        </td>
        
     
      

        </div>
        </td>
        </tr>

        `
      })
    }catch(err){
      console.log(err);
    }
  }


function increase(id){

  
  const products = localCartItem.find((p)=>p.id===id);
  try{


    if(products){

      products.qty++;
    }
    update();
    updataData();
total();

}catch(error){
  console.log(error);
}


}


function decrease(id){

  const product  = localCartItem.find((p)=>p.id===id);

  try{

    if(product && product.qty > 1){

      product.qty--;
    }

    else{

      localCartItem.splice(product,1);
    }

    update();

    updataData();

    total();

  }catch(error){

    console.log(error);
  }

}


function remove(id){

  localCartItem = localCartItem.filter((p)=>p.id!==id);


  update();
  updataData();
  total();
  
}


function total(id){

  const total = document.getElementById("total");

  total.innerHTML = "";

  const totalAmount = localCartItem.reduce((a,c)=>{

    return (a+=c.price  *c.qty)
  },0)

  console.log(totalAmount);

  total.innerHTML +=`<h5>₹${(totalAmount / 100).toFixed(2)}</h5>`;

}



function checkout(){


  if(localCartItem.length === 0){

  return  alert("Your cart is empty");

    
  }

    alert("order successfully");

localCartItem = [];

updataData();
update();
total();

}



function productAdded(){

  const addProduct = document.getElementById("formModal")

  let modal = new bootstrap.Modal(addProduct)

  modal.show();

}


document.getElementById("formModal").addEventListener("submit", (e) => {

    e.preventDefault();

    const name = document.getElementById("productName").value.trim();
    const price = document.getElementById("productPrice").value.trim();
    const img = document.getElementById("productImage").value.trim();


    if(!name || !price || !img){

      alert("Product detail required")
    }


    const newProduct = {
    id: Date.now().toString(),
    name: name,
    price: Number(price) * 100,
    image: img
};

    products.push({...newProduct});

    console.log("all Product ",products);

    alert("product added successfully");

    productShow();
  
});

function deleteProduct(id) {

  const index = products.findIndex((p) => p.id == id);

  if (index !== -1) {

    products.splice(index, 1);

    productShow();


  }
  alert("Product Deleted Successfully");

}


function UpdateModalBtn(id){

 try{

  const updateCart = document.getElementById("UpdateCartModal")

  const modal = new bootstrap.Modal(updateCart)

  modal.show();


 const product = products.find((p) => p.id === id);

if (!product) {
  return alert("Product not found");
}

  let index = products.findIndex((p)=>p.id === id);

  if(index === -1){
    return alert("product not found");
  }

 document.getElementById("updataProductName").value = product.name;
  document.getElementById("updataProductPrice").value =product.price / 100;
  document.getElementById("updataProductImage").value= product.image;


const form = document.getElementById("UpdateModal");

form.onsubmit=function(e){
  e.preventDefault();

  let name =  document.getElementById("updataProductName").value;

  let price = document.getElementById("updataProductPrice").value;

  let img = document.getElementById("updataProductImage").value;
products[index] = {
  ...products[index],
  name: name,
  price: Number(price) * 100,
  image: img
};    

  productShow();
  modal.hide();

  

  alert("Product Updated Successfully");


}

productShow();

 }catch(error){

  console.log(error)
 }

}