 const orders=[
  {
 id: 1,
    bread: "wheat Bread",
    protein: "chicken",
    toppings: ["pepperoni", "lettuce"],
    instructions: "extra cheese",
    toasted:"yes"
  },
  {
    id: 2,
    bread: "italian Bread",
    protein: "ham",
    toppings: ["Black Olives", "onion"],
    instructions: "half green peppers",
    toasted:"no"
  }
]
const getNewOrderId = () => {
  
  //let highestOrderId = orders.sort((a, b) => b.id - a.id)[0].id
  let highestOrderId = parseInt(orders.reduce((a, b) => (a.id > b.id ? a : b)).id);
  return highestOrderId + 1
}
export const getOrders = () => {
  // Add logic here to return a copy of your orders
  return orders.map(order => ({...order}))
}
export const addNewOrder = (order) => {
  console.log("new order", order)
  const newId = getNewOrderId()
  order.id = newId
  orders.push(order)
  console.log(orders)
  // // need to add logic
  document.dispatchEvent(new CustomEvent("stateChanged"))
}