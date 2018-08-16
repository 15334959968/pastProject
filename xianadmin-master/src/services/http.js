/**
 * 对象转urk 参数
 * @type {function(*=)}
 */
let ObjectTolParam=((obj)=>{
    let url ='?';
    (function (obj){
        let parray = Object.entries(obj);
        parray.forEach(item=>{
            if(Object.prototype.toString.call(item[1]) =='[object Object]')
            {
                arguments.callee(item[1]);
            }else{
                url += item.join('=')+'&'
            }
        })

    })(obj)
    return url.substring(0,url.length-1);
})
/**
 * get请求数据
 * @param url url地址
 * @param callback 回调函数
 */
export const get =async (url,params={})=>{
    url+=ObjectTolParam(params);
    const response = await fetch(url);
    let content = await response.json();
    return new Promise((resolve, reject) => {
        resolve(content);
    })
}
/**
 * post请求数据
 * @param url url地址
 * @param callback 回调函数
 */
export  const  post=async (url,params={})=>{
    // let fd = new FormData();
    // fd.append('username', 'admin');
    // fd.append('password', '1234567');
    // fd.append('identifyCode', '1234567');
    let fetchOptions = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:`data=${JSON.stringify(params)}`
    };
    const response = await fetch(url,fetchOptions);
    let content = await response.json();
    return new Promise((resolve, reject) => {
        resolve(content);
    })
}

//请求状态码 0:请求成功  1:参数错误 2:接口失效
const httquestcode=[0,1,2];

export default {
    get,
    post,
    httquestcode
};
