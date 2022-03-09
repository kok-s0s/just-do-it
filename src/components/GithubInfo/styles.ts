import styled from 'styled-components'

export const InfoScreen = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fffffe;
    height: 85vh;
    margin-right: 1.1rem;
    padding: 1.1rem 2rem 2rem 2rem;
    border-radius: 10px;
`

export const RFooter = styled.div`
    height: 12vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ChangeButton = styled.button`
    flex-grow: 1;
    margin: 0 7rem 0 2rem;
    width: 270px;
    align-self: center;
    background-color: #bae8e8;
    background-image: none;
    background-position: 0 90%;
    background-repeat: repeat no-repeat;
    background-size: 4px 3px;
    border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
    border-style: solid;
    border-width: 2px;
    box-shadow: rgba(0, 0, 0, 0.2) 15px 28px 25px -18px;
    box-sizing: border-box;
    color: #272343;
    cursor: pointer;
    display: inline-block;
    font-family: Neucha, sans-serif;
    font-size: 1.3rem;
    font-weight: 600;
    line-height: 23px;
    outline: none;
    padding: 0.75rem;
    text-decoration: none;
    transition: all 235ms ease-in-out;
    border-bottom-left-radius: 15px 255px;
    border-bottom-right-radius: 225px 15px;
    border-top-left-radius: 255px 15px;
    border-top-right-radius: 15px 225px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
        transform: translate3d(0, 2px, 0);
    }

    &:focus {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 4px -6px;
    }

    &:after {
        content: '';
        width: 45px;
    }
`

export const Image = styled.img`
    display: block;
    width: 60%;
    border-radius: 50%;
    border: 1px solid #dbddde;
`

export const AlignRight = styled.div`
    text-align: left;
    margin-top: 0.7rem;
    width: 88%;
`

export const FontStyle = styled.div`
    font-size: 21px;
    letter-spacing: 1px;
    color: #7a7f86;
    margin-bottom: 0.7rem;
`

export const UserName = styled(FontStyle)`
    font-size: 22px;
    margin-bottom: 1rem;
`

export const Location = styled(FontStyle)`
    line-height: 22px;
    margin-left: -1rem;
`

export const Blog = styled(FontStyle)`
    line-height: 22px;
    margin-left: -1rem;
`
