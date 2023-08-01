import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import Title from "./Title";
import {useContext, useState} from "react";
import Info from "./Info";
import Tools from "./Tools";
import Footer from "./Footer";
import ModeContext from "../context/mode";

function Layout() {
    const [rosary, setRosary] = useState(null)
    const { nightMode, NIGHTMODE, NONIGHTMODE } = useContext(ModeContext)

    if ( nightMode === NIGHTMODE) {
        document.body.className = "dark"
        document.querySelector("meta[name='theme-color']").setAttribute("content", "#121212")
    } else if ( nightMode === NONIGHTMODE ) {
        document.body.className = "light"
        document.querySelector("meta[name='theme-color']").setAttribute("content", "#FFFFFF")
    }

    return (
        <>
            <Header />
            <Navigation />
            <Tools />
            <Title rosary={rosary} />
            {rosary && <Info />}
            <Outlet context={[rosary, setRosary]} />
            <Footer />
        </>
    )
}

export default Layout;
