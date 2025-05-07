import { Component7 } from "./Com7"

export const Component6= (props) => {
    console.log("6", props.props6)
    return (
        <div>
            <Component7 props7={props.props6}/>
        </div>
    )
}