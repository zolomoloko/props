import { Component33 } from "./Com33"

export const Component32 = (props) => {
    console.log("32", props.props32)
    return (
        <div>
            <Component33 props33={props.props32}/>
        </div>
    )
}