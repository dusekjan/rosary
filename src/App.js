import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import RosaryPage, {TODAYS, JOYFUL, SORROWFUL, GLORIOUS, LUMINOUS} from "./pages/RosaryPage";

function App() {
    /*
    * Joyful - radostny, Sorrowful - bolestny, Glorious - slavny, Luminous - svetla.
    * */

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<RosaryPage rosaryType={TODAYS} />} />
                        <Route path="/radostny" element={<RosaryPage rosaryType={JOYFUL} />} />
                        <Route path="/bolestny" element={<RosaryPage rosaryType={SORROWFUL} />} />
                        <Route path="/slavny" element={<RosaryPage rosaryType={GLORIOUS} />} />
                        <Route path="/svetla" element={<RosaryPage rosaryType={LUMINOUS} />} />

                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
