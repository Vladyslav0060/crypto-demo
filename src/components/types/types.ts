export type ICard = {
    title: string;
    description: string;
    currencySymbol: string;
    percentage: number;
    price: number;
};

export type ICoinRowData = {
    id: string;
    symbol: string;
    name: string;
    current_price: number;
    price_change_percentage_24h: number;
    total_volume: number;
    market_cap: number;
    image: string;
};

export interface TableSortProps {
    data: ICoinRowData[];
}

export interface ThProps {
    children: React.ReactNode;
    reversed: boolean;
    sorted: boolean;
    onSort(): void;
}
type Currencies = {
    usd: string;
    eur: string;
};
type MarketData = {
    current_price: Currencies;
    price_change_percentage_24h: number;
    market_cap: Currencies;
    market_cap_change_percentage_24h: number;
    fully_diluted_valuation: Currencies;
    total_volume: Currencies;
    circulating_supply: number;
};
export interface ICoinInfo {
    image: any;
    id: string;
    name: string;
    market_data: MarketData;
    categories: string[];
    symbol: string;
}

export type CoinCard = {
    value: MarketData[keyof MarketData] | string;
    percentage?: MarketData[keyof MarketData];
    currencySymbol?: string;
};
