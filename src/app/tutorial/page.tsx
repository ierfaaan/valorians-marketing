import { Text } from "@/components";
import React, { FunctionComponent } from "react";

interface TutorialPagePropsType {}

export default function TutorialPage() {
  return (
    <div className="flex items-center justify-center h-full">
      <Text fontWeight="bold" fontSize="xl" className="textShadow">
        Comming Soon...
      </Text>
    </div>
  );
}
