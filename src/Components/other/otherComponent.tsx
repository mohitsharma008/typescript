interface NewProps {
  value: string;
}
const OtherComponent: React.FC<NewProps> = (props): any => {
  console.log(props);
  return (
    <>
      <h3>Ready</h3>
    </>
  );
};
export default OtherComponent;
