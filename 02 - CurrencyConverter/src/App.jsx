import { useState } from 'react'
import InputBox  from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom]  = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
     <div className='wrapper w-screen h-screen flex flex-col justify-between items-center bg-slate-900'>

      <div className="Header bg-slate-950 w-screen h-20 flex justify-center items-center">
        <p className='text-slate-50 text-3xl'>Currency Converter</p>
      </div>
      <div
        className="Input w-full flex flex-wrap justify-center items-center bg-cover bg-no-repeat "
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                       e.preventDefault();
                       convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount= {amount}
                            currencyOptions={options}
                            onCurrencyChange= {(currency)=>setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount)=>setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount= {convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange= {(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from} to {to}
                    </button>
                </form>
            </div>
        </div>
      </div>

      <div className='footer w-screen h-20 bg-slate-950 flex items-center justify-center flex-col'>
      <p className='text-slate-50'> Code with ❤️ by <a href='https://github.com/Sandip123samanta' className='text-blue-500 font-medium'>Sandip Samanta</a></p>
        <p><a href='https://github.com/Sandip123samanta/30DaysofReact' className='text-blue-500 font-medium'>#30DaysofReact</a></p>
      </div>
     </div>
);
}

export default App
