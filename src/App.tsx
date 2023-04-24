import { useState } from 'react'
import './App.css'
import { BsFillPersonFill } from "react-icons/bs";

function App() {
  const [billAmount, setBillAmount] = useState<number>(0);
  const [tipPercentage, setTipPercentage] = useState<number>(0);
  const [numOfPeople, setNumOfPeople] = useState<number>(1);

  function calculateTip(): { tipPerPerson: string; totalPerPerson: string } {
    const tipAmount = billAmount * (tipPercentage / 100);
    const total = billAmount + tipAmount;
    const tipPerPerson = tipAmount / numOfPeople;
    const totalPerPerson = total / numOfPeople;

    return {
      tipPerPerson: tipPerPerson.toFixed(2),
      totalPerPerson: totalPerPerson.toFixed(2),
    };
  }

  const handleReset = (): void => {
    setBillAmount(0);
    setTipPercentage(0);
    setNumOfPeople(1);
  };

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setBillAmount(parseFloat(e.target.value));
  };

  const handleTipChange = (value: number | string): void => {
    setTipPercentage(parseFloat(value.toString()));
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNumOfPeople(parseFloat(e.target.value));
  };

  return (
    <div className="w-full h-screen bg-cyan-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-semibold text-gray-600 mb-4">SPIL <br /> TTER</h1>
      <div className="bg-white mt-20 rounded-lg shadow-md p-4 space-x-10 mb-4 flex flex-col md:flex-row">
        <div className="flex flex-col gap-4 justify-between py-5 space-y-10 px-5">
          <div>
            <label htmlFor="billAmount" className="text-gray-600 font-bold block text-gray-400 mb-2">Bill</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-300 text-xl">
                $
              </span>
              <input
                type="number"
                id="billAmount"
                value={billAmount}
                onChange={handleBillChange}
                className="w-full pl-10 pr-3 py-2 text-right rounded-md border-gray-300 text-teal-800 text-3xl leading-tight border border-gray-300"
                style={{ appearance: "textfield" }}
              />

            </div>
          </div>
          <div>
            <label htmlFor="tipPercentage" className="text-gray-600 font-bold block text-gray-400 mb-2">Select Tip %</label>
            <div className="grid grid-cols-3 gap-2">
              <button className={`w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white  font-bold hover:bg-teal-300 hover:text-teal-800 text-2xl ${tipPercentage === 5 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(5)}>5%</button>
              <button className={`w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white font-bold hover:bg-teal-300 hover:text-teal-800 text-2xl ${tipPercentage === 10 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(10)}>10%</button>
              <button className={`w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white font-bold hover:bg-teal-300 hover:text-teal-800 text-2xl ${tipPercentage === 15 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(15)}>15%</button>
              <button className={`w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white font-bold hover:bg-teal-300 hover:text-teal-800 text-2xl ${tipPercentage === 20 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(20)}>20%</button>
              <button className={`w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white font-bold hover:bg-teal-300 hover:text-teal-800 text-2xl ${tipPercentage === 25 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(25)}>25%</button>
              <input style={{ appearance: "textfield" }}
                type="number" id="customTip" value={tipPercentage} onChange={(e) => handleTipChange(e.target.value)} placeholder='CUSTOM' className="w-40 text-right text-2xl text-teal-700 rounded-md  focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:ring-opacity-50 py-2 px-3 leading-tight" />
            </div>
          </div>


          <div>
            <label htmlFor="numOfPeople" className="text-gray-600 font-bold block text-gray-400 mb-2">Number of People</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-300 text-xl">
                <BsFillPersonFill/>
              </span>
              <input
                type="number"
                id="billAmount"
                value={numOfPeople} onChange={handlePeopleChange}
                className="w-full pl-10 pr-3 py-2 text-right rounded-md border border-gray-300 text-teal-800 text-3xl leading-tight"
                style={{ appearance: "textfield" }}
              />

            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-10 m-6  bg-teal-900 flex flex-col justify-between w-[45vh] ">
          <div className="flex flex-col gap-4">
            <div className='flex justify-between' >
              <label htmlFor="tipPerPerson" className="text-white text-sm  font-normal block mb-2">Tip Amount <br />   / Person</label>
              <p id="tipPerPerson" className="text-gray-700 font-bold text-3xl text-teal-300">$ {calculateTip().tipPerPerson}</p>
            </div>
            <div className='flex justify-between' >
              <label htmlFor="totalPerPerson" className="text-white text-sm font-normal block mb-2">Total <br /> / Person</label>
              <p id="totalPerPerson" className="text-gray-700 font-bold text-3xl text-teal-300">$ {calculateTip().totalPerPerson}</p>
            </div>
          </div>
          <div className='w-full' >
            <button onClick={handleReset} className="w-full bg-teal-700 hover:bg-teal-300 text-teal-800 font-bold py-2 px-4 rounded-lg">
              Reset
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
export default App