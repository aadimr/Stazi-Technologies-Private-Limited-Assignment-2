import Button from "../components/Button";

function FilterHeader() {

    let cityName = ["New York", "California", "Paris", "London"]

    return (
        <div className="mx-6 h-[4.8rem] flex gap-[1rem] items-center pl-[1.4rem] bg-slate-50">
            {
                cityName.map((ele, index) => (
                    <Button name={ele} key={index} className="w-[8rem] font-semibold text-[1rem] h-[2.5rem] rounded-[2rem] shadow-md bg-[#F0F8FF]" />
                ))
            }
        </div>
    )
}

export default FilterHeader;