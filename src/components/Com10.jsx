import { Component11 } from "./Com11"

export const Component10= (props) => {
    console.log("10", props.props10)
    return (
        <div>
            <Component11 props11={props.props10}/>
        </div>
    )
}