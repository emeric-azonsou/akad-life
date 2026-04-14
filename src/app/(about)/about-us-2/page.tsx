import Link from "next/link";
import { IMAGES } from "@/constant/theme";
import ClientSwiper from "@/component/ClientSwiper";
import Pagebanner from "@/component/Pagebanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import HighlyTeam from "@/component/HighlyTeam";
import CompareSwiper from "@/component/CompareSwiper";
import WantApponiment from "@/component/WantApponiment";
import TestiSwiper from "@/component/TestimonialSwiper";
import Twentytwenty2 from "@/component/Twentytwenty2";
import Image from "next/image";
import PrecticeGallery from "./_components/PrecticeGallery";
import Cardblog from "./_components/Cardblog";

function AboutUs2() {    
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Notre Histoire' />
                <section className="content-inner">
                    <div className="container">
                        <div className="section-head style-1 row align-items-end justify-content-between m-b30">
                            <div className="col-xl-4 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <h2 className="title m-b0">Découvrez la Clinique AKAD'LIFE</h2>
                            </div>
                            <div className="col-xl-7 col-lg-6 m-b10 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <p className="font-20">Bienvenue à la Clinique Médicale AKAD'LIFE ! Nous sommes dédiés à la santé de la femme, avec une expertise reconnue en gynécologie et obstétrique, dans un environnement moderne et bienveillant à Comè.</p>
                            </div>
                        </div>
                        <PrecticeGallery />
                    </div>
                </section>
                <section className="content-inner-2 overlay-secondary-dark background-blend-luminosity bg-img-fix bg-half-bottom bg-half-light bg-half-sm" style={{ backgroundImage: `url(${IMAGES.bg9.src})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right center', backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                                <div className="section-head style-3 m-b30 text-white me-xl-4 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title text-white">Votre Santé Féminine, Notre Priorité</h2>
                                    <div className="widget-rating3 m-b30">
                                        <ul className="star-list">
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                            <li><i className="fa fa-star" /></li>
                                        </ul>
                                        <span className="rating text-white me-2">(4.8)</span>
                                        <span className="text text-white">Avis vérifiés sur Google</span>
                                    </div>
                                    <p className="fw-medium">Depuis sa création, la Clinique Médicale AKAD'LIFE s'engage à offrir des soins gynécologiques et obstétricaux de premier ordre aux femmes de Comè et de toute la région du Mono.</p>
                                    <p>Notre équipe pluridisciplinaire de gynécologues, sages-femmes et infirmiers spécialisés vous accompagne tout au long de votre parcours de santé. De la consultation préventive au suivi de grossesse, en passant par l'accouchement et les soins post-partum, nous mettons notre expertise au service de votre bien-être et de celui de votre famille. La clinique accueille également des patients pour des consultations de médecine générale.</p>
                                </div>
                            </div>
                            <div className="col-lg-5 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="dz-media height-sm radius-xl">
                                    <Image src={IMAGES.about18} alt="about18" />
                                </div>
                            </div>
                        </div>
                        <div className="row align-items-center content-inner-3">
                            <ClientSwiper columnstand1='text-white' columnstand2='light' />
                        </div>
                        <div className="row">
                            <Cardblog />
                        </div>
                    </div>
                </section>
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-7 col-lg-6 m-b30 pe-xl-5">
                                <div className="section-head style-1 m-b30">
                                    <h2 className="title wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Rencontrez Notre Directrice</h2>
                                    <h3 className="text-primary font-24 m-b20 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Dr. Marie Neylla D'ALMEIDA</h3>
                                    <p className="fw-normal wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">En tant que gynécologue-obstétricienne, je m'efforce de faire de notre clinique un lieu chaleureux et rassurant où chaque patiente se sent écoutée et en confiance. Ma passion est d'accompagner les femmes dans toutes les étapes de leur vie : de la prévention à la maternité. Mes patientes font partie intégrante de ma communauté à Comè, et je m'engage à leur offrir les soins les plus attentionnés et les plus efficaces. Notre équipe comprend que l'appréhension peut retarder une consultation, c'est pourquoi nous veillons à ce que chaque visite à AKAD'LIFE soit une expérience rassurante.</p>
                                </div>
                                <div className="row align-items-center g-4">
                                    <div className="col-sm-6 d-flex wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                        <div className="text-center">
                                            <Image src={IMAGES.sign} alt="" />
                                            <span className="font-14 d-block">Dr. Marie Neylla D'ALMEIDA</span>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                        <Link href="/appointment" className="btn btn-lg btn-icon btn-primary">
                                            Appointment
                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-6 m-b30 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                <div className="dz-media height-md radius-xl">
                                    <Image src={IMAGES.testimonial3} alt="doctor" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner" style={{ backgroundImage: `url(${IMAGES.bg2.src})`, 
                    backgroundPosition: 'right top', backgroundRepeat: 'no-repeat', backgroundSize: '100%' }}
                >
                    <div className="container">
                        <HighlyTeam />
                    </div>
                </section>
                <CompareSwiper />
                <Twentytwenty2 />
                <section className="content-inner gradient-primary overflow-hidden">
                    <TestiSwiper />
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <ClientSwiper />
                        </div>
                    </div>
                </section>
                <WantApponiment />
            </main>
            <Footer />            
        </>
    )
}
export default AboutUs2;