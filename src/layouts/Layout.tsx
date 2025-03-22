import React from "react";
import { Outlet } from "react-router-dom"
interface LayoutProps {

}

const Layout: React.FC<LayoutProps> = () => {
    return (

        <>
            <header>header</header>

            <Outlet />
            <footer>footer</footer>
        </>

    );
}

export default Layout;