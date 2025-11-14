import { createContext } from "react";
import type { ChmpDataJsonType } from "../types/game";

export const dDragonContext = createContext<ChmpDataJsonType | null>(null);