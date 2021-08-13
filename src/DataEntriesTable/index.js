import DataEntryItem from "../DataEntryItem";
import {
  DataEntriyTable,
  DataTableHeader,
  DataTableCell,
  DataEntryTableBody
} from "./styledComponents";

const DataEntriesTable = (props) => {
  const { dataEntriesInfo } = props;
  console.log(dataEntriesInfo);
  return (
    <DataEntriyTable>
      <DataEntryTableBody>
        <DataTableHeader>
          <DataTableCell>Column Name</DataTableCell>
          <DataTableCell>Column Type</DataTableCell>
          <DataTableCell>Column Data</DataTableCell>
        </DataTableHeader>
        {dataEntriesInfo.map((tableRow) => (
          <DataEntryItem key={tableRow.id} rowData={tableRow} />
        ))}
      </DataEntryTableBody>
    </DataEntriyTable>
  );
};

export default DataEntriesTable;
