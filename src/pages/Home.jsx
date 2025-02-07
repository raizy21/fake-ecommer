import { useState, useEffect } from 'react';

import { getProducts } from '../data/fakeStore';
import CatList from '../components/CatList';
import ProdList from '../components/ProdList';
const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const allProds = await getProducts();
                setProducts(allProds);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    return (
        <div>
            <CatList />
            <ProdList products={products} />
        </div>
    );
};

export default Home;
