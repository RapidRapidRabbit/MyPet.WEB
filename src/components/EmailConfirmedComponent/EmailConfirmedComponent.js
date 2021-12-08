import { Fragment, useEffect, useState } from "react";
import EmailConfirmService from "../../services/EmailConfirmService/EmailConfirmService";

const EmailConfirmedComponent = (props) =>{

    const [contentToShow, setContentToShow] = useState(<div>Something happens...</div>)

    


    useEffect(()=>{
        console.log(props.params.get("emailtoken"));
        EmailConfirmService(props.params.get("userid"), props.params.get("emailtoken")).then(response => {
            
            if(response.status >= 400 || response.confirmationResult === false ){                
                setContentToShow(errorContent);
            }else if (response.confirmationResult === true){                
                setContentToShow(okContent);
            }            

        })
    },[])

    const errorContent = (<div>Что-то пошло не так</div>);
    const okContent = (<div>Спасибо за подтверждение</div>);

    return <Fragment>
        {contentToShow}
    </Fragment>
}

export default EmailConfirmedComponent;