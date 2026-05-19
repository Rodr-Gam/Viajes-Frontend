import { useState, useEffect } from "react";
import "../../../css/landing.css";

const destinations = [
  {
    id: 1,
    name: "Huasteca Potosina",
    tag: "Aventura Natural",
    duration: "4 días / 3 noches",
    price: "Desde $5,500 MXN",
    span: "large",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDxFP_xesBVQCpRE9n7viX4R6nJawMy9UL7WudTH3XYqWlOPntBMzekUh6eEXdPS1P_qe_nTEkYwyXqOYi_1UUw0PBJd4obj43ZEBIISjSXVgMZkyvqcqajvJUHVzTiuGr85GbMdZd0iTUWzfZmPK1qECVBQgsnrCwIFmsMs_QMJfEvTxMNkmWjomW2hgWDmT60sQFug1u4VPdo8800Hi3KXZZmHbPDE_dz1HC14RlArMfib1KGyWOGPEksTcA7xjep6YT2qFTZhz8K",
  },
  {
    id: 2,
    name: "Cancún",
    tag: "Paraíso Turquesa",
    duration: "5 días / 4 noches",
    price: "Desde $8,900 MXN",
    span: "small",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1N5T-ebgsUroomraYlj4BNIQBcU8KELlyhaZeu29DDpEju-_1F1fV4ujoPQtY5J_fMxUKQgDnF8jR9QU_1e3QPp54uxE_ZeEoHmQOLK3pOUqe6suKUj20HcGt_aPL7IesMO5bculD-LjaG2tFAZryftU96d84k2GJxfS_yHnNrm0mPqNOLSWKyXiI0ah97x6moXSp3i6ydBZF27aohsTFBPvemBO7tcVrW1NrKyZTTvPwQ3Z9JI-srINVcARXGhWXGxsmuuV4ODsH",
  },
  {
    id: 3,
    name: "Vallarta",
    tag: "Atardeceres",
    duration: "4 días / 3 noches",
    price: "$7,200 MXN",
    span: "small",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCm1MNTN7fvD4FP-ykVwEtDz1YUci-lvp5mBSbMqgnwGOTuRTjXSIf4r12KRFRygHYL7CgELqISb9-IhMqaUDd5zNv8OTa-8LU8I_Aj1h1uEaenXnJz20rrximWU5dNILMxDW5cmveTK9b1NaPO4G9eF8Q_mf1ckRmoyqYmakpBtjqzcDtzRiytm3c29WAq1XjZOc49pIYRkhHfrBELZHjJBs3yWh0btkmaE_5B0vW3q6F7eluN_Adiu7Ff8o4ckxQq_f8aVDCrM5zG",
  },
  {
    id: 4,
    name: "Mazatlán",
    tag: "Perla del Pacífico",
    duration: "3 días / 2 noches",
    price: "$4,800 MXN",
    span: "small",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjFQ1uuQGfVS0UODVwuwDlCofH8dYSSjw91oySm2G6CW82F67ODMFgXKdbIQMaYUL4LHrevaYuktkvNx7bdLuUMuk_GCUoqeuXpsv14twqS67oUCeX8d6XXJ_hc4uDJR5ogMwuHLkFyKwAkLH0dLE52vqP2FBCYqqxrgdFO8mBwmYOejjneZsLJS58BBD2ky_ubkRja7_OYEn9GuBNWt-9TbdJ6ZToGPxbyxKg_E1J9oUV359qSvsaENyV2AVwAXl64g-bj93HKkVa",
  },
  {
    id: 5,
    name: "Puerto Escondido",
    tag: "Surf & Relax",
    duration: "5 días / 4 noches",
    price: "$6,500 MXN",
    span: "small",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDGnyNge1xlY_fgfpFy8sVppkuqSWq1f8KjV2fnlYIRikCovbQ4aCfLhjMECibvG4nHR9nNx6MUCzGo_g91Wg9iaCiTtXwHgLo5VmA5IGwdtPOfFe4MTTiYnNMg3Pvu6FXJo8ehofPrEMPaeZ2DRAqT69TYRfBkYZLX1dPB22mSUZNmV35mt7t6aHM2bNdZJHWMxFuzhVcUPD_8Q3_Hf4xyGja9LEebDNx9rCCiWcTJMcQ1AXvoJKp4JPNsmXUSxAN2un82fFxl83Xi",
  },
];

