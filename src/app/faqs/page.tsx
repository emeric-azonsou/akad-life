import Pagebanner from "@/component/Pagebanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { IMAGES } from "@/constant/theme";
import AppointmentData from "@/component/AppointmentData";
import Question from "@/component/Question";
import Faqdata from "@/component/Faqdata";


function Faqs() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Questions Fréquentes' />
                <Question />
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1.src})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-2 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">Nos Forfaits de Soins</h2>
                            <p>Des formules adaptées à chaque besoin, pour un accès simple et transparent à des soins de qualité.</p>
                        </div>
                        <Faqdata />
                    </div>
                </section>
            </main>
            <Footer />            
        </>
    )
}
export default Faqs;