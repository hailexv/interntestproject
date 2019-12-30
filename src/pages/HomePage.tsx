import * as React from "react";
import { space, width, fontSize, color } from 'styled-system';
import styled, { ThemeProvider } from 'styled-components';
import { CubeGrid } from 'styled-loaders-react'
import theme from "../components/theme";
import EmployeeCard from "../components/EmployeeCard";
import {getEmployeeStart} from "../actions";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";


class HomePage extends React.Component {

    componentWillMount(): void {
        this.props.getEmployeeStart();
    }

    render() {
        const results = this.props.data || [];
        console.log(results);

        var users = <CubeGrid  color="#333" size="40px" />;

        results.length ?
            users = results.map(user => (
                <EmployeeCard key={user.id} employee_age={user.employee_age} employee_name={user.employee_name} employee_salary={user.employee_salary} employee_image={`https://ui-avatars.com/api/?name=` + user.employee_name} >
                </EmployeeCard>

            )) : users = <CubeGrid  color="#333" size="130px" />;

        return (
            <ThemeProvider theme={theme}>
                <Box bg="orange" fontSize={24} width={200} p={20} m="50px auto">
                    This is a Box
                </Box>
                {users}
            </ThemeProvider>

        );
    }
}

const Box = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
`;

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
    bindActionCreators({ getEmployeeStart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
