import { Component } from "react";
import uuid from "react-uuid";
import DataEntriesTable from "../DataEntriesTable";
import {
  UserInterfaceContainer,
  UserInterfaceHeading,
  ColumnCreationForm,
  InputContianer,
  InputLabel,
  InputField,
  SelectorItem,
  Option,
  Submit
} from "./styledComponents";

const defaultTabularEntries = 5;
const defaultColumnTypes = ["Date", "Number", "Multiselect"];

class UserInterface extends Component {
  state = {
    dataEntriesInfo: [],
    columnName: "",
    columnType: "",
    columnData: ""
  };
  componentDidMount = () => {
    this.setDefaultData();
  };
  setDefaultData = () => {
    const { dataEntriesInfo } = this.state;
    const defaultData = Array(defaultTabularEntries).fill(0);
    const defaultTableData = defaultData.map((data) => ({
      id: uuid(),
      columnName: "",
      columnType: "",
      columnData: ""
    }));
    this.setState({
      dataEntriesInfo: [...dataEntriesInfo, ...defaultTableData]
    });
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

  onSubmitData = (event) => {
    event.preventDefault();
    const { dataEntriesInfo, columnName, columnType, columnData } = this.state;
    this.setState({
      dataEntriesInfo: [
        {
          id: uuid(),
          columnName,
          columnType,
          columnData
        },
        ...dataEntriesInfo
      ]
    });
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
      <InputContianer>
        <InputLabel htmlFor="column data">Column Data</InputLabel>
        <InputField
          id="column data"
          type={returnInputType()}
          placeholder="Enter Column Data"
          onChange={this.onChangeColumnData}
          value={columnData}
        />
      </InputContianer>
    );
  };

  renderColumnNameInput = () => {
    const { columnName } = this.state;
    return (
      <InputContianer>
        <InputLabel htmlFor="column name">Column Name</InputLabel>
        <InputField
          id="column name"
          type="text"
          placeholder="Enter Column Name"
          onChange={this.onChangeColumnName}
          value={columnName}
        />
      </InputContianer>
    );
  };

  renderColumnTypeDropDown = () => {
    const { columnType } = this.state;
    return (
      <InputContianer>
        <InputLabel htmlFor="column type">Column Type</InputLabel>
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
      </InputContianer>
    );
  };

  renderColumnCreationForm = () => {
    const { columnType } = this.state;
    return (
      <ColumnCreationForm onSubmit={this.onSubmitData}>
        {this.renderColumnNameInput()}
        {this.renderColumnTypeDropDown()}
        {columnType && this.renderRelatedInput()}
        <Submit type="submit">Submit</Submit>
      </ColumnCreationForm>
    );
  };

  render() {
    const { dataEntriesInfo } = this.state;
    console.log(dataEntriesInfo);
    return (
      <UserInterfaceContainer>
        <UserInterfaceHeading>
          User Interface with Tabular Data
        </UserInterfaceHeading>
        {this.renderColumnCreationForm()}
        <DataEntriesTable dataEntriesInfo={dataEntriesInfo} />
      </UserInterfaceContainer>
    );
  }
}

export default UserInterface;
