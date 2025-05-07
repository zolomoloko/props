import { Component9 } from "./Com9"

export const Component8= (props) => {
    console.log("8", props.props8)
    return (
        <div>
            <Component9 props9={props.props8}/>
        </div>
    )
}