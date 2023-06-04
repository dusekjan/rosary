import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Header from "./Header";
import Title from "./Title";
import {useState} from "react";

function Layout() {
    const [rosary, setRosary] = useState(null)

    return (
        <>
            <Header />
            <Navigation />
            <Title rosary={rosary} />
            <Outlet context={[rosary, setRosary]} />
        </>
    )
}

export default Layout;
