import UiLoading from "./UiLoading";
export default {
  title: "Ui-LKit/UiLoading",
  compnment: UiLoading,
};
const Template = (args) => <UiLoading {...args} />;

const props = {
  theme: "white",
};
export const Light = Template.bind({});
Light.args = { ...props, theme: "white" };

export const Dark = Template.bind({});
Dark.args = { ...props, theme: "black" };

export const Blue = Template.bind({});
Blue.args = { ...props, theme: "blue" };
