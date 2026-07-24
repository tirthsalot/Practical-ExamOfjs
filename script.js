const products = [

    {
        id: 1,
        name: "Tent",
        price: 15000,
        image: "https://images.pexels.com/photos/2526025/pexels-photo-2526025.jpeg"
    },

    {
        id: 2,
        name: "Camera",
        price: 5999,
        image: "https://images.pexels.com/photos/3773770/pexels-photo-3773770.jpeg"
    },

    {
        id: 3,
        name: "Watch",
        price: 3299,
        image: "https://images.pexels.com/photos/1697570/pexels-photo-1697570.jpeg"
    },

    {
        id: 4,
        name: "Trekking Bag",
        price: 1899,
        image: "https://images.pexels.com/photos/1294731/pexels-photo-1294731.jpeg"
    },

    {
        id: 5,
        name: "Home Theater",
        price: 50000,
        image: "https://images.pexels.com/photos/13348768/pexels-photo-13348768.jpeg"
    },

    {
        id: 6,
        name: "Speaker",
        price: 89999,
        image: "https://images.pexels.com/photos/32300575/pexels-photo-32300575.jpeg"
    },

    {
        id: 7,
        name: "Thickshake Mug",
        price: 349,
        image: "https://images.pexels.com/photos/8753643/pexels-photo-8753643.jpeg"
    },

    {
        id: 8,
        name: "Lamp",
        price: 2999,
        image: "https://images.pexels.com/photos/14680170/pexels-photo-14680170.jpeg"
    },

    {
        id: 9,
        name: "Perfume",
        price: 1999,
        image: "https://www.instyle.com/thmb/xtXsltTosxSgYmfH6fPU6yr5Lsc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ins-product-yves-saint-laurent-libre-eau-de-parfum-intense-jkim-0341-6899239f67c142f0aeeaca8db7ad5dd0.jpeg"
    },

    {
        id: 10,
        name: "Gaming Mouse",
        price: 1499,
        image: "https://images.pexels.com/photos/29259392/pexels-photo-29259392.jpeg"
    }

];


let localCartItem =
    JSON.parse(localStorage.getItem("cartData")) || [];




function productShow() {

    const productList =
        document.getElementById("product-list");

    productList.innerHTML = "";


    products.forEach((p) => {

        productList.innerHTML += `

        <div class="col-sm-6 col-lg-3 mb-4">

            <div class="card h-100 shadow">

                <img 
                    src="${p.image}" 
                    class="card-img-top product-img"
                    alt="${p.name}"
                >

                <div class="card-body text-center">

                    <h4>
                        ${p.name}
                    </h4>

                    <h5>
                        ₹${p.price.toFixed(2)}
                    </h5>

                    <button 
                        class="btn btn-success"
                        onclick="addCart(${p.id})">

                        Add to Cart

                    </button>

                    <button 
                        class="btn btn-warning"
                        onclick="UpdateModalBtn(${p.id})">

                        Edit

                    </button>

                    <button 
                        class="btn btn-danger"
                        onclick="deleteProduct(${p.id})">

                        Remove

                    </button>

                </div>

            </div>

        </div>

        `;

    });

}


productShow();




function addCart(id) {

    let product =
        localCartItem.find((p) => p.id == id);


    if (product) {

        product.qty++;

    } else {

        const newProduct =
            products.find((p) => p.id == id);


        if (!newProduct) {

            alert("Product not found");

            return;

        }


        localCartItem.push({

            ...newProduct,

            qty: 1

        });

    }


    update();

    alert("Product added successfully");

}




function update() {

    localStorage.setItem(
        "cartData",
        JSON.stringify(localCartItem)
    );

}




function showCartModel() {

    const cartModal =
        new bootstrap.Modal(
            document.getElementById("cartmodal")
        );


    cartModal.show();


    updataData();

    total();

}




