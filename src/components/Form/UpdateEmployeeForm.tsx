import  { Fragment,useEffect } from 'react';
import * as React from "react";
import {ChangeEvent, FormEvent, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import {EDIT_EMPLOYEE} from "../../actions/types";


import styled from 'styled-components';


const SmallTitle = styled('div')`
  font-weight: normal;
  padding-left: 5px;
  text-transform: uppercase;
  font-family: SimplonNorm-Medium, Helvetica, sans-serif;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.125em;
  -webkit-font-smoothing: antialiased;
  padding-top: 50px;
  width: 350px;
  max-width: 556px;
  margin: 15px 0px;
`;

const Content = styled('div')`
  width: 350px;
  max-width: 556px;
  text-align: center;
  position: relative;
  padding: 15px;
  background: white;
  margin: 5px;
`;

const LoginForm__Wrapper = styled('div')`



`;

const LoginForm__Content = styled('div')`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0px;
`;

const TextInput__Wrapper = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  overflow: visible;
`;

const placeholderColor = '#dddddd';
const TextInput__Input = styled('input')`
  position: relative;
  width: 100%;
  font-family: SimplonNorm-Medium, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 21px;
  -webkit-font-smoothing: antialiased;
  text-transform: none;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(220, 220, 220);
  border-image: initial;
  padding: 10px 15px;
  outline: none;
  &::-webkit-input-placeholder {
    color: ${placeholderColor};
    letter-spacing: 3px;
  }
`;

const StyledForm = styled('form')`
  & ${TextInput__Input}:invalid {
    border-color: ${(props: any) => {
    return props.errorForm ? 'red' : 'none';
}};
  }
`;

const Spacing = styled('div')`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  flex-direction: column;
`;

const HasError = styled('div')`
  color: red;
`;

const Footer = styled('div')`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  width: 100%;
  margin-top: 15px;
`;

const Button = styled('button')`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  font-family: SimplonNorm-Medium, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.125em;
  text-transform: uppercase;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  color: black;
  width: 100%;
  outline: none;
  text-decoration: none;
  transition: all 250ms ease-in-out 0s;
  border-width: 1px;
  border-style: solid;
  border-color: black;
  border-image: initial;
  padding: 15px 0px;
  &:hover {
    background-color: #000000;
    color: white;
  }
`;

export const EditEmployeeForm = () => {

    let singleEmployee: { employee_name: string, employee_age: string, employee_salary: string, id: number } = useSelector(state => state.data.user);

    console.log('profile name is' + singleEmployee.employee_name);


    const dispatch = useDispatch();
    var [name, setName] = useState('');
    var [age, setAge] = useState((singleEmployee)?singleEmployee.employee_age:'');
    var [salary, setSalary] = useState('');

    useEffect(() => {

        if (singleEmployee) {
            setName(singleEmployee.employee_name);
            setAge(singleEmployee.employee_age);
            setSalary(singleEmployee.employee_salary);
        }
    }, [singleEmployee]);

    let handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        const employee = {name:name, salary:salary, age:age, id:singleEmployee.id};

        dispatch({
            type: EDIT_EMPLOYEE,
            payload: employee
        })

        console.log('uncertain');

    };


    let handleChange = (event: ChangeEvent): void => {
        event.preventDefault();
        //@ts-ignore
        const value: string = event.target.value;
        //@ts-ignore
        const name: string = event.target.name;



        switch (name) {
            case "name":
                setName(value);
                break;
            case "age":
                setAge(parseInt(value));
                break;
            case "salary":
                setSalary(parseInt(value));
                break;
            default:
                return;
        }
    };






    return (
        <Fragment>


            <SmallTitle> Edit Selected Employee </SmallTitle>
            <Content>
                <LoginForm__Wrapper onSubmit={handleSubmit}>
                    <LoginForm__Content>
                        <StyledForm noValidate name="form">
                            <TextInput__Wrapper>
                                <TextInput__Input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={name}
                                    onChange={handleChange}
                                    placeholder="Employee name"
                                    required
                                />

                            </TextInput__Wrapper>
                            <Spacing>
                                <TextInput__Wrapper>
                                    <TextInput__Input
                                        type="text"
                                        className="form-control"
                                        name="age"
                                        value={age}
                                        onChange={handleChange}
                                        placeholder="Employee age"
                                        required
                                    />

                                </TextInput__Wrapper>
                            </Spacing>
                            <Spacing>
                                <TextInput__Wrapper>
                                    <TextInput__Input
                                        type="text"
                                        className="form-control"
                                        name="salary"
                                        value={salary}
                                        onChange={handleChange}
                                        placeholder="Employee salary"
                                        required
                                    />

                                </TextInput__Wrapper>
                            </Spacing>
                            <Footer>
                                <Button >Update Info</Button>


                            </Footer>


                        </StyledForm>
                    </LoginForm__Content>
                </LoginForm__Wrapper>
            </Content>
        </Fragment>
    );
};
