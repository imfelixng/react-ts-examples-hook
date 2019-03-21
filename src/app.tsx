import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
  const [name, setName] = React.useState('defaultUserName');

  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <>
        <HelloComponent username={name} />
        <NameEditComponent username={name} onChange={setUsernameState} />
    </>
  )
};