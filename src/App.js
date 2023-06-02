import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import JoyfulPage from "./pages/JoyfulPage";

function App() {
    /*
    * Joyful - radostny, Sorrowful - bolestny, Glorious - slavny, Luminous - svetla.
    * */

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />  {/* magic for automatic scroll to the top after redirect */}
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/radostny" element={<JoyfulPage />} />

                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
