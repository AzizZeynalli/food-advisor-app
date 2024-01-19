import { Button, Flex } from "@chakra-ui/react";
import { BiHeart, BiSolidHeart } from "react-icons/bi";
import { TwitterIcon, TwitterShareButton } from "next-share";
interface LikeAndShareButtonsProps {
    isLiked: boolean;
    onLikeClick: () => void;
    shareUrl: string;
    shareTitle: string;
  }
  const LikeAndShareButtons: React.FC<LikeAndShareButtonsProps> = ({
    isLiked,
    onLikeClick,
    shareUrl,
    shareTitle,
  }) => {
  return (
    <>
      <Flex width="100%" gap="8px"> 
        <Button
          width="50%"
          color={isLiked ? "red" : ""}
        leftIcon={isLiked ? <BiSolidHeart /> : <BiHeart />}
        onClick={onLikeClick}
        >
          {isLiked ? "Liked" : "Like"}
        </Button>
        <TwitterShareButton
          style={{
            display: "flex",
            width: "50%",
            height: "40px",
            alignItems: "center",
            justifyContent: "center",
            background: "#000",
            borderRadius: "8px",
            color: "#fff",
            fontWeight: "500",
          }}
          url={shareUrl}
          title={`"Share the Joy: Discover the Delightful Recipe of ${shareTitle} with #fooderra on Twitter!"`}
          hashtags={["fooderra"]}
        >
          <TwitterIcon size={40} />
          Share
        </TwitterShareButton>
      </Flex>
    </>
  );
}
export default LikeAndShareButtons;