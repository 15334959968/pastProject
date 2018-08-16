const baseURL = 'https://www.easy-mock.com/mock/5b2b636375a11308f6acca8d/example'; // 接口地址前缀

const SUCCESS_KEYS = [0]; // 成功状态码
const MAINTAIN_KEYS = [3000]; // 维护状态码
const UNAUTHORIZE_KEYS = [4000]; // 无权限状态码

const http = (url, init) => {
  const httpReg = /^http/;
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
  return http(url, Object.assign({ method: 'Get' }, { body: init }));
};

const post = (url, init) => {
  return http(url, Object.assign({ method: 'Post' }, init));
};

export default {
  get,
  post
};
