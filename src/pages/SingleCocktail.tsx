import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
import { useQueryHookById } from "../hooks/ReactQueryHooks/QueryHooks/useRQHookByID";
import { single_drinks_url } from "../utils/api-urls";
import { queries } from "../utils/queries";

const SingleCocktail = () => {
  const { id } = useParams();
  const {
    isLoading,
    data: coctail,
    isError,
  }: any = useQueryHookById({
    queryId: id!,
    url: single_drinks_url,
    queryName: queries.single_coctail,
    pendingText: "get coctails",
    successText: "coctails got successfully",
  });
  if (isLoading) return <Loading />;
  if (isError) {
    return <h2>sometgin went wrong</h2>;
  }
  const {
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    name,
    glass,
    info,
    image,
    strInstructions: instructions,
    strCategory: category,
  } = coctail.drinks[0];
  const ingredients: any = [
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strIngredient4,
  ];

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      <h2 className="section-title">{name}</h2>
      <div className="drink">
        <img src={image} alt={name} />
        <div className="drink-info">
          <p>
            <span className="drink-data">name:</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category:</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info:</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass:</span>
            {glass}
          </p>
          <p>
            <span className="drink-data">instruction</span>
            {instructions}
          </p>
          <p>
            <span className="drink-data">ingredients</span>
            {ingredients.map((item: any, index: any) => {
              return item && <span key={index}>{item}</span>;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleCocktail;
