const info  = require('./teams.json');

// Non esiste l'interfaccia Team, poichè il vettore sottostante contiene tutte le keys dell'oggetto info, che rappresentano tutte le squadre.
// Per me quindi, il singolo Team sarà semplicemente una posizione della const teams. Ad esempio: teams[0] = Atalanta, etc etc.
// ** Per come è progettato il JSON agiamo in questo modo. Nulla ci vieta di strutturare il JSON in maniera differente ed operare scelte diverse.
const teams = Object.keys(info);

interface Player {
    number: number,
    name: string,
    role: string
}

export const getRandomPlayer = ():Player => {
    let randomTeam = Math.floor(Math.random() * teams.length);
    let randomPlayer = Math.floor(Math.random() * info[teams[randomTeam]].length);
    return info[teams[randomTeam]][randomPlayer];
}

export const checkForTeam = (teamName: string):boolean => {
    for (let i = 0; i < teams.length; i++){
        if(teamName === teams[i]){
            return true;
        }
    }
    return false;
}

export const getRandomPlayerFromATeam = (teamName: string):Player => {
    let randomTeam = teams.indexOf(teamName);
    let randomPlayer = Math.floor(Math.random() * info[teams[randomTeam]].length);
    return info[teams[randomTeam]][randomPlayer];
}


export const listOfTeams = ():string[] => {
    return teams;
}

export const teamRosterFromATeam = (teamName: string):Player[] => {
    return info[teams[teams.indexOf(teamName)]];
}

export const listOfPlayers = ():Player[] => {
    let result: Player[] = [];

    for (let i = 0; i < teams.length; i++){
        let arr = teamRosterFromATeam(teams[i]);
        for (let j = 0; j < arr.length; j++){
            result.push(arr[j]);
        }
    }

    return result;
}

export const getPlayersByRole = (role: string):Player[] => {

    // let list:Player[] = listOfPlayers();
    // let result:Player[] = list.filter(function(player){
    //     return player.role === role;
    // });

    // return result;

    return listOfPlayers().filter(function(player){
        return player.role === role;
    });
}