import { Text } from "@/components";
import Image from "next/image";
import React, { FunctionComponent } from "react";
import discordImage from "~/discord.png";
import telegramImage from "~/telegram.png";
import xImage from "~/x.png";
import youtubeImage from "~/youtub.png";
interface FooterPropsType {}

export const Footer: FunctionComponent<FooterPropsType> = () => {
  return (
    <div className="flex items-center">
      <Text fontSize="sm">© 2024 All rights reserved.</Text>
      <div className="flex items-center gap-4 ms-auto">
        <Image src={telegramImage} alt="Telegram" />
        <Image src={xImage} alt="X" />
        <Image src={discordImage} alt="discord" />
        <Image src={youtubeImage} alt="youtube" />
      </div>
    </div>
  );
};
