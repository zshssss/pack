import axios from 'axios'

function fetch(url, method, params, header = {
  "content-type": "application/json",
  "token": ''
}) {
  return new Promise((resolve, reject) => {
    let obj = {
      method: method,
      url: url,
      headers: header
    };

    if (method == 'GET') {
      obj.params = params
    } else {
      obj.data = params
    }

    axios(obj).then((response) => {
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}

export default {
  handleUserLogin(url, params) {
    // params {phone:int,password:string}
    return fetch(url, params)
  },
  handleUserRegister(url, params) {
    // params {phone:int,password:string}
    return fetch(url, params)
  },
  handleAddAdress(url, params) {
    return fetch(url, params)
  },
  fetch: fetch
}
