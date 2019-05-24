

class ThreeObject {

    geometry = null;
    material = null;
    object = null;

    constructor (props = {}) {
        // Define THREE as a easy-to-catch variable
        this.$ = window.THREE;
        this.props = props;
        
        this.setup();
        this.init();
    }

    init () {}
    setup () {}
    changes () {}

}

export default ThreeObject;