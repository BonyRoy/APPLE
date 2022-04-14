import React from "react";
import APimg from "./APimg";
import Card from "./Card";

const List5 =()=>{
    return(
        <>
        <div className="my-5">
        </div>
        <div className="container-fluid mb-5">
        <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-4">
            {
                APimg.map((val, ind)=>{
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

export default List5;