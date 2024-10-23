import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router";
import { sleep } from "../lib";
import { getTodos } from "../todos";
import * as Route from "./+types.todo-item";

// Todo
export async function loader({ params }: Route.LoaderArgs) {
  await sleep();
  let todos = getTodos();
  let todo = todos[params.id];
  if (!todo) {
    throw new Error(`Uh oh, I couldn't find a todo with id "${params.id}"`);
  }
  return todo;
}

export default function Todo({ params, loaderData }: Route.ComponentProps) {
  return (
    <>
      <h2>Nested Todo Route:</h2>
      <p>id: {params.id}</p>
      <p>todo: {loaderData}</p>
    </>
  );
}
