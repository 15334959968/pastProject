/**
 * @description 加载方法
 */

import {linkMap } from './config';
// 当前加载的模型数组
const threedomemodels={
    three:[],
    threet:[]
};
// 检测并执行函数
export const execFunction = (func, ...args) => {
    if (typeof func === 'function') {
        func(...args);
    }
};

export const intersectClick = (intersects, callback) => {
    const target = linkMap[intersects[0].object.name];
    if (target) {
        if (linkMap.current) {
            linkMap.history.push(linkMap.current);
        }
        linkMap.current = target;
        aniBeforeLoad(target, callback);
    } else {
        execFunction(callback);
    }
};

/**
 * @description 在载入模型前执行动画，一般用于点击楼层进入楼层内部信息时使用
 * @param {object} target 目标选项
 * @param {function} success 动画执行、加载完成后的回调，动画和加载是同时进行的，只有两个都完成了才会执行成功回调
 */
export const aniBeforeLoad = (target, success) => {
    let meshChangeFunc = null;
    // 完成动作的 generate 函数，用于保证动画和载入都完成是执行操作
    const step = (function* () {
        yield 'step1';
        execFunction(meshChangeFunc(target.three||three));
        if (target.router && target.router[1]) {
            vue.vue.$router.push(target.router[1]);
        }
        if (target.cameraPosition) {
            lookCamera(...target.cameraPosition,target.three||three);
        }
        execFunction(success);
        execFunction(target.afterIn);
        execFunction(target.complete);
    })();

    execFunction(target.beforeIn);
    if (target.aniPosition) {
        const option = Object.assign({}, target.aniPosition());
        const position = three.camera.position;
        option.start = new THREE.Vector3(
            position.x - option.target.x,
            position.y - option.target.y,
            position.z - option.target.z
        );
        option.end = option.offset;
        execFunction(target.beforeAni);
        showAnimate(option, () => {
            execFunction(target.afterAni);
            step.next();
        });
    } else {
        step.next();
    }

    execFunction(target.beforeLoad);
    loadModels({
        list: target.meshList,
        pthree:target.three||three,
        success (models, meshChange) {
            execFunction(target.afterLoad);
            meshChangeFunc = meshChange;
            step.next();
        }
    });
};

/**
 * @description 加载模型
 */
