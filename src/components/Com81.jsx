import { Component82 } from "./Com82"

export const Component81 =(props)=>{
    console.log("81", props.props81)
    return(
        <div>
            <Component82 props82={props.props81}/>
        </div>
    )
}