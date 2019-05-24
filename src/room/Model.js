import { ThreeObject, ThreeLoader } from "../shared/ThreeToolbox";

class Model extends ThreeObject {

  setup () {
    const { url } = this.props;
    this.loader = new ThreeLoader();
    const loadingObject = this.loader.load(url);
    loadingObject.on('progress', ({ percent }) => console.log(percent));
    loadingObject.on('loaded', (object) => console.log(object));
    loadingObject.on('error', (err) => console.log(err));
  }

  changes () {
    
  }

}

export default Model;