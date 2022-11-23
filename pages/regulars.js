import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

async function getRegulars() {
  const pb = new PocketBase("https://pocketbase.theflinners.com");

  const adminData = await pb.admins.authWithPassword("email", "password");

  const data = await pb.collection("chatters").getFullList();
  return data;
}

export default function Regulars() {
  const [regulars, setRegulars] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const fetchRegulars = async () => {
      const regulars = await getRegulars();
      setRegulars(regulars);
    };
    // fetchRegulars();
    setLoading(false);
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        regulars.map((regular) => {
          return <div key={regular.id}>{regular.username}</div>;
        })
      )}
    </div>
  );
}
