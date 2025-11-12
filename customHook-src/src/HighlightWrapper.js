import React from "react";
import useModifiedchildren from "./customHooks/useModifiedChildren"
export default function HighlightWrapper({children}){
    const isUrgentH1 = (element)=>{
        return(
            React.isValidElement(element) &&
            element.type === 'h1' &&
            element.props.urgency
        )
    }
    const modifiedChildren = useModifiedchildren(children,(child)=>({
        style:{color:'red',fontWeight:'bolder'}
    }),isUrgentH1);
    return(
        <>
            {modifiedChildren}
        </>
    )
}