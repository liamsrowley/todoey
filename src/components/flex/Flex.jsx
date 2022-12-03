export const Flex = ({
  children,
  direction = "column",
  gap = 0,
  justifyContent = "flex-start",
  alignItems = "flex-start",
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: direction,
        gap,
        justifyContent,
        alignItems,
      }}
    >
      {children}
    </div>
  );
};
