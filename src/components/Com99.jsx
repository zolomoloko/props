import { Component100 } from "./Com100"

export const Component99 =(props)=>{
    console.log("99", props.props99)
    return(
        <div>
            <Component100 props100={props.props99}/>
        </div>
    )
}