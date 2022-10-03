
import RangeSlider from '../lib/rangeSlider/RangeSlider.svelte';


export default {
  title: 'Component/RangeSlider',
  component: RangeSlider,
};

// More on component templates: https://storybook.js.org/docs/svelte/writing-stories/introduction#using-args
const Template = () => ({
  Component: RangeSlider
});

// More on args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary = Template.bind({});


