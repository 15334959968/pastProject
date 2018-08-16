import http from './fetch';


const filterEmpty = (obj, filter = [undefined, '', null]) => {
  const option = {};
  for (const [key, value] of Object.entries(obj)) {
    if (!filter.includes(value)) {
      option[key] = value;
    }
  }
  return option;
};

const problem = {
  getProblemCategory (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/question/category/paging.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  getProblemStatus (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/question/status/paging.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  getProblemList (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/question/paging.html`, filterEmpty(param)).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  saveProblem (param) {
    return new Promise((resolve, reject) => {
      http.post(`/boss/question/save.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  viewProblem (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/question/view.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  deleteProblem (param) {
    return new Promise((resolve, reject) => {
      http.post(`/boss/question/delete.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  }
};

export default problem;
