var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 640 / 360, 0.1, 1000 );
var earthMesh;
var backgroundMesh, backgroundScene, backgroundCamera;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( 640, 360 );
renderer.autoClear = false;
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.25;
controls.enableZoom = true;

var keyLight = new THREE.DirectionalLight(new THREE.Color('hsl(30, 100%, 75%)'), 1.0);
keyLight.position.set(-100, 0, 100);

var fillLight = new THREE.DirectionalLight(new THREE.Color('hsl(240, 100%, 75%)'), 0.75);
fillLight.position.set(100, 0, 100);

var backLight = new THREE.DirectionalLight(0xffffff, 1.0);
backLight.position.set(100, 0, -100).normalize();

scene.add(keyLight);
scene.add(fillLight);
scene.add(backLight);

var manager = new THREE.LoadingManager();
manager.onLoad = init;

var loader = new THREE.TextureLoader( manager );

loader.load( '/examples/background-image/assets/earth.jpg', function( texture ) {
	var geometry = new THREE.SphereGeometry(1, 256, 256);
	var material = new THREE.MeshPhongMaterial();
	material.map = texture;
	earthMesh = new THREE.Mesh(geometry, material);
	scene.add( earthMesh );
});

loader.load( '/examples/background-image/assets/space-background.jpg', function( texture ) {
	backgroundMesh = new THREE.Mesh(
    	new THREE.PlaneGeometry(2, 2, 0),
		new THREE.MeshBasicMaterial({
    		map: texture
		})
    );

	backgroundMesh.material.depthTest = false;
	backgroundMesh.material.depthWrite = false;

	backgroundScene = new THREE.Scene();
	backgroundCamera = new THREE.Camera();
	backgroundScene.add( backgroundCamera );
	backgroundScene.add( backgroundMesh );
});

camera.position.z = 3;

var animate = function () {
	requestAnimationFrame( animate );

	controls.update();

	earthMesh.rotation.y += 0.01;

	renderer.clear();
	renderer.render( backgroundScene, backgroundCamera );
	renderer.render( scene, camera );
};

function init() {
	animate();
};