
import './App.css';

function App() {
  return (
    <>
    <div className="App">
        <h1 className="text-9xl font-bold text-blue-300 bg-blue-700">
      Hello world!
    </h1>
    </div>

    <div className='flex justify-between items-center w-3/5 m-auto mt-9 bg-green-300 p-9'>
      <h1 className='flex justify-center items-center bg-red-500 w-16 h-16 rounded-xl border-4 border-pink-500' >PRVI</h1>
      <h1 className='flex justify-center items-center bg-green-500 w-16 h-16 rounded-xl'>DRUGI</h1>
      <h1 className='flex justify-center items-center bg-yellow-500 w-20 h-16 rounded-xl'>TRECI</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-yellow-50 font-bold py-4 px-6 rounded '>Button</button>
    </div>
    </>
  );
}

export default App;
