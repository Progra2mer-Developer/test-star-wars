import UiButton from "./UiButton";
export default {
  title: "Ui-LKit/UiButton",
  compnment: UiButton,
};
const Template = (args) => <UiButton {...args} />;

const props = {
  disabled: false,
  onClick: () => console.log("Button Click"),
  text: "Hello",
  theme: "dark",
  classes: "",
};
export const Light = Template.bind({});
Light.args = { ...props, theme: "light" };

export const Dark = Template.bind({});
Dark.args = { ...props, theme: "dark" };

export const Disabled = Template.bind({});
Disabled.args = { ...props, disabled: true };
