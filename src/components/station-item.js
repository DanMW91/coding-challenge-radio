import styled from "styled-components";
import radioImage from "./../assets/spaceman.jpg";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledStationItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid grey;
  color: rgb(113, 120, 136);
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const StationInfo = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 100%;
  justify-content: space-between;
`;

const StationDetail = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
`;

const RadioImage = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  border: 2px solid rgb(113, 120, 136); ;
`;

const StationItem = (props) => {
  return (
    <StyledStationItem
      onClick={() => {
        props.onSelectStation(props.name);
      }}
    >
      {props.activeStation === props.name && (
        <StationDetail>
          <FontAwesomeIcon icon={faMinusCircle} />
          <RadioImage src={radioImage} />
          <FontAwesomeIcon icon={faPlusCircle} />
        </StationDetail>
      )}
      <StationInfo>
        <div>{props.name}</div>
        <div>{props.station}</div>
      </StationInfo>
    </StyledStationItem>
  );
};

export default StationItem;
