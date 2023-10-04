import { BiBuildings } from 'react-icons/bi';
import { LuBedDouble } from 'react-icons/lu';
import { LiaBathSolid } from 'react-icons/lia';
import { TbTopologyStar2 } from 'react-icons/tb';
import { MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';
import Button from "../components/Button";
import { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setClickedCardId } from '../globalState/reducers';
import { useNavigate } from "react-router-dom"
import { setFilteredHotels } from '../globalState/reducers';

function Card() {

    let { filteredHetels } = useSelector(state => state.app)

    let [noOfCard, setNoOfCard] = useState(6);

    let slice = filteredHetels.slice(0, noOfCard)
    
    let dispatch = useDispatch()

    let navigate = useNavigate()

    function handleClick(id){
       dispatch(setClickedCardId(id))
       dispatch(setFilteredHotels(id))
       navigate(`/properties/${id}`)
    }

    return (
        <div className="m-6 mb-2 flex flex-wrap gap-[1rem] min-h-screen">
            {
                slice.map((ele) => (
                    <div key={ele.id} className="p-[.7rem] rounded-[1rem] bg-white shadow-lg min-h-[31rem]" onClick={() => handleClick(ele.id)}>
                        <div className='relative'>
                            <img src={ele.image} alt="error" className="w-[25rem] h-[15rem] rounded-[1rem]" />
                            <div className='absolute top-0 left-0 w-[23rem] ml-[1rem] flex mt-[.9rem] justify-between'>
                                <Button name={"For Rent"} className="bg-white w-[5rem] h-[2rem] rounded-[1rem] font-medium text-[#00008B]" />
                                <p className='bg-white w-[2rem] flex justify-center items-center rounded-[2rem]'><AiOutlineHeart className='text-[1.2rem] text-[#00008B]' /></p>
                            </div>
                        </div>
                        <p className="font-medium text-[1rem] mt-[1rem] ml-[1.2rem] flex items-center gap-[4px]"><MdOutlineLocationOn className="text-[1.2rem] text-[#E9967A]" /> {ele.pincode}</p>
                        <p className="font-semibold text-[1.2rem] mt-[.5rem] ml-[1rem]">{ele.address}</p>
                        <div className='flex justify-between my-[1rem] gap-[2rem] mx-[1.8rem]'>
                            <p><BiBuildings className="text-[1.3rem]" /> {ele.room}</p>
                            <p><LuBedDouble className="text-[1.3rem]" /> {ele.bed}</p>
                            <p><LiaBathSolid className="text-[1.3rem]" /> {ele.bathroom}</p>
                            <p><TbTopologyStar2 className="text-[1.3rem]" /> {ele.squarefeet}</p>
                        </div>
                        <hr className='mx-[1.8rem] dotted' />
                        <div className="m-[1rem] flex justify-between">
                            <p className="font-semibold text-[1.7rem] text-[#00008B]">{ele.amount}<span className="text-[.9rem] text-black"> / month</span></p>
                            <div className="flex items-center gap-[1rem]">
                                <Button name={"Read More"} className="w-[8rem] font-semibold text-[1rem] h-[2.5rem] text-[#00008B] rounded-[2rem] border-2 border-[#00008B]" />
                            </div>
                        </div>
                    </div>
                ))
            }
            <div className="mx-6 h-[4.8rem] flex items-center justify-center bg-slate-50 w-screen">
                <Button name={"Show More"} className="w-[8rem] font-semibold text-[1rem] text-white h-[2.5rem] rounded-[2rem] shadow-md bg-[#00308F]" onClick={() => setNoOfCard(noOfCard + 3)} />
            </div>
        </div>
    )
}

export default Card;