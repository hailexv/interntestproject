import styled from 'styled-components';

const StyledCard = styled.div`
  margin: 100px auto;
  box-sizing: border-box;
  width: 300px;
  height: 400px;
  margin:30px;
  box-shadow: 3px 5px 5px #161615;
  border: 1px solid #161615;
  background: ${props => (props.back ? null : 'white')};
  position: relative;
  z-index: 1000;
`;

export default StyledCard;
