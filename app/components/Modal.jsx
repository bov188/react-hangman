var React = require('react');

module.exports = React.createClass({
  //we swap out class= for className = as class is a reserved word in javascript
  // we conditionally open and close the modal depending on this.props.open
  // we can open and close the modal in this component as well as it's parent
  // since we passed down the parent's toggleModal function as a prop

  render: function() {
    return (
      <div className={"fade " + (this.props.open ? "in" : "")} data-tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button onClick={this.props.toggleModal} type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title">{this.props.word}</h4>
            </div>
            <div className="modal-body">
              <p>{this.props.definition}</p>
            </div>
            <div className="modal-footer">
              <button type="button" onClick={this.props.toggleModal} className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
});
