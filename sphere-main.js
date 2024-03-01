import "./style.css";

//导入整个three.js
import * as three from "three";
let Scenario, Camera, renderer;

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
innt();
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

//球体
function sphere() {
  const geometry = new three.SphereGeometry(15, 32, 16);
  const material = new three.MeshBasicMaterial({ color: 0xffff00 });
  const spheres = new three.Mesh(geometry, material);
  Scenario.add(spheres);
  Camera.position.z = 100;
}

// cube();
sphere();
//传入场景相机和画布
renderer.render(Scenario, Camera);
