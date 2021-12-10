import styled from 'styled-components';
import { useState } from 'react';
import { faPowerOff, faChevronLeft  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StationItem from './station-item';


const RadioPlayerContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 400px;
  width: 250px;
  background-color: rgb(45,45,55);
  border-radius: 15px;
  overflow: hidden;

`

const HeaderDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: rgb(236,173,96);
  color: rgb(254,248,228);
  padding: 0px 15px;
`

const FooterDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: rgb(34,34,42);
  color: rgb(254,248,228);
  padding: 0px 15px;
`

const StationsContainer = styled.div`
box-sizing: border-box;
display: flex;
flex-direction: column;
align-items: center;
height: 70%;
width: 100%;
padding: 10px 20px;
overflow: scroll;
`

const CurrentlyPlaying = styled.div`
  color: rgb(236,173,96);
  font-size:10px;
`

const StationTitle = styled.div`
  color: rgb(254,248,228);
`


const RadioPlayer = () => {
  const [stationPlaying, setStationPlaying] = useState();

  const selectStationHandler = (stationName) => {
    setStationPlaying(stationName)
  }

  return (
    <RadioPlayerContainer>
      <HeaderDiv>
        <FontAwesomeIcon icon={faChevronLeft}/>
        <h2>Stations</h2>
        <FontAwesomeIcon icon={faPowerOff}/>
      </HeaderDiv>
      <StationsContainer>
        <StationItem name={'Putin FM'} station={'66.6'}/>
        <StationItem name={'Dribble'} station={'101.2'}/>
        <StationItem name={'Doge FM'} station={'99.4'}/>
        <StationItem name={'Ballads FM'} station={'87.1'}/>
        <StationItem name={'Maximum FM'} station={'142.2'}/>
      </StationsContainer>
      <FooterDiv>
        {stationPlaying &&
        <>
          <CurrentlyPlaying>
            CURRENTLY PLAYING
          </CurrentlyPlaying>
          <StationTitle>
            {stationPlaying}
          </StationTitle>
        </>}
      </FooterDiv>
    </RadioPlayerContainer>
  )
}

export default RadioPlayer
