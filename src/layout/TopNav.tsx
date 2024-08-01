"use client";

import { Text } from "@/components";
import { ROUTES } from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState, FunctionComponent, useEffect } from "react";
import websitLogo from "~/websitLogo.png";

interface TopNavPropsType {}

export const TopNav: FunctionComponent<TopNavPropsType> = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <nav>
      <div className="md:flex items-center justify-between p-4 relative">
        <button
          className="md:hidden p-2 focus:outline-none absolute top-8 left-8 z-50 md:top-4 md:left-4"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FaTimes className="w-8 h-8 text-brand-primary-normalHover absolute top-4 left-4 z-50" />
          ) : (
            <FaBars className="w-6 h-6  text-brand-text-base" />
          )}
        </button>
        {isOpen ? (
          <></>
        ) : (
          <Image
            alt="Logo"
            src={websitLogo}
            className="w-12 h-12 md:w-16 md:h-16 absolute top-3 right-3 md:top-2 md:right-10"
          />
        )}
        {isOpen ? (
          <div className="w-full h-screen pb-8 bg-brand-surface-normal bg-opacity-100 flex justify-center flex-col items-center gap-8 mb-8 rounded-lg">
            {" "}
            <Link href={ROUTES.HOME}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.HOME ? "text-brand-primary-normal" : ""
                }`}
              >
                HOME
              </Text>
            </Link>
            <Link href={ROUTES.TUTORIAL}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.TUTORIAL
                    ? "text-brand-primary-normal"
                    : ""
                }`}
              >
                TUTORIAL
              </Text>
            </Link>
            <Link href={ROUTES.CONTACT}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.CONTACT ? "text-brand-primary-normal" : ""
                }`}
              >
                CONTACT
              </Text>
            </Link>
            <Link href={ROUTES.ROADMAP}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.ROADMAP ? "text-brand-primary-normal" : ""
                }`}
              >
                ROADMAP
              </Text>
            </Link>
            <Link href={ROUTES.COMMUNITY}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.COMMUNITY
                    ? "text-brand-primary-normal"
                    : ""
                }`}
              >
                COMMUNITY
              </Text>
            </Link>
          </div>
        ) : (
          <div
            className={`md:flex items-center md:gap-8 ${
              isOpen ? "block" : "hidden"
            } md:block`}
          >
            <Link href={ROUTES.HOME}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.HOME ? "text-brand-primary-normal" : ""
                }`}
              >
                HOME
              </Text>
            </Link>
            <Link href={ROUTES.TUTORIAL}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.TUTORIAL
                    ? "text-brand-primary-normal"
                    : ""
                }`}
              >
                TUTORIAL
              </Text>
            </Link>
            <Link href={ROUTES.CONTACT}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.CONTACT ? "text-brand-primary-normal" : ""
                }`}
              >
                CONTACT
              </Text>
            </Link>
            <Link href={ROUTES.ROADMAP}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.ROADMAP ? "text-brand-primary-normal" : ""
                }`}
              >
                ROADMAP
              </Text>
            </Link>
            <Link href={ROUTES.COMMUNITY}>
              <Text
                className={`block md:inline-block mt-2 md:mt-0 ${
                  pathname === ROUTES.COMMUNITY
                    ? "text-brand-primary-normal"
                    : ""
                }`}
              >
                COMMUNITY
              </Text>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
