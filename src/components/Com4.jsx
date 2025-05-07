import {Component5} from "@/components/Com5";

export const Components4 = (props) => {
  console.log("4", props.props4);
  return (
    <div>
      <Component5 props5={props.props4} />
    </div>
  );
};
