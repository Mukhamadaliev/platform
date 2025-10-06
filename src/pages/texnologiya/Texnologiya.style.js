import styled from 'styled-components';

export const HeaderContner = styled.header`
    width: 78%;
    padding: 20px;
    background-color: rgba(124, 109, 117, 0.16);
    position: absolute;
    left: 20%;
    height: 90%;
    top: 10%;
    border-radius: 20px;
    max-width: 1280px;
    margin: 0;
`
export const HeaderAction = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const TexnologiesMenu = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Left = styled.div`
    display: flex;
`

export const Right = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

.tech_menu{
    font-size: 40px;
    padding: 5px;
    background-color: white;
    border-radius: 10px;
    color: grey;
}
.tech_app{
    font-size: 40px;
    padding: 10px;
    background-color: #7b43f9;
    border-radius: 10px;
    color: white;
}
`
export const TexnologuesBoxs = styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
padding: 10px;
`

export const TexnologuesBox = styled.div`
display: flex;
flex-direction: column;
width: 310px;
height: 150px;
gap: 20px;
border: 1px solid black;
padding: 10px;
border-radius: 10px;
background-color: white;
`
export const BoxStart = styled.div`
display: flex;
justify-content: space-between;
`
export const BoxLeft = styled.div`

`
export const BoxRight = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
`
export const BoxEnd = styled.div`
`