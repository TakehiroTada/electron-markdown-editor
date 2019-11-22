import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Horizontal from './layouts/Horizontal'
import colors from 'constants/colors'

const PreviewStyle = styled.section`
  flex: 1;
  background-color: ${colors.lighten1};
`

const Preview: FunctionComponent<{ showText: String }> = ({ showText }) => {
  return <PreviewStyle>{showText}</PreviewStyle>
}

export default Preview
