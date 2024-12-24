import React from "react";
import OwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Health = () => {

    const owl = {
        nav: true,
        navText: [],
        autoplay: true,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 4 } }
    };

    return <section className="health_section layout_padding">
        <div className="health_carousel-container">
            <h2 className="text-uppercase">
                Medicine & Health
            </h2>
            <div className="carousel-wrap layout_padding2">
                <OwlCarousel loop margin={10} autoPlay {...owl}>
                    <div className="item">
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-1.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <h6>
                                        Health
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-5.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Health
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-2.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Health
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-5.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>
                                </div>
                                <div className="text">
                                    <h6>
                                        Health
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-3.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Health
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-5.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Health
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-4.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Health
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-5.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Health
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
        <div className="health_carousel-container">
            <h2 className="text-uppercase">
                Vitamins & Supplements
            </h2>
            <div className="carousel-wrap layout_padding2">
                <OwlCarousel loop margin={10} autoPlay {...owl}>
                    <div className="item">
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-6.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Medicine
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-6.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Medicine
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-6.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Medicine
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="box">
                            <div className="btn_container">
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                            <div className="img-box">
                                <img src="images/p-6.jpg" alt="" />
                            </div>
                            <div className="detail-box">
                                <div className="star_container">
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star" aria-hidden="true"></i>
                                    <i className="fa fa-star-o" aria-hidden="true"></i>

                                </div>
                                <div className="text">
                                    <h6>
                                        Medicine
                                    </h6>
                                    <h6 className="price">
                                        <span>
                                            $
                                        </span>
                                        30
                                    </h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <a href="">
                See more
            </a>
        </div>
    </section>
};

export default Health;