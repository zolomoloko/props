import { Component13 } from "./Com13"

export const Component12= (props) => {
    console.log("12", props.props12)
    return (
        <div>
            <Component13 props13={props.props12}/>
        </div>
    )
}