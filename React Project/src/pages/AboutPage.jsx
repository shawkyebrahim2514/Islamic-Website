import { Helmet } from "react-helmet";
import AboutBody from "../components/About/AboutBody";

export default function AboutPage() {
    return (
        <>
            <Helmet>
                <title>About me</title>
            </Helmet>
            <AboutBody />
        </>
    )
}
