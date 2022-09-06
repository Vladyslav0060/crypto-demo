type ICard = {
    title: string;
    description: string;
    currencySymbol: string;
    percentage: number;
    price: number;
};

export const coinCards: ICard[] = [
    {
        title: "Market cap",
        description:
            "Market capitalization refers to the total dollar market value of a company's outstanding shares of stock.",
        currencySymbol: "$",
        percentage: 2.75,
        price: 2900,
    },
    {
        title: "Fully Diluted",
        description:
            "Market capitalization refers to the total dollar market value of a company's outstanding shares of stock.",
        currencySymbol: "$",
        percentage: 2.75,
        price: 2600,
    },
    {
        title: "Volume",
        description:
            "Market capitalization refers to the total dollar market value of a company's outstanding shares of stock.",
        currencySymbol: "$",
        percentage: 2.75,
        price: 200,
    },
    {
        title: "Circuation supply",
        description:
            "Market capitalization refers to the total dollar market value of a company's outstanding shares of stock.",
        currencySymbol: "$",
        percentage: 2.75,
        price: 100,
    },
];
