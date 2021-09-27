import React, { Component, useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import NotesCounter from './Notescounter';
import {useSelector,useDispatch} from 'react-redux';
import { inC } from '../actions/actions';
import {Route,Switch} from 'react-router-dom';
import Error from './Error';
import News from './News';



// Modal Component
function Modal(props) {
    // const mystate = useSelector((state) => state.changeNum);
    let getlocalstorage = JSON.parse(localStorage.getItem('data'));
    let value = getlocalstorage[props.id_main];
    let [inpVal,setInpVal] = useState(value.title);
    function inpValChangeHanlde(e){
        let value = e.target.value;
        setInpVal(value);
    }
    return (
        <>
            <div className='modal_container'>
                <div className='main_modal p-3'>
                    <div>
                        <input type="hidden" name="" id="id_updated" value={value.id} />
                        <label htmlFor="title" className='form-label'>Title</label>
                        <input type="text" onChange={inpValChangeHanlde} value={inpVal} name="title" autoComplete='off' id="title" className='form-control' />
                    </div>
                    <div className='mt-2'>
                        <label htmlFor="desc" className='form-label'>Description</label>
                        <textarea name="desc"  id="desc" className='form-control'>{value.desc}</textarea>
                    </div>
                    <button className='btn btn-primary mt-2' onClick={()=> {
                        props.func(document.querySelector('#id_updated').value,document.querySelector('#title').value,document.querySelector('#desc').value);
                    }}>Save</button>
                </div>
            </div>
        </>
    );
}






// App Component
function App() {
    const dispatch = useDispatch();
    let [newArr,setNewArr] = useState([]);
    let [idVal,setId] = useState(0);
    const mystate = useSelector((state) => state.changeNum);
    let [condition,setCond] = useState(true);
    function editha(id){
        let oldData = JSON.parse(localStorage.getItem('data'));
        console.log(oldData[id]);
        setCond(condition = true);
    }
    function edithndle(id){
        setId(idVal = id);
    }
    function changeStorageData(id,input,textArea){
        let obj = {
            id:id,
            title:input,
            desc:textArea,
        }
        if(textArea != "" && input != ""){
            let getStr = JSON.parse(localStorage.getItem('data'));
            getStr.splice(idVal,1,obj);
            let setStorage = localStorage.setItem('data',JSON.stringify(getStr));
            dispatch(inC());
            let getLatestStorage = JSON.parse(localStorage.getItem('data'));
            setNewArr(newArr = [...getLatestStorage]);
        }
    }
    
    function deleteStr(gad){
        setNewArr(newArr = [...gad]);
        console.log(newArr);
    }
    return (
        <>
        <Header />
        <Switch>
            <Route exact path='/' render={()=> <>
            <NotesCounter funcToCall={edithndle} updateStorage={newArr} deleteStr={deleteStr} />
            {mystate ? <Modal func={changeStorageData} id_main={idVal}  /> : ''}
            </>} />
            <Route path=
            '/api' component={News} />
            <Route component={Error} />
        </Switch>
            <Footer />
        </>
    )
}






export default App;