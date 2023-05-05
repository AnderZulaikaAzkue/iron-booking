import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clientsService from '../../../services/clients';
import './client-detail.css'

 function ClientDetail({ booking }) {
  const [client, setClient] = useState();
  const { clientId } = useParams();

  useEffect(() => {
    async function fetchClient() {
      try {
        const client = await clientsService.get(clientId);
        setClient(client[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchClient();
  }, [clientId])

  return (
    <>
      {!client ? (<p><i className='fa fa-gear fa-spin'></i>Loading...</p>) : (
        <>
        <div className="client-info">
          <h1 className="name">Your name is: {client.name}</h1>
          <h3 className="name"> Your user name is: {client.username}</h3>
          <h4 className="title"> You are from: {client.location}</h4>
          Bookings:
          <ul>
            {client.bookings.map(b => (
              <li>{JSON.stringify(b)}</li>
            ))}
          </ul>
          </div>
        </>
      )}
    </>
  )
}



export default ClientDetail