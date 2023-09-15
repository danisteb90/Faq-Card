import arrow from "../assets/icon-arrow-down.svg"

const Dropdown = ({ title, paragraph }) => {
    return (
        <div className="relative px-5">
            <input className="absolute top-1 right-6 peer cursor-pointer w-[290px] z-10" type="checkbox" />
            <button className="absolute top-1 right-6 transition-transform duration-300 rotate-0 peer-checked:rotate-180"><img src={arrow} alt="arrow" /></button>
            <p className="text-[13px] cursor-pointer peer-checked:font-bold peer-hover:text-Soft-red">{title}</p>
            <hr className="my-3" />
            <div className="overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-20">
                <p className="text-[12px] mb-4">{paragraph}</p>
            </div>
        </div>
    );
}

export default Dropdown;
