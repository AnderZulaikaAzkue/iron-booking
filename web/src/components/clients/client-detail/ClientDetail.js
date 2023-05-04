import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clientsService from '../../../services/clients';


 function ClientDetail() {
  const [client, setClient] = useState();
  const { clientId } = useParams();

  useEffect(() => {
    async function fetchClient() {
      try {
        const client = await clientsService.get(clientId);
        setClient (client);
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
          <h1>hola</h1>
        </>
      )}
    </>
  )
}


export default ClientDetail