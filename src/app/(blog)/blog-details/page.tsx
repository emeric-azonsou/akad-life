"use client"
import Link from "next/link";
import { IMAGES } from "@/constant/theme";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Image from "next/image";


function BlogDetail() {
    return (
        <>
            <Header columnstand="light" />
            <main className="page-content">
                <section className="content-inner-1">
                    <div className="min-container">
                        <div className="dz-blog blog-single style-1">
                            <div className="dz-media alignwide radius-xl">
                                <Image src={IMAGES.blogdetail2} alt="" />
                            </div>
                            <div className="dz-info">
                                <h1 className="dz-title">Bien vivre sa grossesse : les conseils essentiels de nos spécialistes</h1>
                                <div className="dz-meta">
                                    <ul>
                                        <li className="post-date">17 Mai 2025</li>
                                        <li className="dz-user"> <i className="fa-solid fa-user" /> Par <Link href={"#"} scroll={false}>Dr. Marie N. D'ALMEIDA</Link> </li>
                                        <li className="dz-comment"> <i className="fa-solid fa-message" /> <Link href={"#"} scroll={false}>24 Commentaires</Link> </li>
                                    </ul>
                                </div>
                                <div className="dz-post-text">
                                    <p>La grossesse est une période unique dans la vie d'une femme. À la Clinique AKAD'LIFE, nous croyons qu'un suivi médical rigoureux et un accompagnement bienveillant sont les clés d'une maternité sereine. Voici nos conseils pour vivre pleinement cette étape importante.</p>
                                    <blockquote className="wp-block-quote is-style-default">
                                        <p>Chaque grossesse est unique. Notre rôle est de vous accompagner avec expertise et humanité, pour que vous viviez cette expérience en toute confiance.</p>
                                        <cite>Dr. Marie Neylla D'ALMEIDA</cite>
                                        <i className="flaticon-right-quote" />
                                    </blockquote>
                                    <p>Dès les premières semaines, il est essentiel de consulter un gynécologue-obstétricien pour confirmer la grossesse et établir un calendrier de suivi. Les échographies trimestrielles permettent de surveiller le développement du bébé et de détecter précocement toute anomalie. Un bilan sanguin complet, incluant le dépistage des infections et la vérification du groupe sanguin, est également réalisé lors de la première consultation.</p>
                                    <div className="dz-media alignfullwide m-b30">
                                        <Image src={IMAGES.blogdetail1} alt="/" />
                                    </div>
                                    <p>L'alimentation joue un rôle crucial pendant la grossesse. Nous recommandons une alimentation équilibrée riche en fer, acide folique et calcium. L'activité physique modérée, comme la marche ou le yoga prénatal, contribue au bien-être de la mère et prépare le corps à l'accouchement. Notre équipe vous accompagne également dans la préparation à la naissance avec des séances dédiées.</p>
                                    <h3 className="dz-title">Informations complémentaires</h3>
                                    <p>Le suivi post-partum est tout aussi important que le suivi prénatal. Nos consultations après l'accouchement permettent de vérifier la récupération de la mère, d'accompagner l'allaitement et de discuter de la contraception post-partum.</p>
                                    <p>À la Clinique AKAD'LIFE de Comè, nous mettons tout en œuvre pour que chaque patiente se sente écoutée et en sécurité. Notre équipe de spécialistes est disponible pour répondre à toutes vos questions, du début de la grossesse jusqu'au retour à la maison avec votre bébé.</p>
                                </div>
                                <div className="dz-share-post meta-bottom">
                                    <div className="post-tags">
                                        <strong>Tags :</strong>
                                        <Link href={"#"} scroll={false}>Grossesse</Link>
                                        <Link href={"#"} scroll={false}>Santé</Link>
                                        <Link href={"#"} scroll={false}>Maternité</Link>
                                        <Link href={"#"} scroll={false}>Prénatal</Link>
                                        <Link href={"#"} scroll={false}>Bien-être</Link>
                                    </div>
                                    <div className="dz-social-icon primary-light">
                                        <ul>
                                            <li><Link href="https://www.linkedin.com/showcase/dexignzone" target="_blank"><i className="fa-brands fa-linkedin" /></Link></li>
                                            <li><Link href="https://www.instagram.com/dexignzone" target="_blank"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link href="https://www.facebook.com/dexignzone" target="_blank"><i className="fa-brands fa-facebook-f" /></Link></li>
                                            <li><Link href="https://www.x.com/dexignzone" target="_blank"><i className="fa-brands fa-x-twitter" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="clear" id="comment-list">
                            <div className="post-comments comments-area style-1 clearfix">
                                <h4 className="comments-title mb-2">Commentaires (02)</h4>
                                <p className="dz-title-text">Vos témoignages et questions sont les bienvenus.</p>
                                <div id="comment">
                                    <ol className="comment-list">
                                        <li className="comment even thread-even depth-1 comment" id="comment-2">
                                            <div className="comment-body">
                                                <div className="comment-author vcard">
                                                    <Image src={IMAGES.avtarmiddle1} alt="/" className="avatar" />
                                                    <cite className="fn">Aïcha Kpossou</cite>
                                                </div>
                                                <div className="comment-content dz-page-text">
                                                    <p>J'ai été suivie tout au long de ma grossesse à la clinique AKAD'LIFE. L'équipe est attentionnée et les échographies étaient très rassurantes. Je recommande vivement cette clinique à toutes les futures mamans de Comè et ses environs.</p>
                                                </div>
                                                <div className="reply">
                                                    <Link rel="nofollow" className="comment-reply-link" href={"#"} scroll={false}>Répondre</Link>
                                                </div>
                                            </div>
                                            <ol className="children">
                                                <li className="comment byuser comment-author-w3itexpertsuser bypostauthor odd alt depth-2 comment" id="comment-3">
                                                    <div className="comment-body" id="div-comment-3">
                                                        <div className="comment-author vcard">
                                                            <Image src={IMAGES.avtarmiddle2} alt="/" className="avatar" />
                                                            <cite className="fn">Dr. Marie N. D'ALMEIDA</cite>
                                                        </div>
                                                        <div className="comment-content dz-page-text">
                                                            <p>Merci beaucoup pour votre confiance, Aïcha. C'est un plaisir de vous avoir accompagnée pendant cette belle aventure. N'hésitez pas à revenir pour vos consultations post-partum.</p>
                                                        </div>
                                                        <div className="reply">
                                                            <Link className="comment-reply-link" href={"#"} scroll={false}> Répondre</Link>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ol>
                                        </li>
                                        <li className="comment even thread-odd thread-alt depth-1 comment" id="comment-4">
                                            <div className="comment-body" id="div-comment-4">
                                                <div className="comment-author vcard">
                                                    <Image src={IMAGES.avtarmiddle1} alt="/" className="avatar" />
                                                    <cite className="fn">Fatou Djossou</cite>
                                                </div>
                                                <div className="comment-content dz-page-text">
                                                    <p>Merci pour ces précieux conseils. Je suis enceinte de 3 mois et cet article m'a vraiment aidée à mieux comprendre l'importance du suivi prénatal. Je prendrai rendez-vous très bientôt.</p>
                                                </div>
                                                <div className="reply">
                                                    <Link className="comment-reply-link" href={"#"} scroll={false}> Répondre</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                                <div className="default-form comment-respond style-1" id="respond">
                                    <h4 className="comment-reply-title mb-2" id="reply-title">Laisser un Commentaire</h4>
                                    <p className="dz-title-text">Partagez votre expérience ou posez vos questions.</p>
                                    <div className="clearfix">
                                        <form onSubmit={(e) => e.preventDefault()} method="post" id="comments_form" className="comment-form">
                                            <p className="comment-form-author">
                                                <input id="name" placeholder="Votre nom" name="author" type="text"  />
                                            </p>
                                            <p className="comment-form-email">
                                                <input id="email" required placeholder="Votre email" name="email" type="email"  />
                                            </p>
                                            <p className="comment-form-comment">
                                                <textarea id="comments" placeholder="Votre commentaire..." className="form-control4"
                                                    name="comment" cols={45} rows={3} required
                                                ></textarea>
                                            </p>
                                            <p className="col-md-12 col-sm-12 col-xs-12 form-submit">
                                                <button id="submit" type="submit" className="submit btn btn-primary btn-lg filled">Envoyer</button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
export default BlogDetail;
