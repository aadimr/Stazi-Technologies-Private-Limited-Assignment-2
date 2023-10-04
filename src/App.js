import FilterHeader from "./filterHeader/FilterHeader";
import HeroPage from "./heroPage/HeroPage";
import Properties from "./properties/Properties";
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="bg-slate-50 pb-[.8rem] pt-[5px]">
      <BrowserRouter>
        <FilterHeader />
        <Routes>
          <Route path="/" element={<HeroPage />} />
          <Route path="/properties/:id" element={<Properties />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
