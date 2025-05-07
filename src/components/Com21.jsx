import { Component22 } from "./Com22"

export const Component21= (props) => {
    console.log("21", props.props21)
    return (
        <div>
            <Component22 props22={props.props21}/>
        </div>
    )
}