// 客户端判断，是否是 PC 端
const ISPC = (() => {
  const userAgent = navigator.userAgent;
  const mobileAgents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  return !mobileAgents.some(item => userAgent.includes(item));
})();

console.log('ISPC', ISPC);

// 移动端横屏选择判断并添加监听
let landscapeScreen = true;
const landscape = () => {
  if (window.orientation) {
    return (window.orientation % 180) !== 0;
  }
  return true;
};
window.addEventListener(
  'onorientation' in window ? 'onorientation' : 'resize',
  () => {
    landscapeScreen = landscape();
  },
  false
);
