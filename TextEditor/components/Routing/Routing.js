import React from "react";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Form from "../FormValidation/Form";


function RoutingReact() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Form/>}/>
                    
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default RoutingReact;