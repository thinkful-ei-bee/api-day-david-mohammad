'use strict';
/* global shoppingList, store, Item, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  
  api.getItems()
    .then(res => res.json())
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    });

});

api.getItems()
  .then(res => res.json())
  .then((items) => {
    const item = items[0];
    return api.updateItem(item.id, { name: 'foobar', checked: true, height: 5 });
  })
  .then(res => res.json())
  .then(() => console.log('updated!'));


