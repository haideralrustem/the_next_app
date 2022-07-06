import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

const extra = (
  <a>
    <Icon name='user' />
    Here goes whatever text u want
  </a>
)

const PrimaryCard = (props) => (
  <Card
    image={props.cardImageLocation}
    header={props.cardHeader}
    meta={props.cardMeta}
    description={props.cardDescription}
    extra={extra}
  />
)

export default PrimaryCard