import OBJLoader from '../shared/ThreeToolbox/THREE.OBJLoader'

const THREE = window.THREE;
const TYPES = {
    OBJECT: 'obj',
    TEXTURE: 'texture'
}

class ThreeLoader extends ThreeObject {

    constructor () {
        const cb = () => {};
        this.manager = new THREE.LoadingManager(cb);
    }
    
    load (url) {
        const { manager } = this;
        return new ThreeModel({ url, manager });
    }

}

class ThreeModel extends ThreeObject {

    setup () {
        this._objectType = null;
        this.listeners = {
            progress: [],
            loaded: [],
            error: []
        }
        const $ = this.$;
        const { url, manager } = this.props;
        const splitted = url.split('.')
        this.ext = splitted[splitted.length - 1].toLowerCase();
        switch (ext) {
            case 'obj':
                this._objectType = TYPES.OBJECT;
                this.loader = new OBJLoader(manager);
                break;
            case 'jpg':
            case 'png':
                this._objectType = TYPES.TEXTURE;
                this.loader = new $.TextureLoader(manager);
                break;
            default:
                this.loader = null;
                // TODO: throw errors here
                break;
        }
    }

    on (type, cb) {
        if (type in this.listeners) {
            this.listeners[type].push(cb)
        } else {
            // TODO: show error
        }
        return this;
    }

    _dispatch (type, data) {
        if (type in this.listeners) {
            this.listeners[type].forEach((cb) => cb(data));
        }
    }

    init () {
        const { url } = this.props;
        this.loader.load(url, this.onLoad, this.onProgress, this.onError)
    }

    onProgress = (xhr) => {
        if (xhr.lengthComputable) {
            const percent = xhr.loaded / xhr.total * 100;
            this._dispatch('progress', { percent });
        }
    }

    onError = (err) => {
        this._dispatch('error', err);
    }

    onLoad = (object) => {
        this._dispatch('loaded', object);
        this.object = object;
    }

}

export default ThreeLoader;