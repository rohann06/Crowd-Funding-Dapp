"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";
import Navbar from "./components/Navbar";

function App() {
  const account = useAccount();
  const { connectors, connect, status, error } = useConnect();
  const { disconnect } = useDisconnect();

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
