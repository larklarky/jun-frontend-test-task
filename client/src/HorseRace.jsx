import React, {useState, useEffect} from 'react';
import { connect, useDispatch } from 'react-redux';
import { io } from "socket.io-client";
import {getData} from './actions';
import Horse from './Horse';

const HorseRace = (props) => {
    const {getData, horsesList} = props;
    const [finals, setFinals] = useState([]);

    const dispatch = useDispatch()

    useEffect(() => {
        const socket = io('http://localhost:3002');
        socket.emit('start');
        socket.on('ticker', (response) => {
            dispatch(getData(response))
        })
        return () => {
            socket.off('connect');
            socket.off('disconnect');
        }
    }, [])
    

    const horsesSort = horsesList.sort((horse1, horse2) => horse2.distance - horse1.distance)

    return (
        <>
            <div className='title'>{finals.length === 6 ? `The winner is ${finals[0].name}!` : 'Who will win?'}</div>
            <div className='container'>
            {finals.map(horse => {
                return(
                <Horse horse={horse}/>
                )
            })}
            
            {horsesSort.map(horse => {
                if(horse.distance === 1000 && finals.length < 6 ) { 
                if(finals.find(item => item.name === horse.name) === undefined) {
                    setFinals(finals => [...finals, horse])
                }
                }
                if(finals.find(item => item.name === horse.name) === undefined) {
                return(
                    <Horse horse={horse}/>
                )
                }
            })}
            </div>
            <div className='button-wrapper'><button onClick={() => window.location.reload(false)}>New Race</button></div>
        </>
    );
}
  


function mapStateToProps(state) {
  console.log('state', state)
  return {
      horsesList: state.horses.horses,
  }
}

export default connect(mapStateToProps, {getData}) (HorseRace);