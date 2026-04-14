"use client"
import Image from "next/image";
import { accordiondata } from "../constant/alldata";
import { IMAGES } from "../constant/theme";
import Accordion from 'react-bootstrap/Accordion';

function WhyChoose() {
    return (
        <>
            <div className="row content-wrapper style-10 align-items-center">
                <div className="col-lg-6 m-b30">
                    <div className="section-head style-1 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <h2 className="title">Pourquoi Choisir AKAD'LIFE</h2>
                        <p>Notre clinique allie expertise gynécologique, équipements modernes et accompagnement humain pour chaque femme, à chaque étape de sa vie.</p>
                    </div>
                    <Accordion className="accordion dz-accordion style-2" defaultActiveKey="0">
                        {accordiondata.map((data, i) => (
                            <Accordion.Item className="wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" eventKey={data.key} key={i}>
                                <Accordion.Header>{data.title}</Accordion.Header>
                                <Accordion.Body>
                                    <div className="row align-items-center g-3">
                                        <div className="col-sm-8">
                                            <h3 className="title">{data.title}</h3>
                                            <p>Notre équipe de gynécologues et sages-femmes qualifiées vous accompagne avec bienveillance. Chaque patiente bénéficie d'un suivi personnalisé adapté à ses besoins spécifiques, dans un cadre moderne et rassurant.</p>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="dz-media radius-md">
                                                <Image src={data.image} alt="acord" />
                                            </div>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))}
                    </Accordion>
                </div>
                <div className="col-lg-6 m-b30 text-center text-lg-start wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                    <div className="content-media" data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                        <div className="media-top">
                            <div className="media1">
                                <Image src={IMAGES.about7} alt="about7" />
                            </div>
                            <div className="media2">
                                <Image src={IMAGES.about8} alt="about8" />
                            </div>
                        </div>
                        <div className="media-bottom">
                            <div className="media3">
                                <Image src={IMAGES.about9} alt="about9" />
                            </div>
                            <div className="media4">
                                <Image src={IMAGES.about10} alt="about10" />
                            </div>
                        </div>
                        <div className="item1 move-3">
                            <Image src={IMAGES.herobanner4} alt="banner4" />
                        </div>
                        <div className="item2 move-4">
                            <div className="info-widget style-1">
                                <div className="avatar-group">
                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar1} alt="avarat1" />
                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar2} alt="avarat2" />
                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar3} alt="avarat3" />
                                    <Image className="avatar rounded-circle avatar-sm border border-white border-2" src={IMAGES.smallavatar4} alt="avarat4" />
                                </div>
                                <div className="clearfix ms-2">
                                    <span className="number text-primary">10k+</span>
                                    <span>Patientes Accompagnées</span>
                                </div>
                            </div>
                        </div>
                        <div className="circle-wrapper">
                            <Image src={IMAGES.bgcircle} alt="bgcircle" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WhyChoose;