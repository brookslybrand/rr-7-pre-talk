import { useLoaderData } from "react-router";
import { sleep } from "../lib";

export async function loader() {
  await sleep();
  return {
    date: new Date(),
  };
}

export default function Home() {
  let data = useLoaderData<typeof loader>();
  return (
    <>
      <h2>Home</h2>
      <p>Date from loader: {data.date.toISOString()}</p>
    </>
  );
}
