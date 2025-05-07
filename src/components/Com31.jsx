import { Component32 } from "./Com32"

export const Component31 = (props) => {
    console.log("31", props.props31)
    return (
        <div>
            <Component32 props32={props.props31}/>
        </div>
    )
}