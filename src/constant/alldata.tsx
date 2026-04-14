import CountUp from "react-countup"
import { IMAGES, SVGICONS } from "./theme"
import { StaticImageData } from "next/image";



interface MenuItemContent {
  title: string;
  to: string;
  image?: string | StaticImageData; 
}

interface MenuItem {
  title: string;
  to? : string | undefined;
  classChange?: string;
  content?: MenuItemContent[];
}

// header menu data 
export const menudata : MenuItem[] =[
    {
        title: "Accueil",
        to: "/",
    },
    {
        title: "À Propos",
        classChange: "sub-menu-down",

        content: [
            { title: "Notre Clinique", to: "/about-us" },
            { title: "Notre Histoire", to: "/about-us-2" },
            { title: "Témoignages", to: "/testimonial" },
            { title: "FAQ", to: "/faqs" },
        ],
    },
    {
        title: "Équipe",
        classChange: "sub-menu-down",

        content: [
            { title: "Notre Équipe", to: "/team" },
            { title: "Profil Médecin", to: "/team-detail" },
        ],
    },
    {
        title: "Services",
        classChange: "sub-menu-down",

        content: [
            { title: "Nos Services", to: "/services" },
            { title: "Spécialités", to: "/services-2" },
            { title: "Gynécologie & Obstétrique", to: "/service-detail" },
            { title: "Suivi de Grossesse", to: "/service-detail-2" },
        ],
    },
    {
        title: "Actualités",
        classChange: "sub-menu-down",

        content: [
            { title: "Blog", to: "/blog-grid" },
            { title: "Articles", to: "/blog-list-sidebar" },
            { title: "Détail Article", to: "/blog-details" },
        ],
    },
    {
        title: "Contact",
        to: "/contact-us"
    },
]

