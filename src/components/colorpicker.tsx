import * as React from "react";
import { Color } from "../model/color";

type Props = {
  color: Color;
  onColorUpdated: (color: Color) => void;
};


type PropsColorSlider = {
  value: number;
  onValueUpdated: (newValue: number) => void;
  key: string;
}

const ColorSliderComponent = (props: PropsColorSlider) => {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="255"
        value={props.value}
        onChange={event => props.onValueUpdated(+event.target.value)}
      />
      {props.value}
    </div>
  );
};

const updateColor = (props : Props, colorId : keyof Color) => (value) => {  // keyof Color ensures only 'red', 'blue' or 'green' can be passed in.
   props.onColorUpdated({
     ...props.color,   // this creates a clone of the current props.color object...
     [colorId]: value  // ... which gets one of its properties (colorId) immediately replaced by a new value.
   });
};

export const ColorPicker = (props: Props) => (
  <>
    {Object.keys(props.color).map((field: keyof Color) => (
      <ColorSliderComponent
        key={field}
        value={props.color[field]}
        onValueUpdated={updateColor(props, field)}
      />
    ))}
  </>
);
