import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Horizontal from './layouts/Horizontal'
import colors from 'constants/colors'
import { HeadSize } from 'constants/size'
import { BrowserWindow, dialog } from 'electron'

const PreviewStyle = styled.section`
  padding: 16px;
  flex: 1;
  background-color: ${colors.lighten1};
  line-height: 1.75;

  ul {
    margin-left: 32px;
  }

  h1 {
    font-size: ${HeadSize(6)};
    padding-bottom: 8px;
    border-bottom: ${'solid 1px' + colors.darken4};
  }

  h2 {
    font-size: ${HeadSize(5)};
  }

  h3 {
    font-size: ${HeadSize(4)};
  }

  h4 {
    font-size: ${HeadSize(3)};
  }

  h5 {
    font-size: ${HeadSize(2)};
  }

  h6 {
    font-size: ${HeadSize(1)};
  }
`
const Preview: FunctionComponent<{ showText: string }> = ({ showText }) => {
  return (
    <PreviewStyle
      dangerouslySetInnerHTML={{
        __html: showText
      }}
    ></PreviewStyle>
  )
}

export default Preview
