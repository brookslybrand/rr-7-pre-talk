import { sleep } from "../lib";
import * as Route from "./+types.home";

export async function loader() {
  await sleep();
  return {
    date: new Date(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <h2>Home</h2>
      <p>Date from loader: {loaderData.date.toISOString()}</p>
    </>
  );
}
