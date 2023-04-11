import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Heading from "@/components/Heading";
import TokenListings from "@/components/TokenListings";
import TokenCard from "@/components/TokenCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl">
      <Heading />

      <TokenListings/>
  
    </div>
  );
}

