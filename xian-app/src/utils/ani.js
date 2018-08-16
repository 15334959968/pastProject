import Vel from 'velocity-animate';

/**
 * @description 清除 Vel 动画残留样式，如果原来有样式，还原原来的样式
 * @param {element} el: 动画生肖的 element
 * @param {string} code: 动画名称 code，具体作用不大，但是想不出好的解决方式，所以先传 code 应应急
 */
const rm = ({el, done}) => {
  return () => {
    el.style = '';
    if (done) {
      done();
    }
  };
};

export const ani = {
  // 高度升缩
  slide: {
    be: (el) => {
      el.style.overflow = 'hidden';
      el.style.height = 0;
      el.style.opacity = 1;
    },
    e: (el, done) => {
      el.style.height = 'auto';
      const h = el.offsetHeight;
      el.style.height = 0;
      Vel(el, { height: h }, { duration: 300 });
      Vel(el, { opacity: 1 }, { duration: 0, complete: rm({ el, done }) });
    },
    l: (el, done) => {
      Vel(el, { height: 0 }, { duration: 200 });
      Vel(el, { opacity: 0 }, { duration: 0, complete: done });
    }
  }
};

// 给未定义的钩子默认赋值一个简单函数，防止调用未定义钩子时报错
(() => {
  /**
   * {
   *  be: before-enter,
   *  e:  enter,
   *  ae: after-enter,
   *  ec: enter-cancelled,
   *  bl: before-leave,
   *  l:  leave,
   *  al: after-leave,
   *  lc: leave-cancelled
   * }
   */
  const aniName = ['be', 'e', 'ae', 'ec', 'bl', 'l', 'al', 'cl'];
  Object.keys(ani).forEach(key => {
    aniName.forEach(item => {
      if (ani[key][item] === undefined) {
        ani[key][item] = () => false;
      }
    });
  });
})();

export default ani;
