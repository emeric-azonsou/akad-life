"use client"
import Link from "next/link";
import Pagebanner from "@/component/Pagebanner";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import AppointmentData from "@/component/AppointmentData";
import CountUp from "react-countup";
import Image from "next/image";

function TeamDetail() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <Pagebanner title='Profil Médecin' />
                <section className="content-inner-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-b30">
                                <aside className="side-bar sticky-top">
                                    <div className="widget wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                        <div className="dz-team style-6">
                                            <div className="dz-media">
                                                <Image src={IMAGES.about2} alt="/" />
                                            </div>
                                            <ul className="dz-social">
                                                <li><Link href="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                                <li><Link href="https://www.instagram.com/dexignzone" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link href="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link href="https://www.x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li>
                                                <li><Link href="https://www.linkedin.com/@dexignzone" target="_blank"><i className="fa-brands fa-youtube" /></Link></li>
                                            </ul>
                                            <div className="item1">
                                                <div className="info-widget style-10 move-3">
                                                    <span className="content-text text-primary"><span className="counter"><CountUp end={20} duration={5} /></span>+</span>
                                                    <h3 className="title m-b0">Années <br /> d'Expérience</h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            <div className="col-lg-6">
                                <div className="section-head style-1 mb-30">
                                    <h2 className="titlev fw-semibold m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Dr. Marie Neylla D'ALMEIDA</h2>
                                    <p className="text-primary m-b20 fw-normal small wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Gynécologue-Obstétricienne — Directrice Médicale, Clinique AKAD'LIFE</p>
                                    <p className="fw-normal small wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">Le Dr. Marie Neylla D'ALMEIDA est une spécialiste reconnue en gynécologie et obstétrique, engagée depuis des années dans l'amélioration de la santé des femmes au Bénin. Sa passion pour la médecine féminine et son approche humaine font d'elle une praticienne de confiance.</p>
                                    <p className="fw-normal small wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">Formée aux meilleures pratiques médicales, elle a fondé la Clinique Médicale AKAD'LIFE à Comè avec la vision d'offrir des soins gynécologiques accessibles et de qualité à toutes les femmes de la région du Mono. Son expertise couvre l'ensemble du parcours de santé féminine, de la prévention à la maternité.</p>
                                </div>
                                <table className="table table-border-bottom m-b40 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    <tbody>
                                        <tr>
                                            <th>Spécialité</th>
                                            <td>Gynécologie-Obstétrique</td>
                                        </tr>
                                        <tr>
                                            <th>Diplômes</th>
                                            <td><Link href={"#"} scroll={false}>Doctorat en Médecine — Spécialisation Gynécologie</Link></td>
                                        </tr>
                                        <tr>
                                            <th>Expérience</th>
                                            <td>Directrice Médicale, Clinique AKAD'LIFE — Comè, Bénin</td>
                                        </tr>
                                        <tr>
                                            <th>Horaires</th>
                                            <td> Lundi - Vendredi 08:00 - 18:00<br />
                                                Samedi 08:00 - 13:00<br />
                                                Dimanche Fermé
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>Distinctions</th>
                                            <td>Engagement pour la santé féminine dans la région du Mono</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <h3 className="font-20 m-b25 wow fadeInUp" data-wow-delay="1.2s" data-wow-duration="0.8s">Compétences Professionnelles</h3>
                                <div className="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                                    <div className="progress-info">
                                        <span className="title">Gynécologie Obstétrique</span>
                                        <span className="progress-value">90%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '90%' }}></div>
                                    </div>
                                </div>
                                <div className="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.6s" data-wow-duration="0.8s">
                                    <div className="progress-info">
                                        <span className="title">Échographie & Diagnostic</span>
                                        <span className="progress-value">78%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '78%' }}></div>
                                    </div>
                                </div>
                                <div className="progress-wrap m-b35 wow fadeInUp" data-wow-delay="1.8s" data-wow-duration="0.8s">
                                    <div className="progress-info">
                                        <span className="title">Suivi Prénatal & Accouchement</span>
                                        <span className="progress-value">95%</span>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar" style={{ width: '95%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-inner-1">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-map-pin" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Adresse</h5>
                                        <p>Clinique Médicale AKAD'LIFE, Comè, Département du Mono, Bénin</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-phone" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Appelez-nous</h5>
                                        <p>
                                            <Link href="tel:+22901470474" className="text-body">+229 01 47 04 74 43</Link><br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-mail" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Écrivez-nous</h5>
                                        <p>
                                            <Link href="mailto:contact@akademlife.com" className="text-body">contact@akademlife.com</Link><br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 m-b30 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                <div className="icon-bx-wraper style-10">
                                    <div className="icon-bx bg-secondary">
                                        <span className="icon-cell">
                                            <i className="feather icon-clock" />
                                        </span>
                                    </div>
                                    <div className="icon-content">
                                        <h5 className="dz-title fw-semibold">Horaires d'Ouverture</h5>
                                        <p>Lun-Ven : 8h00-18h00 <br /> Sam : 8h00-13h00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content-wrapper style-12 bg-secondary background-blend-burn" style={{ backgroundImage: `url(${IMAGES.bg1.src})` }}>
                    <div className="container">
                        <AppointmentData />
                    </div>
                </section>
            </main>
            <Footer />            
        </>
    )
}
export default TeamDetail;