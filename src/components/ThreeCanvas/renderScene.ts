import THREE from 'three';
import { GLTFLoader } from '../../threejs/GLTFLoader';

export function renderScene(el: HTMLElement) {
  const { innerWidth, innerHeight } = window;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    innerWidth / innerHeight,
    0.1,
    1000,
  );

  const renderer = new THREE.WebGLRenderer();
  renderer.setSize(innerWidth, innerHeight);
  el.appendChild(renderer.domElement);
}
