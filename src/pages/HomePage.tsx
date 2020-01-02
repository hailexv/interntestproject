import * as React from "react";
import { space, width, fontSize, color } from 'styled-system';
import styled, { ThemeProvider } from 'styled-components';
import { CubeGrid } from 'styled-loaders-react'
import theme from "../components/theme";
import EmployeeCard from "../components/EmployeeCard";
import {getEmployeeStart, deleteEmployee, getSingleEmployee, editEmployee} from "../actions";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Navbar from "../components/Navigation/NavComponent";
import {Box, Flex} from "rebass";
import HorizontalFlex from "../components/HorizontalFlex";
import {AddEmployeeForm} from "../components/Form/AddEmployeeForm";
import {EditEmployeeForm} from "../components/Form/UpdateEmployeeForm";


class HomePage extends React.Component {



    componentDidMount(): void {
        this.props.getEmployeeStart();
    }

    onDelete (userId) {
        this.props.deleteEmployee(userId.target.value);
        //console.log(userId);
    }

    onEdit (userId) {
        this.props.getSingleEmployee(userId.target.value);
        //console.log(userId.target.value);
    }

    render() {
        let containerStyle = {height:"100vh",width:"100vw",overflowY:"hidden"};
        const results = this.props.Users || [];



        var users = <CubeGrid  color="#333" size="40px" />;



        results.users.length ?
            users = results.users.map(user => (
                <EmployeeCard key={user.id} employee_id={user.id} employee_age={user.employee_age} employee_name={user.employee_name} employee_salary={user.employee_salary} employee_image={`https://ui-avatars.com/api/?name=` + user.employee_name} onDelete={this.onDelete.bind(this)} onEdit={this.onEdit.bind(this)} >
                </EmployeeCard>

            )) : users = <CubeGrid  color="#333" size="130px" />;

        return (

            <ThemeProvider theme={theme}>
                <Navbar/>

                    <HorizontalFlex>
                        <div>
                           <AddEmployeeForm/>
                        </div>
                        <div>
                            {users}
                        </div>
                        <div>
                            <EditEmployeeForm/>
                        </div>

                    </HorizontalFlex>








            </ThemeProvider>

        );
    }
}



const mapStateToProps = state => ({ Users: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getEmployeeStart, deleteEmployee , getSingleEmployee}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