function updataData() {

    const table =
        document.getElementById("carttable");


    table.innerHTML = "";


    if (localCartItem.length === 0) {

        table.innerHTML = `

            <tr>

                <td colspan="6" class="text-center">

                    Cart is Empty

                </td>

            </tr>

        `;

        return;

    }


    localCartItem.forEach((p) => {

        table.innerHTML += `

        <tr>

            <td>
                ${p.id}
            </td>

            <td>

                <img 
                    src="${p.image}"
                    class="cart-img"
                    alt="${p.name}"
                >

            </td>

            <td>
                ${p.name}
            </td>

            <td>
                ₹${(p.price * p.qty).toFixed(2)}
            </td>

            <td>

                <div class="d-flex align-items-center gap-2">

                    <button 
                        class="btn btn-danger btn-sm"
                        onclick="decrease(${p.id})">

                        -

                    </button>


                    <span>
                        ${p.qty}
                    </span>


                    <button 
                        class="btn btn-success btn-sm"
                        onclick="increase(${p.id})">

                        +

                    </button>

                </div>

            </td>

            <td>

                <button 
                    class="btn btn-danger btn-sm"
                    onclick="remove(${p.id})">

                    Remove

                </button>

            </td>

        </tr>

        `;

    });

}




function increase(id) {

    const product =
        localCartItem.find((p) => p.id == id);


    if (product) {

        product.qty++;

    }


    update();

    updataData();

    total();

}




function decrease(id) {

    const product =
        localCartItem.find((p) => p.id == id);


    if (!product) {

        return;

    }


    if (product.qty > 1) {

        product.qty--;

    } else {

        localCartItem =
            localCartItem.filter(
                (p) => p.id != id
            );

    }


    update();

    updataData();

    total();

}




function remove(id) {

    localCartItem =
        localCartItem.filter(
            (p) => p.id != id
        );


    update();

    updataData();

    total();

}




function total() {

    const total =
        document.getElementById("total");


    const totalAmount =
        localCartItem.reduce(

            (sum, product) => {

                return sum +
                    product.price *
                    product.qty;

            },

            0

        );


    total.innerHTML =
        `₹${totalAmount.toFixed(2)}`;

}




function checkout() {

    if (localCartItem.length === 0) {

        alert("Your cart is empty");

        return;

    }


    alert("Order successfully placed");


    localCartItem = [];


    update();

    updataData();

    total();

}




function productAdded() {

    const addProduct =
        document.getElementById("formModal");


    const modal =
        new bootstrap.Modal(addProduct);


    modal.show();

}




document
    .getElementById("FromTable")
    .addEventListener("submit", function (e) {

        e.preventDefault();


        const name =
            document
                .getElementById("productName")
                .value
                .trim();


        const price =
            Number(
                document
                    .getElementById("productPrice")
                    .value
            );


        const img =
            document
                .getElementById("productImage")
                .value
                .trim();


        if (!name || !price || !img) {

            alert("Product detail required");

            return;

        }


        const newProduct = {

            id: Date.now(),

            name: name,

            price: price,

            image: img

        };


        products.push(newProduct);


        productShow();


        this.reset();


        const modal =
            bootstrap.Modal.getInstance(
                document.getElementById("formModal")
            );


        modal.hide();


        alert("Product added successfully");

    });




function deleteProduct(id) {

    const index =
        products.findIndex(
            (p) => p.id == id
        );


    if (index !== -1) {

        products.splice(index, 1);

        productShow();

        alert("Product deleted successfully");

    }

}




function UpdateModalBtn(id) {

    const product =
        products.find(
            (p) => p.id == id
        );


    if (!product) {

        alert("Product not found");

        return;

    }


    document
        .getElementById("updataProductName")
        .value = product.name;


    document
        .getElementById("updataProductPrice")
        .value = product.price;


    document
        .getElementById("updataProductImage")
        .value = product.image;


    const updateModal =
        new bootstrap.Modal(
            document.getElementById("UpdateCartModal")
        );


    updateModal.show();


    document
        .getElementById("UpdateModal")
        .onsubmit = function (e) {

            e.preventDefault();


            product.name =
                document
                    .getElementById("updataProductName")
                    .value
                    .trim();


            product.price =
                Number(
                    document
                        .getElementById("updataProductPrice")
                        .value
                );


            product.image =
                document
                    .getElementById("updataProductImage")
                    .value
                    .trim();


            productShow();


            updateModal.hide();


            alert("Product updated successfully");

        };

}
