import Button from "../components/Button";
import { setFilteredHotels } from "../globalState/reducers";
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { Link } from "react-router-dom";

function FilterHeader() {

    let cityName = ["New York", "California", "Paris", "London"]

    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    let dispatch = useDispatch()

    function handleChange(e,index) {
        setSelectedButtonIndex(index)
        let clickedCity = e.target.name
        dispatch(setFilteredHotels(clickedCity))
    }

    return (
        <div className="mx-6 h-[4.8rem] flex gap-[1rem] items-center pl-[1.4rem] bg-slate-50">
            {
                cityName.map((ele, index) => (
                    <Link to={"/"}><Button name={ele} index={index} className={`w-[8rem] font-semibold text-[1rem] h-[2.5rem] rounded-[2rem] shadow-md bg-[#F0F8FF] ${
                        selectedButtonIndex === index
                          ? 'bg-[#07077e] text-white'
                          : 'bg-[#F0F8FF]'
                      }`} onClick={(e) => handleChange(e, index)} /></Link>
                ))
            }
        </div>
    )
}

export default FilterHeader;