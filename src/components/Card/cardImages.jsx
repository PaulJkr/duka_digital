import { PrimaryCard, SecondaryCard } from "./cardImage";

export default function CardImage({ primary }) {
  const primaryContainer = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delayChildren: 0.5, staggerChildren: 0.1 },
    },
    hidden: { y: 100 },
  };

  const miniModal = {
    visible: {
      y: 0,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hidden: {
      y: 100,
    },
  };

  const fakeProfiles = [
    {
      id: 0,
      avatar: "/profile-1.png",
      name: "Jenny Wilson",
      phone: "+254 712 345678",
      amount: "Ksh. 7359.65",
    },
    {
      id: 1,
      avatar: "/profile-2.png",
      name: "Terry Robar",
      phone: "+254 712 987654",
      amount: "Ksh. 4705.22",
    },
    {
      id: 2,
      avatar: "/profile-3.png",
      name: "Pritom Rana",
      phone: "+254 712 123456",
      amount: "Ksh. 8039.65",
    },
  ];

  if (primary)
    return (
      <PrimaryCard
        primaryContainer={primaryContainer}
        miniModal={miniModal}
        fakeProfiles={fakeProfiles}
      />
    );

  return <SecondaryCard />;
}
