"use client"
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { IMAGES, SVGICONS } from "../constant/theme";
import Link from "next/link";
import { mapdata } from "../constant/alldata";
import Image from "next/image";

function ContactMap() {
    const [show, setShow] = useState(true);
    return (
        <>
            <section className="content-inner">
                <div className="container">
                    <div className="row content-wrapper">
                        <div className="col-xl-7 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <div className="map-wrapper style-3 me-xl-4">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28891.193971348785!2d75.8546432!3d25.1559936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1719221707984!5m2!1sen!2sin&zoomcontrol=false" width="600" height="450" style={{ border: '0' }} allowFullScreen
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <div className="item1 position-absolute">
                                    {show && (
                                        <Alert className="content-bx style-5 alert alert-dismissible fade show" role="alert">
                                            <div className="content-logo">
                                                <Image src={IMAGES.logo} alt="" />
                                            </div>
                                            <div className="content-text m-b20">
                                                <h6 className="m-b5">Adresse : </h6>
                                                <p className="m-b0">Clinique Médicale AKAD'LIFE, Comè, Bénin</p>
                                            </div>
                                            <div className="content-text">
                                                <h6 className="m-b5">Horaires : </h6>
                                                <p className="m-b0">Lun-Ven : 8h00-18h00 <br /> Sam : 8h00-13h00</p>
                                            </div>
                                            <button onClick={() => setShow(false)} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close">
                                                <span dangerouslySetInnerHTML={{__html : SVGICONS.crossicon}} />
                                            </button>
                                        </Alert>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5">
                            <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                <h2 className="title m-b5">Nos Localisations</h2>
                                <p>Retrouvez la Clinique Médicale AKAD'LIFE et nos points de consultation dans la région.</p>
                            </div>
                            <div className="row">
                                {mapdata.map((data, i) => (
                                    <div className="col-xl-12 col-lg-6 m-b15 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                        <div className="dz-img-box style-2">
                                            <div className="dz-content">
                                                <div className="inner-content clearfix">
                                                    <h3 className="title m-b10"><Image src={data.flag} alt="flag" /> {data.title}</h3>
                                                    <p className="m-b10">Clinique Médicale AKAD'LIFE, Comè, Département du Mono, Bénin</p>
                                                    <Link href="tel:+0123-456-7890" className="text-body">+229 01 47 04 74 43</Link>
                                                </div>
                                                <div className="dz-footer">
                                                    <Link href="https://www.google.com/maps/" target="_blank" className="icon-link-hover-end">Itinéraire 
                                                        <i className="feather icon-arrow-up-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="dz-media">
                                                <Image src={IMAGES.map} alt="map" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default ContactMap;