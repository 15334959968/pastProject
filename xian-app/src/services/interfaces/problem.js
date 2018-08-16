import http from '../http';

const getProblemNumber = param => {
  return new Promise((resolve, reject) => {
    http.get('getProblemNumber', param).then(data => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
};

const getProblemList = param => {
  return new Promise((resolve, reject) => {
    http.get('getProblemList', param).then(data => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
};

export default {
  getProblemNumber,
  getProblemList
};
