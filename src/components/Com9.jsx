import { Component10 } from "./Com10"

export const Component9= (props) => {
    console.log("9", props.props9)
    return (
        <div>
            <Component10 props10={props.props9}/>
        </div>
    )
}