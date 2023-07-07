import Form from './email-list/form';
import Followers from './followers';

export default function Page() {
  return (
    <>
      <div>
        Find my latest projects, upcoming live events, and releases!
      </div>
      <br />
      <div>
        1. Support me with a follow on{' '}
        <a className="font-bold link" href="https://open.spotify.com/artist/6ep6Hvwexmaa5IqcPxMxqC?si=t24Vsf6LRsKSIy5lV0wvNw" target="_blank">Spotify</a>.
      </div>
      <Followers />
      <br />
      <div>
        2. Follow me on{' '}
        <a className="font-bold link" href="https://www.instagram.com/davidkandomusic/" target="_blank">instagram</a>.
      </div>
      <br />
      <div>
        3. Join my email list.
      </div>
      <Form />
      <br />
      <div>
        Reach out for inquiries at <span className="underline">davidkandomusic@gmail.com</span>
      </div>
    </>
  )
}
