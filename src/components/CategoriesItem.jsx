//function for display pokemon with destructuring attributes
const CategoriesItem = ({ item }) => {
  return (
    <div>
      <h2 className="text-xl text-amber-300 ml-15">{item}</h2>
    </div>
  );
};

export default CategoriesItem;
