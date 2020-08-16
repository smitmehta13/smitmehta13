import React, { useState } from 'react'
import Fab from '@material-ui/core/Fab'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

function ExpandButton(props){
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleContent = e => {
      setIsExpanded(!isExpanded)
      props.onClick(e, isExpanded)
  }

  return (
    <Fab
      onClick={handleToggleContent}
      variant="extended"
    >
        {
          isExpanded ?
            <React.Fragment>
                { props.shrinkText }
                <ExpandLessIcon />
            </React.Fragment>
            :
            <React.Fragment>
              { props.expandText }
                <ExpandMoreIcon />
            </React.Fragment>
        }
    </Fab>
  )
}

export default ExpandButton;