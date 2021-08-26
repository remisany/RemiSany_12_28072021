//React
import React from "react"
import {Line, LineChart, Tooltip, XAxis, YAxis} from "recharts"
import styled from "styled-components"
import PropTypes from "prop-types"

//Utils
import colors from "../styles/colors"

const ContainerLine = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: ${colors.iconRed};
  border-radius: .5rem;
  height: 26.3rem;
  width: 25.8rem;

  h2 {
    position: absolute;
    left: 3rem;
    top: 2.4rem;
    font-size: 1.5rem;
    color: ${colors.white};
    opacity: 0.5;
    width: 70%;
  }

  tspan {
    font-size: 1.2rem;
    opacity: 0.5;
  }
`

const ContainerTooltip = styled.div`
    background-color: ${colors.white};
    color: ${colors.black};
    display: flex;

    p {
        margin: .8rem .8rem;
    }
`

/**
* Custom tooltip of BarChart
* @param {array} payload - Containing the information of Barchart
* @param {boolean} active - Tooltip status
* @returns {Component} - Div with the information to display (sessionLenght)
*/

const CustomTooltip = ({active, payload}) => {
	if (active) {
		return (
      <ContainerTooltip>
        <p>{`${payload[0].value} min`}</p>
      </ContainerTooltip>
		);
	}

	return null
}

/**
* @param {Object} props - Props
* @param {Array} props - Data to display in the graph (average)
* @param {string} props[].day - Date of the data
* @param {number} props[].sessionLength - Duration of the session for the date
* @returns {Component} - Div with the Line Chart
*/

class LineComponent extends React.Component {

  /**
  * @param {Object} props - Corresponds to unformatted X axis data (number)
  * @returns {string} - Data formatted in the correct format: letter corresponding to the day number
  */

  getXAxis(data) {
    let value = ""
    switch (data.day) {
      case 1:
        value = "L"
        break;
      case 2:
        value = "M"
        break;
      case 3:
        value = "M"
        break;
      case 4:
        value = "J"
        break;
      case 5:
        value = "V"
        break;
      case 6:
        value = "S"
        break;
      case 7:
        value = "D"
        break;
      default:
        value = ""
    }
    return value
  }

  render() {

    const {average} = this.props

    return (
      <ContainerLine>
        <h2>Durée moyenne des sessions</h2>
        <LineChart
          width = {258}
          height = {263}
          data = {average}
          margin = {{
            top: 0,
            right: 14,
            left: 14,
            bottom: 0,
          }}
        >
          <XAxis
            dataKey = {this.getXAxis}
            stroke = {colors.white}
            axisLine = {false}
            tickLine = {false}
          />
          <YAxis
            dataKey = "sessionLength"
            hide = {true}
            domain = {["dataMin -10", "dataMax +30"]}
          />
          <Tooltip content = {<CustomTooltip/>}/>
          <Line
            type = "monotone"
            dataKey = "sessionLength"
            stroke = {colors.white}
            strokeWidth = {2}
            dot = {false}
            activeDot = {{
              stroke: colors.backgroundWhite,
              strokeWidth: 9,
              r: 4,
            }}
          />
        </LineChart>
      </ContainerLine>
    )
  }
}

LineComponent.propTypes = {
  average: PropTypes.array
}

LineComponent.defaultProps = {
  average: [
    {day: 0, sessionLength: NaN},
  ]
}

export default LineComponent
