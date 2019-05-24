import { ThreeBasics } from "../shared/ThreeToolbox";
import Model from "./Model";
import Lamp from './Lamp'

class RoomTHREE extends ThreeBasics {

    loaded = false;

    setup () {
        this.statue = new Model({ url: '/models/statue.obj', material: new this.$.MeshPhongMaterial() });
        this.light = new Lamp({ color: 0xff0000, speed: 0.02 });
        this.append(this.light)
        this.statue.on('loaded', () => {
            this.append(this.statue)
            this.loaded = true;
        })
        this.camera.position.z = 8;
        this.camera.position.y = 2;
    }

    changes () {
        
    }

}

export default RoomTHREE;