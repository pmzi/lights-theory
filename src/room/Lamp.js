import { ThreeObject } from "../shared/ThreeToolbox";

class Lamp extends ThreeObject {

  setup () {
    const $ = this.$;
    const { color } = this.props;
    this.object = new $.PointLight(color, 1, 1000)
  }

  changes () {
    const { speed } = this.props;
    this.object.position.x += speed;
  }

}

export default Lamp;