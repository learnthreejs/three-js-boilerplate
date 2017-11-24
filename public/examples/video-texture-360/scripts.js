var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var controls = new THREE.OrbitControls( camera );

camera.position.z = 300;

function init() {
	var video = document.createElement( 'video' );
	video.width = window.innerWidth;
	video.height = window.innerHeight;
	video.loop = true;
	video.muted = true;
	video.src = '/examples/video-texture-360/assets/video.mp4';
	video.setAttribute( 'webkit-playsinline', 'webkit-playsinline' );
	video.play();

	var geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
	geometry.scale( -1, 1, 1 );

	var texture = new THREE.VideoTexture( video );
	texture.minFilter = THREE.LinearFilter;
	texture.format = THREE.RGBFormat;

	var material = new THREE.MeshBasicMaterial( { map: texture } );
	var mesh = new THREE.Mesh( geometry, material );
	mesh.rotation.y = -Math.PI / 2;
	scene.add( mesh );
}

function animate () {
	requestAnimationFrame( animate );

	controls.update();

	renderer.render(scene, camera);
};

init();
animate();