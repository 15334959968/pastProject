import http from '../http';

const getRankList = code => {
  return new Promise((resolve, reject) => {
    http.get('getRankList', { code }).then(data => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
};
const getMemberCategory = code => {
  return new Promise((resolve, reject) => {
    http.get('getMemberCategory', { code }).then(data => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
};
const getActivity = code => {
  return new Promise((resolve, reject) => {
    http.get('getActivity', { code }).then(data => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
};
const getPartyDues = code => {
  return new Promise((resolve, reject) => {
    http.get('getPartyDues', { code }).then(data => {
      resolve(data);
    }).catch(error => {
      reject(error);
    });
  });
};

export default {
  getRankList,
  getMemberCategory,
  getActivity,
  getPartyDues
};
