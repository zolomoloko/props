import { Component6 } from "./Com6";

export const Component5= (props) => {
    console.log("5", props.props5)
    return (
        <div>
             <Component6 props6={props.props5}/>
        </div>
    )
}