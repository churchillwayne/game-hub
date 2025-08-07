import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let colour = score > 75 ? "green" : score > 60 ? "yellow" : "";

  return (
    <Badge
      colorPalette={colour}
      fontSize="14px"
      paddingRight={2}
      borderRadius="4px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
