'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david-mohammad';

  function getItems() {
    return fetch(`${BASE_URL}/items/`);
  }

  function createItem(name) {
    const newItem = JSON.stringify({name:name}); 
    console.log(newItem);  
    return fetch(`${BASE_URL}/items`, {
      method:'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });
  }
  return {
    getItems,
    createItem
  };
}());