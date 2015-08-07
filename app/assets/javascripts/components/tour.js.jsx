var Tour = React.createClass({
  render: function() {
    return (
      <div className="tour">
        <StageWinnerList data={this.props.data} />
        <StageDetail />
      </div>
    );
  }
});
