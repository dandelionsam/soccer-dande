"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const info = require('./teams.json');
// Non esiste l'interfaccia Team, poichè il vettore sottostante contiene tutte le keys dell'oggetto info, che rappresentano tutte le squadre.
// Per me quindi, il singolo Team sarà semplicemente una posizione della const teams. Ad esempio: teams[0] = Atalanta, etc etc.
// ** Per come è progettato il JSON agiamo in questo modo. Nulla ci vieta di strutturare il JSON in maniera differente ed operare scelte diverse.
const teams = Object.keys(info);
exports.getRandomPlayer = () => {
    let randomTeam = Math.floor(Math.random() * teams.length);
    let randomPlayer = Math.floor(Math.random() * info[teams[randomTeam]].length);
    return info[teams[randomTeam]][randomPlayer];
};
exports.checkForTeam = (teamName) => {
    return Boolean(info[teamName]);
    /*for (let i = 0; i < teams.length; i++){
        if(teamName === teams[i]){
            return true;
        }
    }
    return false;*/
};
exports.getRandomPlayerFromATeam = (teamName) => {
    let randomTeam = teams.indexOf(teamName);
    if (randomTeam === -1) {
        return undefined;
    }
    let randomPlayer = Math.floor(Math.random() * info[teams[randomTeam]].length);
    const resPlayer = info[teams[randomTeam]][randomPlayer];
    return Object.assign(Object.assign({}, resPlayer), { team: teamName });
    // return info[teamName[randomPlayer]];
};
exports.listOfTeams = () => {
    return teams;
};
exports.teamRosterFromATeam = (teamName) => {
    const index = teams.indexOf(teamName);
    if (index === -1) {
        return [];
    }
    return info[teams[index]];
};
exports.listOfPlayers = () => {
    let result = [];
    for (let i = 0; i < teams.length; i++) {
        let arr = exports.teamRosterFromATeam(teams[i]);
        for (let j = 0; j < arr.length; j++) {
            result.push(Object.assign(Object.assign({}, arr[j]), { team: teams[i] }));
        }
    }
    return result;
};
exports.getPlayersByRole = (role) => {
    return exports.listOfPlayers().filter((player) => {
        return player.role === role;
    });
};
exports.getPlayersByName = (name) => {
    return exports.listOfPlayers().find((player) => {
        return player.name === name;
    });
};
//# sourceMappingURL=index.js.map