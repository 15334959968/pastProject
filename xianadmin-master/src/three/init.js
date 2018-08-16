/**
 //orbit.enableZoom = false;
 //如果使用animate方法时，将此函数删除
 //controls.addEventListener( 'change', render );
 //使动画循环使用时阻尼或自转意思是否有愦性
 controls.enableDamping = false;
 //动态阻尼系数就是鼠标拖拽旋转灵敢虔
 controls.dampingFactor = 1;
 //是否可以缩放
 controls.enableZoom = true;
 //是否自动旋转
 r controls.autoRotate = true;
 //设M相机距离原点的最近距离
 controls.minDistance = 50;
 //设M相机距离原点的最远距离
 controls.maxDistance = 8000;
 //是否幵启右键拖拽
 controls.enablePan = false;
 controls = new THREE.TrackballControls( camera );./看来是要给controls控制器传递一个当前使用的相机camera参数
 controls. rotateSpeed 1.0; //按住鼠标左键后拖动i看时的旋转速虔
 controls. zoomSpeed 1.2; //用滚轮调整大小(远近)时候的速虔
 controls. panSpeed 0.8; //按住鼠标右键后的平移速虔
 controls.noZoom false; //如果设M为true,则禁用鼠标滚轮调整大小(远近)的功能
 controls.noPan = truej; / . ' ’'
 controls. minDistance 200; //设贾滚轮能滚到的最近距离
 controls. maxDistance _ 10000; //设贾滚轮能滚到的最远距离
 controls. staticMoving true; //试了一下，如果设贾为false,则移动速虔贼鴻儿快，嗖的一下就不见了，具体是干啥玩意的没摸清
 controls.dynamicDampingFactor 1; //动态―尼，給？我也不知道是啥,翻译过来就是
 controls.keys [ 65. 83. 68 ]:
 * @type {boolean}
 */
import { config } from './config';
import {intersectClick} from './load';

/**
 * 渲染场景元素对象
 * @type {{render(): void, rendert(): void}}
 */
export const ThreereaderUilt={
    three () {
        three.renderer.render(three.scene, three.camera);
        TWEEN.update();
        config.config.threerun=requestAnimationFrame(ThreereaderUilt.three);
    },
    threet () {
        threet.renderer.render(threet.scene, threet.camera);
        TWEEN.update();
        config.configt.threerun=requestAnimationFrame(ThreereaderUilt.threet);
    }
}
/**
 * three环境初始化
 */
const init = (() => {
  let loaded = false;
  const getElementScenepotion=((event)=>{
    event=event['event']||event;
    let dom = three.renderer.domElement;
    let left=three.renderer.domElement.getBoundingClientRect().left||0;
    let top=three.renderer.domElement.getBoundingClientRect().top||0;
    let mouse = {
      x: ((event.clientX-left) / dom.clientWidth) * 2 - 1,
      y: -((event.clientY-top) / dom.clientHeight) * 2 + 1
    };
    three.raycaster.setFromCamera(mouse, three.camera);
    let intersects = three.raycaster.intersectObjects(three.scene.children, true);
    return intersects.length>0?intersects[0]:null;
  })
  const initFunc = {
    initScene () {
      const scene = new THREE.Scene();
      return scene;
    },
    initRenderer (rendererconfig) {
      const container = document.getElementById(rendererconfig.demoId);
      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        shadowMapEnabled:true
      });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0xFFFFFF, 0.0);
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.setPixelRatio( window.devicePixelRatio );
      return renderer;
    },
    initPerspectiveCamera (rendererconfig) {
      const container = document.getElementById(rendererconfig.demoId);
      const camera = new THREE.PerspectiveCamera(
        rendererconfig.fov,
        container.clientWidth / container.clientHeight,
        1,
        2e3
      );
      camera.far = 29000;
      return camera;
    },
    initAmbientLight () {
      const ambient = new THREE.AmbientLight(0xffffff, 0.8);
      return ambient;
    },
    initSpotLight () {
      const spot = new THREE.SpotLight(0xd9d1d1);
      spot.power = 1;
      spot.castShadow = true;
      spot.position.set(2000, 2000, 2000);
      return spot;
    },
    initHemisphereLight () {
       let light = new THREE.HemisphereLight(0xffffff, 0x444444, 1.0);
        light.position.set(0, 1, 0);
        return light;
    },
    initControls (camera, renderer) {
      const controls = new THREE.OrbitControls(camera, renderer.domElement);
      Object.assign(controls, {
        minDIstance: 1,
        rotateSpeed: 0.3,
        zoomSpeed: 0.6,
        maxDistance: 14300,
        minPolarAngle: 0,
        maxPolarAngle: 85 * Math.PI / 180,
        enableDamping: true
      });
      controls.target.set(0, 0, 0);
      controls.update();
      return controls;
    },
    initAxis (len = 20) {
      const axis = new THREE.AxisHelper(len);
      return axis;
    },
    initraycaster(three){
      three.raycaster = new THREE.Raycaster();
    }
  };
  return (three) => {
    if(!three){
        return;
    }
    if(three['scene']){
       return;
    }
    const renderer = initFunc.initRenderer(three.config);
    document.getElementById(three.config.demoId).appendChild(renderer.domElement);
    const scene = initFunc.initScene();
    const camera = initFunc.initPerspectiveCamera(three.config);
    const ambient = initFunc.initAmbientLight();
    const spot = initFunc.initSpotLight();
    const controls = initFunc.initControls(camera, renderer);
    three.ambient=ambient;
    three.renderer = renderer;
    three.scene = scene;
    three.camera = camera;
    three.controls = controls;
    three.getElementScenepotion=getElementScenepotion;
    scene.add(three.ambient = ambient);
    scene.add(three.spot = spot);
    ThreereaderUilt[three.config.name]();
    initFunc.initraycaster(three);
    THREE.Cache.enabled=three.config.cache;
    if (!loaded) {
      loaded = true;
      window.addEventListener('resize',function () {
          onWindowResize(three,three.config);
      }, false);
    }
  };
})();

