import { Badge, Paper } from "@mantine/core";
import utils from "../../utils/utils";
import { ICoinInfo } from "../types/types";

const CoinTitlePanel = (props: { data: ICoinInfo }) => {
  const { data } = props;
  return (
    <Paper className="coin-price" shadow="lg">
      <div className="coin-price__icon">
        <img alt="" src={data.image.large} />
      </div>
      <div className="coin-price__title">
        <h3>{data.name}</h3>
        <div className="coin-price__title-price">
          <h2>{utils.formatPrice(data.market_data.current_price.usd)}</h2>
          <div className="percentage">
            <span
              className={
                data.market_data.price_change_percentage_24h > 0 ? "up" : "down"
              }
            >
              {utils.formatPercentage(
                data.market_data.price_change_percentage_24h
              )}
            </span>
          </div>
        </div>
      </div>
      <div className="coin-price__tags">
        <span className="coin-price__subtitle">Tags</span>

        <div className="coin-price__badges">
          {data.categories.slice(0, 3).map((item: string) => (
            <Badge
              key={item}
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
  );
};

export default CoinTitlePanel;
