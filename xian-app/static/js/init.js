// 客户端判断，是否是 PC 端
const isPc = () => {
  const userAgent = navigator.userAgent;
  const mobileAgents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
  return !mobileAgents.some(item => userAgent.includes(item));
};

// 横屏判断
const isLandscape = () => {
  if (window.orientation) {
    return (window.orientation % 180) !== 0;
  }
  return true;
};

const machineClass = () => {
  const classList = document.body.classList;
  const machine = ['pc', 'mobile'];
  const screenState = ['landscape', 'portrait'];
  classList.remove(machine[0], machine[1], screenState[0], screenState[1]);
  classList.add(machine[isPc() ? 0 : 1]);
  classList.add(screenState[isLandscape() ? 0 : 1]);
};
machineClass();

// resize 添加设备、屏幕状态判断
window.addEventListener('resize', machineClass, false);

// 定义一个全局的 $t 变量保存 THREE 实例，方便多处调用
let $t = {};
// 定义一个全局的控制器，开发环境使用，生产环境用不到，显示点击的点坐标或 mesh 名称等
const threeConfig = {
  show: false,
  showMouseDownPoint: false,
  showMouseDownNames: false
};
