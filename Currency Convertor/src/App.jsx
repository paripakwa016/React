import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import CurrencyInfo from "./hooks/currencyInfo";
import names from "./names.json"; // Assuming this contains the currency codes and names.

function App() {
    const BackgroundImage = "https://t4.ftcdn.net/jpg/06/19/45/57/360_F_619455799_kDInySZ0jbzmmMJdnUTUNOap8Zshrlsj.jpg";
     // Fetch USD rates from API

    const [list, setList] = useState(Object.keys(names)); // Dynamically get the list of available currencies
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    let currencies_ratio = CurrencyInfo(from);
    const [fromAmount, setFromAmount] = useState(0);
    const [toAmount, setToAmount] = useState(0);

    // Swap the currencies and the amounts
    function swap() {
        setFrom(to);
        setTo(from);
        setFromAmount(toAmount)
    }

    // Convert currency based on both from and to rates
    function convert() {
        const ratio =  currencies_ratio[to.toLowerCase()]; 
        // Get conversion ratio for the 'to' currency
    
        if (ratio) {
            setToAmount(ratio * fromAmount); // Convert based on ratio and fromAmount
        }
    }
    

    useEffect(() => {
        convert();
    }, [from, to, fromAmount,currencies_ratio]);

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('${BackgroundImage}')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                list={list}
                                currency={from}
                                amount={fromAmount}
                                amount_change={setFromAmount}
                                currency_change={setFrom}
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
                                list={list}
                                currency={to}
                                amount={toAmount}
                                amount_change={setToAmount}
                                currency_change={setTo}
                                inputdisable={true}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;
