import EastRoundedIcon from "@mui/icons-material/EastRounded";

export const NextButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      className="bg-coyote text-alabaster flex items-center justify-center cursor-pointer h-12 w-16 rounded-full disabled:bg-coyote/70"
      {...restProps}
    >
      <EastRoundedIcon />
      {children}
    </button>
  );
};
