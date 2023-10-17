import React from 'react'


function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amoundDisable = false,
  currencyDisable = false,
  className = "",
}) {
 

  return (
      <div className={`bg-slate-800	 p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label  className="text-white mb-2 inline-block">
                  {label}
              </label>
              <input
                  disabled={amoundDisable}
                  className="text-white outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-white mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled={currencyDisable}
              >
                  
                      {currencyOptions.map((currency)=>(<option key={currency} value={currency}>
                          {currency}
                      </option>))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;
