import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import EmailConfirmedComponent from "../../components/EmailConfirmedComponent/EmailConfirmedComponent";
import Header from "../../components/HeaderComponent/HeaderComponent";

const EmailConfirmedPage = () =>{

    let [searchParams] = useSearchParams();   

    return <Fragment>
        <Header/>
        <EmailConfirmedComponent params={searchParams} />
    </Fragment>

}

export default EmailConfirmedPage;