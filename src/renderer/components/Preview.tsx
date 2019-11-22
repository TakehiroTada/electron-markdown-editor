import React, { FunctionComponent } from 'react'
import styled from 'styled-components'
import Horizontal from './layouts/Horizontal'
import colors from 'constants/colors'
import { HeadSize } from 'constants/size'
import { BrowserWindow, dialog } from 'electron'

const PreviewStyle = styled.section`
  padding: 16px;
  flex: 1;
  background-color: ${colors.darken3};
  line-height: 1.75;

  * {
    font-size: ${(props: { textSize: number }) => HeadSize(2, props.textSize)};
  }

  ul {
    margin-left: 32px;
    font-size: ${(props: { textSize: number }) => HeadSize(2, props.textSize)};
  }

  p {
    /* ｀hogehoge｀ */
    code {
      padding: 0.5px 6px;
      color: ${colors.accent1};
      background-color: ${colors.darken4};
    }
  }

  pre {
    color: ${colors.lighten4};
    background-color: ${colors.darken3};
  }

  h1 {
    font-size: ${(props: { textSize: number }) => HeadSize(6, props.textSize)};
    padding-bottom: 8px;
    border-bottom: ${'solid 1px' + colors.darken4};
  }

  h2 {
    font-size: ${(props: { textSize: number }) => HeadSize(5, props.textSize)};
  }

  h3 {
    font-size: ${(props: { textSize: number }) => HeadSize(4, props.textSize)};
  }

  h4 {
    font-size: ${(props: { textSize: number }) => HeadSize(3, props.textSize)};
  }

  h5 {
    font-size: ${(props: { textSize: number }) => HeadSize(2, props.textSize)};
  }

  h6 {
    font-size: ${(props: { textSize: number }) => HeadSize(1, props.textSize)};
  }
`
const Preview: FunctionComponent<{ showText: string; textSize: number }> = ({ showText, textSize }) => {
  return (
    <PreviewStyle
      textSize={textSize}
      dangerouslySetInnerHTML={{
        __html: showText
      }}
    ></PreviewStyle>
  )
}

export default Preview
