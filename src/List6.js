import React from "react";
import Accessoriesimg from "./Accessoriesimg";
import Card from "./Card";

const List6 =()=>{
    return(
        <>
        <div className="my-5">
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                Accessoriesimg.map((val, ind)=>{
                    return <Card key={ind}
                     imgsrc={val.imgsrc}
                     title={val.title}
                     Link={val.Link}
                    />
                })
            }
        </div>
        </div>
        </div>  
        </div>
        </>
        );
};

export default List6;