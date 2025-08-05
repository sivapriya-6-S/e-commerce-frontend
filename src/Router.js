import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyApp from "./App";
import LoginCard from "./others/LoginCard";
import SimpleButton from "./others/SimpleButton";
import BasicAppComponent from "./others/BasicAppComponent";
import AddProductCard from "./product/AddProductCard";
import Navbar from "./navbar";

function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<MyApp />} />
                <Route path="/home" element={<MyApp />} />
                <Route path="/login" element={<LoginCard />} />
                <Route path="/simple" element={<SimpleButton />} />
                <Route path="/basic" element={<BasicAppComponent />} />
                <Route path="/add-product" element={<AddProductCard />} />
                <Route path="/delete-product/:id" element={<AddProductCard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
