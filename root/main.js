import * as THREE from '../node_modules/three/build/three.module.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const bennyTexture = new THREE.TextureLoader().load( 'benny_23.png' );

const bennyShape = new THREE.Mesh(
    new THREE.BoxGeometry( 2, 2, 2 ),
    new THREE.MeshBasicMaterial({ map: bennyTexture })
);

scene.add( bennyShape );



camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    bennyShape.rotation.x += 0.008;
    bennyShape.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();