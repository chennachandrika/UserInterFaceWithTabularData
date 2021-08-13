import { Component } from "react";
import {
  InputField,
  SelectorItem,
  Option,
  DataEntryRow,
  DataTableCell
} from "./styledComponents";

const defaultColumnTypes = ["Date", "Number", "Multiselect"];

class DataEntryItem extends Component {
  constructor() {
    super();
    this.state = {
      isActive: false,
      columnName: "",
      columnType: "",
      columnData: ""
    };
  }
  componentDidMount = () => {
    this.setRowData();
  };

  setRowData = () => {
    const { rowData } = this.props;
    const { columnName, columnType, columnData } = rowData;
    this.setState({ columnName, columnType, columnData });
  };

  onChangeColumnName = (event) => {
    this.setState({ columnName: event.target.value });
  };
  onChangeColumnType = (event) => {
    this.setState({ columnType: event.target.value });
  };
  onChangeColumnData = (event) => {
    this.setState({ columnData: event.target.value });
  };

  renderColumnNameInput = () => {
    const { columnName } = this.state;
    return (
      <InputField
        id="column name"
        type="text"
        placeholder="Enter Column Name"
        onChange={this.onChangeColumnName}
        value={columnName}
      />
    );
  };
  renderColumnTypeDropDown = () => {
    const { columnType } = this.state;
    return (
      <SelectorItem
        id="column type"
        value={columnType}
        onChange={this.onChangeColumnType}
      >
        <Option>Select Column Type</Option>
        {defaultColumnTypes.map((dataType) => (
          <Option value={dataType.toLowerCase()} key={dataType.toLowerCase()}>
            {dataType}
          </Option>
        ))}
      </SelectorItem>
    );
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
          return "text";
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
    return (
      <DataEntryRow>
        <DataTableCell>{this.renderColumnNameInput()}</DataTableCell>
        <DataTableCell>{this.renderColumnTypeDropDown()}</DataTableCell>
        <DataTableCell>{this.renderRelatedInput()}</DataTableCell>
      </DataEntryRow>
    );
  }
}

export default DataEntryItem;
