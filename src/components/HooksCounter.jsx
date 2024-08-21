import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";

const HooksCounter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
      <div className="text-2xl font-semibold">{count}</div>
      <div className="flex space-x-3">
        <button
          onClick={() => dispatch(increment())}
          className="bg-sky-400 text-white px-3 py-2 rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-rose-400 text-white px-3 py-2 rounded-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default HooksCounter;
