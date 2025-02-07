import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getProductsByCat } from '../data/fakeStore';
import ProdList from '../components/ProdList';
const Category = () => {
    const [products, setProducts] = useState([]);
    const { category } = useParams();
    useEffect(() => {
        let ignore = false;
        (async () => {
            try {
                const prodsInCat = await getProductsByCat(category);
                if (!ignore) {
                    setProducts(prodsInCat);
                }
            } catch (error) {
                console.error(error);
            }
        })();

        return () => {
            ignore = true;
        };
    }, [category]);
    return (
        <div>
            <h2 className='text-5xl'>Items in cat</h2>
            <ProdList products={products} />
        </div>
    );
};

export default Category;
