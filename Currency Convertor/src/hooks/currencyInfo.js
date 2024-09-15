import { useEffect, useState } from "react";

function CurrencyInfo(currency_from) {
    const [data, setData] = useState({});

    // Fetch currency data function
    const curr_getter = async () => {
        const response = await fetch("https://currency-api.pages.dev/v1/currencies/" + currency_from + ".json");
        const d = await response.json();
        setData(d);
    };

    // Trigger fetching when currency_from changes
    useEffect(() => {
        curr_getter();
    }, [currency_from]);
    
    // Return the fetched data or a default value until data is available
    return data[currency_from]||{};
}

export default CurrencyInfo;
