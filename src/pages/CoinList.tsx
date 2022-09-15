import React, { useEffect, useState } from "react";
import { ICoinRowData } from "../components/types/types";
import TableComponent from "../components/Table/Table";
import axios from "axios";

const CoinList = () => {
    const [data, setData] = useState<ICoinRowData[]>();
    useEffect(() => {
        const getAssets = async () => {
            const response = await axios.get(process.env.REACT_APP_ASSETS_URL);
            const result: ICoinRowData[] = response.data.map(
                (item: ICoinRowData) => {
                    return {
                        id: item.id,
                        symbol: item.symbol,
                        name: item.name,
                        current_price: item.current_price,
                        price_change_percentage_24h:
                            item.price_change_percentage_24h,
                        total_volume: item.total_volume,
                        market_cap: item.market_cap,
                        image: item.image,
                    };
                }
            );
            setData(result);
        };
        getAssets();
        // const interval = setInterval(() => {
        //     getAssets();
        // }, 10000);
        // return () => clearInterval(interval);
    }, []);
    return <div>{data ? <TableComponent data={data} /> : <></>}</div>;
};

export default React.memo(CoinList);
