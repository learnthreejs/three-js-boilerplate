var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 640 / 360, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 640, 360);
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

var animate = function () {
	requestAnimationFrame( animate );

	renderer.render(scene, camera);
};

animate();