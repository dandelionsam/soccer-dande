"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const soccer = __importStar(require("../index"));
describe('soccer-dande', () => {
    it('check for team valid', () => {
        assert_1.default.equal(soccer.checkForTeam('Inter'), true);
    });
    it('check for team not-valid', () => {
        assert_1.default.equal(soccer.checkForTeam('Pescara'), false);
    });
    it('check role filtering', () => {
        const role = 'GK';
        const players = soccer.getPlayersByRole(role);
        assert_1.default.equal(typeof players, 'object');
        assert_1.default.equal(players[0].role, role);
    });
    it('check player is in a team', () => {
        const team = 'Cagliari';
        const player = soccer.getRandomPlayerFromATeam(team);
        // console.log(player);
        assert_1.default.equal(player.team, team);
    });
    it('player should have a team', () => {
        const player = soccer.listOfPlayers()[0];
        assert_1.default.equal(Boolean(player.team), true);
    });
    it('player should exist and is in a team', () => {
        const player = soccer.getPlayersByName('Fabio Quagliarella');
        assert_1.default.equal(Boolean(player), true);
        assert_1.default.equal(player.team, 'Sampdoria');
    });
    it('player not exist', () => {
        const player = soccer.getPlayersByName('Kylian Mbappe');
        assert_1.default.equal(Boolean(player), false);
        // assert.equal(player.team, 'Sampdoria');
    });
});
//# sourceMappingURL=test.js.map