export const loadModels = (() => {
    const loadData = {}; // 模型数据，保存已加载的模型
    let currentModels = []; // 当前模型数组
    let isLoading = false; // 加载中
    let unLoadedCount = 0; // 未加载模型计数器
    let successCb = null; // 模型全部加载完成回调
    let sortObj = {};
    let three={};
    let parameter={orderby:true};
    /**
     * 删除场景中原有的模型
     * @type {function(*)}
     */
    const  deletescenemesh=((name)=>{
        if(!parameter.concatlist){
            threedomemodels[name].forEach((item, index) => {
                three.scene.remove(item);
            });
        }
        threedomemodels[name] = currentModels;
    });
    /**
     * 删除场景中上一次的数据源
     * 初始化每次加载模型的状态
     */
    const ResetChangemeshs = (parameters) => {
        three=parameters.pthree;
        isLoading = true;
        unLoadedCount=parameters.list.length;
        parameter=parameters;
        if(!parameter.concatlist){currentModels=[]};
        successCb = parameter.success;
        sortObj = {};
        deletescenemesh(three.config.name);
        deletescenemesh(threet.config.name);
    };
    /**
     * 成功回调函数
     */
    const meshChange = () => {
        currentModels.forEach((item, index) => {
            if(!parameter.concatlist){
                item.visible=true;
                item.position.y=0;
            }
        });
    };
    /**
     * 模型加载完成回调函数
     */
    const allLoadedCb = () => { // 模型全部加载完成
        isLoading = false;
        if (typeof successCb === 'function') {
            successCb(currentModels, meshChange);
        }
    };
    const setOrderby=(b,loadInfo)=>{
        if(parameter.orderby){
            b.material.renderOrder = sortObj[loadInfo.name];
        }
    }
    /**
     * fbx格式数据（特殊情况下使用）
     * @param loadInfo
     */
    const loadfxb=(loadInfo)=>{
        const name = loadInfo.name;
        if (loadData[name]) {
            loadfbxedCb(loadData[name], loadInfo);
        } else {
            let fbxManager = new THREE.LoadingManager();
            fbxManager.onProgress = (url, loaded, loadList) => {
            };
            let fbxLoader = new THREE.FBXLoader(fbxManager);
              fbxLoader.load(
              `${three.config.FbxbaseUrl}/${name}.fbx`,
                object => {
                  loadfbxedCb(object, loadInfo);
              }
            );
        }
    }
    const loadfbxedCb = (object, loadInfo) => { // 模型加载完成
        if(loadData[loadInfo.name]){
            currentModels.push(loadData[loadInfo.name]);
            unLoadedCount--;
            if (!unLoadedCount) {
                allLoadedCb();
            }
        }else{
            object.traverse(function (b) {
                if (b instanceof THREE.Mesh) {
                    b.material.transparent = true;
                    b.material.shininess = 10;
                    b.material.shading = THREE.SmoothShading;
                    b.material.side = THREE.DoubleSide;
                    setOrderby(b,loadInfo);
                    b.material.flatShading = true;
                    if (b.geometry) {
                        b.geometry.computeBoundingBox();
                    }
                    currentModels.push(b);
                    three.scene.add(b);  //
                    loadData[name] = b;
                    unLoadedCount--;
                    if (!unLoadedCount) {
                        allLoadedCb();
                    }
                }

            });
        }


    };
    /**
     * @description 加载模型回调
     * @param {object | obj} obj 模型信息
     * @param {object} loadInfo 加载信息
     */
    const loadedCb = (obj, loadInfo) => { // 模型加载完成
        if(loadData[loadInfo.name]){
            currentModels.push(loadData[loadInfo.name]);

            three.scene.add(loadData[loadInfo.name]);  //
            unLoadedCount--;
            if (!unLoadedCount) {
                allLoadedCb();
            }
        }else{
            obj.traverse(item => {
                if (item instanceof THREE.Mesh) {
                    let material = item.material;
                    if (loadInfo.img) {
                        material.map = loadData[`${loadInfo.img}_img`];
                        if (loadInfo.img.includes('.png')) {
                            material.side = THREE.DoubleSide;
                        }
                        setOrderby(item,loadInfo);
                    } else {
                        material.color.setRGB(0.84, 0.84, 0.84);
                    }
                    if(loadInfo['nottransparent']){
                        material.transparent=false;
                    }else{
                        material.transparent=true;
                    }
                    material.shininess = 10;
                    material.flatShading = true;
                    item.position.set(0, 0, 0);
                    if (item.geometry) {
                        item.geometry.computeBoundingBox();
                    }
                    loadData[loadInfo.name] = item;
                    currentModels.push(item);


                    three.scene.add(item);  //
                    unLoadedCount--;
                    if (!unLoadedCount) {
                        allLoadedCb();
                    }
                }
            });
        }
    };
    /**
     * @description 加载模型
     * @param {object} loadInfo 加载信息
     * @param {object | image} image 模型需要贴图时的图片信息
     */
    const loadObj = (loadInfo) => { // 加载模型
        const name = loadInfo.name;
        if (loadData[name]) {
            loadedCb(loadData[name], loadInfo);
        } else {
            let manager = new THREE.LoadingManager();
            manager.onProgress = (url, loaded, loadList) => {
            };
            let objLoader = new THREE.OBJLoader(manager);
            objLoader.load(
                `${three.config.baseUrl}/${name}.obj`,
                object => {
                    // loadData
                    loadedCb(object, loadInfo);
                }
            );
        }
    };
    /**
     * @description 当模型需要贴图时调用此方法，先加载图片，完成后加载模型
     * @param {object} loadInfo 加载信息
     */
    const loadImg = (loadInfo) => { // 加载贴图，贴图加载完成后加载模型
        const imgAlias = `${loadInfo.img}_img`;
        if (loadData[imgAlias]) {
            loadObj(loadInfo);
        } else {
            const loader = new THREE.TextureLoader();
            console.log(`${three.config.baseUrl}/${loadInfo.img}`);
            loader.load(`${three.config.baseUrl}/${loadInfo.img}`, function (image) {
                loadData[imgAlias] = image;
                loadObj(loadInfo);
            }, function (data) {
                console.log(data);
            }, function (error) {
                console.log(error);
            });
        }
    };
    return (parameters) => {
        if (isLoading) {
            return;
        }
        //重置环境
        ResetChangemeshs(parameters);
        // 循环加载
        parameter.list.forEach((item, index) => {
            sortObj[item.name] = index;
            if(item['fbx']){
                loadfxb(item);
            }else{
                if (item.img) {
                    loadImg(item);
                } else {
                    loadObj(item);
                }
            }
        });
    };
})();

/**
 * @description 相机位置
 * @param {object | THREE.Vector3} target 目标焦点
 * @param {object | THREE.Vector3} offset 相机 position
 * @param {object} three 全局 THREE 实例集合
 */
export const lookCamera = (target, offset,three) => {
    three.camera.position.copy(target).add(offset);
    three.camera.lookAt(target);
    three.controls.reset({
        target,
        object: three.camera
    });
};
/**
 * @description 动画  ------ animation start ------
 */
let aniSt = null; // animationSetTimeout
/**
 * @description返回当前状态mesh对象
 */
export const  getloadmodels =(pthree)=>{
    return pthree?threedomemodels[pthree.config.name]:threedomemodels[three.config.name];
}

