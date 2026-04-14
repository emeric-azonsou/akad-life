"use client"
import { IMAGES } from "../constant/theme";
import { useState } from "react";
import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const WHATSAPP_NUMBER = '22901470474';

function AppointmentData() {
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [selectCat, setSelectCat] = useState("Service");
    const [selectCatt, setSelectCatt] = useState("Médecin");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const dateStr = startDate.toLocaleDateString('fr-FR', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        });
        const message =
            `Bonjour, je souhaite prendre rendez-vous à la Clinique AKAD'LIFE.\n\n` +
            `👤 Nom : ${name || 'Non renseigné'}\n` +
            `📞 Téléphone : ${phone || 'Non renseigné'}\n` +
            `📅 Date souhaitée : ${dateStr}\n` +
            `🏥 Service : ${selectCat}\n` +
            `👨‍⚕️ Médecin : ${selectCatt}\n\n` +
            `Merci de confirmer ma disponibilité.`;
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
            '_blank'
        );
    };

    return (
        <>
            <div className="row">
                <div className="col-lg-8">
                    <div className="content-info">
                        <div className="section-head style-3 m-b40">
                            <h2 className="title text-white m-b0 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Prendre <span className="text-yellow">Rendez-vous</span></h2>
                        </div>
                        <div className="form-wrapper">
                            <div className="form-body">
                                <form onSubmit={handleSubmit} className="dzForm">
                                    <div className="row g-3">
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.3s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light">
                                                <input
                                                    name="dzName" type="text" className="form-control"
                                                    id="inputYourName" placeholder="Votre Nom"
                                                    value={name} onChange={e => setName(e.target.value)}
                                                />
                                                <label htmlFor="inputYourName">Votre Nom</label>
                                                <span className="input-group-text"><i className="feather icon-user" /></span>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light">
                                                <input
                                                    name="dzPhone" type="tel" className="form-control"
                                                    id="inputYourPhone" placeholder="Votre Téléphone"
                                                    value={phone} onChange={e => setPhone(e.target.value)}
                                                />
                                                <label htmlFor="inputYourPhone">Votre Téléphone</label>
                                                <span className="input-group-text"><i className="feather icon-phone" /></span>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.5s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light base-calender">
                                                <DatePicker className="form-control" selected={startDate}
                                                    onChange={(date: Date | null) => { if (date) setStartDate(date); }}
                                                    placeholderText="Date souhaitée"
                                                    dateFormat="dd/MM/yyyy"
                                                    minDate={new Date()}
                                                />
                                                <span className="input-group-text"><i className="feather icon-calendar" /></span>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.6s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light">
                                                <Dropdown className="bs-select form-control">
                                                    <Dropdown.Toggle as="div" className="p-1">{selectCat}</Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => setSelectCat("Gynécologie")}>Gynécologie</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCat("Obstétrique")}>Obstétrique</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCat("Échographie")}>Échographie</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCat("Consultation Générale")}>Consultation Générale</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCat("Planification Familiale")}>Planification Familiale</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.7s" data-wow-duration="0.8s">
                                            <div className="form-floating floating-outline input-light">
                                                <Dropdown className="form-control bs-select">
                                                    <Dropdown.Toggle as="div" className="p-1">{selectCatt}</Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => setSelectCatt("Dr. Marie Neylla D'ALMEIDA")}>Dr. Marie Neylla D'ALMEIDA</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => setSelectCatt("Dr. Florent Koi")}>Dr. Florent Koi</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-sm-6 m-b10 wow fadeInUp" data-wow-delay="0.8s" data-wow-duration="0.8s">
                                            <button type="submit" className="btn btn-lg btn-icon btn-white shadow-sm w-100">
                                                <span className="w-100">Rendez-vous</span>
                                                <span className="right-icon bg-primary"><i className="feather icon-arrow-right" /></span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 align-self-end">
                    <div className="content-media wow fadeInUp" data-wow-delay="1.0s" data-wow-duration="0.8s">
                        <Image src={IMAGES.about1} alt="about1" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default AppointmentData;