import styled from 'styled-components';

export const Container = styled.div`
background-color: #444;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
`;

export const PrimaryColor = styled.div`
width: 50px;
height: 50px;
background-color: ${({ color }) => color || 'black'};
margin-bottom: 30px;
margin-right: 30px;
position: absolute;
${({ menu }) => (menu
    ? 'visibility: visible;'
    : 'visibility: hidden;')};
`;

export const SecoundColor = styled.div`
width: 50px;
height: 50px;
background-color: ${({ color }) => color || 'white'};
margin-left: 30px;
margin-top: 30px;
/* position: relative; */
/* position: absolute; */
`;
