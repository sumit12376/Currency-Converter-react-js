import React from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    onCurrencyOption,
    selectCurrency = "usd",
   
    AmountDisable=false
}) {
    return (
        <div className="bg-white p-9 rounded-lg text-sm flex">
            <div className="w-1/2">
                <label className="text-black/40 mb-3 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-gray-100 py-1.5 text-black"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    disabled={AmountDisable}
                    onChange={(e) => onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none text-black"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange(e.target.value)}
                >
                    {onCurrencyOption.map((currency) => (
                        <option  value={currency}>{currency}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
