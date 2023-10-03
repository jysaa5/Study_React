function Backdrop(props: { onCancel: () => void }) {
  return <div className="backdrop" onClick={props.onCancel}></div>;
}

export default Backdrop;
