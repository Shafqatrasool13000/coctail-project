import Loading from "./Loading";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";

const CocktailList = () => {
  const { loading, coctails } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (coctails?.drinks.length < 1) {
    return (
      <h2 className="section-title">No Coctail creteria available for this</h2>
    );
  }

  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {coctails &&
          coctails?.drinks.map(({ image, name, glass, info, id }: any) => (
            <article key={id} className="cocktail">
              <div className="img-container">
                <img src={image} alt={name} />
              </div>
              <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <Link to={`/cocktail/${id}`} className="btn btn-primary">
                  details
                </Link>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default CocktailList;
