import { A, useParams } from '@solidjs/router';

export default component Test() {
  const { id } = useParams();
    <>
      <h1>{id}</h1>
      <p>
        <A href="/">HOME</A>
      </p>
    </>
}
