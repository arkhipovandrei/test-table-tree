import {SortDirection} from "@/constants/SortDirection.ts";

type SortDirectionKey = keyof typeof SortDirection

export type SortDir = typeof SortDirection[SortDirectionKey];

