import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';


const HomePage = lazy(() => import("./pages/HomePage"));
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  )
}