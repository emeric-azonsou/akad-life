import Link from "next/link";
import Pagebanner from "@/component/Pagebanner";
import WantApponiment from "@/component/WantApponiment";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Image from "next/image";


function ServiceDetail() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Détail du Service' />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-media radius-lg height-md m-b70 m-lg-b50 m-md-b30">
                                    <Image src={IMAGES.servicelarge1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <h2 className="title fw-semibold m-b15">Suivi Gynécologique Complet</h2>
                                    <p>La Clinique Médicale AKAD'LIFE propose un suivi gynécologique complet adapté à chaque femme. Nos spécialistes vous accompagnent de la puberté à la ménopause, avec des examens de dépistage réguliers, des bilans hormonaux et des consultations personnalisées. Nous utilisons des équipements modernes pour garantir des diagnostics précis et des soins efficaces.</p>
                                    <p>Notre approche centrée sur la patiente nous permet de créer un environnement de confiance où chaque femme peut aborder librement ses préoccupations de santé. Que ce soit pour un suivi de routine, une question de fertilité ou un accompagnement en contraception, notre équipe est à votre écoute.</p>
                                    <div className="d-sm-flex align-items-center m-t30">
                                        <Link href="/contact-us" className="btn btn-lg btn-icon btn-secondary btn-shadow m-r30 mb-3 mb-sm-0"> Rendez-vous
                                            <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                        <div className="info-widget style-5">
                                            <div className="widget-media text-primary">
                                                <i className="feather icon-phone-call" />
                                            </div>
                                            <div className="widget-content">
                                                <h6 className="title">Contactez-nous</h6>
                                                <Link href="tel:+22901470474" className="text-secondary">+229 01 47 04 74 43</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                <div className="dz-media radius-lg height-sm">
                                    <Image src={IMAGES.about16} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2 clearfix">
                    <div className="container">
                        <div className="row content-bx style-9 g-0 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s" style={{ backgroundImage: `url(${IMAGES.about15.src})` }}>
                            <div className="col-xl-7 col-lg-9">
                                <h2 className="title m-b15">Qui peut bénéficier de nos soins gynécologiques ?</h2>
                                <p>Nos services s'adressent à toutes les femmes, quel que soit leur âge. Que vous ayez besoin d'un suivi gynécologique de routine, d'un accompagnement pour un projet de grossesse, d'un dépistage du cancer du col de l'utérus ou de conseils en contraception, notre équipe est là pour vous. Nous réalisons un bilan complet lors de votre première consultation afin de vous proposer un parcours de soins adapté.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-media radius-lg height-md me-xl-5 m-b30">
                                    <Image src={IMAGES.about16} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="section-head style-1 m-b30">
                                    <h2 className="title fw-semibold">Qu'est-ce que le suivi obstétrical ?</h2>
                                    <p className="m-b30">Le suivi obstétrical est un accompagnement médical complet de la grossesse, de la conception jusqu'à l'accouchement et au-delà. Il comprend des consultations régulières, des échographies trimestrielles, des analyses biologiques et une préparation à l'accouchement. Notre équipe veille au bien-être de la mère et du bébé tout au long de cette période précieuse.</p>
                                    <h3 className="font-28 m-b10">Pourquoi un suivi obstétrical est-il essentiel ?</h3>
                                    <p>Un suivi régulier permet de détecter précocement d'éventuelles complications et d'assurer le bon développement du bébé. Il offre aussi un espace d'écoute et de conseil pour la future maman. À la Clinique AKAD'LIFE, nous croyons que chaque grossesse est unique et mérite une attention particulière pour vivre cette expérience en toute sérénité.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <WantApponiment />
            </main>
            <Footer />
        </>
    )
}
export default ServiceDetail;