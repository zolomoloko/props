import { Components3 } from "@/components/Com3";

export const Component2 = (props) => {
console.log("2",props.props2)
    return <div>
         <Components3 props3={props.props2} />
     </div>
}
