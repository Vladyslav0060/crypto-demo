import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { Paper } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";

const mockData = [
  {
    image:
      "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    url: "/coin/bitcoin",
    rank: "#1",
    name: "Bitcoin",
    symbol: "BTC",
  },
  {
    image:
      "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    url: "/coin/ethereum",
    rank: "#2",
    name: "Ethereum",
    symbol: "ETH",
  },
  {
    image:
      "https://assets.coingecko.com/coins/images/1094/large/tron-logo.png?1547035066",
    url: "/coin/tron",
    rank: "#7",
    name: "Tron",
    symbol: "TRX",
  },
  {
    image:
      "https://assets.coingecko.com/coins/images/11939/large/shiba.png?1622619446",
    url: "/coin/shiba-inu",
    rank: "#12",
    name: "Shiba Inu",
    symbol: "SHIB",
  },
  {
    image:
      "https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912",
    url: "/coin/matic-network",
    rank: "#58",
    name: "Poligon",
    symbol: "MATIC",
  },
];

const CarouselComponent = () => {
  const autoplay = useRef(Autoplay({ delay: 4500 }));
  return (
    <Paper shadow="sm" style={{ height: "100%", width: "48%" }}>
      <Carousel
        withIndicators
        height="100%"
        slideSize="33.333333%"
        slideGap="xs"
        breakpoints={[
          { maxWidth: "md", slideSize: "50%" },
          { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
        ]}
        loop
        align="start"
        style={{ height: "100%" }}
        dragFree
        initialSlide={0}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        controlsOffset="xs"
      >
        {mockData.map((item: any) => (
          <Carousel.Slide key={item.name}>
            <Paper shadow="lg" className="carousel-card">
              <div className="carousel-card__title">
                <img src={item.image} alt="icon" />
                <span>{item.rank}</span>
              </div>
              <div className="coin-info">
                <Link to={item.url}>
                  <h4>{item.name}</h4>
                </Link>
                <p>{item.symbol}</p>
              </div>
            </Paper>
          </Carousel.Slide>
        ))}
      </Carousel>
    </Paper>
  );
};

export default CarouselComponent;
