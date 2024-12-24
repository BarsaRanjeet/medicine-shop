import ClockSVG from "../common/svgs/clock.svg";
import ICardSVG from "../common/svgs/icard.svg";
import LoaderSVG from "../common/svgs/loader.svg";

const Feature = () => {
    return <section className="feature_section  layout_padding">
        <div className="container">
            <div className="feature_container">
                <div className="box">
                    <div className="img-box">
                        <img src={LoaderSVG} />
                    </div>
                    <div className="detail-box">
                        <h5>
                            Fast Delivery
                        </h5>
                        <p>
                            It is a long established fact that a reader will be distracted by
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="img-box">
                        <img src={ICardSVG} height={53} width={53}/>
                    </div>
                    <div className="detail-box">
                        <h5>
                            license of government
                        </h5>
                        <p>
                            It is a long established fact that a reader will be distracted by
                        </p>
                    </div>
                </div>
                <div className="box">
                    <div className="img-box">
                        <img src={ClockSVG} />

                    </div>
                    <div className="detail-box">
                        <h5>
                            support24/7
                        </h5>
                        <p>
                            It is a long established fact that a reader will be distracted by
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default Feature;