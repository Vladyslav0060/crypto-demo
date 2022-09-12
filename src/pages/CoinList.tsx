import React, { useEffect, useState } from "react";
import TableComponent from "../components/Table/Table";
import axios from "axios";

interface RowData {
    id?: string;
    symbol?: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
}

// const data: RowData[] = [
//     {
//         name: "Athena Weissnat",
//         price: 123,
//         price_change_percentage_24h: 1.5,
//         total_volume: 10000,
//         market_cap: 12444455,
//     },
//     {
//         name: "Deangelo Runolfsson",
//         price: 1232,
//         price_change_percentage_24h: 1.5,
//         total_volume: 15000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Danny Carter",
//         price: 125,
//         price_change_percentage_24h: 1.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Trace Tremblay PhD",
//         price: 133,
//         price_change_percentage_24h: 1.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Derek Dibbert",
//         price: 123,
//         price_change_percentage_24h: 1.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Viola Bernhard",
//         price: 123,
//         price_change_percentage_24h: 1.05,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Austin Jacobi",
//         price: 123,
//         price_change_percentage_24h: 1.65,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Hershel Mosciski",
//         price: 123,
//         price_change_percentage_24h: 1.45,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Mylene Ebert",
//         price: 123,
//         price_change_percentage_24h: -1.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Lou Trantow",
//         price: 132,
//         price_change_percentage_24h: -12.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Dariana Weimann",
//         price: 123,
//         price_change_percentage_24h: -17.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Dr. Christy Herman",
//         price: 1233,
//         price_change_percentage_24h: -118.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Katelin Schuster",
//         price: 123,
//         price_change_percentage_24h: 1.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Melyna Macejkovic",
//         price: 123,
//         price_change_percentage_24h: 1.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Pinkie Rice",
//         price: 123,
//         price_change_percentage_24h: 1.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
//     {
//         name: "Brain Kreiger",
//         price: 123,
//         price_change_percentage_24h: 1.5,
//         total_volume: 10000,
//         market_cap: 12344455,
//     },
// ];

const CoinList = () => {
    const [data, setData] = useState<RowData[]>();
    useEffect(() => {
        const getAssets = async () => {
            const response = await axios.get(process.env.REACT_APP_ASSETS);
            const result: RowData[] = response.data.map((item: RowData) => {
                return {
                    id: item.id,
                    symbol: item.symbol,
                    name: item.name,
                    current_price: item.current_price,
                    price_change_percentage_24h:
                        item.price_change_percentage_24h,
                    total_volume: item.total_volume,
                    market_cap: item.market_cap,
                };
            });
            setData(result);
        };
        getAssets();
    }, []);
    return <div>{data ? <TableComponent data={data} /> : <></>}</div>;
};

export default CoinList;
