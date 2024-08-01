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
    <div className="flex items-center bg-opacity-10">
      <Text fontSize="sm" className="px-2">
        © 2024 All rights reserved.
      </Text>
      <div className="flex items-center gap-4 ms-auto">
        <Image
          src={telegramImage}
          alt="Telegram"
          className="w-8 h-8 md:w-12 md:h-12 "
        />
        <Image src={xImage} alt="X" className="w-8 h-8 md:w-12 md:h-12 " />
        <Image
          src={discordImage}
          alt="discord"
          className="w-8 h-8 md:w-12 md:h-12 "
        />
        <Image
          src={youtubeImage}
          alt="youtube"
          className="w-8 h-8 md:w-12 md:h-12 "
        />
      </div>
    </div>
  );
};
