import React from 'react';
import videoSrc from '../../assets/home.mp4';
import performancePng from '../../assets/performance.png';
import newWebsitePng from '../../assets/website.png'
import seoPng from '../../assets/seo.png'
import styles from './home.module.scss';

function Home() {
  return (
    <div className={styles.homeWrapper}>
      {/* La vidéo de fond */}
      <div className={styles.videoBackground}>
        <video autoPlay loop muted className={styles.video} playsInline>
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className={styles.overlayText}>
          <h1>CRÉATION DE SITES INTERNET</h1>
        </div>
      </div>

      <section className={styles.content}>
    <div className={styles.imageTextRow}>
        <div className={styles.image}>
          <img src={newWebsitePng} alt="New webSite" className={styles.png} />
        </div>
        <div className={styles.text}>
            <h2>CRÉATION DE SITES WEB SUR MESURE</h2>
            <p>
                Vous souhaitez renforcer votre présence en ligne et attirer de nouveaux clients ? Un site web bien conçu est essentiel pour faire briller votre entreprise. Imaginez vos futurs clients découvrant vos services à travers un site élégant et fonctionnel, au lieu de chercher sans succès sur Google.
                Ne laissez pas vos concurrents vous devancer ! Offrez à votre entreprise un site web sur mesure qui reflète votre identité et engage vos visiteurs. Contactez-moi pour donner vie à votre projet et transformer votre présence en ligne en un véritable atout.
            </p>
            <div className={styles.separator}></div>
            <a href="/services" className={styles.link}>En savoir plus sur nos services</a>
        </div>
    </div>
    <div className={`${styles.imageTextRow} ${styles.reverse}`}>
        <div className={styles.text}>
            <h2>PERFORMANCE & QUALITÉ</h2>
            <div className={styles.separator}></div>
            <p>
                Je m'engage à optimiser chaque site pour garantir des performances maximales et une qualité irréprochable. Tous mes sites respectent les critères d'ergonomie et de design, assurant une expérience utilisateur fluide sur tous les appareils.
                Lors de la création de votre site web, vous serez régulièrement informé de l'avancement de votre projet et aurez la possibilité de suivre les améliorations en temps réel, avant la mise en ligne. Votre satisfaction est ma priorité !
            </p>
        </div>
        <div className={styles.image}>
          <img src={performancePng} alt="Engrenages animés" className={styles.png} />
        </div>
    </div>
    <div className={styles.imageTextRow}>
        <div className={styles.image}><img src={seoPng} alt="SEO" className={styles.png} /></div>
        <div className={styles.text}>
            <h2>RÉFÉRENCEMENT & SEO</h2>
            <p>
                Dans l'immense univers du web, il est crucial de se démarquer pour figurer parmi les premiers résultats sur Google. En tant que créateur de sites internet en Moselle, j’accorde une attention particulière au référencement, en optimisant le code et les performances de votre site.
                Si nécessaire, je peux également vous proposer une campagne Google Ads pour maximiser votre visibilité. Grâce à un SEO de qualité, votre site sera mieux référencé, attirant de nouveaux clients et augmentant le nombre de visiteurs.
            </p>
            <div className={styles.separator}></div>
            <a href="/services" className={styles.link}>En savoir plus sur nos services</a>
        </div>
    </div>
</section>




      {/* Bottom Text */}
      <section className={styles.bottomText}>
        <p>Additional information or call-to-action text.</p>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>FOOTER</footer>
    </div>
  );
}

export default Home;
