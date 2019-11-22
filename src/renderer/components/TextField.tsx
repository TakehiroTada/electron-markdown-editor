import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Horizontal from '../components/layouts/Horizontal'
import colors from 'constants/colors'
import { HeadSize } from 'constants/size'

const TextFieldStyle = styled.textarea`
  flex: 1;
  padding: 16px;
  background-color: ${colors.lighten1};
  font-size: ${(props: { textSize: number }) => HeadSize(2, props.textSize)};
`

const TextField: FunctionComponent<{ updateText: any; textSize: number }> = ({ updateText, textSize }) => {
  return <TextFieldStyle textSize={textSize} onChange={updateText}></TextFieldStyle>
}

export default TextField
