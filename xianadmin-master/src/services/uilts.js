


/**
 *  @description 数据深拷贝
 *  @param {object} argObj 拷贝的对象
 *  @param {object} argOption 方法参数配置
 *  @return 返回深拷贝后的数据对象
 */
export let copyObj = (argObj = {}, argOption = {}) => {
    if (typeof argObj !== 'object') {
        return argObj;
    }
    let filter = argOption.filter || [undefined, null, NaN];
    if (Array.isArray(argOption)) {
        filter = argOption;
    } else if (!Array.isArray(filter)) {
        filter = [];
    }
    let clone = objItem => {
        let obj = Array.isArray(objItem) ? [] : {};
        Object.keys(objItem).forEach(key => {
            if (!filter.includes(objItem[key])) {
                if (typeof objItem[key] === 'object' && objItem[key] !== null) {
                    obj[key] = clone(objItem[key]);
                } else {
                    obj[key] = objItem[key];
                }
            }
        });
        return obj;
    };
    return clone(argObj);
};

export default {

};
