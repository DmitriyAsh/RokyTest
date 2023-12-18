import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import FetchingData from "./components/FetchingData";
import NewsCardItem from "./components/NewsCardItem/NewsCardItem";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/postlist' element={<FetchingData />} />
                <Route
                    path='/postlist/:id'
                    element={<NewsCardItem image={""} body={""} />}
                />
                <Route
                    path='/*'
                    element={<Navigate to='/postlist' replace />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
