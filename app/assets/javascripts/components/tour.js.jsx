var Tour = React.createClass({
  render: function() {
    return (
      <div className="tour">
        <StageWinnerList />
        <StageDetail />
      </div>
    );
  }
});
