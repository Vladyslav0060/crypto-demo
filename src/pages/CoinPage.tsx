import { CoinCard, ICoinInfo } from "../components/types/types";
import { Badge, Grid, Paper, Space } from "@mantine/core";
import AnimatedPage from "../components/AnimatedPage";
import CardComponent from "../components/Card/Card";
import CarouselComponent from "../components/Carousel/Carousel";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import utils from "../utils/utils";
import React from "react";

const CoinPage = () => {
    const [data, setData] = useState<ICoinInfo>();
    const [cardsData, setCardsData] = useState<CoinCard[]>();
    const location = useLocation();

    const getDataForCards = (data: ICoinInfo) => {
        return [
            {
                value: data.market_data.market_cap.usd,
                percentage: data.market_data.market_cap_change_percentage_24h,
                currencySymbol: "$",
            },
            {
                value: data.market_data.fully_diluted_valuation?.usd || 0,
                percentage: data.market_data.market_cap_change_percentage_24h,
                currencySymbol: "$",
            },
            {
                value: data.market_data.total_volume.usd,
                currencySymbol: "$",
            },
            {
                value: data.market_data.circulating_supply,
                currencySymbol: data.symbol,
            },
        ];
    };
    useEffect(() => {
        const getCoinData = async () => {
            const response = await axios.get<ICoinInfo>(
                process.env.REACT_APP_COIN_INFO_URL +
                    location.pathname.split("/").reverse()[0]
            );
            setData(response.data);
            let cardsData: CoinCard[] = getDataForCards(response.data);
            setCardsData(cardsData);
        };
        getCoinData();
    }, [location.pathname]);
    return (
        <>
            {!!data && (
                <AnimatedPage>
                    <div
                        style={{
                            height: "250px",
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Paper className="coin-price" shadow="lg">
                            <div className="coin-price__icon">
                                <img alt="" src={data.image.large} />
                            </div>
                            <div className="coin-price__title">
                                <h3>{data.name}</h3>
                                <div className="coin-price__title-price">
                                    <h2>
                                        {utils.formatPrice(
                                            data.market_data.current_price.usd
                                        )}
                                    </h2>
                                    <div className="percentage">
                                        <span
                                            className={
                                                data.market_data
                                                    .price_change_percentage_24h >
                                                0
                                                    ? "up"
                                                    : "down"
                                            }
                                        >
                                            {utils.formatPercentage(
                                                data.market_data
                                                    .price_change_percentage_24h
                                            )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="coin-price__tags">
                                <span className="coin-price__subtitle">
                                    Tags
                                </span>

                                <div className="coin-price__badges">
                                    {data.categories
                                        .slice(0, 5)
                                        .map((item: string) => (
                                            <Badge
                                                style={{
                                                    overflow: "initial",
                                                }}
                                            >
                                                {item}
                                            </Badge>
                                        ))}
                                </div>
                            </div>
                        </Paper>
                        <div
                            style={{
                                width: "48%",
                                height: "100%",
                            }}
                        >
                            <CarouselComponent />
                        </div>
                    </div>
                    <Space h={30} />
                    <Paper shadow="lg">
                        <Grid columns={16} gutter={0}>
                            {!!cardsData &&
                                cardsData.map((item: any, index: number) => (
                                    <Grid.Col
                                        key={item.value}
                                        span={14}
                                        sm={8}
                                        lg={4}
                                        xs={14}
                                    >
                                        <CardComponent
                                            props={item}
                                            index={index}
                                        />
                                    </Grid.Col>
                                ))}
                        </Grid>
                    </Paper>
                </AnimatedPage>
            )}
        </>
    );
};

export default React.memo(CoinPage);
