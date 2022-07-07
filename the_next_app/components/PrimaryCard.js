
import { React, useState } from 'react'
import { Card, Icon, Container,  Grid } from 'semantic-ui-react'
import styles from '../styles/Home.module.css'

import useBreakpoint from '../services/breakPointsProvider'




const extra = (
  <a>
    <Icon name='user' />
    Here goes whatever text u want
  </a>
)

const PrimaryCard = (props) => {

  const breakPoint = useBreakpoint() 

  const [ cardWidth, setCardWidth ] = useState("auto")
  
  return (<Card style={{width: cardWidth }}
            image={props.cardImageLocation}
            header={props.cardHeader}
            meta={props.cardMeta}
            description={props.cardDescription}
            extra={extra}
          />
  )
}

export default PrimaryCard