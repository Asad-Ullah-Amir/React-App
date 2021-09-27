import React, { useState } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import {useDispatch} from 'react-redux';
import { inC } from '../actions/actions';
function Boxes(props) {
    
    let dispatch = useDispatch();
    return (
        <>
            <div className="col-md-4 col-sm-6 mt-5 align-self-start">
                <div className='stored_boxes'>
                    <h3>{props.title}</h3>
                    <p>{props.des}</p>
                    <Button id={props.id} onClick={() => props.deleting(props.id)} className='btnn hover' style={{ top: '-8%' }}>
                        <DeleteOutlineIcon />
                    </Button>
                    <EditIcon className='edit_icon' onClick={()=> {
                        dispatch(inC());
                        props.funCall2(props.id);
                        }} id={props.id} />
                </div>
            </div>
        </>
    )
}


export default Boxes;