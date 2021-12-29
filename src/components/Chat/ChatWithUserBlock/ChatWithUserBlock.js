import { Fragment } from "react";
import './ChatWithUserBlock.css'

const ChatWithUserBlock = (props) =>{

const handleBlockClick = () =>{    
    props.callBackFromParent(props.item.id, props.item.withUserId)
}

    return <Fragment>
        <div className="user-block" onClick={handleBlockClick}>{props.item.withUserName}</div>
    </Fragment>
}

export default ChatWithUserBlock;