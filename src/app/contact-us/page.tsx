"use client"
import Link from "next/link";
import ContactMap from "@/component/ContactMap";
import WantApponiment from "@/component/WantApponiment";
import { IMAGES, SVGICONS } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Image from "next/image";


function Contactus() {
    return (
        <>
            <Header columnstand="header-transparent" />
            <main className="page-content">
                <div className="dz-bnr-inr style-2 dz-bnr-inr-md dz-bnr-content">
                    <div className="container">
                        <div className="dz-bnr-inr-entry">
                            <div className="dz-bnr-inr-flex">
                                <div className="bnr-info">
                                    <h1 className="fw-semibold wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Contactez-nous</h1>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">Merci de votre visite. Notre équipe est disponible pour répondre à toutes vos questions concernant nos services de santé.</p>
                                    <div className="info-widget style-16 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                        <div className="row g-xl-5 g-4">
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="icon-bx-wraper style-1 align-items-center">
                                                    <div className="icon-bx bg-primary">
                                                        <span className="icon-cell">
                                                            <i className="feather icon-clock" />
                                                        </span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dz-title fw-semibold">Horaires :</h5>
                                                        <p>Lun-Ven : 8h00-18h00<br /> Sam : 8h00-13h00</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-md-6">
                                                <div className="icon-bx-wraper style-1 align-items-center">
                                                    <div className="icon-bx bg-secondary">
                                                        <span className="icon-cell">
                                                            <i className="feather icon-mail" />
                                                        </span>
                                                    </div>
                                                    <div className="icon-content">
                                                        <h5 className="dz-title fw-semibold">Adresse :</h5>
                                                        <p>Clinique Médicale AKAD'LIFE, <br /> Comè, Département du Mono, Bénin</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <Link href="tel:+22901470474" className="btn btn-xl btn-icon btn-primary btn-rounded btn-shadow mb-3 mb-sm-0 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                        <span className="left-icon"> <i className="feather icon-phone-call" /> </span> +229 01 47 04 74 43
                                    </Link>
                                </div>
                                <div className="form-wrapper style-1 m-l40 wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                                    <div className="form-body bg-white">
                                        <div className="section-head style-1 m-b30">
                                            <h2 className="title">Posez une Question</h2>
                                            <p>Pour toute question, n'hésitez pas à nous écrire. Remplissez le formulaire ci-dessous.</p>
                                        </div>
                                        <form onSubmit={(e) => e.preventDefault()} className="dzForm row">
                                            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />                                            
                                            <div className="dzFormMsg"></div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <input name="dzFirstName" type="text" className="form-control" id="inputYourName2" placeholder="Prénom" />
                                                    <label htmlFor="inputYourName2">Prénom</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <input name="dzLastName" type="text" className="form-control" id="inputLastName2" placeholder="Nom" />
                                                    <label htmlFor="inputLastName2">Nom</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber2" placeholder="Téléphone" />
                                                    <label htmlFor="inputPhoneNumber2">Téléphone</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <input name="dzEmail" type="email" className="form-control" id="inputYourEmail2" placeholder="Téléphone" />
                                                    <label htmlFor="inputYourEmail2">Votre Email</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 m-b30">
                                                <div className="form-floating floating-underline">
                                                    <textarea name="dzMessage" className="form-control" id="inputMessage" rows={6} placeholder="Select Service"></textarea>
                                                    <label htmlFor="inputMessage">Message</label>
                                                </div>
                                            </div>
                                            <div className="col-sm-12">
                                                <button type="submit" name="submit" value="submit" className="btn btn-lg btn-icon btn-primary btn-shadow">
                                                    Envoyer <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="item1"><Image className="move-1" src={IMAGES.herobanner2} alt="" /></div>
                    <div className="item2"><Image className="move-2" src={IMAGES.herobanner4} alt="" /></div>
                    <div className="item3"><Image className="move-3" src={IMAGES.herobanner3} alt="" /></div>
                    <svg className="banner-shape" viewBox="0 0 1920 180" fill="none" xmlns="http://www.w3.org/2000/svg"
                        dangerouslySetInnerHTML={{__html : SVGICONS.bannershape}}
                    />                        
                    
                    <div className="banner-shape4"></div>
                    <div className="banner-shape5"></div>
                </div>
                <ContactMap />
                <WantApponiment />
            </main>
            <Footer />            
        </>
    )
}
export default Contactus;