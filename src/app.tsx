import * as React from "react";
import { HelloComponent } from "./hello";
import { NameEditComponent } from "./nameEdit";

export const App = () => {
  const [name, setName] = React.useState('defaultUserName');

  const loadUsername = () => {
    setTimeout(() => {
      setName("name from async call");
    }, 500);
  };

  React.useEffect(() => {
      loadUsername();
    }, []
  );

  const setUsernameState = (newName : string) => {
    setName(newName);
  };

  return (
    <>
        <HelloComponent username={name} />
        <NameEditComponent initialUserName={name} onNameUpdated={setUsernameState} />
    </>
  )
};