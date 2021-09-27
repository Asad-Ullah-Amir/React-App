import React, { useEffect, useState } from "react";
import '../css/news.css';



function News() {
    let [data, setData] = useState([]);
    let [query, setQuery] = useState('');
    let [inpVal,setInpVal] = useState('');
    useEffect(() => {
        async function fetchRecords() {
            const request = await fetch(`https://newsapi.org/v2/everything?q=${query == '' ? 'bitcoin' : query}&apiKey=93a13669ed704ce88ba44873d74c4877`);
            const parsed = await request.json();
            setData(data = [...parsed.articles])
        }
        fetchRecords();
    }, [query]);
    console.log(data);

    function queryHandle(){
        let value = document.querySelector('#inp').value;
        if(value != ""){
            setQuery(query = value);
        }
    }
    return (<>
        <div className="container-fluid py-5 px-4">
            <div className="row justify-content-center mb-5">
                <div className="col-md-4 col-sm-6 d-flex">
                    <input className='filter_input form-control' onChange={(e) => setInpVal(e.targetvalue)} value={inpVal} type="text" name="" id="inp" />
                    <button onClick={queryHandle} className='btn btn-warning ms-2'>Search</button>
                </div>
            </div>
            <div className="row gy-3 gx-3">
                {data.map((item) => {
                    return (
                        <>
                            <div className="col-md-4 col-sm-6">
                                <div className='card'>
                                    <div className="card-body">
                                        <a href={item.url} style={{textDecoration:'none',color:'black'}}><h5>{item.title.substr(0,50)}</h5></a>
                                        <a href={item.url} style={{textDecoration:'none',color:'black'}}><p>{item.description.substr(0,200)}.....</p></a>
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    </>)
}



export default News;