const Icon = ({ sprite, iconName, width = "28px", height = "28px", className }) => {
  return (
    <svg width={width} height={height} className={className}>
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
};

export default Icon;


