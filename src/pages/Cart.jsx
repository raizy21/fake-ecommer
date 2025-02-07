import { useOutletContext } from 'react-router';
import { calcCartCost } from '../utils/cartUtils';
import TableRow from '../components/TableRow';

const Cart = () => {
    const { cart } = useOutletContext();
    const cartCost = calcCartCost(cart);
    return (
        <div className='overflow-x-auto'>
            <table className='table'>
                {/* head */}
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price </th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((prod) => (
                        <TableRow key={prod.id} product={prod} />
                    ))}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Total cost: {cartCost.toFixed(2)}€</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Cart;
