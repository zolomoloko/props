import { Component81 } from "./Com81"

export const Component80 =(props)=>{
    console.log("80", props.props80)
    return(
        <div>
            <Component81 props81={props.props80}/>
        </div>
    )
}