// clientswiper  
export const clientswiperdata = [
    { image: IMAGES.logomiddle1, delay: '0.1s', },
    { image: IMAGES.logomiddle2, delay: '0.2s', },
    { image: IMAGES.logomiddle3, delay: '0.3s', },
    { image: IMAGES.logomiddle4, delay: '0.4s', },
    { image: IMAGES.logomiddle1, delay: '0.5s', },
    { image: IMAGES.logomiddle2, delay: '0.6s', },
    { image: IMAGES.logomiddle3, delay: '0.7s', },
    { image: IMAGES.logomiddle4, delay: '0.8s', },
]
// compareswiper 
export const compareswiperdata = [
    { image: IMAGES.comparemiddle1, delay: '0.1s', },
    { image: IMAGES.comparemiddle2, delay: '0.2s', },
    { image: IMAGES.comparemiddle3, delay: '0.3s', },
    { image: IMAGES.comparemiddle4, delay: '0.4s', },
    { image: IMAGES.comparemiddle5, delay: '0.5s', },
    { image: IMAGES.comparemiddle1, delay: '0.6s', },
    { image: IMAGES.comparemiddle2, delay: '0.7s', },
    { image: IMAGES.comparemiddle3, delay: '0.8s', },
]
// contactmap 
export const mapdata = [
    { delay: '0.6s', title: 'Comè, Bénin', flag: IMAGES.unitedstate, },
    { delay: '0.8s', title: 'Mono, Bénin', flag: IMAGES.cananda, },
]
// highlyteam 
export const swiperteamdata = [
    { id: 1, image: IMAGES.teamsmall1, image2: IMAGES.teamlarge1, name:"Nashid Martines"},
    { id: 2, image: IMAGES.teamsmall2, image2: IMAGES.teamlarge2, name:"Nadir Martino"},
    { id: 3, image: IMAGES.teamsmall3, image2: IMAGES.teamlarge3, name:"Kareem Martines"},
    { id: 4, image: IMAGES.teamsmall4, image2: IMAGES.teamlarge4, name:"Nasir Martínez"},
    { id: 5, image: IMAGES.teamsmall5, image2: IMAGES.teamlarge5, name:"Samir Martines"},
    { id: 6, image: IMAGES.teamsmall1, image2: IMAGES.teamlarge1, name:"Nasim Cortés"},
    { id: 7, image: IMAGES.teamsmall2, image2: IMAGES.teamlarge2, name:"Hamid Serrano"},
    { id: 8, image: IMAGES.teamsmall3, image2: IMAGES.teamlarge3, name:"Tariq Mendez"},
]
// newsupdat 
export const newsdata = [
    { image: IMAGES.bloggrid1, delay: '0.6s', },
    { image: IMAGES.bloggrid2, delay: '0.8s', },
    { image: IMAGES.bloggrid3, delay: '1.0s', },
]
// question  
export const accordiondata2 = [
    { key: "0", title: 'Quels sont les services de gynécologie proposés ?' },
    { key: "1", title: 'Comment se déroule le suivi de grossesse ?' },
    { key: "2", title: 'Comment prendre rendez-vous ?' },
    { key: "3", title: 'Puis-je annuler ou reporter mon rendez-vous ?' },
]
export const accordionnavdata = [
    { i: 1, id: 'pills-tab1', target: '#pills-target-tabs1', title: 'Gynécologie', },
    { i: 2, id: 'pills-tab2', target: '#pills-target-tabs2', title: 'Obstétrique', },
    { i: 3, id: 'pills-tab3', target: '#pills-target-tabs3', title: 'Suivi de Grossesse', },
    { i: 4, id: 'pills-tab4', target: '#pills-target-tabs4', title: 'Planification Familiale', },
    { i: 5, id: 'pills-tab5', target: '#pills-target-tabs5', title: 'Consultations Générales', },
]
// servicedata 
export const servicedata = [
    { id: 1, title: 'Gynécologie', svg: SVGICONS.teeth1, image: IMAGES.service1, delay: '0.2s', },
    { id: 2, title: 'Obstétrique', svg: SVGICONS.teeth2, image: IMAGES.service2, delay: '0.4s', },
    { id: 3, title: 'Échographie', svg: SVGICONS.teeth3, image: IMAGES.service3, delay: '0.6s', },
    { id: 4, title: 'Planification Familiale', svg: SVGICONS.teeth4, image: IMAGES.service4, delay: '0.8s', },
]
// sidebar 
export const tagdata = [
    { title: 'Gynécologie', num: '(10)', },
    { title: 'Grossesse', num: '(5)', },
    { title: 'Accouchement', num: '(17)', },
    { title: 'Nutrition', num: '(13)', },
    { title: 'Santé Féminine', num: '(06)', },
    { title: 'Bien-être', num: '(17)', },
    { title: 'Prévention', num: '(13)', },
    { title: 'Pédiatrie', num: '(06)', },
]
export const sidebarpostdata = [
    { image: IMAGES.blogsmall1, content:"Suivi de grossesse : les étapes clés pour une maternité sereine"},
    { image: IMAGES.blogsmall2, content:"Gynécologie préventive : pourquoi consulter régulièrement"},
    { image: IMAGES.blogsmall3, content:"L'accompagnement personnalisé au cœur de notre clinique"},
]
// testimonialswiper 
export const testiswiperdata = [
    { avatar:IMAGES.smallavatar1,image: IMAGES.testimonial1, delay: '0.6', name:"Kenneth Fong"},
    { avatar:IMAGES.smallavatar2,image: IMAGES.testimonial2, delay: '0.8', name:"Rashid Martel"},
    { avatar:IMAGES.smallavatar3,image: IMAGES.testimonial1, delay: '1.0', name:"Faisal Darwish"},
]
// wecare 
export const counterdata = [
    { title: "Patientes Satisfaites", count: <CountUp end={10} duration={5} />, span: 'k+', columnstand1: 'bg-color1', columnstand2: 'text-orange', delay: '0.6s', },
    { title: "Spécialistes", count: <CountUp end={15} duration={5} />, span: '+', columnstand1: 'bg-color2', columnstand2: 'text-green', delay: '0.8s', },
    { title: "Accouchements Réussis", count: <CountUp end={5} duration={5} />, span: 'k+', columnstand1: 'bg-color3', columnstand2: 'text-primary', delay: '1.0s', },
]
// wecare2 
export const wecaredata2 = [
    { id: 1, title: 'Soins Gynécologiques', delay: '0.2s', icon: <i className="flaticon-medical-symbol" />, },
    { id: 2, title: 'Urgences 24h/24', delay: '0.4s', icon: <i className="flaticon-drugs" />, },
    { id: 3, title: 'Équipe Spécialisée', delay: '0.6s', icon: <i className="flaticon-doctor" />, },
]
// whychoose 
export const accordiondata = [
    { key: "0", image: IMAGES.blogsmall1, delay: '0.4s', title: 'Expertise en Gynécologie & Obstétrique', },
    { key: "1", image: IMAGES.blogsmall2, delay: '0.6s', title: 'Accompagnement Centré sur la Patiente', },
    { key: "2", image: IMAGES.blogsmall3, delay: '0.8s', title: 'Rendez-vous Flexibles & Accessibles', },
]
// faqdata 
export const pricingplandata = [
    {
        vertical: 'ESSENTIEL', image: IMAGES.pricetable1, title: 'Suivi Gynécologique', month: '15 000 FCFA', year: '150 000 FCFA',
        feature: <ul className="pricingtable-features">
            <li>Consultation gynécologique</li>
            <li>Frottis cervical</li>
            <li>Bilan hormonal</li>
            <li>Conseils contraception</li>
            <li>Suivi annuel</li>
        </ul>,
    },
    {
        vertical: 'MATERNITÉ', image: IMAGES.pricetable2, title: 'Pack Grossesse', month: '25 000 FCFA', year: '250 000 FCFA',
        feature: <ul className="pricingtable-features">
            <li>Suivi prénatal complet</li>
            <li>Échographies trimestrielles</li>
            <li>Préparation accouchement</li>
            <li>Consultations post-partum</li>
            <li>Accompagnement allaitement</li>
        </ul>,
    },
    {
        vertical: 'ESSENTIEL', image: IMAGES.pricetable3, title: 'Bilan de Santé Femme', month: '20 000 FCFA', year: '200 000 FCFA',
        feature: <ul className="pricingtable-features">
            <li>Check-up complet</li>
            <li>Échographie pelvienne</li>
            <li>Dépistage IST</li>
            <li>Bilan sanguin</li>
            <li>Consultation nutrition</li>
        </ul>,
    },
    {
        vertical: 'FAMILLE', image: IMAGES.pricetable4, title: 'Consultation Générale', month: '10 000 FCFA', year: '100 000 FCFA',
        feature: <ul className="pricingtable-features">
            <li>Consultation médecine générale</li>
            <li>Examens de routine</li>
            <li>Analyses de laboratoire</li>
            <li>Vaccinations</li>
            <li>Conseils santé personnalisés</li>
        </ul>,
    },
]
// pages 
// aboutus2 
export const aboutus2data = [
    { id: 1, delay: '0.2s', title: 'Mission', },
    { id: 2, delay: '0.4s', title: 'Vision', },
]


