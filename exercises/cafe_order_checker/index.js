// I have two registers: one for take-out orders, and the other for 
// the other folks eating inside the cafe. All the customer orders get 
// combined into one list for the kitchen, where they should be handled 
// first-come, first-served.

// Recently, some customers have been complaining that people who placed 
// orders after them are getting their food first. Yikes—that's not good for business!

// To investigate their claims, one afternoon I sat behind the 
// registers with my laptop and recorded:

// The take-out orders as they were entered into the system and given to the kitchen. (takeOutOrders)
// The dine-in orders as they were entered into the system and given to the kitchen. (dineInOrders)
// Each customer order (from either register) as it was finished by the kitchen. (servedOrders)
// Given all three arrays, write a function to check that my service is first-come, 
// first-served. All food should come out in the same order customers requested it.

// We'll represent each customer order as a unique integer.


function isFirstComeFirstServed(takeOutOrders, dineInOrders, servedOrders) {
  var takeOutOrdersIndex = 0;
  var dineInOrdersIndex = 0;
  var takeOutOrdersMaxIndex = takeOutOrders.length - 1;
  var dineInOrdersMaxIndex = dineInOrders.length - 1;

  for (var i = 0; i < servedOrders.length; i++) {
      var order = servedOrders[i];

      // if we still have orders in takeOutOrders
      // and the current order in takeOutOrders is the same
      // as the current order in servedOrders
      if (takeOutOrdersIndex <= takeOutOrdersMaxIndex &&
              order === takeOutOrders[takeOutOrdersIndex]) {
          takeOutOrdersIndex++;

      // if we still have orders in dineInOrders
      // and the current order in dineInOrders is the same
      // as the current order in servedOrders
      } else if (dineInOrdersIndex <= dineInOrdersMaxIndex &&
              order === dineInOrders[dineInOrdersIndex]) {
          dineInOrdersIndex++;

      // if the current order in servedOrders doesn't match the current
      // order in takeOutOrders or dineInOrders, then we're not serving first-come,
      // first-served
      } else {
          return false;
      }
  }

  // check for any extra orders at the end of takeOutOrders or dineInOrders
  if (dineInOrdersIndex != dineInOrders.length ||
         takeOutOrdersIndex != takeOutOrders.length) {
      return false;
  }

  // all orders in servedOrders have been "accounted for"
  // so we're serving first-come, first-served!
  return true;
}

export default isFirstComeFirstServed;