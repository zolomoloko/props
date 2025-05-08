import { Component83 } from "./Com83"

export const Component82 =(props)=>{
    console.log("82", props.props82)
    return(
        <div>
            <Component83 props83={props.props82}/>
        </div>
    )
}