import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {lazy} from "react";

const Plans = lazy(() => import("../views/pages/plans/Plans"));
const QuoteRequest = lazy(() => import("../views/pages/quote-request/QuoteRequest"));
const Error = lazy(() => import("../views/pages/error/Error"));


const Navigation = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                        <Route path="/" element={<QuoteRequest/>}></Route>
                        <Route path="/plans" element={<Plans/>}></Route>
                        <Route path="error" element={<Error/>}></Route>
                        <Route path="/*" element={<Navigate to="/" replace/>}></Route>
                </Routes>
            </BrowserRouter>

        </>
    );
};

export default Navigation;
