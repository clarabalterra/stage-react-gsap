import WestRoundedIcon from "@mui/icons-material/WestRounded";

export const PrevButton = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      type="button"
      className="bg-coyote text-alabaster flex items-center justify-center cursor-pointer h-12 w-16 rounded-full disabled:bg-coyote/70"
      {...restProps}
    >
      <WestRoundedIcon />
      {children}
    </button>
  );
};