// testimoniol 
export const testidata = [
    { image: IMAGES.testimonial1, classChange: 'testimonial-media', name:"Nashid Martines"},
    { image: IMAGES.smallavatar3, classChange: 'testimonial-detail', name:"Kareem Martines"},
    { image: IMAGES.testimonial2, classChange: 'testimonial-media',name:"Samir Martines" },
    { image: IMAGES.smallavatar2, classChange: 'testimonial-detail', name:"Hamid Serrano"},
    { image: IMAGES.testimonial2, classChange: 'testimonial-media', name:"Tariq Mendez"},
    { image: IMAGES.smallavatar1, classChange: 'testimonial-detail', name:"Nasir Qadiri"},
]
// bloggrid 


export interface BlogItem {
  image: string;
  dealy: string;
  title: string;
}
export const blogdata = [
    { image: IMAGES.bloggrid1, dealy: '0.2s', title: 'Bien vivre sa grossesse : conseils de nos spécialistes', },
    { image: IMAGES.bloggrid2, dealy: '0.4s', title: 'L\'importance du dépistage gynécologique régulier', },
    { image: IMAGES.bloggrid3, dealy: '0.6s', title: 'Accouchement naturel ou césarienne : tout comprendre', },
    { image: IMAGES.bloggrid4, dealy: '0.8s', title: 'Santé féminine : les examens essentiels à chaque âge', },
    { image: IMAGES.bloggrid5, dealy: '1.0s', title: 'Contraception moderne : les options qui s\'offrent à vous', },
    { image: IMAGES.bloggrid6, dealy: '1.2s', title: 'Post-partum : prendre soin de soi après l\'accouchement', },
]
// serivece details 2 
export const accordiondata3 = [
    { key: "0", title: 'Suivi personnalisé tout au long de la grossesse', },
    { key: "1", title: 'Accouchement sécurisé avec équipe expérimentée', },
    { key: "2", title: 'Accompagnement post-partum et allaitement', },
    { key: "3", title: 'Soins gynécologiques de qualité durable', },
]
// service 2
export const service2data = [
    { image: IMAGES.service1, number: '01', title: 'Gynécologie', },
    { image: IMAGES.service2, number: '02', title: 'Obstétrique', columnstand: 'right', },
    { image: IMAGES.service3, number: '03', title: 'Échographie', },
    { image: IMAGES.service4, number: '04', title: 'Planification Familiale', columnstand: 'right', },
]
// footer 
export const footerdata = [
    {
        title: 'Nos Services', span1: 'Gynécologie', span2: 'Obstétrique', span3: 'Échographie', span4: 'Planification Familiale', span5: 'Consultations Générales',
        link1: '/service-detail', link2: '/service-detail', link3: '/service-detail', link4: '/service-detail', link5: '/service-detail',
    },
    {
        title: 'Liens Utiles', span1: 'Politique de Confidentialité', span2: 'Conditions Générales', span3: 'Contactez-nous', span4: 'Actualités', span5: 'Plan du Site',
        link1: '#', link2: '#', link3: '/contact-us', link4: '/blog-grid', link5: '#',
    },
    {
        title: 'Nous Trouver', span1: 'Comè, Bénin', span2: 'Département Mono', span3: 'Grand Popo', span4: 'Cotonou', span5: 'Lokossa',
        link1: '#', link2: '#', link3: '#', link4: '#', link5: '#',
    },
    {
        title: 'Accès Rapide', span1: 'À Propos', span2: 'Nos Services', span3: 'Notre Équipe', span4: 'Rendez-vous', span5: 'Contact',
        link1: '/about-us', link2: '/services', link3: '/team', link4: '/appointment', link5: '/contact-us',
    },
]
