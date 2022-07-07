
import { React, useEffect, useState } from 'react'
import { Card, Icon, Container,  Grid } from 'semantic-ui-react'
import styles from '../styles/Home.module.css'
import throttle from 'lodash.throttle';

import getDeviceConfig from '../services/breakPointsProvider'




const extra = (
  <a>
    <Icon name='user' />
    Here goes whatever text u want
  </a>
)

const PrimaryCard = (props) => {

  
  const [brkPnt, setBrkPnt] = useState(null);
  
  const [dimension, setDimension] = useState(null);

  const [ cardWidth, setCardWidth ] = useState("auto")

  const [ maxCardWidth, setMaxCardWidth ] = useState("100%")

  
  useEffect(() => {

    
    //setCardWidth(breakPoint)
    setDimension(window.innerWidth)   

    const calcInnerWidth = function() {

      setDimension(window.innerWidth)
      
    }

    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);

  }, [])


  useEffect(()=>{
     console.log(dimension)

     let bp = getDeviceConfig(dimension)
     console.log(bp)

     if (["xs", "sm"].includes(bp)) {
      setCardWidth("80vw")
      setMaxCardWidth("none")
     }
     else {
      setCardWidth("auto")
      setMaxCardWidth("100%")
     }

  }, [dimension])


  
  return (<Card style={{width: cardWidth, maxWidth:  maxCardWidth }}
            image={props.cardImageLocation}
            header={props.cardHeader}
            meta={props.cardMeta}
            description={props.cardDescription}
            extra={extra}
          />
  )
}

export default PrimaryCard