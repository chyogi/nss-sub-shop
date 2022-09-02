// main.js
import {getOrders, addNewOrder} from "./orders.js";

document.getElementById("app").innerHTML = `
<h1>Yogi's Sub Shop</h1>
<div>
  <h3>Please make your Sub</h3>
  <div class="subForm">
    <div class="bread">
      <p>Pick your Bread</p>
      <label for="italianbread">Italianbread</label>
      <input id="italianBread" name="bread" type="radio" value="italian" />
      <label for="wheatBread">wheatBread</label>
      <input id="wheatBread" name="bread" type="radio" value="wheatBread" />
      <label for="herbBread">HerbBread</label>
      <input id="herbBread" name="bread" type="radio" value="herbbread" />
      </div>
      <div class="proteins">
        <p>Pick your protein(Select all that apply)</p>
        <ul>
          <li>
            <input id="cheese" name="protein" type="radio" value="cheese" />
            <label for="cheese">cheese</label>
          </li>
          <li>
            <input id="chicken" name="protein" type="radio" value="chicken" />
            <label for="chicken">chicken</label>
          </li>
          <li>
            <input id="ham" name="protein" type="radio" value="ham" />
            <label for="ham">ham</label>
          </li>
          <li>
            <input id="bacon" name="protein" type="radio" value="bacon" />
            <label for="bacon">bacon</label>
          </li>
          </ul>

          </div>
          <div class= "toppings">
          <p>Pick your topping(select all that apply)</p>
          
          <ul>
          <li>
          <input id="Onions" name="toppings" type="checkbox" value="Onions" />
            <label for="Onions">Onions</label>
            </li>
            <li>
            <input id="lettuce" name="toppings" type="checkbox" value="lettuce" />
            <label for="lettuce">Lettuce</label>
            </li>
            <li>
            <input id="blackOlives" name="toppings" type="checkbox" value="black olives" />
            <label for="blackOlives">Black Olives</label>
            </li>
          
          
          </div>
          
            
          
        </ul>
    </div>
    <div class="extras">
      <label for="specialInstructions">Notes/Special Instructions</label>
      <div>
        <textarea id="specialInstructions"></textArea>
      </div>
    </div>
    <div>
      <button id="submitOrder">Order sub</button>
    </div>
  </div>
  <h3>Orders</h3>
  <div id="orders"></div>
</div>
`;

const displayOrders = () => {
  const orders = getOrders();
  //console.log(orders);
  console.log(orders.sort((a, b) => b.id - a.id));
   console.log(orders);
  // Add logic here to put the orders on the DOM
  let html = "";
  for (let order of orders) {
    html += `<div>
      <h3>Order #${order.id}</h3>
      <p>bread: ${order.bread}</p>
      <p>protein: ${order.protein}</p>
      <p>toppings: ${order.toppings.join(", ")}</p>
      <p>Special Instructions: ${order.instructions}</p>
    </div>`;
  }
  document.getElementById("orders").innerHTML = html;
};

displayOrders();


document.addEventListener("click", (e) => {
  if (e.target.id === "submitOrder") {
    const breadInput = document.querySelector(
      "input[name=bread]:checked"
    )?.value;
    const toppingsElements = document.querySelectorAll(
      "input[name=toppings]:checked"
    );
    const toppingsArray = [];
    toppingsElements.forEach((toppingElement) => {
      console.log(toppingElement.value);
      toppingsArray.push(toppingElement.value);
    });
    const instructions = document.getElementById("specialInstructions")?.value;
    console.log(instructions);

    const newOrder = {
      bread: breadInput,
      toppings: toppingsArray,
      instructions: instructions
    }
    addNewOrder(newOrder)
  }
});

document.addEventListener("stateChanged", (e) => {
  displayOrders();
})