import { useEffect, useState } from "react";
import SingleCat from "./SingleCat";
const CaragoryList = () => {
    const [catagory,setCatagory] = useState([])
    useEffect(()=>{
        fetch('/data/categories.json')
        .then(res => res.json())
        .then(data => setCatagory(data))
    },[])
    return (
        <div className="max-w-5xl mx-auto space-y-5 px-5 lg:px-0">
            <h2 className="text-3xl font-extrabold text-center">Job Category List</h2>
            <p className="text-center text-gray-500 font-semibold">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
                {
                    catagory?.map(cat=> <SingleCat key={cat.id} cat={cat}></SingleCat>)
                }
            </div>

        </div>
    );
};

export default CaragoryList;