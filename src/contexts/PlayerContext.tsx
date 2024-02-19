import { Dispatch, SetStateAction, createContext, useState } from "react";
import { PLAYER_DEFAULT } from "src/constants/defaultStats";
import { ChildrenProps } from "src/types/ChildrenProps";
import { PlayerState } from "src/types/states/PlayerState";

export const PlayerContext = createContext<
  [PlayerState, Dispatch<SetStateAction<PlayerState>>]
>([PLAYER_DEFAULT, () => {}]);

export const PlayerProvider = ({ children }: ChildrenProps) => {
  const state = useState<PlayerState>(PLAYER_DEFAULT);

  return (
    <PlayerContext.Provider value={state}>{children}</PlayerContext.Provider>
  );
};
