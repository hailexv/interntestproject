import * as React from "react";
import { space, width, fontSize, color } from 'styled-system';
import styled, { ThemeProvider } from 'styled-components';
import { CubeGrid } from 'styled-loaders-react'
import theme from "../components/theme";
import EmployeeCard from "../components/EmployeeCard";
import {getEmployeeStart,deleteEmployee} from "../actions";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import Navbar from "../components/Navigation/NavComponent";
import {Box, Flex} from "rebass";
import HorizontalFlex from "../components/HorizontalFlex";
import {AddEmployeeForm} from "../components/Form/AddEmployeeForm";


class HomePage extends React.Component {



    componentDidMount(): void {
        this.props.getEmployeeStart();
    }

    onDelete (userId) {
        this.props.deleteEmployee(userId.target.value);
        //console.log(userId);
    }

    render() {
        let containerStyle = {height:"100vh",width:"100vw",overflowY:"hidden"};
        const results = this.props.Users || [];
        console.log(results);

        var users = <CubeGrid  color="#333" size="40px" />;

        results.length ?
            users = results.map(user => (
                <EmployeeCard key={user.id} employee_id={user.id} employee_age={user.employee_age} employee_name={user.employee_name} employee_salary={user.employee_salary} employee_image={`https://ui-avatars.com/api/?name=` + user.employee_name} onDelete={this.onDelete.bind(this)} >
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

                    </HorizontalFlex>








            </ThemeProvider>

        );
    }
}



const mapStateToProps = state => ({ Users: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getEmployeeStart, deleteEmployee }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
