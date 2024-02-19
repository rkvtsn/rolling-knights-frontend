import {
  Dispatch,
  SetStateAction,
  useCallback,
  useContext,
  useMemo,
} from "react";
import { PlayerContext } from "src/contexts/PlayerContext";
import { BagState } from "src/types/states/BagState";

export const useBag = (): UseBag => {
  const [player, setPlayer] = useContext(PlayerContext);

  const bag = useMemo(() => {
    return player.bag;
  }, [player.bag]);

  const setBag: Dispatch<SetStateAction<BagState>> = useCallback(
    (value: BagState | ((prev: BagState) => BagState)) => {
      setPlayer((player) => {
        const newState = {
          ...player,
          bag: typeof value == "function" ? value(player.bag) : value,
        };
        return newState;
      });
    },
    [setPlayer]
  );

  const updateBag = useCallback(
    (value: Partial<BagState> | ((prev: BagState) => Partial<BagState>)) => {
      setPlayer((player) => {
        const newState = {
          ...player,
          bag: {
            ...player.bag,
            ...(typeof value == "function" ? value(player.bag) : value),
          },
        };
        return newState;
      });
    },
    [setPlayer]
  );

  return {
    bag,
    setBag,
    updateBag,
  };
};

interface UseBag {
  bag: BagState;
  setBag: Dispatch<SetStateAction<BagState>>;
  updateBag: (
    value: Partial<BagState> | ((prev: BagState) => Partial<BagState>)
  ) => void;
}
