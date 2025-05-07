import { Component42 } from "./Com42";

export const Component41 = (props) => {
    console.log("41", props.props41)
    return(
        <div>
            <Component42 props42={props.props41}/>
        </div>
    )
}