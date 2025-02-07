import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { getCategories } from '../data/fakeStore';

const CatList = () => {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const allCats = await getCategories();
                setCats(allCats);
            } catch (error) {
                console.error(error);
            }
        })();
    }, []);
    return (
        <div className='flex gap-4'>
            {cats.map((cat) => (
                <Link key={cat} to={`/category/${cat}`}>
                    <button className='btn btn-primary btn-outline'>
                        {cat}
                    </button>
                </Link>
            ))}
        </div>
    );
};

export default CatList;
