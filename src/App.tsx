import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { MonthStatistics } from './pages/MonthStatistics/MonthStatistics'


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/month-statistics" element={<MonthStatistics />}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
