import React, { useEffect, useState } from 'react';
import '../css/notes.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Boxes from './Boxes';






function NotesCounter(props) {
    let [toggle, setState] = useState(false);
    let [inp_Val,setInpVal] = useState('');
    let [desc_Val,setDescVal] = useState('');
    let [Afdelete,setDelete] = useState([]);
    let data = localStorage.getItem('data');
    if(data != null){
        data = JSON.parse(data);
    }else{
        data = [];
    }
    let [useData,setArr] = useState(data);
    let ArrRender = [];
    if(props.updateStorage.length == 0){
        ArrRender = [...useData];
    }
    else{
        ArrRender = [...props.updateStorage];
    }



    // Input Hanlde 
    function changehandle(e){
        let value = e.target.value;
        e.target.type === 'text' ?  setInpVal(value) : setDescVal(value);
    }
    
    
    
    
    function datahandle(e){
        let inpVal = document.querySelector('#except');
        let desVal = document.querySelector('#except2');
        if(inpVal.value !== '' && desVal.value !== ''){
            let obj = {
                id:data.length+1,
                title:inpVal.value,
                desc:desVal.value
            }
            let setData = localStorage.setItem('data',JSON.stringify([...data,obj]));
            let gd = JSON.parse(localStorage.getItem('data'));
            setArr((preVal)=>{
                return [...gd];
            })
            setInpVal('');
            setDescVal('');
        }
        else{
            alert('Please fill both the fields!');
        }
    }
    
    function deletehandle(id){
        data.splice(id,1);
        let setd = localStorage.setItem('data',JSON.stringify([...data]));
        let gad = JSON.parse(localStorage.getItem('data'));
        // ArrRender = [...gad];
        setArr((preVal) =>{
            return [...gad];
        })
        props.deleteStr(gad);

    }
    
    
    document.onclick = function (e) {
        if (e.target.id !== 'except' && e.target.id !== 'except2') {
            setState(toggle = false);
        }
    }
    return (
        <>
            <div className="container mt-2">
                <div className="row justify-content-center px-sm-0 px-5 add_note_pad">
                    <div className="col-lg-5 col-md-6 col-sm-8 add_box">
                        <div className="input_container">
                            <div onClick={(e) => setState(toggle = true)}>
                                <input id='except' type="text" onChange={changehandle} value={inp_Val} placeholder='Add Title' className='' autoComplete='off' />
                            </div>
                            <div className="toggle mt-4" style={{ display: toggle ? 'block' : 'none' }}>
                                <textarea name="" id='except2' onChange={changehandle} value={desc_Val} rows="2" placeholder='Description......'></textarea>
                            </div>
                        </div>
                        <Button className='btnn' onClick={datahandle}>
                            <AddIcon style={{ fontSize: '1.7rem' }} />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-lg-5 px-md-4 px-sm-2 px-4">
                <div className="row mt-sm-5">
                    {ArrRender.map((val,index)=>{
                        return <Boxes key={index} deleting={deletehandle} funCall2={props.funcToCall} title={val.title} des={val.desc} id={index} />
                    })}
                </div>
            </div>
        </>
    );
}

export default NotesCounter;