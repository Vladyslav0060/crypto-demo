type ICard = {
    title: string;
    description: string;
};

export const coinCards: ICard[] = [
    {
        title: "Market cap",
        description:
            "Market capitalization refers to the total dollar market value of a company's outstanding shares of stock.",
    },
    {
        title: "Fully Diluted",
        description: `The market cap if the max supply was in circulation.

            Fully-diluted market cap (FDMC) = price x max supply. If max supply is null, FDMC = price x total supply. if max supply and total supply are infinite or not available, fully-diluted market cap shows - -.`,
    },
    {
        title: "Volume",
        description: "A measure of how much of a cryptocurrency was traded.",
    },
    {
        title: "Circulation supply",
        description:
            "The amount of coins that are circulating in the market and are in public hands. It is analogous to the flowing shares in the stock market.",
    },
];
