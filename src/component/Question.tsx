"use client"
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Link from 'next/link';
import { accordiondata2, accordionnavdata } from '../constant/alldata';

function Question() {
    const [activeTab, setActiveTab] = useState(1);
    const handleTabClick = (tabIndex : number) => {
        setActiveTab(tabIndex);
    };
    return (
        <>
            <section className="content-inner-1">
                <div className="container">
                    <div className="section-head style-1 m-b30 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <h2 className="title">Vous avez des questions ?</h2>
                        <p>Retrouvez les réponses aux questions les plus fréquentes sur nos services de gynécologie, obstétrique et soins de santé.</p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 m-b40 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                            <div className="search_widget">
                                <form className="dzSearch">
                                    <div className="form-group">
                                        <div className="input-group mb-0 search-space">
                                            <input name="dzSearch" type="search" className="form-control text-writing" placeholder="Tapez votre question ici" />
                                            <div className="input-group-addon">
                                                <button name="dzSearch" value="search" className="btn">
                                                    <i className="icon feather icon-search" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-10">
                            <ul className="nav nav-pills nav-pills-outline m-b50 justify-content-center wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s" id="pills-tab" role="tablist">
                                {accordionnavdata.map((data, ii) => (
                                    <li className="nav-item" role="presentation" key={ii}>
                                        <button id={data.id} data-bs-toggle="pill" data-bs-target={data.target} type="button" role="tab" aria-controls={data.id}
                                            className={`nav-link ${activeTab === data.i ? 'active' : ''}`}
                                            aria-selected={activeTab === data.i ? 'true' : 'false'}
                                            onClick={() => handleTabClick(data.i)}
                                        > {data.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="tab-content wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s" id="pills-tabContent">
                                <div className={`tab-pane fade ${activeTab === 1 ? 'show active' : ''}`} id="pills-target-tabs1" role="tabpanel" aria-labelledby="pills-tab1" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    La Clinique Médicale AKAD'LIFE met à votre disposition une équipe de spécialistes en gynécologie et obstétrique. Nous vous accompagnons avec professionnalisme et bienveillance pour tous vos besoins de santé féminine et maternelle.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 2 ? 'show active' : ''}`} id="pills-target-tabs2" role="tabpanel" aria-labelledby="pills-tab2" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    La Clinique Médicale AKAD'LIFE met à votre disposition une équipe de spécialistes en gynécologie et obstétrique. Nous vous accompagnons avec professionnalisme et bienveillance pour tous vos besoins de santé féminine et maternelle.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 3 ? 'show active' : ''}`} id="pills-target-tabs3" role="tabpanel" aria-labelledby="pills-tab3" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    La Clinique Médicale AKAD'LIFE met à votre disposition une équipe de spécialistes en gynécologie et obstétrique. Nous vous accompagnons avec professionnalisme et bienveillance pour tous vos besoins de santé féminine et maternelle.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 4 ? 'show active' : ''}`} id="pills-target-tabs4" role="tabpanel" aria-labelledby="pills-tab4" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    La Clinique Médicale AKAD'LIFE met à votre disposition une équipe de spécialistes en gynécologie et obstétrique. Nous vous accompagnons avec professionnalisme et bienveillance pour tous vos besoins de santé féminine et maternelle.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                                <div className={`tab-pane fade ${activeTab === 5 ? 'show active' : ''}`} id="pills-target-tabs5" role="tabpanel" aria-labelledby="pills-tab5" >
                                    <Accordion className="accordion dz-accordion style-1" defaultActiveKey="0">
                                        {accordiondata2.map((data, i) => (
                                            <Accordion.Item eventKey={data.key} key={i}>
                                                <Accordion.Header>{data.title}</Accordion.Header>
                                                <Accordion.Body>
                                                    La Clinique Médicale AKAD'LIFE met à votre disposition une équipe de spécialistes en gynécologie et obstétrique. Nous vous accompagnons avec professionnalisme et bienveillance pour tous vos besoins de santé féminine et maternelle.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        ))}
                                    </Accordion>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="content-inner-1 p-t0">
                <div className="container">
                    <div className="content-bx style-7 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                        <div className="clearfix">
                            <h2 className="dz-title">D’autres questions ?</h2>
                            <p className="m-b0">Vous ne trouvez pas la réponse ? Contactez notre équipe, nous sommes là pour vous aider.</p>
                        </div>
                        <div className="flex-btn">
                            <Link href="/contact-us" className="btn btn-primary btn-hover1">Nous Contacter</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Question;