import UiVideo from "./UiVideo";
import vidoe from "./video/video.mp4";
export default {
  title: "Ui-LKit/UiVideo",
  compnment: UiVideo,
};
const Template = (args) => <UiVideo {...args} />;

const props = {
  src: vidoe,
  classes: "",
  playbackRate: 1.0,
};

export const Default = Template.bind({});
Default.args = { ...props };
