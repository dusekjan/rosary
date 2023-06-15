import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import Title from "./Title";
import {useState} from "react";
import Info from "./Info";
import Tools from "./Tools";

function Layout() {
    const [rosary, setRosary] = useState(null)

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
