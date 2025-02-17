import { SpinnerProps } from './SpinnerProps.interface';

const Spinner = ({ width = 40, height = 40 }: SpinnerProps) => {
  return (
    <div
      className="relative inline-block"
      style={{ minWidth: width, minHeight: height }}
    >
      <div
        className="border-atom-spinner-background box-border inline-block animate-spin rounded-full border-r-4 border-t-4 border-solid border-r-transparent"
        style={{ width, height }}
      />
    </div>
  );
};
export default Spinner;
