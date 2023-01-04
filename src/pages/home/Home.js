import { useFetch } from "../../hooks/useFetch";

//styles
import "./Home.css";

//components
import RecipeList from "../../components/RecipeList";

import React from "react";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {/* {data && data.map (recipe => (<h2 key={recipe.id}>{recipe.title}</h2>))} */}
      {data && <RecipeList recipes={data} />}
    </div>
  );
};

export default Home;
