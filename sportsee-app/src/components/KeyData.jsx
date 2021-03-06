//React
import React from "react"
import styled from "styled-components"

//Utils
import colors from "../styles/colors"

//Assets
import Apple from "../assets/AppleIcon.svg"
import Cheeseburger from "../assets/CheeseburgerIcon.svg"
import Chicken from "../assets/ChickenIcon.svg"
import Flame from "../assets/FlameIcon.svg"

//Datas
import Service from "../datas/ServiceAPI"
//Possibility to change service (mocked data)
//import Service from "../datas/ServiceMock"

const ContainerRight = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 3.9rem;

    span {
        font-weight: 700;
        font-size: 2rem;
        color: ${colors.darkGrey};
    }

    p {
        font-size: 1.4rem;
        color: ${colors.fontLightGrey};
    }

    @media screen and (max-width: 1300px) {
        flex-direction: row;
        column-gap: 3.9rem;
        flex-wrap: wrap;
        width: 83.5rem;
    }
`

const ContainerKeyData = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2.4rem;
    background-color: ${colors.backgroundLightGrey};
    width: 25.8rem;
    height: 12.4rem;
    border-radius: .5rem;

    @media screen and (max-width: 1300px) {
        min-width: 40%;
        flex: 1;
    }
`
const BackgroundIcon = styled.div`
    margin-left: 3.2rem;
    background-color: ${(props) => props.color};
    height: 6rem;
    width: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .6rem;
`

/**
* @param {Object} props - Props
* @param {string} id - User ID number
* @returns {Component} - Div with key data
*/

class KeyData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            calorieCount: NaN,
            proteinCount: NaN,
            carbohydrateCount: NaN,
            lipidCount: NaN
        }
        this.service = new Service()
    }

    componentDidMount() {
        this.service.getUser(this.props.id, this.recoveryUser)
    }
    
    /**
    * Update the state with the fetched data
    * @param {object} data the fetched data from API
    */

    recoveryUser = (data) => {
        this.setState({
            calorieCount: data.calorieCount,
            proteinCount: data.proteinCount,
            carbohydrateCount: data.carbohydrateCount,
            lipidCount: data.lipidCount
        })
    }

    render () {
        return (
            <ContainerRight>
                <ContainerKeyData>
                    <BackgroundIcon color = {colors.backgroundLigthRed}>
                        <img src = {Flame} alt = "Ic??ne de flamme"/>
                    </BackgroundIcon>
                    <div>
                        <span>{`${this.state.calorieCount}kCal`}</span>
                        <p>Calories</p>
                    </div>
                </ContainerKeyData>

                <ContainerKeyData>
                    <BackgroundIcon color = {colors.backgroundBlue}>
                        <img src = {Chicken} alt = "Ic??ne de cuisse de poulet"/>
                    </BackgroundIcon>
                    <div>
                        <span>{`${this.state.proteinCount}g`}</span>
                        <p>Proteines</p>
                    </div>
                </ContainerKeyData>

                <ContainerKeyData>
                    <BackgroundIcon color = {colors.backgroundYellow}>
                        <img src = {Apple} alt = "Ic??ne de pomme"/>
                    </BackgroundIcon> 
                    <div>
                        <span>{`${this.state.carbohydrateCount}g`}</span>
                        <p>Glucides</p>
                    </div>
                </ContainerKeyData>
                <ContainerKeyData>
                    <BackgroundIcon color = {colors.backgroundPink}>
                        <img src = {Cheeseburger} alt = "Ic??ne de cheeseburger"/>
                    </BackgroundIcon>
                    <div>
                        <span>{`${this.state.lipidCount}g`}</span>
                        <p>Lipides</p>
                    </div>
                </ContainerKeyData>
            </ContainerRight>
        )
    }
}

export default KeyData