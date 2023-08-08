import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

//Scene Setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 25;
camera.position.y = 15;

//renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//load 3D-Models



//skybox
const cubeGeometry = new THREE.BoxGeometry(1000, 1000, 1000);
const textureLoader = new THREE.TextureLoader();
const skyboxTextures = [
  textureLoader.load('skybox/xpos.png'),
  textureLoader.load('skybox/xneg.png'),
  textureLoader.load('skybox/ypos.png'),
  textureLoader.load('skybox/yneg.png'),
  textureLoader.load('skybox/zpos.png'),
  textureLoader.load('skybox/zneg.png'),
];
const materials = skyboxTextures.map(texture => new THREE.MeshBasicMaterial({ map: texture, side: THREE.BackSide }));
const skybox = new THREE.Mesh(cubeGeometry, materials);
scene.add(skybox);

//Run Scene
const controls = new OrbitControls(camera, renderer.domElement);
function animate() {
	requestAnimationFrame( animate );
	controls.update();
	renderer.render( scene, camera );
}

animate();