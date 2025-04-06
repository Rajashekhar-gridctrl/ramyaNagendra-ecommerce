import { FC } from "react";
import { Outlet } from "react-router";
import { Footer, Header } from "./packages";
import './App.css';

const App: FC = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet /> {/* Renders child routes */}
            </main>
            <Footer />
        </>
    );
}

export default App;