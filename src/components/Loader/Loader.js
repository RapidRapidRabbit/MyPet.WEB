import { Fragment } from "react";
import WhiteOverlay from "../../components/WhiteOverlay/WhiteOverlay";
import "./Loader.css";
 


const Loader = (props) => {    
  
    return <Fragment>    
   <WhiteOverlay setShow={props.setShow}><img className="loader" alt=":("></img></WhiteOverlay>
    </Fragment>
    
}
export default Loader;