import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdvancedSearch from '../app/advanced-search/AdvancedSearch';

const AppRouter = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home_coffee" element={<AdvancedSearch />} />
                </Routes>
            </Router>
        </>
    );
};

export default AppRouter;