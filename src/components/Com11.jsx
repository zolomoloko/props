import { Component12 } from "./Com12"

export const Component11= (props) => {
    console.log("11", props.props11)
    return (
        <div>
            <Component12 props12={props.props11}/>
        </div>
    )
}