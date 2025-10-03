import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";

function App() {
    return (
        <div>
            <Navbar />
            <AppRoutes />
            <Footer />
        </div>
    );
}

export default App;
