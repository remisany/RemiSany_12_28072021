//React
import React from "react";
import styled from "styled-components"
import {Link} from "react-router-dom"

//Utils
import colors from '../styles/colors'

//Assets
import BikeIcon from "../assets/BikeIcon.svg"
import DumbbellIcon from "../assets/DumbbellIcon.svg"
import SwimmingIcon from "../assets/SwimmingIcon.svg"
import YogaIcon from "../assets/YogaIcon.svg"

const NavL = styled.nav`
    position: absolute;
    background-color:  ${colors.backgroundNav};
    width: 11.7rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    row-gap: 2rem;
`

const NavIcon = styled(Link)`
    height: 6.4rem;
    width: 6.4rem;
    border-radius: .6rem;
    background-color:  ${colors.white};
    display: flex;
    justify-content: center;
`

const NavText = styled.p`
    position: absolute;
    white-space: nowrap;
    color: ${colors.white};
    font-size: 1.2rem;
    bottom: 5.9rem;
    writing-mode: vertical-lr;
    transform: rotate(180deg);
`

class NavLeft extends React.Component {
    render() {  
        return (
            <NavL>
                <NavIcon to = "/"><img src = {YogaIcon} alt = "Icône yoga"/></NavIcon>
                <NavIcon to = "/"><img src = {SwimmingIcon} alt = "Icône natation"/></NavIcon>
                <NavIcon to = "/"><img src = {BikeIcon} alt = "Icône vélo"/></NavIcon>
                <NavIcon to = "/"><img src = {DumbbellIcon} alt = "Icône haltère"/></NavIcon>
                <NavText>Copyright, SportSee 2020</NavText>
            </NavL>
        )
    }
}

export default NavLeft