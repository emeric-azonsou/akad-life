import Link from "next/link";
import { IMAGES } from "../constant/theme";
import { CUSTOM_IMAGES } from "../constant/customImages";
import Image from "next/image";

function WantApponiment() {
    return (
        <>
            <section className="content-wrapper style-20 clearfix" style={{ backgroundImage: `url(${IMAGES.bg8.src})` }}>
                <div className="container">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6">
                            <div className="section-head style-3 position-relative mb-0 z-2">
                                <h2 className="title m-b40 fw-semibold wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">Prête à prendre soin de votre santé ?</h2>
                                <Link href="/appointment" className="btn btn-lg btn-icon btn-primary btn-shadow wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                                    <span className="w-100">Rendez-vous</span> <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 align-self-end">
                            <div className="dz-media" data-bottom-top="transform: translateY(100px)" data-top-bottom="transform: translateY(-20px)">
                                <Image src={CUSTOM_IMAGES.doctorPortrait1} alt="Docteur AKAD'LIFE" />
                                <div className="item1">
                                    <Image className="move-2" src={IMAGES.herobanner4} alt="banner" />
                                </div>
                            </div>
                            <div className="item2">
                                <Image className="move-1" src={IMAGES.herobanner2} alt="banner" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default WantApponiment;