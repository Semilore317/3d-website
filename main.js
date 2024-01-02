//variables for setup

let container;
let camera;
let renderer;
let scene;
let house; 

function init() {
    container = document.querySelector('.scene');

    //create scene
    scene = new THREE.Scene();

    const fov = 35;
    const aspectRatio = container.clientWidth / container.clientHeight;
    const near = 0.1;
    const far = 500;

    //camera setup
    camera = new THREE.PerspectiveCamera(fov, aspectRatio, near, far);
    camera.position.set(-50, 40, 350);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    container.appendChild(renderer.domElement);

    //renderer
    renderer = new THREE.WebGLRenderer({antialias:true, alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);

    //load model
    let loader = new THREE.GLTFLoader();
    loader.load('the_tree_house/scene.gltf', function(gltf){
        scene.add(gltf.scene);
        renderer.render(scene, camera);
    })
}

init();