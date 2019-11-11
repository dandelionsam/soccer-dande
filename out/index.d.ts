export interface Player {
    number: number;
    name: string;
    role: string;
    team?: string;
}
export declare const getRandomPlayer: () => Player;
export declare const checkForTeam: (teamName: string) => boolean;
export declare const getRandomPlayerFromATeam: (teamName: string) => Player | undefined;
export declare const listOfTeams: () => string[];
export declare const teamRosterFromATeam: (teamName: string) => [] | Player[];
export declare const listOfPlayers: () => Player[];
export declare const getPlayersByRole: (role: string) => Player[];
export declare const getPlayersByName: (name: string) => Player | undefined;
//# sourceMappingURL=index.d.ts.map