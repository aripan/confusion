import React, { Component } from "react";
import { Media } from "reactstrap";
// import { dishes } from "../dishes";

// ! class component
// class Menu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       dishes: dishes,
//     };
//   }

//   render() {
//     const menu = this.state.dishes.map((dish) => {
//       return (
//         <div key={dish.id} className="col-12 mt-5">
//           <Media tag="li">
//             <Media left middle>
//               <Media object src={dish.image} alt={dish.name} />
//             </Media>
//             <Media body className="ml-5">
//               <Media heading>{dish.name}</Media>
//               <p>{dish.description}</p>
//             </Media>
//           </Media>
//         </div>
//       );
//     });

//     return (
//       <div className="container">
//         <div className="row">
//           <Media list>{menu}</Media>
//         </div>
//       </div>
//     );
//   }
// }

// ? writing the class component as function component
const Menu = ({ dishes }) => {
  const menu = dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 mt-5">
        <Media tag="li">
          <Media left middle>
            <Media object src={dish.image} alt={dish.name} />
          </Media>
          <Media body className="ml-5">
            <Media heading>{dish.name}</Media>
            <p>{dish.description}</p>
          </Media>
        </Media>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <Media list>{menu}</Media>
      </div>
    </div>
  );
};

export default Menu;
