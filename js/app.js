const scene = new THREE.Scene();

var fac = new factory(0, 0, 5, 1000);
//factory arguments (position_X, position_Y, position_Y, Length)

initialize();
animate();

//Declare or Initialize variables here..
var dinoFilePath, dinosaur, material, loader, geometry;

//Code your logic here..
function initialize() {

    //----------------

    dinoFilePath = '../supportingFiles/dino.txt';
    material = new THREE.LineBasicMaterial({ color: 0xcccccc });
    loader = new THREE.FileLoader();
    loader.load(
        dinoFilePath,

        function(data) {
            // console.log(data);
            dinosaur = new Dino(data);
            for (let i = 0; i < dinosaur.dinoPoints.length; i++) {
                geometry = new THREE.BufferGeometry().setFromPoints(dinosaur.dinoPoints[i]);
                line = new THREE.Line(geometry, material);
                scene.add(line)
            }
        },

        function(xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function(err) {
            console.error('An error happened');
        }
    );

}

function animate() {
    requestAnimationFrame(animate);
    fac.renderScene();
}