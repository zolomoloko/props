import { Components4 } from "@/components/Com4";

export const Components3 = (props) => {
    console.log("3", props.props3)
    return(
        <div>
            <Components4 props4={props.props3}/>
        </div>
    )
}