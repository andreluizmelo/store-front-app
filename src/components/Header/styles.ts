import styled from "styled-components"; 

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 0 10px 0;
    padding: 10px 16px;
    background: #eeeee4;
    color: #424242;
    
` 

export const HeaderTitleContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    a {
        margin-right: 16px;
    }
    input {
        margin-right: 8px;
    }
`

export const HeaderActionContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`