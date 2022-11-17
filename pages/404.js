import { Button } from "@chakra-ui/react";
import Link from "next/link";

export default function Custom404() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <Button>Go home</Button>
      </Link>
    </div>
  );
}
