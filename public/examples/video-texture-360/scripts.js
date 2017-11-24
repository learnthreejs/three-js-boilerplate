var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera );

camera.position.z = 300;

function init() {

}

function animate () {
	requestAnimationFrame( animate );

	controls.update();

	renderer.render(scene, camera);
};

init();
animate();