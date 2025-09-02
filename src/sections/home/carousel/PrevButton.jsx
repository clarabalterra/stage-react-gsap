import WestRoundedIcon from "@mui/icons-material/WestRounded";

export const PrevButton = (props) => {
  const { children, bgColor = "bg-coyote", textColor = "text-alabaster", ...restProps } = props;

  return (
    <button
      type="button"
      className={`${bgColor} ${textColor} flex items-center justify-center cursor-pointer h-12 w-16 rounded-full disabled:opacity-70`}
      {...restProps}
    >
      <WestRoundedIcon />
      {children}
    </button>
  );
};
