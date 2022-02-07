/* eslint-disable max-len */
// == Import
import './styles.scss';

// Data for the team part
const team = [
  {
    id: 1,
    name: 'Patrice',
    job: 'Lead Dev Back',
  },
  {
    id: 2,
    name: 'Vincent',
    job: 'Product Owner',
  },
  {
    id: 3,
    name: 'Myriam',
    job: 'Lead Dev Front',
  },
];

const teamElementJSX = team.map(
  ({ id, name, job }) => (
    <p key={id} className="home__team__person padding">
      {name} {job}
    </p>
  ),
);

// == Composant
const Home = () => (
  <div className="home">
    <section className="home__section">
      <h1 className="home__section__title padding">Bienvenue sur Shokubutsu</h1>
    </section>
    <section className="home__section__about">
      <div className="home__section__about__block">
        <p className="home__section__about__first padding">
          Sho’Kubutsu propose de mettre en relation des personnes souhaitant acquérir de nouvelles plantes avec des personnes souhaitant se séparer de leurs plantes pour diverses raisons.
        </p>
        <p className="home__section__about__second padding">
          En France, ce sont 17 millions de déchets végétaux qui sont produits chaque année. Il a été constaté qu'une bonne partie représente des espèces végétales de petite à moyenne taille qui pourraient facilement trouver racine dans un autre lieu autrement que de se retrouver brûler.
        </p>
      </div>
    </section>
    <section className="home__section__team">
      <div className="home__section__team__block">
        <h2 className="home__team__title padding">L'équipe Shokubutsu</h2>
        {teamElementJSX}
      </div>
    </section>
  </div>
);

// == Export
export default Home;
