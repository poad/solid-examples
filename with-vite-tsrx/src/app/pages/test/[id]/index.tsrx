import { useParams } from '@solidjs/router';

export default function Test() @{
  const { id } = useParams();
    <>
      <h1>{id}</h1>
      <p>
        <a href="/">HOME</a>
      </p>
    </>
}
