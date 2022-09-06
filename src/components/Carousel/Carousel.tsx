import { useRef } from 'react';
import { Carousel } from '@mantine/carousel';
import { Paper } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';

const CarouselComponent = () => {
    const autoplay = useRef(Autoplay({ delay: 3000 }));

    return (
        <Paper shadow="lg" style={{ height: '100%', }}>
            <Carousel
                withIndicators
                height="100%"
                slideSize="33.333333%"
                slideGap="xs"
                breakpoints={[
                    { maxWidth: 'md', slideSize: '50%' },
                    { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
                ]}
                loop
                align="start"
                style={{ height: '100%', }}
                dragFree
                initialSlide={0}
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                controlsOffset="xs"
            >
                <Carousel.Slide>
                    <Paper shadow='xl' className="carousel-card">
                        <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Dogecoin-DOGE-icon.png" alt='icon' />
                        <div className="coin-info">
                            <h4>Sanchu Inu</h4>
                            <p>Sanchu</p>
                        </div>
                    </Paper>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Paper shadow='xl' className="carousel-card">
                        <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Dogecoin-DOGE-icon.png" alt='icon' />
                        <div className="coin-info">
                            <h4>Sanchu Inu</h4>
                            <p>Sanchu</p>
                        </div>
                    </Paper>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Paper shadow='xl' className="carousel-card">
                        <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Dogecoin-DOGE-icon.png" alt='icon' />
                        <div className="coin-info">
                            <h4>Sanchu Inu</h4>
                            <p>Sanchu</p>
                        </div>
                    </Paper>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Paper shadow='xl' className="carousel-card">
                        <div className="carousel-card__title">
                            <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Dogecoin-DOGE-icon.png" alt='icon' />
                            <span>test</span>
                        </div>




                        <div className="coin-info">
                            <h4>Sanchu Inu</h4>
                            <p>Sanchu</p>
                        </div>
                    </Paper>
                </Carousel.Slide>
                <Carousel.Slide>
                    <Paper shadow='xl' className="carousel-card">
                        <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Dogecoin-DOGE-icon.png" alt='icon' />
                        <div className="coin-info">
                            <h4>Sanchu Inu</h4>
                            <p>Sanchu</p>
                        </div>
                    </Paper>
                </Carousel.Slide>
            </Carousel>
        </Paper>
    );
};

export default CarouselComponent;