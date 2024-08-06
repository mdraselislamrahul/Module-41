import { useLoaderData } from "react-router-dom";
import Bottle from "./Bottle";
import { useRef, useState } from "react";
import { data } from "autoprefixer";

const Bottoles = () => {
    const datas = useLoaderData();
    const searchRaf = useRef();
    const [searchData, setSearchData] = useState(datas)
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(searchRaf.current.value)
        const serch = datas.filter((e, idx) => e.name.toLowerCase().includes(searchRaf.current.value.toLowerCase()))
        console.log(serch)
        setSearchData([...serch])
        if (searchRaf.current.value.length < 1) {
            setSearchData([...datas])
        }
    }

    const handleHigh=()=>{
        const priceSort=datas.sort((a, b)=>b.price-a.price)
        setSearchData([...priceSort])
    }
    const handleLow=()=>{
        const priceSort=datas.sort((a, b)=>a.price-b.price)
        setSearchData([...priceSort])
    }
    return (
        <div className="p-5">
            <div className="mt-5 flex justify-between">
                <div>
                    <input ref={searchRaf} className="border-2 border-red-900" type="text" />

                    <button onClick={handleSearch} className="text-sm bg-red-900 px-2 text-white py-1 ml-3">Click here</button>
                </div>
                <div>
                    <button onClick={handleHigh} className="bg-red-900 px-2 py-1 text-white">High Price</button>
                    <button onClick={handleLow} className="bg-red-900 px-2 py-1 text-white ml-3">Low Price</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-5 mt-10">
                {
                    searchData.map(botoles => <Bottle botoles={botoles} key={botoles.id}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottoles;