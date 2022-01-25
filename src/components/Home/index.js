// == Import
import { Box,Text } from '@chakra-ui/react'
import './styles.scss';


// == Composant
const Home = () => (
  <div className="home">
    <section className="home__section">
      <h1 className="home__section__title">Bienvenue sur Shokobutsu</h1>
    </section>
    <section className="home__section__about">
      <div className="home__section__about__block">
        <p className="home__about__first">
          Sho’Kubutsu propose de mettre en relation des personnes souhaitant acquérir de nouvelles plantes avec des personnes souhaitant se séparer de leurs plantes pour diverses raisons.
        </p>
        <p className="home__about__second">
          En France, ce sont 17 millions de déchets végétaux qui sont produits chaque année. Il a été constaté qu'une bonne partie représente des espèces végétales de petite à moyenne taille qui pourraient facilement trouver racine dans un autre lieu autrement que de se retrouver brûler.
        </p>
      </div>
    </section>
    <section className="home__section__team">
      <div className="home__section__team__block">
        <h2 className="home__team__title">L'équipe Shokubutsu</h2>
        <p className="home__team__person">Patrice Lead Dev Back</p>
        <p className="home__team__person">Vincent Product Owner</p>
        <p className="home__team__person">Myriam Lead Dev Front</p>
      </div>
    </section> 
  </div>
);

// == Export
export default Home;
