import Head from "next/head";
import Image from "next/image";
import Home from '../components//Home/Home';

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between">
      <Home />
    </div>
  );
}
