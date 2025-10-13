"use client";
import { Canvas } from "@react-three/fiber";
import { ScrollControls, Scroll } from "@react-three/drei";
import { config } from "./config";
import Interface from "./_components/Section/InterFace";
import { MotionConfig } from "framer-motion";
import Menu from "./_components/Section/Menu";
import { Loading } from "./_components/Loading";
import { Suspense, useEffect, useState } from "react";
import Experience from "./_components/Experience";
import "./globals.css";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Loading />
      {isClient && (
        <Canvas
          camera={{ position: [0, 0.5, 5], fov: 42 }}
          className="fixed top-0 left-0 w-screen h-screen bg-black"
        >
          <ScrollControls
            pages={config.sections.length}
            damping={0.1}
            maxSpeed={0.2}
          >
            <group position-y={-1}>
              <Suspense fallback={null}>
                <Experience />
              </Suspense>
            </group>
            <Scroll html>
              <MotionConfig transition={{ duration: 1 }}>
                <Interface />
              </MotionConfig>
            </Scroll>
          </ScrollControls>
        </Canvas>
      )}
      <Menu />
    </>
  );
}
