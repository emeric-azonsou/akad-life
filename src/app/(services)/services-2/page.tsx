import Link from "next/link";
import Pagebanner from "@/component/Pagebanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import WantApponiment from "@/component/WantApponiment";
import CompareSwiper from "@/component/CompareSwiper";
import { service2data } from "@/constant/alldata";
import Faqdata from "@/component/Faqdata";
import Image from "next/image";


function Services2() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Nos Spécialités' />
                <section className="content-inner p-b20">
                    <div className="container">
                        {service2data.map((data, i) => (
                            <div className={`dz-img-box style-3 ${data.columnstand}`} key={i}>
                                <div className="dz-media wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <Image src={data.image} alt="data" />
                                </div>
                                <div className="dz-content wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <div className="dz-number">{data.number}</div>
                                    <h2 className="title">{data.title}</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                    <p>Chaque patiente bénéficie d'un suivi adapté à ses besoins, dans un cadre rassurant et professionnel.</p>
                                    <Link href="/service-detail-2" className="btn btn-primary icon-link-hover-end radius-sm">Voir les Détails {" "}
                                        <i className="feather icon-arrow-right-circle" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <CompareSwiper />
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-2 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title">Nos Forfaits de Soins</h2>
                            <p>Des formules adaptées à chaque besoin, pour un accès simple et transparent à des soins de qualité.</p>
                        </div>
                        <Faqdata />
                    </div>
                </section>
                <WantApponiment />
            </main>
            <Footer />            
        </>
    )
}
export default Services2;