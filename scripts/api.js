'use strict';

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/david-mohammad';

  function callApi(...args) {
    let error;
    return fetch(...args)
      .then (res => {
        if (!res.ok) {
          error = {code: res.status};
        }

        if (!res.headers.get('content-type').includes('json')) {
          error.message = res.statusText;
          return Promise.reject(error);
        }

        return res.json();
      })
      .then(data => {
        if (error) {
          error.message = data.message;
          return Promise.reject(error);
        }

        return data;
      });
  }

  function getItems() {
    return callApi(`${BASE_URL}/items/`);
  }

  function createItem(name) {
    const newItem = JSON.stringify({name:name});   
    return callApi(`${BASE_URL}/items`, {
      method:'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: newItem
    });    
  }

  function updateItem(id, updateData){
    return callApi(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(updateData)
    });
  }
  function deleteItem(id){
    return callApi(`${BASE_URL}/items/${id}`, {
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