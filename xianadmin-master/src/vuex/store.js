/**
 * store 状态管理
 */
// 生成 mutations 方法
function generate(name) {
  return function (state, value) {
    state[name] = value || state[name];
  }
}
const options = {
  // 多页面共享数据
  state: {
    onlogin:false,
    message:"测试数据"
  },
  // 操作
  actions: {},

  // 数据变更
  mutations: {},

}

// 为每个 state 字段生成对应的 mutations 方法
Object.keys(options.state).forEach((key) => {
  options.mutations[key] = generate(key);
});

export default options;