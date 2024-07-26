"use client";

import { Text } from "@/components";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FunctionComponent } from "react";
import websitLogo from "~/websitLogo.png";
interface TopNavPropsType {}

export const TopNav: FunctionComponent<TopNavPropsType> = () => {
  const pathname = usePathname();
  return (
    <div className="flex items-center gap-8 text-md font-semibold">
      <Link href={ROUTES.HOME}>
        <Text
          className={
            pathname === ROUTES.HOME ? "text-brand-primary-normal" : ""
          }
        >
          HOME
        </Text>
      </Link>
      <Link href={ROUTES.TUTORIAL}>
        <Text
          className={
            pathname === ROUTES.TUTORIAL ? "text-brand-primary-normal" : ""
          }
        >
          TUTORIAL
        </Text>
      </Link>
      <Link href={ROUTES.CONTACT}>
        <Text
          className={
            pathname === ROUTES.CONTACT ? "text-brand-primary-normal" : ""
          }
        >
          CONTACT
        </Text>
      </Link>
      <Link href={ROUTES.ROADMAP}>
        <Text
          className={
            pathname === ROUTES.ROADMAP ? "text-brand-primary-normal" : ""
          }
        >
          ROADMAP
        </Text>
      </Link>
      <Link href={ROUTES.COMMUNITY}>
        <Text
          className={
            pathname === ROUTES.COMMUNITY ? "text-brand-primary-normal" : ""
          }
        >
          COMMUNITY
        </Text>
      </Link>

      <Image alt="Logo" src={websitLogo} className="fixed right-10 top-10" />
    </div>
  );
};
