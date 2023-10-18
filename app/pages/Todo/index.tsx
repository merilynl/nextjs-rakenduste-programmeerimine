import React from "react";
import ClientComponent from "../../examples/client-component/page";
import ServerComponent from "../../examples/server-component/page";

function TodoPage() {
  return (
    <div>
      <h1>Todo Page</h1>
      <h2>Client Component</h2>
      <ClientComponent />
      <h2>Server Component</h2>
      <ServerComponent />
    </div>
  );
}

export default TodoPage;
