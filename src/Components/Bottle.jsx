
import { useState} from "react";
import { FaBookmark } from "react-icons/fa";
const Bottle = ({botoles}) => {
    console.log(botoles)
    const {img, name, price}=botoles;
    const [mark, setMark]=useState(false);
    const handleMark =()=>{
        setMark(!mark)
    }
    return (
        <div className={`border border-red-500 rounded-lg p-3 ${mark? "bg-green-900 text-white":""}`}>
            <img className='h-40 w-full rounded-lg' src={img} alt="" />
            <h1 className='font-bold mt-5 text-sm'>{name}</h1>
            <h4 className='mt-2 text-sm'>Price: {price} $</h4>
            <button className="mt-3" onClick={handleMark}><FaBookmark className={`${mark? "text-red-900":"text-green-900"}`} /></button>
        </div>
    );
};

export default Bottle;