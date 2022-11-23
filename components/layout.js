import Navbar from "./navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-auto flex-row">
      <Navbar />
      <div className="flex flex-auto">{children}</div>
    </div>
  );
}
