import { useEffect, useState } from "react";
import hotelsService from '../../services/hotels';
import { useParams, useNavigate } from 'react-router-dom';


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
      {!rooms? (<p><i className='fa fa-gear fa-spin'></i>Loading...</p>) : (
        <>
          <h1>{rooms?.name}</h1>
          <h2> {rooms?.price} </h2>
          <img src={rooms?.picture} alt="" />
          {rooms?.roomNumbers.map(room => <div>{room.number}</div>)}
         
        </>
       
      )} 
    </>
  )
}


export default RoomDetail
