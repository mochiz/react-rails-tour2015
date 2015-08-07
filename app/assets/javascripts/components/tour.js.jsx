var Tour = React.createClass({
  getInitialState: function() {
    return { data: [], detail: {} }
  },
  componentDidMount: function() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data, detail: data[0]});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  },
  render: function() {
    return (
      <div className="tour">
        <StageWinnerList data={this.state.data} />
        <StageDetail detail={this.state.detail} />
      </div>
    );
  }
});
