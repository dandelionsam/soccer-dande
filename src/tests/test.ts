import * as mocha from 'mocha';
import assert from 'assert'; 
import * as soccer from '../index';


describe('soccer-dande', () => {

    it('check for team valid', () => {
        assert.equal(soccer.checkForTeam('Inter'), true);
    });

    it('check for team not-valid', () => {
        assert.equal(soccer.checkForTeam('Pescara'), false);
    });

    it('check role filtering', () => {
        const role = 'GK';
        const players = soccer.getPlayersByRole(role);
        assert.equal(typeof players, 'object');
        assert.equal(players[0].role, role);
    });

    it('check player is in a team', () => {
        const team = 'Cagliari';
        const player = soccer.getRandomPlayerFromATeam(team) as soccer.Player;
        // console.log(player);
        assert.equal(player.team, team);
    });

    it ('player should have a team', () => {
        const player = soccer.listOfPlayers()[0] as soccer.Player;
        assert.equal(Boolean(player.team), true);
    });

    it ('player should exist and is in a team', () => {
        const player = soccer.getPlayersByName('Fabio Quagliarella') as soccer.Player;
        assert.equal(Boolean(player), true);
        assert.equal(player.team, 'Sampdoria');
    });

    it ('player not exist', () => {
        const player = soccer.getPlayersByName('Kylian Mbappe') as soccer.Player;
        assert.equal(Boolean(player), false);
        // assert.equal(player.team, 'Sampdoria');
    });
});