var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

camera.position.z = 5;

function init() {
	var ambientLight = new THREE.AmbientLight( 0x0f0f0f );
	scene.add( ambientLight );

	var light = new THREE.SpotLight( 0xffffff, 1.5 );
	light.position.set( 0, 500, 2000 );

	scene.add(light);
}

function animate() {
	requestAnimationFrame( animate );

	renderer.render(scene, camera);
};

init();
animate();