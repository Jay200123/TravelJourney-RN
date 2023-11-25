import {
    Navbar,
    Content
} from "../../components";

import data from "../../data/data";

export default function () {

    const newContents = data.map((d)=>{
        return <Content {...d} key={d.id}/>
    })
    return (
        <>
        <Navbar/>
        {newContents}
        </>
    );
};