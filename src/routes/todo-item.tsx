import { LoaderFunctionArgs, useLoaderData, useParams } from "react-router";
import { sleep } from "../lib";
import { getTodos } from "../todos";

// Todo
export async function loader({ params }: LoaderFunctionArgs): Promise<string> {
  await sleep();
  let todos = getTodos();
  if (!params.id) {
    throw new Error("Expected params.id");
  }
  let todo = todos[params.id];
  if (!todo) {
    throw new Error(`Uh oh, I couldn't find a todo with id "${params.id}"`);
  }
  return todo;
}

export default function Todo() {
  let params = useParams();
  let todo = useLoaderData<typeof loader>();
  return (
    <>
      <h2>Nested Todo Route:</h2>
      <p>id: {params.id}</p>
      <p>todo: {todo}</p>
    </>
  );
}
