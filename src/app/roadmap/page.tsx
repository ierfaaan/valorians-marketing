import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
interface RoadMapPagePropsType {}

export default function RoadmapPage() {
  return (
    <div className="bg-gray-900 min-h-screen p-4 md:p-8 overflow-y-auto text-brand-text-base">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-lg md:text-2xl font-bold text-center text-brand-primary-normalHover mb-8">
          Valorians Legends Roadmap
        </h1>
        {roadmapData.map((phase, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-brand-primary-normal shadow-inner rounded-lg px-6 py-8 mb-10 transform transition duration-500 hover:scale-105"
          >
            <h2 className="text-md md:text-xl font-bold mb-4 text-blue-400 border-b-2 border-gray-600 pb-2">
              {phase.title}
            </h2>
            <ul className="list-disc list-inside space-y-4">
              {phase.items.map((item, i) => (
                <li key={i} className="mb-2">
                  <p className="font-bold text-sm md:text-md text-brand-text-base">
                    {item.heading}:
                  </p>
                  <p className="text-gray-300">{item.details}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

const roadmapData = [
  {
    title: "Phase 1: Initial Launch",
    items: [
      {
        heading: "Beta Testing",
        details:
          "Conduct a closed beta test with a select group of users to gather feedback and identify bugs. Implement necessary changes and improvements based on feedback.",
      },
      {
        heading: "Core Features Release",
        details:
          "Enable the use of earned resources to upgrade structures and kingdoms. Implement a leveling system where upgrades improve the player's level and capabilities.",
      },
      {
        heading: "Community Building",
        details:
          "Establish social media channels on X (formerly Twitter), Discord, Telegram, and YouTube for player engagement. Launch a referral program to encourage community growth. Release initial documentation and tutorials for new players.",
      },
    ],
  },
  {
    title: "Phase 2: Feature Expansion",
    items: [
      {
        heading: "Better GamePlay Mechanics",
        details:
          "Implement quests and challenges for players to earn extra rewards. Develop building structures with resources, providing strategic advantages and aesthetic customizations. Add daily and weekly events and limited-time challenges to keep the gameplay fresh and engaging. Improve the user interface based on user feedback to ensure a smooth and enjoyable experience, incorporating animations and visual effects to make the game more immersive and visually appealing.",
      },
      {
        heading: "Integration with TON Ecosystem",
        details:
          "Integrate the game with the TON (The Open Network) blockchain to leverage its ecosystem. Enable the use of TON tokens for in-game purchases, trading, and rewards, as well as Telegram Stars.",
      },
    ],
  },
  {
    title: "Phase 3: Advanced Blockchain Features",
    items: [
      {
        heading: "NFT Implementation",
        details:
          "Introduce NFTs for rare resources, items, and characters that players can trade. Integrate with existing NFT marketplaces to enable players to buy, sell, and trade NFTs related to the game. Allow players to use NFTs for rare resources, items, and characters within the game, enhancing their gameplay experience.",
      },
    ],
  },
  {
    title: "Phase 4: Long-term Growth and Sustainability",
    items: [
      {
        heading: "Partnerships and Collaborations",
        details:
          "Seek partnerships with other games or platforms for cross-promotions within the TON ecosystem. Collaborate with influencers and key players in the community to increase visibility and attract new players.",
      },
      {
        heading: "Continuous Improvement",
        details:
          "Regularly release updates with new content, features, and improvements. Ensure ongoing maintenance and support to address any issues promptly.",
      },
      {
        heading: "Global Expansion",
        details:
          "Translate the game into multiple languages to reach a broader audience. Adapt marketing strategies for different regions to maximize player acquisition.",
      },
    ],
  },
  {
    title: "Phase 5: Token Generation Event (TGE)",
    items: [
      {
        heading: "Token Launch",
        details:
          "Conduct a Token Generation Event (TGE) to launch Valorian Legends native token within the TON ecosystem. Use the token for in-game transactions, rewards, and other economic activities.",
      },
      {
        heading: "Staking and Rewards",
        details:
          "Introduce staking mechanisms for players to earn rewards by holding and staking the native token. Implement various reward programs to incentivize long-term engagement and loyalty.",
      },
      {
        heading: "Ecosystem Growth",
        details:
          "Utilize TGE funds to develop the game further, enhance features, and expand the team. Focus on marketing and partnerships to grow the player base and strengthen the game's position within the TON ecosystem.",
      },
    ],
  },
];
