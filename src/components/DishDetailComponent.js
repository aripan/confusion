import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

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

  renderComments(comments) {
    if (comments != null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            <br />
            <li>{comments[0]["comment"]}</li>
            <li>
              {" "}
              -- {comments[0]["author"]}, {comments[0]["date"]}
            </li>
            <br />
            <li>{comments[1]["comment"]}</li>
            <li>
              {" "}
              -- {comments[1]["author"]}, {comments[1]["date"]}
            </li>
            <br />
            <li>{comments[2]["comment"]}</li>
            <li>
              {" "}
              -- {comments[2]["author"]}, {comments[2]["date"]}
            </li>
            <br />
            <li>{comments[3]["comment"]}</li>
            <li>
              {" "}
              -- {comments[3]["author"]}, {comments[3]["date"]}
            </li>
            <br />
            <li>{comments[4]["comment"]}</li>
            <li>
              {" "}
              -- {comments[4]["author"]}, {comments[4]["date"]}
            </li>
          </ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>{this.renderDish(this.props.dishItems)}</Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <Card>{this.renderComments(this.props.dishItems.comments)}</Card>
        </div>
      </div>
    );
  }
}

export default DishDetail;
