import { ThreeBasics } from "../shared/ThreeToolbox";
import Sphere from './Sphere'
import Lamp from "./Lamp";

class RoomTHREE extends ThreeBasics {

    setup () {
        this.append(new Sphere())
        this.append(new Lamp({ color: 0x0000ff, speed: 0.1 }))
        this.append(new Lamp({ color: 0xff0000, speed: -0.1 }))
        this.append(new Lamp({ color: 0xffffff, speed: 0 }))
    }

    changes () {
        this.camera.position.z += 0.1;
    }

}

export default RoomTHREE;