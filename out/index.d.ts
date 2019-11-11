interface Player {
    number: number;
    name: string;
    role: string;
}
export declare const getRandomPlayer: () => Player;
export declare const checkForTeam: (teamName: string) => boolean;
export declare const getRandomPlayerFromATeam: (teamName: string) => Player;
export declare const listOfTeams: () => string[];
export declare const teamRosterFromATeam: (teamName: string) => Player[];
export declare const listOfPlayers: () => Player[];
export declare const getPlayersByRole: (role: string) => Player[];
export {};
//# sourceMappingURL=index.d.ts.map