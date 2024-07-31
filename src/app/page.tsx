"use client";
import { Text } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-6 p-4 md:p-8">
      <Text className="textShadow text-center text-lg md:text-3xl font-bold">
        VALORIANS LEGEND
      </Text>
      <Text className="text-center text-sm md:text-lg font-normal">
        Collect resources, build your Tribe, and raise a mighty army.
        <br /> Get ready, the great war is near.
      </Text>
      <button
        className="mt-12 text-brand-text-base text-md shadow-lg font-medium bg-brand-primary-normal hover:bg-brand-primary-normalHover p-3 rounded-lg min-w-[250px]"
        onClick={() =>
          window.open(
            "https://t.me/valorians_bot/valorians",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        PLAY NOW
      </button>
    </div>
  );
}
