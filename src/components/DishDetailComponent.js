import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(itemDetails) {
    return (
      <Card>
        <CardImg top src={itemDetails.image} alt={itemDetails.name} />
        <CardBody>
          <CardTitle>{itemDetails.name}</CardTitle>
          <CardText>{itemDetails.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(commentsOnItem) {
    if (commentsOnItem != null) {
      // ! look carefully here, writing pure js
      const comments = commentsOnItem.map((eachComment) => {
        return (
          <div key={eachComment.id}>
            <ul className="list-unstyled">
              <br />
              <li>{eachComment.comment}</li>
              <li>
                -- {eachComment.author},{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(eachComment.date)))}
              </li>
            </ul>
          </div>
        );
      });
      // ! look carefully here, integrating the written js
      return (
        <div>
          <h4>Comments</h4>
          {comments}
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish != null) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 m-1">
              <Card>{this.renderDish(this.props.dish)}</Card>
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.props.dish.comments)}
            </div>
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

export default DishDetail;
