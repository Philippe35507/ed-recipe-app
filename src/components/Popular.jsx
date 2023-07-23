import { useEffect } from "react";

function Popular() {
  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=a1fffd88cfe64158a8c4ce62e1dca228&number=9`
    );
    const data = await api.json();
    console.log(data);
  };

  return <div>Popular</div>;
}

export default Popular;
