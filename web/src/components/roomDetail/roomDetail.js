import { useEffect, useState, useContext  } from "react";
import hotelsService from '../../services/hotels'; 
import clientsService from '../../services/clients'; 
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import Footer from "../footer/footer";
import { AuthContext } from '../../contexts/AuthStore'


function RoomDetail() {
  const { roomsId, hotelId } = useParams();
  const navigate = useNavigate();
  const [rooms, setRoom] = useState();
  const { user } = useContext(AuthContext);
  const [booking, setBooking] = useState(false);

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

  const handleClick = async() => {
    console.log(roomsId)
    if (user) {
      setBooking(true);
    } else {
      navigate("/login");
    }
    const booking = await clientsService.booking(hotelId, roomsId, user)
    console.log(booking)
  };

  return (
    <>
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
                          Maximum people in the Room {rooms?.maxPeople}
                        </Text>
                        <Text color="#d1d1d1" size={20}>
                          Minimum people in the Room {rooms?.minPeople}
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
                        onPress={handleClick}
                      >
                     {booking ? 'Booked' : ' Reserve or Book Now!'}
                        
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Card.Footer>
            </Card>
          </>
        )}
      </div>
      <Footer />
    </>
  )
}
     
 

export default RoomDetail
