import { useState } from "react";
import UiInput from "./UiInput";

export default {
  title: "Ui-LKit/UiInput",
  compnment: UiInput,
};
const Template = (args) => {
  const [value, setValue] = useState("");
  const handleInputChange = (value) => setValue(value);
  return (
    <UiInput
      {...args}
      inputSearchValue={value}
      handleInputChange={handleInputChange}
    />
  );
};

const props = {
  inputSearchValue: "",
  handleInputChange: () => console.log("Input Change"),
  placeholder: "Placeholder",
  classes: "",
};

export const Default = Template.bind({});
Default.args = { ...props };
