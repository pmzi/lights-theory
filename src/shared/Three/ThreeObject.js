

class ThreeObject {

    geometry = null;
    material = null;
    object = null;

    constructor () {
        // Define THREE as a easy-to-catch variable
        this.$ = window.THREE;

        this.init();
        this.setup()
    }

    init () {}
    setup () {}
    changes () {}

}

export default ThreeObject;