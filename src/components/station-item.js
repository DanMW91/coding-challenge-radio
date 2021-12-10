import {useState} from 'react'
import styled from 'styled-components';

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
      <StyledStationItem>
        <div>{props.name}</div>
        <div>{props.station}</div>
      </StyledStationItem>
    </>
  )
}



export default StationItem
