var StageDetail = React.createClass({
  render: function() {
    return (
      <div className="stageDetail">
        <img src={this.props.detail.photo_url} />
      </div>
    )
  }
});
