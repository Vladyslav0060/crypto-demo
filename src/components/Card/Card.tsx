import { Popover, Text, Title } from "@mantine/core";
import { coinCards } from "../../static/CoinCards";
import "./Card.scss";
import utils from "../../utils/utils";

const CardComponent = (data: { props: any; index: number }) => {
    const { props, index } = data;
    return (
        <div className="coin-info-card">
            <div className="title">
                <Title order={4} weight={600}>
                    {coinCards[index].title}
                </Title>
                <div className="title__info">
                    <Popover
                        width={200}
                        position="bottom"
                        withArrow
                        shadow="lg"
                    >
                        <Popover.Target>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="icon icon-tabler icon-tabler-info-circle"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="#9e9e9e"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <circle cx="12" cy="12" r="9" />
                                <line x1="12" y1="8" x2="12.01" y2="8" />
                                <polyline points="11 12 12 12 12 16 13 16" />
                            </svg>
                        </Popover.Target>
                        <Popover.Dropdown>
                            <Text size="sm">
                                {coinCards[index].description}
                            </Text>
                        </Popover.Dropdown>
                    </Popover>
                </div>
            </div>
            <div className="price-info">
                <div className="price-info__value">
                    <h1 about={props.currencySymbol.toUpperCase()}>
                        {utils.formatLargePrice(props.value, false)}
                    </h1>
                </div>
                {!!props.percentage && (
                    <div className="price-info__percentage">
                        <h3 className={props.percentage > 0 ? "up" : "down"}>
                            {utils.formatPercentage(props.percentage)}
                        </h3>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardComponent;
