import { Component23 } from "./Com23"

export const Component22=(props) =>{
    console.log("22", props.props22)
    return (
        <div>
            <Component23 props23={props.props22}/>
        </div>
    )
}