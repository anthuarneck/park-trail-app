import React, { useEffect } from 'react'
import { useState, usee } from 'react';

function Restrooms() {
    const restroomsUrl = import.meta.env.VITE_RESTROOMS_API_URL;

    const [restrooms, setRestrooms] = useState({});

    useEffect(() => {
        fetch(`${restroomsUrl}`)
        .then((response) => response.json())
        .then((responseJSON) => {
            setRestrooms(responseJSON);
        })
        .catch((error) => {
            console.error(error);
        });
    }, []);
  return (
    <div>{console.log(restrooms)}</div>
  )
}

export default Restrooms