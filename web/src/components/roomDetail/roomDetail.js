import { useEffect, useState } from "react";
import hotelsService from '../../services/hotels';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Footer from "../footer/footer";
import "./roomDetail.css";


function RoomDetail() {
  const { roomsId } = useParams();
  const navigate = useNavigate();
  const [rooms, setRoom] = useState();

  useEffect(() => {
    async function fetchRoom() {
      try {
        console.log(roomsId)
        const rooms = await hotelsService.rooms(roomsId);
        console.log(rooms)
        setRoom(rooms);
      } catch (error) {
        console.error(error);
        const statusCode = error.response?.status;
        if (statusCode === 404) {
          navigate('/hotels');
        }
      }
    }
    fetchRoom();
  }, [roomsId]);

  return (
    <>
    <div className="roomDetail">
      <div className="hotelDetailContainer">
        {!rooms ? (<p><i className='fa fa-gear fa-spin'></i>Loading...</p>) : (
          <>
            <Card css={{ w: "100%", h: "400px" }}>
              <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                <Col>
                  <Text size={18} weight="bold" transform="uppercase" color="#9E9E9E">
                    {rooms?.name}
                  </Text>
                  <Text h3 color="white">
                   Room price {rooms?.price} 
                  </Text>
                </Col>
              </Card.Header>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={rooms?.picture}
                  objectFit="cover"
                  width="100%"
                  height="100%"
                  alt="Relaxing app background"
                />
              </Card.Body>
              <Card.Footer
                isBlurred
                css={{
                  position: "absolute",
                  bgBlur: "#0f111466",
                  borderTop: "$borderWeights$light solid $gray800",
                  bottom: 0,
                  zIndex: 1,
                }}
              >
                <Row>
                  <Col>
                    <Row>
                      <Col span={3}>
                        <Link to="/hotels">
                          <Card.Image
                            src="https://t4.ftcdn.net/jpg/03/94/32/75/360_F_394327546_pFLFWqRXpA0zefbrQBMeCkr0epQBmeWS.jpg"
                            css={{ bg: "black", br: "50%" }}
                            height={40}
                            width={40}
                            alt="Breathing app icon"
                          />
                        </Link>
                      </Col>
                      <Col>

                        <Text color="#d1d1d1" size={20}>
                          {rooms?.description}
                        </Text>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row justify="flex-end">
                      <Button
                        flat
                        auto
                        rounded
                        css={{ color: "#94f9f0", bg: "#94f9f026" }}
                      >
                        <Link to={{}} >
                          <Text
                            css={{ color: "inherit" }}
                            size={16}
                            weight="bold"
                            transform="uppercase"
                          >
                            Book the room
                          </Text>
                        </Link>
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </>
        )}
      </div>
      </div>
      <Footer />
    </>
  )
}


export default RoomDetail
