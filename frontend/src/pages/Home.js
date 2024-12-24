import About from "../layouts/About";
import Client from "../layouts/Client";
import Contact from "../layouts/Contact";
import Discount from "../layouts/Discount";
import Feature from "../layouts/Feature";
import Health from "../layouts/Health";
import Info from "../layouts/Info";

const Home = () => {
    return <>
        <Feature/>
        <Discount/>
        <Health/>
        <About/>
        <Client/>
        <Contact/>
        <Info/>
    </>
};

export default Home;