import { Component43 } from "./Com43"

export const Component42 = (props) => {
    console.log("42", props.props42)
    return(
        <div>
            <Component43 props43={props.props42}/>
        </div>
    )
}