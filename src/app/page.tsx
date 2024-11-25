import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';
import Features from "@/components/Features";
import Dashboard from "@/components/Dashboard";


export default function Home() {
  return (
    <main className="bg-white text-gray-900 dark:bg-secondary dark:text-gray-100">
            {/* Features Section */}
            <Features />

            {/* Dashboard Preview Section */}
            <Dashboard />
        </main>
  );
}
