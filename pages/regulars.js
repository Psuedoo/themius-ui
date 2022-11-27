import { useEffect, useState } from "react";
import { getChatters } from "../utils/db";

function RegularsTable() {
  const [regulars, setRegulars] = useState([]);

  useEffect(() => {
    getChatters().then((regulars) => setRegulars(regulars));
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {regulars &&
          regulars.map((regular) => (
            <tr key={regular.id}>
              <td>{regular.id}</td>
              <td>{regular.username}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default function Regulars() {
  const [loading, setLoading] = useState(false);
  return <div>{loading ? <div>Loading...</div> : <RegularsTable />}</div>;
}
