import styled from 'styled-components'

export const Container = styled.div`
    padding: 28px 60px;
    background: #fff;
    -webkit-box-shadow: -26px -13px 0px 5px #064a83; 
    box-shadow: -26px -13px 0px 5px #064a83;
    //position: fixed;
    //bottom: 0px;
    //left: 0px;
    //right: 0px;
    margin-bottom: 0px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Link = styled.div`
    color: black;
    margin-bottom: 20px;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;

    &:hover {
        color: #064a83;
        transition: 200ms ease-in;
    }
`

export const Title = styled.div`
    font-size: 24px;
    color: black;
    margin-bottom: 40px;
    font-weight: bold;
`

export const LogoRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 200px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    }
`
