import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

const RenderDish = ({ itemDetails }) => {
  return (
    <Card>
      <CardImg top src={itemDetails.image} alt={itemDetails.name} />
      <CardBody>
        <CardTitle>{itemDetails.name}</CardTitle>
        <CardText>{itemDetails.description}</CardText>
      </CardBody>
    </Card>
  );
};

const RenderComments = ({ commentsOnItem }) => {
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
};

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish itemDetails={props.dish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderComments commentsOnItem={props.comments} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
