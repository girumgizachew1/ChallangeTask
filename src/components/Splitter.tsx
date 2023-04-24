import React, { useMemo, useState } from 'react'
import { BsFillPersonFill } from "react-icons/bs";

function Splitter() {
    // Initialize state variables
    const [billAmount, setBillAmount] = useState<number>(0);
    const [tipPercentage, setTipPercentage] = useState<number>(0);
    const [numOfPeople, setNumOfPeople] = useState<number>(1);
    const [isZero, setIsZero] = useState(false);

    // Calculate tip per person and total per person
    //The function passed to useMemo calculates the tip information, including the tip per person and total per person, and returns an object containing those values. The dependencies passed as the second argument to useMemo ensure that the function is only recalculated if one of those state variables changes.
    const tipInfo = useMemo(() => {
        const tipAmount = billAmount * (tipPercentage / 100);
        const total = billAmount + tipAmount;
        const tipPerPerson = tipAmount / numOfPeople;
        const totalPerPerson = total / numOfPeople;
        return {
            tipPerPerson: tipPerPerson.toFixed(2),
            totalPerPerson: totalPerPerson.toFixed(2),
        };
    }, [billAmount, tipPercentage, numOfPeople]);

    // Reset all state variables to their initial values
    const handleReset = (): void => {
        setBillAmount(0);
        setTipPercentage(0);
        setIsZero(false);
        setNumOfPeople(1);
    };

    // Update billAmount state variable when input value changes
    const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // Only update the state if the input value is non-negative
        let value = parseInt(e.target.value);
        if (value >= 0) setBillAmount(value);
    };

    // Update tipPercentage state variable when button is clicked
    const handleTipChange = (value: number | string): void => {
        setTipPercentage(parseFloat(value.toString()));
    };

    // Update numOfPeople state variable when input value changes
    const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;
        // If the input value is non-positive, set isZero to true and update numOfPeople state variable
        if (value <= '0') {
            setIsZero(true);
            setNumOfPeople(parseFloat(e.target.value));
        } else {
            setIsZero(false);
            setNumOfPeople(parseFloat(e.target.value));
        }
    };



    return (
        <div>
            <div className="w-full h-full lg:h-screen bg-cyan-100 flex flex-col items-center justify-center">
                <h1 className="text-2xl font-semibold text-gray-600  mt-10 ">
                    <span className="inline-block align-top">S</span>
                    <span className="inline-block align-top ml-2">P</span>
                    <span className="inline-block align-top ml-2">L</span>
                    <span className="inline-block align-top ml-2">T</span>
                    <br />
                    <span className="inline-block align-top ">T</span>
                    <span className="inline-block align-top ml-2">T</span>
                    <span className="inline-block align-top ml-2">E</span>
                    <span className="inline-block align-top ml-2">R</span>
                </h1>
                <div className="bg-white mt-10 md:mt-20 rounded-t-3xl md:rounded-xl shadow-md p-4 space-y-5 md:space-x-10 mb-4 flex flex-col md:flex-row">
                    <div className="flex flex-col gap-4 justify-between py-5 space-y-10 px-5">
                        {/* Bill amount input field */}
                        <div>
                            <label htmlFor="billAmount" className="text-gray-600 font-bold block text-gray-400 mb-2">Bill</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-300 text-xl">
                                    $
                                </span>
                                <input
                                    type="number"
                                    id="billAmount"
                                    value={billAmount || ''}
                                    placeholder='0'
                                    min='0'
                                    onChange={handleBillChange}
                                    className="w-full pl-10 pr-3 py-2 border border-gray-200  outline-none text-right rounded-md text-teal-800 text-3xl leading-tight focus:border-2 focus:border-teal-300"
                                    style={{ appearance: "textfield" }}
                                />

                            </div>
                        </div>
                        {/* Select Tips input field */}

                        <div className='mx-3' >
                            <label htmlFor="tipPercentage customTip" className="text-gray-600 font-bold block text-gray-400 mb-2">Select Tip %</label>
                            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 text-lg md:text-2xl">
                                <button className={`w-32 md:w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white  font-bold hover:bg-teal-300 hover:text-teal-800  ${tipPercentage === 5 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(5)}>5%</button>
                                <button className={`w-32 md:w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white font-bold hover:bg-teal-300 hover:text-teal-800  ${tipPercentage === 10 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(10)}>10%</button>
                                <button className={`w-32 md:w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white font-bold hover:bg-teal-300 hover:text-teal-800  ${tipPercentage === 15 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(15)}>15%</button>
                                <button className={`w-32 md:w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white font-bold hover:bg-teal-300 hover:text-teal-800  ${tipPercentage === 20 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(20)}>20%</button>
                                <button className={`w-32 md:w-40 py-2 px-3 border border-gray-300 rounded-md bg-teal-800 text-white font-bold hover:bg-teal-300 hover:text-teal-800  ${tipPercentage === 25 ? 'bg-teal-300 text-teal-800' : 'bg-teal-800 text-white'}`} onClick={() => handleTipChange(25)}>25%</button>
                                <input style={{ appearance: "textfield" }}
                                    type="number"
                                    id="customTip"
                                    value={tipPercentage || ''}
                                    onChange={(e) => {
                                        let value = parseInt(e.target.value);
                                        if (isNaN(value) || value < 0) {
                                            value = 0;
                                        } else if (value > 100) {
                                            value = 100;
                                        }
                                        handleTipChange(value);
                                    }}
                                    placeholder='CUSTOM'
                                    className="w-32 md:w-40 text-right  text-teal-700 rounded-md outline-none focus:border-2 focus:border-teal-300 py-2 px-3 leading-tight" />
                            </div>
                        </div>

                        {/* Number of people input field */}
                        <div>
                            <div className='flex justify-between' >
                                <label htmlFor="numOfPeople" className="text-gray-600 font-bold block text-gray-400 mb-2">Number of People</label>
                                <label htmlFor="numOfPeople" className="text-red-600 block text-gray-400 mb-2 text-xs">{isZero ? "Minimum Value is 1" : ''}</label>

                            </div>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-300 text-xl">
                                    <BsFillPersonFill />
                                </span>
                                <input
                                    type="number"
                                    pattern="\d*"
                                    id="numOfPeople"
                                    value={numOfPeople}
                                    onChange={handlePeopleChange}
                                    className={`w-full pl-10 pr-3 py-2 text-right rounded-md  text-teal-800 text-3xl leading-tight outline-none border border-gray-200 ${isZero ? "focus:border-2 focus:border-red-300 border border-red-400 " : "focus:border-2 focus:border-teal-300"} `}
                                    style={{ appearance: "textfield" }}
                                />

                            </div>
                        </div>
                    </div>
                    {/* Displaying total tip per person and total amount per person */}
                    <div className="bg-white rounded-xl shadow-md p-10  bg-teal-800 flex flex-col justify-between w-[42vh] md:w-[45vh] " style={{ backgroundColor: "#008080" }} >
                        <div className="flex flex-col gap-6">
                            <div className='flex justify-between' >
                                
                            <div>
                                    <label htmlFor="totalPerPerson" className="text-white text-base font-bold block mb-2">Tip Amount </label>
                                    <label htmlFor="totalPerPerson" className="text-gray-100 text-sm font-normal block mb-2"> / Person</label>

                                </div>
                                <p id="tipPerPerson" className="font-bold text-xl md:text-3xl text-teal-100">$ {!isZero ? tipInfo.tipPerPerson : "0.00"}</p>
                            </div>
                            <div className='flex justify-between' >
                                <div>
                                    <label htmlFor="totalPerPerson" className="text-white text-base font-bold block mb-2">Total </label>
                                    <label htmlFor="totalPerPerson" className="text-gray-100 text-sm font-normal block mb-2"> / Person</label>

                                </div>
                                <p id="totalPerPerson" className="font-bold text-xl md:text-3xl text-teal-100">$ {!isZero ? tipInfo.totalPerPerson : "0.00"}</p>
                            </div>
                        </div>
                        <div className='w-full mt-6 ' >
                            <button onClick={handleReset} className="w-full bg-teal-300 hover:bg-teal-200 text-teal-800 font-bold py-2 px-4 rounded-lg">
                                Reset
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splitter