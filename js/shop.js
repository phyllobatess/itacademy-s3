// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  let selectedProduct;
  // 1. Loop for to the array products to get the item to add to cart
  for (let i = 0; i < products.length; i++) {
    if (products[i].id == id) {
      //Cuando el id que recibo como pam coincida con el id que busca el bucle, encontramos el product.
      selectedProduct = products[i];
    }
  }
  // 2. Add found product to the cartList array
  cartList.push(selectedProduct);
  generateCart();
}

// Exercise 2
function cleanCart() {
  // Dos formas de vaciar un array:
  cartList.length = 0
  cart = [];
  printCart();
}

// Exercise 3
function calculateTotal() {
  total = 0;
  // Calculate total price of the cart using the "cartList" array. 
  //No tiene en cuenta los descuentos:
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].subtotal;
  }
  return total;
}

// Exercise 4
function generateCart() {
  // Using the "cartlist" array that contains all the items in the shopping cart,
  // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        const index = cart.findIndex(e => e.name === cartList[i].name)//utilizamos método findIndex que nos devuelve el primer índice en que encuentra el elemento o "-1" si no lo encuentra, loopeará dentro del array cart comparando las key "name" de cart y cartList.
        if (index == -1) { //Si NO está en el arr CART, entonces le hacemos el push a CART con las nuevas propiedades del objeto:
          cart.push({
            name:cartList[i].name,
            price:cartList[i].price,
            type:cartList[i].type,
            quantity:1,
            subtotal:cartList[i].price,
            subtotalWithDiscount:undefined,
          });
        }
        else{//En caso de que el elemento ya esté dentro del array CART, le añadimos +1 QUANTITY y el subtotal actualizado:
            cart[index].quantity++;
            cart[index].subtotal = cart[index].price * cart[index].quantity;
        }   
    }
  cartList.length=0; //Vaciamos el array cartList una vez generamos el arr CART.
  applyPromotionsCart();
}

// Exercise 5
function applyPromotionsCart() {
  // Apply promotions to each item in the array "cart"
  for (let i = 0; i < cart.length; i++) { //Para cada elemento de cart comprobamos las dos condiciones:
    if (cart[i].name == "cooking oil" && cart[i].quantity >= 3) {
      cart[i].price = 10;
      cart[i].subtotal = cart[i].price * cart[i].quantity;
      cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
    }
    else if (cart[i].name == "Instant cupcake mixture" && cart[i].quantity >= 10) {
      cart[i].price = (5 * 2 / 3).toFixed(2);
      cart[i].subtotal = cart[i].price * cart[i].quantity;
      cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;;
    }

  }
  console.log(cart);
}

// Exercise 6
  // Fill the shopping cart modal manipulating the shopping cart dom
function printCart() {

  document.getElementById("cart_list").innerHTML = '';
  let tbody = cart.map(function(c){
    return "<tr>" +
                      "<th scope='row'>"+c.name+"</th>" +
                      "<td>"+c.price+"</td>" +
                      "<td>"+c.quantity+"</td>" +
                      "<td>"+c.subtotal+"</td>" +
                    "</tr>";
    
  })
  document.getElementById("cart_list").innerHTML = tbody.join(" "); 
  document.getElementById("total_price").innerHTML = calculateTotal(); //Mostramos en pantalla el valor del total del carro llamando a la funcion y mostrando el valor que nos retorna.
}

// ** Nivell II **

// Exercise 7
function addToCart(id) {
  // Refactor previous code in order to simplify it
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 8
function removeFromCart(id) {
  // 1. Loop for to the array products to get the item to add to cart
  // 2. Add found product to the cartList array
}

function open_modal() {
  console.log("Open Modal"); 
  printCart();
}
