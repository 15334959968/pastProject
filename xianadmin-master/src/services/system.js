import http from './fetch';

const system = {
  getLevel (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/level/paging.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  getLevelView (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/level/view.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  saveLevel (param) {
    return new Promise((resolve, reject) => {
      http.post(`/boss/level/save.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  delLevel (param) {
    return new Promise((resolve, reject) => {
      http.post(`/boss/level/delete.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  getProject (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/project/paging.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  getProjectView (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/project/view.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  saveProject (param) {
    return new Promise((resolve, reject) => {
      http.post(`/boss/project/save.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  delProject (param) {
    return new Promise((resolve, reject) => {
      http.post(`/boss/project/delete.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  getSpecialty (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/specialty/paging.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  getSpecialtyView (param) {
    return new Promise((resolve, reject) => {
      http.get(`/boss/specialty/view.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  saveSpecialty (param) {
    return new Promise((resolve, reject) => {
      http.post(`/boss/specialty/save.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
  delSpecialty (param) {
    return new Promise((resolve, reject) => {
      http.post(`/boss/specialty/delete.html`, param).then(data => {
        resolve(data);
      }).catch(error => {
        reject(error);
      });
    });
  },
};

export default system;
