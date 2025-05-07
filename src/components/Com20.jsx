import { Component21 } from "./Com21"

export const Component20= (props) => {
    console.log("20", props.props20)
    return (
        <div>
            <Component21 props21={props.props20}/>
        </div>
    )
}