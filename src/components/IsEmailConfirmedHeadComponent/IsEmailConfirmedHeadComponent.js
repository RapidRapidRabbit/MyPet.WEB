import "./IsEmailConfirmedHeadComponent.css";

const IsEmailConfirmedHeadComponent = (props) => {  

    const confirmed = <span className="email-span confirmed">
        Email confirmed
    </span>
    const notConfirmed = <span className="email-span notconfirmed">
        Email not confirmed
    </span> 

    return props.isConfirmed === true ? confirmed : notConfirmed;

}

export default IsEmailConfirmedHeadComponent;