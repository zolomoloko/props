import { Component41 } from "./Com41"

export const Component40 =(props) => {
    console.log("40", props.props40)
    return(
        <div>
            <Component41 props41={props.props40}/>
        </div>
    )
}