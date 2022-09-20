import image1 from "../assets/homepage/image1.svg";
import image2 from "../assets/homepage/image2.svg";
import image3 from "../assets/homepage/image3.svg";
import coinIcon from "../assets/icons/coinIcon.png";
import noteIcon from "../assets/icons/noteIcon.png";
import planetIcon from "../assets/icons/planetIcon.png";
import dotsIcon from "../assets/icons/dotsIcon.png";
import "./HomePage.scss";
import AnimatedPage from "../components/AnimatedPage";
import TextComponent from "../components/TextComponent";

const HomePage = () => {
    return (
        <AnimatedPage>
            {/* <button className="button">Click me!</button> */}
            <div className="homepage-block">
                <div className="homepage-block__content">
                    <h2 className="homepage-block__content-title">
                        Top 1 Altcoin Exchange
                    </h2>
                    <span className="homepage-block__content-subtitle">
                        Discover promising coins that cannot be found on other
                        crypto exchanges.
                    </span>
                    <div className="subtitle">
                        <div className="col">
                            <img src={coinIcon} alt="" />
                            <span className="value">700+</span>
                            <span className="title">
                                <TextComponent>Coins</TextComponent>
                            </span>
                        </div>
                        <div className="col">
                            <img src={noteIcon} alt="" />
                            <span className="value">1+ Trillion</span>
                            <span className="title" color="dark">
                                <TextComponent>
                                    Accumulated Trading Volume (USD)
                                </TextComponent>
                            </span>
                        </div>
                    </div>
                </div>
                <img src={image1} alt="" />
            </div>

            <div className="homepage-block">
                <div className="homepage-block__content">
                    <h2 className="homepage-block__content-title">
                        Largest Social Trading Platform
                    </h2>
                    <span className="homepage-block__content-subtitle">
                        Interact with global crypto investors and gain access to
                        timely and trusted crypto news.
                    </span>
                    <div className="subtitle">
                        <div className="col">
                            <img src={coinIcon} alt="" />
                            <span className="value">1 Million</span>
                            <span className="title">
                                <TextComponent>News Feeds Posted</TextComponent>
                            </span>
                        </div>
                        <div className="col">
                            <img src={noteIcon} alt="" />
                            <span className="value">20+ Million</span>
                            <span className="title" color="dark">
                                <TextComponent>Global Investors</TextComponent>
                            </span>
                        </div>
                    </div>
                </div>
                <img src={image2} alt="" />
            </div>

            <div className="homepage-block">
                <div className="homepage-block__content">
                    <h2 className="homepage-block__content-title">
                        The People's Exchange
                    </h2>
                    <span className="homepage-block__content-subtitle">
                        The KuCoin platform was designed for investors of all
                        types, with 24/7 world-class services in your preferred
                        channel and language.
                    </span>
                    <div className="subtitle">
                        <div className="col">
                            <img src={dotsIcon} alt="" />
                            <span className="value">20+</span>
                            <span className="title">
                                <TextComponent>
                                    Global Communities
                                </TextComponent>
                            </span>
                        </div>
                        <div className="col">
                            <img src={planetIcon} alt="" />
                            <span className="value">200+</span>
                            <span className="title" color="dark">
                                <TextComponent>Countries Covered</TextComponent>
                            </span>
                        </div>
                    </div>
                </div>
                <img src={image3} alt="" />
            </div>
        </AnimatedPage>
    );
};

export default HomePage;
