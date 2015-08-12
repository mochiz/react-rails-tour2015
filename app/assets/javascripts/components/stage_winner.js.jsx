var StageWinner = React.createClass({
  render: function() {
    return (
      <li>
        <h2 onClick={this.props.onClick}>
          STAGE {this.props.stage}:
          <img src={this.props.avatar_url} alt={this.props.name} height="60"/>
        </h2>
      </li>
    );
  }
});
