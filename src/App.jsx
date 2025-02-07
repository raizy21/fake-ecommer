import { BrowserRouter, Routes, Route } from 'react-router';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Category from './pages/Category';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path='cart' element={<Cart />} />
                    <Route path='category/:category' element={<Category />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
