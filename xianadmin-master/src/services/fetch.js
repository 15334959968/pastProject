const baseURL = 'http://80.169.82.28:58080/'; // 接口地址前缀
// 'http://180.169.82.28:58080'
// 'http://192.168.1.129:58080'

const http = (url, init) => {
  const httpReg = /^^http/;
  const fullUrl = httpReg.test(url) ? url : `${baseURL}${url}`;

  return new Promise(async (resolve, reject) => {
    fetch(fullUrl, init).then(response => response.json()).then(result => {
      if (result.isSuccess) {
        resolve(result.data, result);
      } else {
        reject(result);
      }
    }).catch(error => {
      console.log('%c%s error', 'color:red', url, error.toString());
      reject(error);
    });
  });
};

const get = (url, init) => {
  if (init) {
    const searchList = Object.entries(init).map(([key, value]) => `${key}=${value}`);
    url += `?${searchList.join('&')}`;
  }
  return http(url, { method: 'Get' });
};

const post = (url, init = {}) => {
  const option = { method: 'Post' };
  const formData = new FormData();
  for (const [key, value] of Object.entries(init)) {
    formData.append(key, value);
  }
  if (init) {
    option.body = formData;
  }
  return http(url, option);
};

export default {
  get,
  post
};
