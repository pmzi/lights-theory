import { ThreeBasics } from "../shared/ThreeToolbox";
import Model from "./Model";

class RoomTHREE extends ThreeBasics {

    setup () {
        this.append(new Model())
    }

    changes () {
        this.camera.position.z += 0.1;
    }

}

export default RoomTHREE;