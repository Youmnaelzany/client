const BlurCircle = ({
  top = "auto",
  right = "auto",
  left = "auto",
  bottom = "auto",
}) => {
  return (
    <div
      className="bg-primary/30 absolute -z-50 aspect-square h-58 w-58 rounded-full blur-3xl"
      style={{ top: top, left: left, right: right, border: bottom }}
    ></div>
  );
};
export default BlurCircle;
