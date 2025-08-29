const TitleSubtitle = ({ title, subtitle }) => {
  return (
    <div className="text-center flex flex-col gap-3 items-center">
      <h2 className="text-3xl md:text-5xl">{title}</h2>
      <p className="text-2xl opacity-70 lg:w-1/2">{subtitle}</p>
    </div>
  );
};

export default TitleSubtitle;
