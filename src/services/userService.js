import tokenService from '../services/tokenService';
const BASE_URL = '/api/auth/';

function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => {
    console.log(res, '<-- response object')
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    console.log(json, '<-- the error')
    throw new Error(`${json.err || json.message}`)
  })
  .then(({ token }) => {
    tokenService.setToken(token);
  });
}

function getUser() {
  return tokenService.getUserFromToken();
}

export function getUserFromId(id) {
  return fetch(`${BASE_URL}user/${id}`)
  .then(res => res.json());
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    return res.json();
  })
  .then(json => {
    if(json.token) return json;
    console.log(json, '<-- the error')
    throw new Error(`${json.err || json.message}`)
  })
  .then(({token}) => tokenService.setToken(token));
}

function updateUser(user) {
  return fetch(BASE_URL + 'update', {
    method:'PUT',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(user)
  })
  .then(res => res.json())
}

let functions = {
  signup,
  getUser,
  logout,
  login,
  getUserFromId,
  updateUser,
};

export default functions