import React, { FunctionComponent, useState, useCallback } from 'react'
import styled from 'styled-components'
import Horizontal from '../components/layouts/Horizontal'
import colors from 'constants/colors'
import TextField from './TextField'
import Preview from './Preview'
import marked from 'marked'

const EditorStyle = styled(Horizontal)`
  flex: 1;
  padding: 24px;
  background-color: ${colors.lighten5};
`

const Editor: FunctionComponent<{}> = ({}) => {
  const [showText, setText] = useState<string>('')
  const updateText = useCallback(
    e => {
      setText(marked(e.target.value))
    },
    [setText]
  )
  return (
    <EditorStyle>
      <TextField updateText={updateText} />
      <Preview showText={showText} />
    </EditorStyle>
  )
}

export default Editor
