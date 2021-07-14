import React, { Component } from "react";
import { Props, State } from "../../interFaces";
import ProfilePic from "../../profile.png";

class Allemployee extends Component<Props> {
  render() {
    const filterEmployee = this.props.filterEmployee;
    const searchEmployee = this.props.searchEmployee;
    let employees: any;
    employees = [];

    this.props.Employees.forEach((employee: any) => {
      if (filterEmployee != "All") {
        if (
          employee.firstName
            .substring(0, 1)
            .toLowerCase()
            .indexOf(filterEmployee.toLowerCase()) === -1
        ) {
          return;
        }
      }

      if (
        employee.department
          .toLowerCase()
          .indexOf(searchEmployee.toLowerCase()) === -1
      ) {
        return;
      }

      employees.push(
        <div className="box col-md-3 col-sm-6 col-sm">
          <img
            className="bd-placeholder-img rounded-circle"
            width="140"
            height="140"
            src={ProfilePic}
            role="img"
          ></img>
          <h4 style={{ textTransform: "uppercase" }}>
            {employee.firstName} {employee.lastName}
          </h4>
          <p>{employee.role}</p>
          <p>{employee.department}</p>
          <p>
            <i className="fa fa-envelope"></i>&nbsp;{employee.email}
          </p>
          <p>
            <i className="fa fa-building"></i>&nbsp;{employee.phone}
          </p>
        </div>
      );
    });
    return <div className="row employees">{employees}</div>;
  }
}
export default Allemployee;
