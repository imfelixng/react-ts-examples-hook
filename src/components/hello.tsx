import * as React from "react";

type HelloProps = {
    username: string,
}

export const HelloComponent = (props: HelloProps) => {
  return (
    <h2>Hello user: { props.username }</h2>
  );
};