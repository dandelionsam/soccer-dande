const info  = require('./teams.json');

// Non esiste l'interfaccia Team, poichè il vettore sottostante contiene tutte le keys dell'oggetto info, che rappresentano tutte le squadre.
// Per me quindi, il singolo Team sarà semplicemente una posizione della const teams. Ad esempio: teams[0] = Atalanta, etc etc.
// ** Per come è progettato il JSON agiamo in questo modo. Nulla ci vieta di strutturare il JSON in maniera differente ed operare scelte diverse.
const teams = Object.keys(info);

export interface Player {
    number: number,
    name: string,
    role: string,
    team?: string
}

export const getRandomPlayer = ():Player => {
    let randomTeam = Math.floor(Math.random() * teams.length);
    let randomPlayer = Math.floor(Math.random() * info[teams[randomTeam]].length);
    return {...info[teams[randomTeam]][randomPlayer], team: teams[randomTeam]};
}

export const checkForTeam = (teamName: string):boolean => {
    return Boolean(info[teamName]);
    /*for (let i = 0; i < teams.length; i++){
        if(teamName === teams[i]){
            return true;
        }
    }
    return false;*/
}

export const getRandomPlayerFromATeam = (teamName: string):Player | undefined => {
    let randomTeam = teams.indexOf(teamName);
    if (randomTeam === -1){
        return undefined;
    }
    let randomPlayer = Math.floor(Math.random() * info[teams[randomTeam]].length);
    const resPlayer = info[teams[randomTeam]][randomPlayer];
    return { ...resPlayer, team: teamName};
    // return info[teamName[randomPlayer]];
}


export const listOfTeams = ():string[] => {
    return teams;
}

export const teamRosterFromATeam = (teamName: string):Player[] | [] => {
    const index = teams.indexOf(teamName);
    if (index === -1){
        return [];
    }
    return info[teams[index]];
}

export const listOfPlayers = ():Player[] => {
    let result: Player[] = [];
    for (let i = 0; i < teams.length; i++){
        let arr = teamRosterFromATeam(teams[i]);
        for (let j = 0; j < arr.length; j++){
            result.push({...arr[j], team: teams[i]});
        }
    }

    return result;
}

export const getPlayersByRole = (role: string):Player[] => {
    return listOfPlayers().filter((player) => {
        return player.role === role;
    });
}

export const getPlayersByName = (name: string):Player | undefined => {
    return listOfPlayers().find((player) => {
        return player.name === name;
    });
}