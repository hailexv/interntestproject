import styled from 'styled-components';
import * as React from "react";
import femaleavatar from '../assets/images/femaleavatar.png';
import ButtonComponent from "./button/ButtonComponent";
import StyledCard from './StyledCard';
import {useState} from "react";


const Age = styled.div`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background: linear-gradient(
    to bottom,
    rgba(240, 198, 151, 100),
    rgba(221, 166, 94, 100)
  );
  border: 5px solid white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  color: white;
  margin-top: -90px;
  margin-left: 10px;
  position: relative;
  font-family: 'Open Sans Bold';
`;

const ProfilePic = styled.img`
  width: 100%;
`;

const Name = styled.span`
  font-family: 'Open Sans Bold';
  margin-left: 15px;
  font-size: 1.3rem;
  display: block;
  margin-top: 30px;
`;

const Lastname = styled.span`
  font-family: 'Open Sans Light';
  margin-left: 15px;
  display: block;
`;



const EmployeeCard = props => {

    let id = useState(props.id)

   let handleDelete = (event)=>{
       event.preventDefault();
       //dispatch
   }

    return (
        <StyledCard>
            <ProfilePic src={props.employee_image} alt="Person" />
            <Age>
                <p>{props.employee_salary}</p>
            </Age>
            <Name>{props.employee_name}</Name>
            <Lastname>{props.employee_age}</Lastname>



            <ButtonComponent value={props.employee_id} onClick={props.onDelete} bottom='13%' background='#ED5E68'>Delete</ButtonComponent>
            <ButtonComponent value={props.employee_id} onClick={props.onDelete} bottom='1%' background='#57B157'>Edit</ButtonComponent>

        </StyledCard>
    );
};

export default EmployeeCard;
