import { Button, Text } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-3">
      <Text fontWeight="bold" fontSize="xl" className="textShadow">
        VALORIANS LEGEND
      </Text>
      <Text fontSize="lg" className="text-center">
        Collect resources, build your Tribe, and raise a mighty army.
        <br /> get ready, the great war is near.
      </Text>
      <Button className="mt-12">PLAY NOW</Button>
    </div>
  );
}