const services = [
  { icon: "🏨", title: "Hospedaje", sub: "Hoteles Boutique & Resorts" },
  { icon: "🚗", title: "Transporte", sub: "Traslados privados VIP" },
  { icon: "✈️", title: "Vuelos", sub: "Las mejores aerolíneas" },
  { icon: "🧭", title: "Tours", sub: "Guías locales expertos" },
  { icon: "🎧", title: "Atención", sub: "Asistencia 24/7 personalizada" },
];

const testimonials = [
  {
    name: "Elena Rodriguez",
    text: "El viaje a Cancún fue impecable. La atención al detalle de LuxeTravel superó todas mis expectativas.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5Nr8RBeMykqVFebcjvnwhjR9KemN5kb6sCshTK3_KUrKp16hn-H7EsuqjrKxypQEol3CHD2MEHsYqqk0jsPV7NaDDgEsaqeU_dZMM61xeat4jE5WFU81TGc_PwCkvCQ9awqcXpXNYkhsl4iLCwOUtBG-IE1O2KqcHrFBy05hckgFPYosP880RdHQo1MxNIvBBbd1tOcmQ32Bl7mek2BG0e3aLX79ZBNLWXJJKNjO8m_h6MUP4SzzJ-JJNBcKCAAHWIkAo1rIBOFCx",
  },
  {
    name: "Marco Antonio",
    text: "Huasteca Potosina fue una aventura increíble. Todo el transporte fue puntual y los guías muy profesionales.",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuC6Df6bCWzZROjVLnMCzyoM4h6FTRUTELKLpAE6rx9fCxACnFRggnKnX7mvYSlrZcFVhJLl-TrLhiArYJNVt_KaRDSW-WCEYNWJQZIT1-aOEbIC8-POAYbCLXl8OMA-aAh4NQnRKVTBoBmriUSN6yAGKJxLWkjNMLRfnHUKKdqylRFYee15VbH_TvGpFMS8qZWQL4bcPk6uPDf4aWIHUGD8Nt2L_2rprckAB2RqjsXmJzp1ObVUBOYad1GeepIDZfnXoHuQ7pJ0Bl6G",
  },
  {
    name: "Sofía Méndez",
    text: "Lo que más amé fue la facilidad de pago y el seguimiento que nos dieron. ¡Puerto Escondido es mágico!",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAG9r1IQ4zNd-XuE_TQud5yf5UUVxCkDiRniM5lAlqNpBOFugJNNHJjaxJnAW_T_A_lZDTGVUQUUqAdfUXtrZBN2cWzdY8MdOI99z99jo64RKoTy9N0cH_guhsQh9iBpsBueCCay2qbMeR1eF8uFYgnhxaU9R7PJs4exyxx09IxXEuZ5uTTGW_OHchubIfaK8MDSpCVhVxibZmEw7yVueKvhm01NUxEQg_WGEiRUYAItFBCe0nGYJml2xf9am0cXBIhkdG4yq49IWF4",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <span className="navbar__logo">LuxeTravel</span>
        <div className="navbar__links">
          {["Destinos", "Paquetes", "Servicios", "Testimonios", "Contacto"].map((l) => (
            <a key={l} href="#" className="navbar__link">{l}</a>
          ))}
        </div>
        <button className="btn btn--outline">Reservar Ahora</button>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="hero">
      <img
        className="hero__bg"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR901lzp20SmAmx-apoxAltQFp9Mz7F7nw8D20zhVCZkK-VrzVdFuIuEXsnD0kORCeUz18lsq1zwxXOuRFBJ9PlPbrTzXx-RIyp_vpXLWKd32KIlT0Kd4nmMS1cpBD-xwpB-Uns2jdOAO7ah4E_lBp9_5tW9Y2FFIfRIQFqcmisvdI23SWAxe8S9jG22G-xRshj4utmH9z7oZMGUN7wgBuqn33aGMTi77kz_8foMW2pVTNJRxaN1gb-dHiCSB0Z0RiA2B_zyn9xjN0"
        alt="Playa paradisíaca"
      />
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">Descubre experiencias inolvidables</h1>
        <p className="hero__sub">
          Viajes diseñados a tu medida con atención personalizada y destinos exclusivos en los rincones más bellos del mundo.
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary">Ver paquetes</button>
          <button className="btn btn--ghost">Explorar Destinos</button>
        </div>
      </div>
    </header>
  );
}

