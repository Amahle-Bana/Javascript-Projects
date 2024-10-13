const team = {
    _players: [],
    _games : [],
    get players() {
      return this._players
    },
    get games() {
      return this._games
    },
    addPlayer(newFirstName, newLastName, newAge) {
        let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      }
      team._players.push(player)
    },
    addGame(newOpponents, newTeamPoints, newOpponentPoints) {
      let game = {
        opponent: newOpponents,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints,
      }
      team._games.push(game)
    }
  }
  
  team.addPlayer('Bugs', 'Bunny', 'age76');
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);