// Dynamic import que nunca rompe en build
import React from "react";
import { useEffect, useState } from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface YoutubeProps {
  id: string;
  title: string;
  [key: string]: any;
}

const Youtube: React.FC<YoutubeProps> = ({ id, title, ...rest }) => {
  const [LiteYouTubeEmbed, setLiteYouTubeEmbed] = useState<any>(null);

  useEffect(() => {
    import("react-lite-youtube-embed").then((mod) =>
      setLiteYouTubeEmbed(() => mod.default || mod)
    );
  }, []);

  if (!LiteYouTubeEmbed) return null;

  return (
    <LiteYouTubeEmbed
      wrapperClass="yt-lite rounded-lg"
      id={id}
      title={title}
      {...rest}
    />
  );
};

export default Youtube;