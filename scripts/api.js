'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david-mohammad';

  function getItems() {
    return fetch(`${BASE_URL}/items/`);
  }

  function createItem(name) {
    const newItem = JSON.stringify({name:name});   
    return fetch(`${BASE_URL}/items`, {
      method:'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });    
  }

  function updateItem(id, updateData){
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    });
  }
  function deleteItem(id){
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
    });
  }

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };
}());