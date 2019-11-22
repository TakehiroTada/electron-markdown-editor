import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Horizontal from '../components/layouts/Horizontal'
import colors from 'constants/colors'

const TextFieldStyle = styled.textarea`
  flex: 1;
  background-color: ${colors.lighten5};
`

const TextField: FunctionComponent<{ updateText: any }> = ({ updateText }) => {
  return <TextFieldStyle onChange={updateText}></TextFieldStyle>
}

export default TextField
