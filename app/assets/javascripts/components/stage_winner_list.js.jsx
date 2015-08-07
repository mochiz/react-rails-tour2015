var StageWinnerList = React.createClass({
  render: function() {
    var winnerList = this.props.data.map(function (winner) {
      return (
        <StageWinner stage={winner.stage} name={winner.name} avatar_url={winner.avatar_url} />
      );
    });
    return (
      <div className="stageWinnerList">
        {winnerList}
      </div>
    )
  }
});