function DestinationCard({ dest }) {
  return (
    <div className={`dest-card dest-card--${dest.span}`}>
      <img src={dest.src} alt={dest.name} className="dest-card__img" />
      <div className="dest-card__overlay" />
      <div className="dest-card__body">
        <span className="dest-card__tag">{dest.tag}</span>
        <div className="dest-card__info">
          <div>
            <h3 className="dest-card__name">{dest.name}</h3>
            <p className="dest-card__meta">{dest.duration} • {dest.price}</p>
          </div>
          {dest.span === "large" && (
            <button className="btn btn--white">Ver detalles</button>
          )}
        </div>
        {dest.span !== "large" && (
          <button className="btn btn--white btn--full">Ver detalles</button>
        )}
      </div>
    </div>
  );
}

function Destinations() {
  return (
    <section className="section destinations">
      <div className="section__header">
        <span className="section__eyebrow">Explora lo extraordinario</span>
        <h2 className="section__title">Nuestros Destinos Favoritos</h2>
      </div>
      <div className="dest-grid">
        {destinations.map((d) => (
          <DestinationCard key={d.id} dest={d} />
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section section--tinted services">
      <div className="section__header">
        <h2 className="section__title">Experiencia Todo Incluido</h2>
        <p className="section__desc">Nos encargamos de cada detalle para que tú solo te preocupes por disfrutar.</p>
      </div>
      <div className="services__grid">
        {services.map((s) => (
          <div key={s.title} className="service-card">
            <div className="service-card__icon">{s.icon}</div>
            <h4 className="service-card__title">{s.title}</h4>
            <p className="service-card__sub">{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Trust() {
  return (
    <section className="section trust">
      <div className="trust__left">
        <h2 className="section__title">Tu tranquilidad es nuestra prioridad</h2>
        <div className="trust__items">
          {[
            { icon: "🛡️", title: "Seguridad Garantizada", desc: "Contamos con todos los seguros y certificaciones para que tu viaje sea libre de riesgos." },
            { icon: "💳", title: "Facilidad de Pago", desc: "Meses sin intereses y múltiples plataformas seguras para reservar con confianza." },
            { icon: "🕐", title: "Atención 24/7", desc: "Un concierge dedicado estará disponible en todo momento durante tu estancia." },
          ].map((item) => (
            <div key={item.title} className="trust__item">
              <span className="trust__item-icon">{item.icon}</span>
              <div>
                <h4 className="trust__item-title">{item.title}</h4>
                <p className="trust__item-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="trust__right">
        {testimonials.map((t, i) => (
          <div key={t.name} className={`testimonial testimonial--${i % 2 === 0 ? "indent" : "outdent"}`}>
            <div className="testimonial__header">
              <img src={t.src} alt={t.name} className="testimonial__avatar" />
              <div>
                <h5 className="testimonial__name">{t.name}</h5>
                <div className="testimonial__stars">★★★★★</div>
              </div>
            </div>
            <p className="testimonial__text">"{t.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__brand">
          <span className="navbar__logo">LuxeTravel</span>
          <p>Creando memorias que duran toda la vida a través de destinos exclusivos.</p>
          <div className="footer__social">
            <span>📘</span><span>📸</span><span>🐦</span>
          </div>
        </div>
        <div>
          <h4 className="footer__heading">Enlaces Rápidos</h4>
          <ul className="footer__list">
            {["Privacidad", "Términos", "Preguntas Frecuentes", "Soporte"].map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer__heading">Destinos</h4>
          <ul className="footer__list">
            {["Playa", "Aventura", "Ciudad", "Naturaleza"].map((l) => (
              <li key={l}><a href="#" className="footer__link">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer__heading">Newsletter</h4>
          <p className="footer__newsletter-desc">Suscríbete para recibir ofertas exclusivas.</p>
          <div className="footer__form">
            <input type="email" placeholder="Email" className="footer__input" />
            <button className="btn btn--primary">→</button>
          </div>
        </div>
      </div>
      <div className="footer__bottom">© 2024 LuxeTravel Premium. Todos los derechos reservados.</div>
    </footer>
  );
}

function WhatsAppFAB() {
  return (
    <a href="https://wa.me/yournumber" className="whatsapp-fab" aria-label="WhatsApp">
      <svg fill="currentColor" height="32" viewBox="0 0 16 16" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93a7.898 7.898 0 0 0-2.327-5.607zM7.994 14.52a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
      </svg>
    </a>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <Services />
      <Trust />
      <Footer />
      <WhatsAppFAB />
    </>
  );
}
