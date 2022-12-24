import React from "react";

function Border({ task }) {
  return (
    <div>
      {task.map((t,index) => (
        <li key={index}>{t}</li>
      ))}
    </div>
  );
}

export default Border;
