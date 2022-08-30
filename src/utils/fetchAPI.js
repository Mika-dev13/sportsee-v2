import { useState } from 'react';

export function fetchAPI(userId) {
  //   const [data, setData] = useState({});

  console.log(userId);

  fetch(`http://localhost:3000/user/${userId}`)
    .then((data) => {
      return data.json();
    })
    .then((reponse) => {
      console.log(reponse);
    });
}
