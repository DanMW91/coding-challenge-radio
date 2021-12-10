import {useState} from 'react'
import styled from 'styled-components';
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledStationItem = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid grey;
  color: rgb(113,120,136);
  font-weight: bold;

`

const StationItem = (props) => {
  const [selected, setSelected] = useState(false)

  return (
    <>
      <StyledStationItem onClick={()=> {
        props.onSelectStation(props.name)
        setSelected(true)}
        }>
        {selected && props.activeStation === props.name &&
        <FontAwesomeIcon icon={faPlusCircle}/>}
        <div>{props.name}</div>
        <div>{props.station}</div>
      </StyledStationItem>
    </>
  )
}



export default StationItem
