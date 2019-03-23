import * as React from "react";
import { NavLink } from 'react-router-dom';

export const PageA = () =>
    <div>
      <h2>Hello from page A</h2>
      <br />
      <NavLink to="/pageB">Navigate to Page B</NavLink>
    </div>