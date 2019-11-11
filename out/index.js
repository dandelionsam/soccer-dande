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
    for (let i = 0; i < teams.length; i++) {
        if (teamName === teams[i]) {
            return true;
        }
    }
    return false;
};
exports.getRandomPlayerFromATeam = (teamName) => {
    let randomTeam = teams.indexOf(teamName);
    let randomPlayer = Math.floor(Math.random() * info[teams[randomTeam]].length);
    return info[teams[randomTeam]][randomPlayer];
};
exports.listOfTeams = () => {
    return teams;
};
exports.teamRosterFromATeam = (teamName) => {
    return info[teams[teams.indexOf(teamName)]];
};
exports.listOfPlayers = () => {
    let result = [];
    for (let i = 0; i < teams.length; i++) {
        let arr = exports.teamRosterFromATeam(teams[i]);
        for (let j = 0; j < arr.length; j++) {
            result.push(arr[j]);
        }
    }
    return result;
};
exports.getPlayersByRole = (role) => {
    // let list:Player[] = listOfPlayers();
    // let result:Player[] = list.filter(function(player){
    //     return player.role === role;
    // });
    // return result;
    return exports.listOfPlayers().filter(function (player) {
        return player.role === role;
    });
};
//# sourceMappingURL=index.js.map