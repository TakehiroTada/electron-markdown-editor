import React, { FunctionComponent, useState, useCallback } from 'react'
import styled from 'styled-components'
import Horizontal from '../components/layouts/Horizontal'
import Vertical from '../components/layouts/Vertical'
import colors from 'constants/colors'
import TextField from './TextField'
import Preview from './Preview'
import marked from 'marked'

const Navbar = styled.nav`
  height: 36px;
`

const EditorStyle = styled(Vertical)`
  flex: 1;
  padding: 24px;
  background-color: ${colors.lighten5};
`

const Main = styled(Horizontal)`
  flex: 1;
`

const Editor: FunctionComponent<{}> = ({}) => {
  const textSize: number[] = [8, 10, 12, 14, 18, 24, 36]

  const [showText, setText] = useState<string>('')
  const [getTextSize, setTextSize] = useState<number>(20)

  const updateText = useCallback(
    e => {
      setText(marked(e.target.value))
    },
    [setText]
  )

  const updateTextSize = useCallback(
    e => {
      setTextSize(parseInt(e.target.value, 10))
    },
    [setTextSize]
  )
  return (
    <EditorStyle>
      <Navbar>
        <form>
          <select name="フォントサイズ" onChange={updateTextSize}>
            {textSize.map((size: number, key: number) => (
              <option value={size}>{size}</option>
            ))}
          </select>
        </form>
      </Navbar>
      <Main>
        <TextField updateText={updateText} />
        <Preview showText={showText} textSize={getTextSize} />
      </Main>
    </EditorStyle>
  )
}

export default Editor
