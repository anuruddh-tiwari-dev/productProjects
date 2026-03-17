import { Carousel } from "react-bootstrap"
import "./slider.css"

const Slider = () => {

    return (

        <Carousel>

            <Carousel.Item>

                <div className="slider-box">

                    <img
                        src="https://picsum.photos/1200/400?1"
                        alt=""
                        className="slider-img"
                    />

                    <div className="slider-text">
                        <h2>Big Sale On Electronics</h2>
                        <p>Up to 50% discount on mobiles and gadgets</p>
                    </div>

                </div>

            </Carousel.Item>

            <Carousel.Item>

                <div className="slider-box">

                    <img
                        src="https://picsum.photos/1200/400?2"
                        alt=""
                        className="slider-img"
                    />

                    <div className="slider-text">
                        <h2>Fashion Collection</h2>
                        <p>New stylish clothes for men and women</p>
                    </div>

                </div>

            </Carousel.Item>

            <Carousel.Item>

                <div className="slider-box">

                    <img
                        src="https://picsum.photos/1200/400?3"
                        alt=""
                        className="slider-img"
                    />

                    <div className="slider-text">
                        <h2>Sports & Fitness</h2>
                        <p>Best quality cycles and gym accessories</p>
                    </div>

                </div>

            </Carousel.Item>

        </Carousel>

    )

}

export default Slider