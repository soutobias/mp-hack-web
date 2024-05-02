import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { InfoButtonBoxContainer, InfoButtonBoxContent } from './styles'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkBreaks from 'remark-breaks'
import 'katex/dist/katex.min.css'
import Draggable from 'react-draggable'
import { useRef } from 'react'

interface InfoButtonBoxProps {
  showUniInfo: any
  setShowUniInfo: any
}

export function InfoButtonBox({
  showUniInfo,
  setShowUniInfo,
}: InfoButtonBoxProps) {
  function handleClose() {
    setShowUniInfo({})
  }
  const nodeRef = useRef(null)
  console.log('aaaaa', showUniInfo)
  return (
    <Draggable nodeRef={nodeRef} cancel=".clickable">
      <InfoButtonBoxContainer
        id="info-subsection"
        ref={nodeRef}
        className="w-80"
      >
        <div>
          <FontAwesomeIcon
            icon={faCircleXmark}
            onClick={handleClose}
            className="clickable"
          />
        </div>
        <div className="font-bold text-center pb-3 text-xl">
          University Information
        </div>
        <InfoButtonBoxContent className="content-center pb-2">
          {Object.keys(showUniInfo).map(value =>{
            return (
              <h1>{`${showUniInfo[value].UniName}: ${showUniInfo[value].count}`}</h1>
            )
          })}
        </InfoButtonBoxContent>
      </InfoButtonBoxContainer>
    </Draggable>
  )
}
