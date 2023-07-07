import TelegramIcon from "./Components/Footer/Social/SocialIcons/TelegramIcon";
import TwitterIcon from "./Components/Footer/Social/SocialIcons/TwitterIcon";
import FrameIcon from "./Components/Footer/Social/SocialIcons/FrameIcon";

export const socialIcons = [
  { id: "Twitter", title: "Twitter", icon: <TwitterIcon /> },
  { id: "Telegram", title: "Telegram", icon: <TelegramIcon /> },
  { id: "Frame", title: "Frame", icon: <FrameIcon /> },
];

export const percents = [25, 50, 75, 100];

export const currencies = [
  { code: "ETH", name: "Ethereum", img: "/images/icons/Ethereum.png" },
  { code: "BTC", name: "Bitcoin", img: "/images/icons/Ethereum.png" },
  { code: "HEX", name: "Hex", img: "/images/icons/Ethereum.png" },
];

export const inputsValidation = [
  {
    id: 1,
    name: "amount",
    type: "number",
    errorMessage: "Amount should be a valid number and greater than 0.00001!",
    label: "Enter amount",
    value: 50,
    required: true,
  },
  {
    id: 2,
    name: "recipientWallet",
    type: "text",
    placeholder: "Enter wallet address",
    errorMessage: "Recipient Wallet Address is invalid or missing!",
    label: "Recipient Wallet Address",
    required: true,
  },
];

export const inputsCurrency = [
  {
    id: "from",
    name: "change from",
    type: "text",
    value: "Ethereum (ETH)",
    label: "Select source currency",
    readOnly: true,
  },
  {
    id: "to",
    name: "change to",
    type: "text",
    value: "Ethereum (ETH)",
    label: "Select source currency",
    readOnly: true,
  },
];
