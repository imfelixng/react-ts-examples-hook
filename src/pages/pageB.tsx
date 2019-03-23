import * as React from "react"
import { NavLink } from 'react-router-dom';

export const PageB = () =>
    <div>
      <h2>Hello from page B</h2>
      <NavLink to="/pageA">Navigate to Login</NavLink>
    </div>