import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from './pages/Home/Home';
import {MonthStatistics} from './pages/MonthStatistics/MonthStatistics'
import {Header} from "./shared/header/Header";
import {Popup} from "./shared/Popup/Popup";


function App() {
    return (
        <div className="global__container">
            {/*<Popup/>*/}
            <div className="container">
                <Router>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/month-statistics" element={<MonthStatistics/>}/>
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
