import http from '../http';

const login = param => {
  return new Promise((resolve, reject) => {
    http.post('login', param).then(data => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
};

export default {
  login
};
