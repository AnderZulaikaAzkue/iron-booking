import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Row, Text } from "@nextui-org/react";


 function HotelItem({hotel: { id, name, picture, city, }}) {
  return (
    <div>
    <Card isPressable>
            <Card.Body css={{ p: 0 }}>
            <Link to={`/hotels/${id}`} >
              <Card.Image
                src={picture}
                objectFit="cover"
                width="100%"
                height={140}
                alt={name}
              />
               </Link>
            </Card.Body>
            <Card.Footer css={{ justifyItems: "flex-start" }}>
              <Row wrap="wrap" justify="space-between" align="center">
                <Text b>{city}</Text>
                <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                  {name}
                </Text>
              </Row>
            </Card.Footer>
          </Card>
          </div>
          
         
  )
}
export default HotelItem