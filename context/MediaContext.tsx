import { createContext, useContext, useState, ReactNode } from "react";

interface UrlData {
  mov: string;
  mp4: string;
}

export interface MediaProps {
  id: number;
  comments_count: number;
  likes_count: number;
  urls: UrlData;
}

interface MediaContextProps {
  medias: MediaProps[];
  setMedias: (medias: MediaProps[]) => void;
}

const MediaContext = createContext<MediaContextProps>({
  medias: [],
  setMedias: () => {},
});

interface MediaProviderProps {
  children?: ReactNode;
}

export const MediaProvider = ({ children }: MediaProviderProps) => {
  const [medias, setMedias] = useState<MediaProps[]>([]);

  return (
    <MediaContext.Provider value={{ medias, setMedias }}>
      {children}
    </MediaContext.Provider>
  );
};

export const useMedia = () => useContext(MediaContext);
