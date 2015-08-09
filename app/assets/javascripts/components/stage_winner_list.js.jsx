var StageWinnerList = React.createClass({
  handleClick: function(winner) {
    this.props.selectWinner(winner);
  },
  render: function() {
    var that = this
    var winnerList = this.props.data.map(function (winner) {
      return (
        <StageWinner onClick={that.handleClick.bind(that, winner)} stage={winner.stage} name={winner.name} avatar_url={winner.avatar_url} />
      );
    });
    return (
      <div className="stageWinnerList">
        {winnerList}
      </div>
    )
  }
});
