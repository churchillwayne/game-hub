import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
  FaQuestion,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo, SiSega, SiAtari } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import type Platform from "@/entities/Platform";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    web: BsGlobe,
    android: FaAndroid,
    sega: SiSega,
    commodoreamiga: FaQuestion,
    atari: SiAtari,
    "3do": FaQuestion,
    neogeo: FaQuestion,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon
            as={iconMap[platform.slug.replace("-", "")]}
            key={platform.id}
            color="gray.500"
          />
        ))}
      </HStack>
      {/* {platforms.map((platform) => console.log(platform.slug.replace("-", "")))} */}
    </>
  );
};

export default PlatformIconList;
