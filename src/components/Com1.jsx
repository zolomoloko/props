import { Component2 } from "@/components/Com2";

export const Components1 = (props) => {
  console.log("1",props.props1);
  return <div>
    <Component2 props2={props.props1}/>
  </div>;
};
