import { connect } from "react-redux";

const Detail = ({todo}) => {
  return (
    <>
      <h1>{todo?.text}</h1>
      <h3>Created At: {todo?.id}</h3>
    </>
  )
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  return {todo: state.find(e => e.id === Number(id))};
}

export default connect(mapStateToProps)(Detail);
