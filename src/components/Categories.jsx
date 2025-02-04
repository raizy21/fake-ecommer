import { useEffect, useState } from "react"; //useEffect and useState
import { getProductsCategories } from "../services/products"; // fetch products
import CategoriesItem from "./CategoriesItem";

// Show a list of all categories from https://fakestoreapi.com/products/categories.
// You are free to choose how they are displayed.
const Categories = () => {
  const [categories, setCategories] = useState([]); //useState for categories

  useEffect(() => {
    let ignore = false;
    const getAndSetCategories = async () => {
      try {
        const allCategories = await getProductsCategories(); //await all products categories
        if (!ignore) {
          setCategories(allCategories);
        }
        //error
      } catch (error) {
        console.error(error);
      }
    };
    //call the method
    getAndSetCategories();
    return () => {
      ignore = true;
    };
  }, []); //empty parameter run only once

  return (
    <>
      {
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {categories.map((item) => (
              <CategoriesItem key={self.crypto.randomUUID()} item={item} />
            ))}
          </div>
        </div>
      }
    </>
  );
};

export default Categories;
