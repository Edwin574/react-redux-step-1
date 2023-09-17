import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
const App = () => {
  const counter = useSelector((state) => state.counter);
  const dispatchAction = useDispatch();
  const increment = () => {
    dispatchAction({ type: "INC" });
  };
  const decrement = () => {
    dispatchAction({ type: "DEC" });
  };
  const addBy=()=>{
    dispatchAction({type:'ADD',payload:10})
  }
  return (
    <div>
      <h1>Counter application</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={addBy}>Add Value</button>
    </div>
  );
};

export default App;
