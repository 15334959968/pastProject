const baseURL = 'https://www.easy-mock.com/mock/5b2f66b30e946a3379e72cf2/xian'; // 接口地址前缀

const SUCCESS_KEYS = [0]; // 成功状态码
const MAINTAIN_KEYS = [3000]; // 维护状态码
const UNAUTHORIZE_KEYS = [4000]; // 无权限状态码

const http = (url, init) => {
  const httpReg = /^^http/;
  const fullUrl = httpReg.test(url) ? url : `${baseURL}/${url}`;

  return new Promise(async (resolve, reject) => {
    fetch(fullUrl, init).then(response => response.json()).then(result => {
      if (SUCCESS_KEYS.includes(result.code)) {
        resolve(result.data, result);
      } else if (MAINTAIN_KEYS.includes(result.code)) {
        reject(result);
      } else if (UNAUTHORIZE_KEYS.includes(result.code)) {
        reject(result);
      } else {
        console.log('%cunkonwn response code：%d', 'color: #ab00ff', result.code);
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
  const formData = new FormData();
  for (const [key, value] of Object.entries(init)) {
    formData.append(key, value);
  }
  const option = {
    method: 'Post',
    body: formData
  };
  return http(url, option);
};

export default {
  get,
  post
};
