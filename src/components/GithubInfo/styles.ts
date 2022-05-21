import styled from 'styled-components'

export const InfoScreen = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85vh;
    margin-right: 1.1rem;
    padding: 1.1rem 2rem 2rem 2rem;
    background-color: #fffffe;
    border-radius: 10px;
`

export const RFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12vh;
`

export const ChangeButton = styled.button`
    flex-grow: 1;
    margin: 0 7rem 0 2rem;
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
    color: rgba(80, 80, 80);
    cursor: pointer;
    display: inline-block;
    font-family: 'Macondo','Noto Serif SC';
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
    height: auto;
    border: 1px solid #dbddde;
    border-radius: 50%;
`

export const AlignRight = styled.div`
    width: 88%;
    margin-top: 0.7rem;
    text-align: left;
`

export const FontStyle = styled.div`
    margin-bottom: 0.7rem;
    font-size: 21px;
    letter-spacing: 1px;
    color: #7a7f86;
`

export const UserName = styled(FontStyle)`
    margin-bottom: 1rem;
    font-size: 22px;
`

export const Location = styled(FontStyle)`
    margin-left: -1rem;
    line-height: 22px;
`

export const Blog = styled(FontStyle)`
    margin-left: -1rem;
    line-height: 22px;
`
