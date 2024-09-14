import { VIDEOS_FETCHING_API } from "@/constants";
import { MediaProps } from "@/context/MediaContext";
import axios from "axios";

export interface SuccessResultProps {
  success: boolean;
  data: MediaProps[];
}

export interface FailedResultProps {
  success: boolean;
  message: string;
}

export const fetchMedias = (): Promise<
  SuccessResultProps | FailedResultProps
> => {
  return axios
    .get(VIDEOS_FETCHING_API)
    .then(({ data }) => {
      return { success: true, data };
    })
    .catch(() => {
      return { success: false, message: "Couldn't fetch videos" };
    });
};
