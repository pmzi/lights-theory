import { ThreeBasics } from "../shared/ThreeToolbox";
import Box from './Box'

class RoomTHREE extends ThreeBasics {

    setup () {
        this.append(new Box())
    }

    changes () {
        
    }

}

export default RoomTHREE;