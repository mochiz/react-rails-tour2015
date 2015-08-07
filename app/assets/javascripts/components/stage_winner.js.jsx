var StageWinner = React.createClass({
  render: function() {
    return (
      <div className="StageWinner">
        <h2 className="stageWinnerName">
          STAGE {this.props.stage} WINNER: {this.props.name}
        </h2>
        <img src={this.props.avatar_url} />
      </div>
    );
  }
});
