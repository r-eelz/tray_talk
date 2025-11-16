import Navbar from "./Components/Nav_Bar/Navbar"
import { Outlet } from "react-router-dom"

export function Layout() {
    return (
    <div>
        <Navbar></Navbar>
        <main>
            <Outlet></Outlet>
        </main>
    </div>
    )
}