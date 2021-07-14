import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

function ExpandButton(props){
  const [isExpanded, setIsExpanded] = useState(false)

  const handleToggleContent = e => {
      setIsExpanded(!isExpanded)
      props.onClick(e, isExpanded)
  }

  return (
    <Button
      onClick={handleToggleContent}
      variant="contained"
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
    </Button>
  )
}

export default ExpandButton;