/**
 * 初始化three 所有对象的配置数据
 * @type {function()}
 */
const initthreeconfig=(()=>{
    three.loadmodelkey='loadmodelkey';
    threet.loadmodelkey='loadmodelkeyt';
    three.config=config.config;
    threet.config=config.configt;
});
/**
 * 渲染场景
 */
export const runanimation = (key) => {
    if(ThreereaderUilt[key]){
        ThreereaderUilt[key]
    }
};
/**
 * 停止渲染场景 后去需要用类封装
 */
// configt.threerun
export const cancelAnimation = (key) => {
  if(config[key]){
      cancelAnimationFrame(config[key]);
      config[key]=null;
  }
};
/**根据路由判断是否需要渲染场景，避免浪费资源
 *
 */
export  const checkroteranimate=(to)=>{
    if(to.meta.animate){
        let list=to.meta.animate.split(",");;
        list.forEach((item,inex)=>{
            if(!to.meta.animate){
                cancelAnimation(item);
            }else{
                runanimation(item);
            }
        })
    }
}
/**
 * 视图大小更新场景重置
 */
export  const  onWindowResize = (three) => {
  const container = document.getElementById(three.config.demoId);
  let width = container.clientWidth;
  let height = container.clientHeight;
  three.camera.aspect = width / height;
  three.camera.updateProjectionMatrix();
  three.renderer.setSize(width, height);
};
window.consolefun=((name)=>{
    setInterval(function () {
        console.info(name.toString(),name)
    })
});
/**
 * 全局three环境射线对象捕捉
 */
window.youzuOnMouseDown = (() => {
  let mouseDownOpen = true; // 用于控制用户点击事件，防止混乱
  if (!three.touchEmpty) { // 点击模型之外所需要触发事件集合
    three.touchEmpty = {};
  }
  if (!threet.touchEmpty) { // 点击模型之外所需要触发事件集合
      threet.touchEmpty = {};
  }
  let windosintersectClick=intersectClick;
  return event => {
    if (!mouseDownOpen) {
      return;
    }
    // 点击射线，穿透目标获取
    let dom = three.renderer.domElement;
    const mouse = {
      //减去场景外的边距
      x: (event.clientX-three.renderer.domElement.getBoundingClientRect().left) / three.renderer.domElement.clientWidth * 2 - 1,
      y:-(event.clientY-three.renderer.domElement.getBoundingClientRect().top) / three.renderer.domElement.clientHeight * 2 + 1
    };
      three.raycaster.setFromCamera(mouse, three.camera);
    let intersects = three.raycaster.intersectObjects(three.scene.children, true);
    console.log("intersects--->"+intersects)
    mouseDownOpen = false;
    if (intersects.length) {
      if (threeConfig.showMouseDownPoint) {
        vue.vue.$root.$emit('onintersectClick',intersects[0].object);
      }
      if (threeConfig.showMouseDownNames) {
        console.log(intersects.map(item => item.object.name));
      }
        windosintersectClick(intersects, () => {
              mouseDownOpen = true;
          });
    } else {
      if (three.touchEmpty) {
        const events = three.touchEmpty;
        const keys = Object.keys(events);
        keys.forEach(key => {
          if (typeof events[key] === 'function') {
            events[key]();
          }
        });
      }
      mouseDownOpen = true;
    }
  };
})();
export default {
  checkroteranimate,
  init,
  initthreeconfig,
  onWindowResize
};
