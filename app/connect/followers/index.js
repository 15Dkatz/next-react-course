'use client';

import { useState, useEffect } from 'react';
import getFollowers from './get-followers';

const followerGoal = ({ current }) => Math.pow(10, (current + '').length);

export default function Followers() {
  const [goalString, setGoalString] = useState('?/?');

  useEffect(() => {
    getFollowers()
      .then(followers => {
        setGoalString(`${followers}/${followerGoal({ current: followers })}`);
      })
  }, []);

  return (
    <div className="ml-[15px] lg:ml-[20px] mt-[5px]">
      Follower progress: {goalString}
    </div>
  )
}
