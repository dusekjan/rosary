import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import Title from "./Title";
import {useContext, useState} from "react";
import Info from "./Info";
import Tools from "./Tools";
import ModeContext from "../context/mode";

function Layout() {
    const [rosary, setRosary] = useState(null)
    const { nightMode, NIGHTMODE, NONIGHTMODE } = useContext(ModeContext)

    if ( nightMode === NIGHTMODE) {
        document.body.className = "dark"
    } else if ( nightMode === NONIGHTMODE ) {
        document.body.className = "light"
    }

    return (
        <>
            <Header />
            <Navigation />
            <Tools />
            <Title rosary={rosary} />
            {rosary && <Info />}
            <Outlet context={[rosary, setRosary]} />
        </>
    )
}

export default Layout;
