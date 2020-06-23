import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  HemisphereLight,
  Box3,
  Vector3,
} from 'three';
import { GLTFLoader } from '../../threejs/GLTFLoader';
import { OrbitControls } from '../../threejs/OrbitControls';
import { PointLight } from 'three';

const LOADER = new GLTFLoader();

export async function renderScene(el: HTMLElement, path: string) {
  doStuff(el);
  /*
  const { clientWidth: width, clientHeight: height } = el;

  const scene = new Scene();
  const camera = createCamera(width, height);
  const light = createLight();

  scene.add(camera, light);

  const renderer = createRenderer(width, height);
  el.innerHTML = '';
  el.appendChild(renderer.domElement);

  try {
    const model = await LOADER.load(path);
    debugger;
    scene.add(model.scene);
    renderer.render(scene, camera);
  } catch (err) {
    console.error(err);
  }
  */
}

async function doStuff(el: HTMLElement) {
  // Set the scene size.
  const { clientWidth: width, clientHeight: height } = el;

  // Set some camera attributes.
  const VIEW_ANGLE = 45;
  const ASPECT = width / height;
  const NEAR = 0.1;
  const FAR = 10000;

  // Create a WebGL renderer, camera
  // and a scene
  const renderer = new WebGLRenderer({ antialias: true, alpha: true });
  const camera = new PerspectiveCamera(VIEW_ANGLE, ASPECT, NEAR, FAR);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.autoRotate = false;
  controls.autoRotateSpeed = -10;
  controls.screenSpacePanning = true;

  const scene = new Scene();

  // Add the camera to the scene.
  scene.add(camera);

  // Start the renderer.
  renderer.setSize(width, height);

  // Attach the renderer-supplied
  // DOM element.
  el.innerHTML = '';
  el.appendChild(renderer.domElement);

  // create a point light
  const pointLight = new PointLight(0xffffff);

  // set its position
  pointLight.position.x = 10;
  pointLight.position.y = 50;
  pointLight.position.z = 130;

  // add to the scene
  scene.add(pointLight);

  const gltf = await LOADER.load('/models/ice_stone.glb');
  const model = gltf.scene;

  model.updateMatrixWorld();
  const box = new Box3().setFromObject(model);
  const size = box.getSize(new Vector3()).length();
  const center = box.getCenter(new Vector3());

  model.position.x += model.position.x - center.x;
  model.position.y += model.position.y - center.y;
  model.position.z += model.position.z - center.z;

  camera.position.copy(center);
  camera.position.x += size / 2.0;
  camera.position.y += size / 5.0;
  camera.position.z += size / 2.0;
  camera.lookAt(center);

  scene.add(model);

  function update() {
    controls.update();
    renderer.render(scene, camera);

    requestAnimationFrame(update);
  }

  // Schedule the first frame.
  requestAnimationFrame(update);
}
