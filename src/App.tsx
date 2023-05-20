import { useContext, useState } from 'react';
import './App.css';
import { CounterContext } from './context/contextAPI';
function App() {
  const [count, setCount] = useState(0);
  const { dispatch, state } = useContext(CounterContext);
  // console.log(countContext)
  // dispatch({type: "increment", payload: 10})

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <p style={{ fontSize: '40px' }}>{state.counterCount}</p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            style={{ fontSize: '40px' }}
            onClick={() => {
              dispatch({ type: 'decreaseCount' });
            }}
          >
            -
          </button>
          <button
            style={{ fontSize: '40px' }}
            //   onClick={() => setCount((prevCount) => prevCount + 1)}
            onClick={() => {
              dispatch({ type: 'increaseCount' });
            }}
          >
            +
          </button>

          <button
            style={{ fontSize: '40px' }}
            onClick={() => {
              dispatch({ type: 'clearCount' });
            }}
          >
            Reset
          </button>
          <button
            style={{ fontSize: '40px' }}
            onClick={() => {
              dispatch({ type: 'increaseByAmount', payload: 5 });
            }}
          >
            +5
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
