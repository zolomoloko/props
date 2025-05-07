import { Component8 } from "./Com8"

export const Component7 = (props) => {
    console.log("7", props.props7)
    return (
        <div>
            <Component8 props8={props.props7}/>
        </div>
    )
}