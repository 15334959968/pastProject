/**
 *  @description 生成检查对象
 *  @param {String} key：关键字
 *  @param {Boolean} required：是否必填，默认 true
 *  @param {Function} type：基本对象构造函数，数据类型，默认 String
 *  @param {Object} children：子数据，仅限于 type 为 Object 或 Array 时
 *  @return {Object} 返回检查的基本对象
 */
export const checkMap = (key, required = true, type = String, children) => {
  if (typeof required !== 'boolean') {
    if (typeof type === 'object') {
      children = type;
    }
    type = required;
    required = true;
  }
  return {
    key,
    required,
    type,
    children
  };
};

/**
 *  @description 数据格式转换
 *  @param {Object} input：被转换对象
 *  @param {Object} dataMap：转换规则
 *  @param {String} inputName：被转换对象名称，用于 console 提示，可为空
 *  @return 返回数据格式转换后的深拷贝对象，若格式不正确，则返回 null
 */
export const reviseData = (input, dataMap, inputName = 'response') => {
  const obj = {};
  const error = [];

  for (const [key, data] of Object.entries(dataMap)) {
    const val = input[data.key];
    if (data.required && val === undefined) {
      error.push(`${key} in ${inputName} is required`);
    } else if (val !== undefined) {
      const type = data.type;
      if (type === Boolean) {
        if (typeof val === 'boolean') {
          obj[key] = val;
        } else {
          error.push(`${key} in ${inputName} must be a boolean`);
        }
      } else if (type === String) {
        if (typeof val === 'string') {
          obj[key] = val;
        } else {
          error.push(`${key} in ${inputName} must be a string`);
        }
      } else if (type === Number) {
        if (typeof val === 'string' && !isNaN(val)) {
          obj[key] = +val;
        } else if (typeof val === 'number' && !isNaN(val)) {
          obj[key] = val;
        } else {
          error.push(`${key} in ${inputName} must be a number`);
        }
      } else if (type === Array) {
        if (Array.isArray(val)) {
          obj[key] = val;
          if (data.children) {
            for (let i = val.length - 1; i >= 0; i--) {
              obj[key][i] = reviseData(obj[key][i], data.children, key);
              if (obj[key][i] === null) {
                obj[key].splice(i, 1);
              }
            }
          }
        } else {
          error.push(`${key} in ${inputName} must be a array`);
        }
      } else if (type === Object) {
        if (typeof val === 'object' && val !== null) {
          obj[key] = val;
          if (data.children) {
            obj[key] = reviseData(val, data.children, key);
            if (obj[key] === null) {
              error.push(`${key} in ${inputName} is a object, but children unqualified`);
            }
          }
        } else {
          error.push(`${key} in ${inputName} must be a object`);
        }
      } else {
        error.push(`${key} in ${inputName} unknown type`);
      }
    }
  }
  if (error.length) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(inputName, error);
    }
    return null;
  }
  return obj;
};

/**
 *  @description 过滤掉无用的数据
 *  @param {object} argObj 拷贝的对象
 *  @param {object} argOption 方法参数配置
 *  @return 返回深拷贝后的数据对象
 */
export const filterUseless = (argObj = {}, filter = [undefined, null, NaN]) => {
  if (typeof argObj !== 'object') {
    return argObj;
  }
  const clone = item => {
    const consainer = Array.isArray(item) ? [] : {};
    for (const [key, value] of Object.entries(item)) {
      if (!filter.includes(value)) {
        const deep = typeof value === 'object' && value !== null;
        consainer[key] = deep ? clone(value) : value;
      }
    }
    return consainer;
  };
  return clone(argObj);
};
