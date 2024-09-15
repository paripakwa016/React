import { useCallback, useEffect } from "react";

function InputBox({
    label,
    amount,
    list,
    currency = "usd",
    amount_change,
    currency_change, // This can be a prop to handle selected currency change
    className = "",
    inputdisable
}) {
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">{label}</label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => amount_change(e.target.value)}
                    readOnly={inputdisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">{currency}</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currency} // Set the selected value
                    onChange={(e) =>{console.log(e.target.value); currency_change(e.target.value)}} // Handle currency change
                >
                    {list.map((currencyOption) => (
                        <option key={currencyOption} value={currencyOption}>
                            {currencyOption}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
