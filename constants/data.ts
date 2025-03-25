export interface NFTCardProps {
    id: number;
    title: string;
    creatorName: string;
    creatorIcon: string;
    isVerified: boolean;
    currentBid: number;
    likes: number;
    minted: number;
    timeLeft: string;
    image: string;
  }
  
  export const nftData: NFTCardProps[] = [
    {
      id: 1,
      title: "The Pink-Blackened Horned Knight",
      creatorName: "Jacksonito",
      creatorIcon: "icon1.png",
      isVerified: true,
      currentBid: 0.956,
      likes: 564,
      minted: 24,
      timeLeft: "1d 9h left",
      image: "1.png"
    },
    {
      id: 2,
      title: "Relax & Breath",
      creatorName: "Bitogadick",
      creatorIcon: "icon2.png",
      isVerified: false,
      currentBid: 0.956,
      likes: 564,
      minted: 24,
      timeLeft: "1d 9h left",
      image: "2.png"
    },
    {
      id: 3,
      title: "Running Time",
      creatorName: "Mickyvandy",
      creatorIcon: "icon3.png",
      isVerified: true,
      currentBid: 0.745,
      likes: 24,
      minted: 2,
      timeLeft: "4d 9h left",
      image: "3.png"
    },
    {
      id: 4,
      title: "Yellow Weather",
      creatorName: "Karhty26",
      creatorIcon: "icon4.png",
      isVerified: true,
      currentBid: 0.956,
      likes: 564,
      minted: 24,
      timeLeft: "1d 9h left",
      image: "4.png"
    },
    {
      id: 5,
      title: "Space 101",
      creatorName: "Fame Static",
      creatorIcon: "icon5.png",
      isVerified: true,
      currentBid: 0.956,
      likes: 564,
      minted: 24,
      timeLeft: "1d 9h left",
      image: "5.png"
    },
    {
      id: 6,
      title: "Cool Fever",
      creatorName: "Ella Walker",
      creatorIcon: "icon6.png",
      isVerified: true,
      currentBid: 0.956,
      likes: 564,
      minted: 24,
      timeLeft: "1d 9h left",
      image: "6.png"
    },
    {
      id: 7,
      title: "Mood Of Staces",
      creatorName: "Hades KM",
      creatorIcon: "icon7.png",
      isVerified: true,
      currentBid: 0.956,
      likes: 564,
      minted: 24,
      timeLeft: "1d 9h left",
      image: "7.png"
    },
    {
      id: 8,
      title: "The Seal Man",
      creatorName: "Olushola",
      creatorIcon: "icon8.png",
      isVerified: true,
      currentBid: 0.956,
      likes: 564,
      minted: 24,
      timeLeft: "1d 9h left",
      image: "8.png"
    },
  ];