const BASE_URL= '/api/threads';

export function getAll() {
    return fetch(BASE_URL)
    .then(res => res.json());
  }
  
  export function create(thread) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(thread)
    }).then(res => res.json());
  }
  
  export function update(thread) {
    return fetch(`${BASE_URL}/${thread._id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(thread)
    }).then(res => res.json());
  }
  
  export function deleteOne(id) {
    return fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    }).then(res => res.json());
  }