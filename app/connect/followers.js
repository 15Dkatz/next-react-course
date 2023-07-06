'use client';

import { useState, useEffect } from 'react';

export default function Followers() {
  const [goalString, setGoalString] = useState('?/?');

  useEffect(() => {
    fetch('https://spotify-api-wrapper.appspot.com/artist/david-kando')
      .then(response => response.json())
      .then(json => {
        console.log(`json`, json);

        if (
          json
          && json.artists
          && json.artists.items
          && json.artists.items.length > 0
        ) {
          const followers = json.artists.items[0].followers.total;

          setGoalString(`${followers}/?`);
        }
      })
  }, []);

  return (
    <div className="ml-[15px] lg:ml-[20px] mt-[5px]">
      Follower progress: {goalString}
    </div>
  )
}
