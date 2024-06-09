import {type FC} from "react";
import {SortDirection} from "@/constants/SortDirection.ts";
import {SortDir} from "@/types/SortDir.ts";

export const SortingIcon: FC<{ dir: SortDir | null }> = ({dir}) => {

  if (!dir) {
    return <span className="Btn">&#8597;</span>
  }

  if (dir === SortDirection.DESC) {
    return <span className="Btn">&#8595;</span>
  }
  return <span className="Btn">&#8593;</span>
}
