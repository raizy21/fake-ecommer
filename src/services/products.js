// fetch pokemon
const getProductsCategories = async () => {
  //fetch()
  const res = await fetch(`https://fakestoreapi.com/products/categories`);

  //res.json()
  const data = await res.json();
  const categories = data.results;

  return categories;
};

export { getProductsCategories };

// /**
//  * Service class for handling Products requests
//  */
// class Products {
//   /*
//    * Fetches categories from Products
//    * @returns {Promise<Object>} JSON response containing products category
//    */

//   async getProductsCategories() {
//     const response = await fetch(
//       "https://fakestoreapi.com/products/categories"
//     );
//     return await response.json();
//   }
// }

// export default new Products();
