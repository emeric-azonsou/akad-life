"use client"

import Link from "next/link";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";
import { IMAGES, SVGICONS } from "@/constant/theme";
import Image from "next/image";
import ClientSwiper from "@/component/ClientSwiper";
import CompareSwiper from "@/component/CompareSwiper";
import HighlyTeam from "@/component/HighlyTeam";
import Question from "@/component/Question";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { accordiondata3 } from "@/constant/alldata";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

function ServicesDetail2() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <div className="dz-bnr-inr style-2 dz-bnr-inr-md dz-bnr-detail">
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <div className="dz-bnr-inr-flex">
                                <div className="bnr-info">
                                    <h1 className="wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Suivi de Grossesse</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">À la Clinique AKAD'LIFE, nous accompagnons chaque future maman avec un suivi de grossesse personnalisé et rigoureux. De la confirmation de la grossesse jusqu'à l'accouchement, notre équipe de gynécologues-obstétriciens veille à votre bien-être et à celui de votre bébé, dans un environnement chaleureux et sécurisé.</p>
                                    <LightGallery
                                        zoom={true}
                                        thumbnail={true}                                        
                                        plugins={[lgThumbnail, lgZoom]}
                                        selector='.lightimg'
                                    >
                                        <div className="row media-wrapper" id="lightgallery">
                                            <div className="col-6">
                                                <div className="dz-media radius-md wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                                    <a href={IMAGES.servicesmall1.src} data-src={IMAGES.servicesmall1.src} className="lg-item lightimg">
                                                        <Image src={IMAGES.servicesmall1} alt="service" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="dz-media radius-md wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                                    <a href={IMAGES.servicesmall2.src} data-src={IMAGES.servicesmall2.src} className="lg-item lightimg">
                                                        <Image src={IMAGES.servicesmall2} alt="service" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </LightGallery>
                                </div>
                                <div className="detail-media wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    <div className="dz-media height-lg">
                                        <Image src={IMAGES.servicelarge2} alt="" />
                                    </div>
                                    <div className="media-info">
                                        <div className="info-widget style-5">
                                            <div className="widget-media text-primary">
                                                <i className="feather icon-phone-call" />
                                            </div>
                                            <div className="widget-content">
                                                <h6 className="title">Contactez-nous</h6>
                                                <Link href="tel:+22901470474" className="text-secondary">+229 01 47 04 74 43</Link>
                                            </div>
                                        </div>
                                        <Link href="/appointment" className="btn btn-lg btn-icon btn-primary btn-shadow">
                                            <span className="w-100">Rendez-vous</span> <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item1"><Image className="move-1" src={IMAGES.herobanner2} alt="" /></div>
                    <div className="item2"><Image className="move-2" src={IMAGES.banner1} alt="" /></div>
                    <div className="item3"><Image className="move-3" src={IMAGES.banner2} alt="" /></div>
                    <svg className="banner-shape" viewBox="0 0 1920 180" fill="none" xmlns="http://www.w3.org/2000/svg"
                        dangerouslySetInnerHTML={{__html : SVGICONS.bannershape}}
                    ></svg>                     
                    <div className="banner-shape4"></div>
                    <div className="banner-shape5"></div>
                </div>
                <section className="content-inner-2 clearfix">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="dz-media m-b30 me-xl-5">
                                    <Image src={IMAGES.servicesmall3} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="section-head style-1 m-b30">
                                    <h2 className="title fw-semibold">Qu'est-ce que le suivi prénatal ?</h2>
                                    <p className="m-b30">Le suivi prénatal est un ensemble de consultations médicales régulières tout au long de la grossesse. Il permet de surveiller la santé de la mère et du bébé, de dépister d'éventuelles complications et de préparer sereinement l'accouchement. À AKAD'LIFE, chaque consultation inclut un examen clinique, des analyses biologiques et des échographies selon le calendrier recommandé.</p>
                                    <h3 className="font-28 m-b10">Pourquoi un suivi de grossesse est-il essentiel ?</h3>
                                    <p>Un suivi de grossesse régulier permet de prévenir et détecter précocement les risques pour la mère et l'enfant : hypertension, diabète gestationnel, retard de croissance ou présentation du bébé. Il assure également une préparation optimale à l'accouchement et au post-partum, pour vivre cette période en toute sérénité.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-2 clearfix">
                    <div className="container">
                        <div className="row content-bx style-9 g-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s" style={{ backgroundImage: `url(${IMAGES.about15.src})` }}>
                            <div className="col-xl-7 col-lg-9">
                                <h2 className="title m-b15">Benefits of Dental Implants</h2>
                                <p>Notre équipe médicale vous accompagne avec des échographies de dernière génération, un suivi biologique complet et des consultations personnalisées. Nous détectons précocement tout risque pour adapter votre prise en charge. Grâce à notre approche bienveillante, chaque future maman se sent écoutée et en confiance.</p>
                                <Link href="/appointment" className="btn btn-lg btn-icon btn-primary m-t40">
                                    Appointment
                                    <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner overflow-hidden">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-head style-1 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title m-b10 fw-semibold">Le Parcours de Suivi</h2>
                                    <p>Le suivi de grossesse se déroule en plusieurs étapes clés pour assurer la santé de la mère et du bébé :</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-wrapper style-1">
                        <div className="container">
                            <div className="timeline-inner">
                                <div className="timeline-left">
                                    <div className="timeline-wrap">
                                        <div className="timeline-head">
                                            <div className="timeline-number">1</div>
                                            <span className="step">Étape</span>
                                        </div>
                                        <div className="timeline-info wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                            <h3 className="title">Première Consultation Prénatale</h3>
                                            <p>Un bilan complet est réalisé : examen clinique, analyses sanguines, première échographie pour confirmer la grossesse et établir le calendrier de suivi personnalisé.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-wrap">
                                        <div className="timeline-head">
                                            <div className="timeline-number">2</div>
                                            <span className="step">Étape</span>
                                        </div>
                                        <div className="timeline-info wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                            <h3 className="title">Échographies Trimestrielles</h3>
                                            <p>Trois échographies principales sont réalisées aux 1er, 2e et 3e trimestres pour surveiller le développement du bébé, vérifier sa croissance et détecter toute anomalie.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="timeline-right">
                                    <div className="timeline-wrap bottom">
                                        <div className="timeline-head">
                                            <div className="timeline-number">3</div>
                                            <span className="step">Étape</span>
                                        </div>
                                        <div className="timeline-info wow fadeInDown" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            <h3 className="title">Préparation à l'Accouchement</h3>
                                            <p>Des séances de préparation vous aident à aborder sereinement le jour J : techniques de respiration, positions d'accouchement et informations sur la péridurale et la césarienne.</p>
                                        </div>
                                    </div>
                                    <div className="timeline-wrap bottom">
                                        <div className="timeline-head">
                                            <div className="timeline-number">4</div>
                                            <span className="step">Étape</span>
                                        </div>
                                        <div className="timeline-info wow fadeInDown" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                            <h3 className="title">Accouchement et Post-Partum</h3>
                                            <p>Notre équipe vous accompagne le jour de l'accouchement et assure un suivi post-partum complet : rééducation, allaitement, contraception et soutien psychologique si nécessaire.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <CompareSwiper />
                <section className="content-inner pt-50">
                    <div className="container">
                        <HighlyTeam />
                    </div>
                </section>
                <section className="content-wrapper style-22">
                    <div className="container">
                        <div className="row g-3 align-items-center">
                            <div className="col-lg-5">
                                <div className="section-head style-3 m-0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                    <h2 className="title fw-semibold m-b20">Les Engagements AKAD'LIFE</h2>
                                    <p className="m-b30">Nous nous engageons à offrir un accompagnement médical d'excellence à chaque patiente. Notre approche centrée sur l'écoute et la bienveillance, associée à des équipements modernes, garantit une prise en charge sécurisée et humaine tout au long de votre parcours de santé.</p>
                                    <Link href="/appointment" className="btn btn-lg btn-icon btn-primary">
                                        Appointment
                                        <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="content-info">
                                    <Accordion className="accordion dz-accordion style-4 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s" defaultActiveKey="0">
                                        {accordiondata3.map((data, i) => (
                                            <AccordionItem eventKey={data.key} key={i}>
                                                <AccordionHeader> {data.title}</AccordionHeader>
                                                <AccordionBody>
                                                    <p>Notre clinique offre un cadre rassurant et des soins personnalisés pour chaque étape de votre vie de femme. Notre équipe qualifiée est à votre écoute pour répondre à toutes vos préoccupations.</p>
                                                </AccordionBody>
                                            </AccordionItem>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="clearfix content-inner-2">
                    <div className="container">
                        <div className="row align-items-center">
                            <ClientSwiper />
                        </div>
                    </div>
                </section>
                <Question />
            </main>
            <Footer />            
        </>
    )
}
export default ServicesDetail2;