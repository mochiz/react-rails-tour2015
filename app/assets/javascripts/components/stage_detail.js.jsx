var StageDetail = React.createClass({
  render: function() {
    return (
      <div className="stageDetail">
        <h2>
          STAGE {this.props.detail.stage} WINNER: {this.props.detail.name}
        </h2>
        <a href={this.props.detail.official_url} target="_blank" >
          <img src={this.props.detail.photo_url} width="650" height="297"/>
        </a>
      </div>
    )
  }
});
