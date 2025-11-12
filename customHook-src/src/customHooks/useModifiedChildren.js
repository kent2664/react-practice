import React, { cloneElement } from "react";
//creates a new React element based on an exisiting one and let the developer to make changes without chaniging the source element.
// React.cloneElement(element, props, ...children)

export default function useModifiedchildren(children, modifyFun, additionalConditionFun=null){
    return children.map((child,idx)=>{
        if(additionalConditionFun?additionalConditionFun(child):React.isValidElement(child)){
            return cloneElement(child, {key:idx, ...modifyFun(child)});
        }
        return child;
    })
}