//切换后期显示的模型数据状态
export const toggelhidemodels=(_this,scene,val=false)=>{
    let models=getloadmodels();
    scene['hidemodels']=scene['hidemodels']||[];
    _this.t['loadscene']=scene;
    if(scene.hidemodels.length>0){
        let objects=[];
        scene.hidemodels.map(function (item,index) {
            objects.push(item.name);
        });
        models.forEach((item,key) => {
            if(objects.includes(item.name)){
                item.visible=val;
            }
        });
    }
}


/**
 * 设置指定模型对象的属性
 * @type {function(*=, *=, *=)}
 */
export  const setMeshColor=((modelnames,
                             yes={opacity:1,color:'#0078f1',visible:true},
                             not={opacity:0.4,visible:true,color:"rgb(255,255,255)"})=>{
    modelnames=Array.isArray(modelnames)?modelnames=modelnames.map((item,index)=>{
        return item.name
    }):modelnames.split(',');
    let models=getloadmodels();
    let yesolor=yes.color;
    let notcolor=not.color;
    delete yes.color;
    delete not.color;
    let checkArray=(material,cb)=>{
        if(Array.isArray(material)){
            material.forEach((item,index)=>{
                cb(item);
            });
        }else{
            cb(material);
        }
    }
    let setitem=(item,obj,color)=>{
        Object.assign(item.material,obj);
        if(color){
            checkArray(item.material,function(material){
                material.color.setStyle(color);
            });
           
        }
    }
    let check=((item,modelnames)=>{
        if(modelnames.includes(item.name)){
            setitem(item,yes,yesolor);
        }else{
            setitem(item,not,notcolor);
        }
    });
    models.forEach((item,key) => {
        check(item,modelnames)
    });
})

// TWEEN 动画
export const showAnimate = ({
                                start,
                                end,
                                target = new THREE.Vector3(0, 0, 0),
                                time = 1500,
                                camera = three.camera,
                                controls = three.controls,
                                scene = three.scene
                            }, callback) => {
    let tween = new TWEEN.Tween(start);
    tween.to(end, time);
    tween.onUpdate(function () {
        camera.position.copy(target).add(new THREE.Vector3(this.x, this.y, this.z));
        controls.reset({
            target,
            object: camera
        });
    });
    tween.delay(10).start();
    tween.onComplete(() => {
        execFunction(callback);
    });
};

/**
 * @description 在载入模型后执行动画，一般用于楼层内部退回大场景时使用
 * @param {object} target 目标选项
 * @param {function} success 加载完成后的回调
 */
export const aniAfterLoad = (target, success) => {
    execFunction(target.beforeBack);
    loadModels({
        list: target.meshList,
        success (models, meshChange) {
            execFunction(meshChange);
            if (target.router && target.router[0]) {
                vue.router.replace(target.router[0]);
            }
            execFunction(success);
            execFunction(target.afterBack);
            if (target.aniPosition) {
                const option = Object.assign({}, target.aniPosition());
                option.start = option.offset;
                option.end = target.cameraPosition[1];
                showAnimate(option, () => {
                    execFunction(target.complete);
                });
            } else {
                execFunction(target.complete);
            }
        }
    });
};

export  const  animatemodel=(obj, start, end, time)=>{
    let tween = new TWEEN.Tween(start)
        .to(end, 150 * time)
        .easing(TWEEN.Easing.Quartic.Out)
        .onUpdate(function (obj) {
            return function () {
                var zhis = this;
                obj.traverse(function (b) {
                    if (b instanceof THREE.Mesh) {
                        b.position.set(zhis.x, zhis.y, zhis.z);
                    }
                });
            };
        }(obj)).start();
}

// 场景回退
export const sceneBack = (callback) => {
    const { current } = linkMap;
    if (current.back) {
        let target = linkMap[current.back];
        let option = Object.assign({}, target, {
            beforeBack: current.beforeBack,
            afterBack: current.afterBack,
            router: current.router,
            aniPosition: current.aniPosition
        });
        linkMap.current = target;
        aniAfterLoad(option, callback);
    } else {
        execFunction(callback);
    }
};

//所以在加载模型的时候，执行改变场景对象熟悉
export let loadByConfigtarget=(scene)=>{
    three.controls=Object.assign(three.controls,scene.controls|| {
        'enablePan':true,//是否允许平移
        'enableRotate':true, //是否允许旋转
    })
    if(scene.ambient){
        three.ambient=Object.assign(three.ambient,scene.ambient)
    }else{
        three.ambient.intensity=0.8;
    }
}




export default {
    loadByConfigtarget,
    setMeshColor,
    toggelhidemodels,
    getloadmodels,
    loadModels,
    lookCamera,
    animatemodel,
    showAnimate,
    aniBeforeLoad,
    aniAfterLoad,
    intersectClick,
    sceneBack
};
