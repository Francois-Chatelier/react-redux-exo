import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  count: state,
});

const counterContainer = ({ count, dispatch }) => {
  const incrementButton = () => dispatch({ type: "INCREMENT" });
  const decrementButton = () => dispatch({ type: "DECREMENT" });
  const incrementByTen = () => dispatch({ type: "INCREMENTBYTEN" });
  const decrementByTen = () => dispatch({ type: "DECREMENTBYTEN" });
  const backToZero = () => dispatch({ type: "RESET" });
  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementButton}>Increment</button>
      <button onClick={decrementButton}>Decrement</button>
      <button onClick={incrementByTen}>Increment by 10</button>
      <button onClick={decrementByTen}>Decrement by ten</button>
      <button onClick={backToZero}>Reset</button>
    </div>
  );
};

export default connect(mapStateToProps)(counterContainer);
