/**
 * 所有全局过滤器
 * @type {{wxformatDate: function(*, *=)}}
 */
const filters={
     wxformatDate:(date, fmt)=>{
         if(!date){
             return "";
         }
         fmt=fmt||"yyyy-MM-dd h:m";
         if(typeof(date)=='string')date=new Date(date);
         if (/(y+)/.test(fmt)) {
             fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '')
                 .substr(4 - RegExp.$1.length))
         }
         let o = {
             'M+': date.getMonth() + 1,
             'd+': date.getDate(),
             'h+': date.getHours(),
             'm+': date.getMinutes(),
             's+': date.getSeconds()
         }
         let padLeftZero=(str) =>{
             return ('00' + str).substr(str.length)
         }
         for (let k in o) {
             if (new RegExp(`(${k})`).test(fmt)) {
                 let str = o[k] + ''
                 fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
             }
         }

         return fmt
     }
}
export default filters