class ThreeBasics {

    constructor () {
        // Class variables
        this.time = 0;

        // Creating main scene
        this.scene = new THREE.Scene()

        // Our main camera
        this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000)
        this.scene.add(this.camera);

        // objects array
        this.objects
    }

    init (canvas) {
        this.renderer = new THREE.WebGLRenderer({ canvas });

        // Fixing size
        window.addEventListener('resize', this.reFixSize);
        this.reFixSize();

        // Starting render function
        this.render()
    }

    registerObject = (obj) => {
        this.objects.push(obj);
    }

    _changes = () => {
        this.time++;
        this.changes()
        for (const obj of this.objects) obj.changes();
    }

    changes = () => {}
    
    render = () => {
        this._changes();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this.render);
    }

    reFixSize = () => {
        const W = window.innerWidth;
        const H = window.innerHeight;
        const ratio = W / H;
        this.renderer.setSize(W, H);
        this.camera.aspect = ratio;
        this.camera.updateProjectionMatrix()
    }

}

export default ThreeBasics