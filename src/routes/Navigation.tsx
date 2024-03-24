import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const Plans = lazy(() => import("../views/pages/plans/Plans"));
const QuoteRequest = lazy(() => import("../views/pages/quote-request/QuoteRequest"));
const ErrorPage = lazy(() => import("../views/pages/error/Error"));

const Navigation = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Cargando...</div>}>
                <Routes>
                    <Route path="/" element={<QuoteRequest />} />
                    <Route path="/plans" element={<Plans />} />
                    <Route path="/error" element={<ErrorPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default Navigation;
