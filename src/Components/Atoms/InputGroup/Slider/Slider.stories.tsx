import Slider from '.';

export default {
  title: 'Components/Atoms/InputGroup/Slider',
  component: Slider,
  tags: ['autodocs'],
};

export const BasicSlider = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    onChange: (value: number) => console.log('Basic Slider Value:', value),
    setStep: (value: number) => console.log('Set Step:', value),
    disabled: false,
    className: 'h-2',
    border: true,
    background: true,
  },
};

export const DisabledSlider = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    step: 1,
    onChange: (value: number) => console.log('Disabled Slider Value:', value),
    setStep: (value: number) => console.log('Set Step:', value),
    disabled: true,
    className: 'h-2',
    border: true,
    background: true,
  },
};

export const CustomStepSlider = {
  args: {
    min: 0,
    max: 100,
    value: 25,
    step: 5,
    onChange: (value: number) =>
      console.log('Custom Step Slider Value:', value),
    setStep: (value: number) => console.log('Set Step:', value),
    disabled: false,
    className: 'h-3 bg-accent',
    border: true,
    background: true,
  },
};

export const NoBorderSlider = {
  args: {
    min: 0,
    max: 100,
    value: 40,
    step: 10,
    onChange: (value: number) => console.log('No Border Slider Value:', value),
    setStep: (value: number) => console.log('Set Step:', value),
    disabled: false,
    className: 'h-4',
    border: false,
    background: true,
  },
};

export const CustomBackgroundSlider = {
  args: {
    min: 0,
    max: 100,
    value: 75,
    step: 10,
    onChange: (value: number) =>
      console.log('Custom Background Slider Value:', value),
    setStep: (value: number) => console.log('Set Step:', value),
    disabled: false,
    className: 'h-4',
    border: true,
    background: false,
  },
};

export const ComparisonSliders = () => (
  <div className="space-y-6">
    <h3 className="text-lg font-semibold">Comparison of Sliders</h3>
    <Slider
      min={0}
      max={100}
      value={20}
      step={1}
      onChange={(value: number) => console.log('Comparison Slider 1:', value)}
      setStep={(value: number) => console.log('Set Step 1:', value)}
      className="h-2 bg-primary"
      border
      background
    />
    <Slider
      min={0}
      max={100}
      value={50}
      step={5}
      onChange={(value: number) => console.log('Comparison Slider 2:', value)}
      setStep={(value: number) => console.log('Set Step 2:', value)}
      className="h-3 bg-secondary"
      border
      background={false}
    />
    <Slider
      min={0}
      max={100}
      value={80}
      step={10}
      onChange={(value: number) => console.log('Comparison Slider 3:', value)}
      setStep={(value: number) => console.log('Set Step 3:', value)}
      className="h-4 rounded-full bg-accent"
      border={false}
      background
    />
  </div>
);
