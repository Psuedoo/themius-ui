import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { addTenant } from "../utils/db";

export default function Account() {
  const [record, setRecord] = useState({});
  const handleClick = () => {
    setRecord(addTenant({ tenant: { username: "test" } }));
  };
  return (
    <div>
      <Button onClick={handleClick}>Add Me to DB</Button>
    </div>
  );
}
