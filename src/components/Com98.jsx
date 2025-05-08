import { Component99 } from "./Com99"

export const Component98 =(props)=>{
    console.log("98", props.props98)
    return(
        <div>
            <Component99 props99={props.props98}/>
        </div>
    )
}