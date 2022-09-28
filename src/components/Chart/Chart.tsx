import { useMantineTheme } from "@mantine/core";
import { createChart, ColorType } from "lightweight-charts";
import { useEffect, useRef, useState } from "react";
import instanceCoin from "../../service/instanceCoin";

const getOHLC = async (symbol: string) => {
  const options = {
    url: `/${symbol}/market_chart`,
    params: {
      vs_currency: "usd",
      days: 80,
      // interval: "daily",
    },
  };
  const response = await instanceCoin.get(options.url, {
    params: options.params,
  });
  return response.data;
};

export const Chart = (props: { symbol: string }) => {
  const { symbol } = props;
  const [data, setData] = useState();
  const chartContainerRef = useRef(document.createElement("div"));
  const theme = useMantineTheme();
  //data fetching
  useEffect(() => {
    (async () => {
      const response = await getOHLC(symbol);
      console.log(response);
      setData(
        response.prices.map((item: any) => {
          return { time: item[0] / 1000, value: item[1] };
        })
      );
    })();
  }, [symbol]);
  //chart configuration
  useEffect(() => {
    if (!data) return;
    const handleResize = () => {
      chart.applyOptions({
        width: chartContainerRef.current.clientWidth,
      });
    };

    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: {
          type: ColorType.Solid,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        },
        textColor: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.3,
          bottom: 0.25,
        },
      },
      crosshair: {
        horzLine: {
          visible: false,
          labelVisible: false,
        },
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      width: chartContainerRef.current.clientWidth,
      height: 300,
    });

    const series = chart.addAreaSeries({
      topColor: "#2962FF",
      bottomColor: "rgba(41, 98, 255, 0.28)",
      lineColor: "#2962FF",
      lineWidth: 2,
      // crosshairMarkerVisible: false,
    });

    chart.timeScale().fitContent();
    chart.timeScale().applyOptions({
      fixRightEdge: true,
      fixLeftEdge: true,
      timeVisible: true,
      secondsVisible: false,
    });
    chart.priceScale().applyOptions({});

    series.setData(data);
    // const newSeries = chart.addAreaSeries();
    // newSeries.setData(mock);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      chart.remove();
    };
  }, [data, theme.colorScheme, theme.white, theme.black, theme.colors.dark]);

  return <div ref={chartContainerRef} style={{ marginTop: "30px" }} />;
};

export default Chart;
