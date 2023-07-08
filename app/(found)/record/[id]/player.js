import { Suspense } from 'react';
import Spinner from 'components/spinner';

function Loading() {
  return (
    <div className="w-[300px] h-[352px] bg-slate-300 rounded flex justify-center items-center">
      <Spinner />
    </div>
  )
}

export default function Player({ embed }) {
  return (
    <div className="w-[300px] h-[352px]">
      <Suspense fallback={<Loading />}>
        {embed}
      </Suspense>
    </div>
  )
}
