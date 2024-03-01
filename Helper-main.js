import "./style.css";

//导入整个three.js
import * as three from "three";
//导入轨道器
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let Scenario, Camera, renderer;
let Orbit;

//#region 创建
//创建场景
function createScenario() {
  Scenario = new three.Scene();
}

//创建相机
function createCamera() {
  Camera = new three.PerspectiveCamera(
    75, //相机垂直角度
    window.innerWidth / window.innerHeight, //宽高比
    0.1, //近截面相机距离
    1000 //远截面相机距离
  );
}

//创建渲染器
function createRender() {
  //创建画布
  renderer = new three.WebGLRenderer();
  // 设置画布大小
  renderer.setSize(window.innerWidth, window.innerHeight);
}

//创建轨道器
function createOrbit() {
  Orbit = new OrbitControls(Camera, renderer.domElement);
}
function animate() {
  //循环渲染
  requestAnimationFrame(animate);

  // required if controls.enableDamping or controls.autoRotate are set to true
  Orbit.update();
  //传入场景相机和画布
  renderer.render(Scenario, Camera);
}

//创建坐标轴
function createHelper() {
  //创建坐标轴
  const axesHelper = new three.AxesHelper(10);
  //添加到场景
  Scenario.add(axesHelper);
}

//#endregion

//添加dom
function addDom() {
  //把画布canvas标签添加到页面上
  document.body.append(renderer.domElement);
}

//初始化加载
function innt() {
  createScenario();
  createCamera();
  createRender();
  addDom();
}

//#region 图形

//创建立方体
function cube() {
  //创建图形x,y,z为单位1
  const geomety = new three.BoxGeometry(1, 1, 1);

  //创建材质，颜色
  const material = new three.MeshBasicMaterial({ color: 0x00ff00 });

  //常见网格物体对象，传入图形和材质
  const cubes = new three.Mesh(geomety, material);

  //将物体添加到场景中
  Scenario.add(cubes);

  //改变相机位置
  Camera.position.z = 5;
  // Camera.position.x = -1;
  // Camera.position.y = -1;
}

//#endregion

//#region

//初始化
innt();
//立方体
cube();
//轨道器方法
createOrbit();
//循环渲染更新场景
animate();
//坐标轴
createHelper();

//#endregion
