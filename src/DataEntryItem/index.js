import { Component } from "react";
import { InputField } from "./styledComponents";

const defaultColumnTypes = ["Date", "Number", "Multiselect"];

class DataEntryItem extends Component {
  state = { isActive: false, columnName: "", columnType: "", columnData: "" };
  onChangeColumnName = (event) => {
    this.setState({ columnName: event.target.value });
  };
  onChangeColumnType = (event) => {
    this.setState({ columnType: event.target.value });
  };
  onChangeColumnData = (event) => {
    this.setState({ columnData: event.target.value });
  };

  renderRelatedInput = () => {
    const { columnType, columnData } = this.state;
    const returnInputType = () => {
      switch (columnType) {
        case "date":
          return "date";
        case "number":
          return "number";
        case "multiselect":
          return "text";
        default:
          return "";
      }
    };
    return (
      <InputField
        id="column data"
        type={returnInputType()}
        placeholder="Enter Column Data"
        onChange={this.onChangeColumnData}
        value={columnData}
      />
    );
  };

  render() {
    return <p>Hi</p>;
  }
}

export default DataEntryItem;
