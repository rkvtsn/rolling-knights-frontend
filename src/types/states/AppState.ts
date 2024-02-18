import { LocationState } from "./LocationState";
import { PlayerState } from "./PlayerState";

export interface AppState {
  players: PlayerState[];
  activePlayer: number;
  location: LocationState;
}
