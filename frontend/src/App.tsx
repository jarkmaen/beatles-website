import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="container mx-auto px-8">
            <Header />
            <main className="py-12">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;
