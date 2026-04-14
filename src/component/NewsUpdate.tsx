import Link from "next/link";
import { newsdata } from "../constant/alldata";
import Image from "next/image";

function NewsUpdate() {
    return (
        <>
            <div className="section-head style-1 m-b30 row align-items-end">
                <div className="col-xl-7 col-md-9 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                    <h2 className="title m-b0 fw-semibold">Actualités & Conseils Santé</h2>
                </div>
                <div className="col-xl-5 col-md-3 text-lg-end d-none d-md-block wow fadeInUp" data-wow-delay="0.4s" data-wow-duration="0.8s">
                    <Link href="/blog-grid" className="btn btn-icon btn-secondary">
                        Voir Tout
                        <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                    </Link>
                </div>
            </div>
            <div className="row">
                {newsdata.map((data, i) => (
                    <div className="col-xl-4 col-md-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                        <div className="dz-card style-1">
                            <div className="dz-media">
                                <Image src={data.image} alt="media" />
                            </div>
                            <div className="dz-info">
                                <h3 className="dz-title"><Link href="/blog-details">Accompagnement gynécologique : les clés d'un suivi réussi</Link></h3>
                                <p>Découvrez nos conseils pour prendre soin de votre santé féminine au quotidien.</p>
                                <div className="dz-meta">
                                    <ul>
                                        <li className="post-date">10 Avril 2026</li>
                                        <li className="post-author">Par <Link href={"#"} scroll={false}>Dr. M.N. D'ALMEIDA</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <Link href="/blog-details" className="btn btn-square btn-secondary rounded-circle">
                                <i className="feather icon-arrow-up-right" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default NewsUpdate;