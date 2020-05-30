# table-page-search
material-ui table with opinionated styling

# Install
```
npm install table-page-search
```

# Example
The following example shows a table with all the functionality:
[Running Example](https://vladi03.github.io/table-page-search/ "Table Page Search")

# Sample Header Config
Each column of the config should have a "fieldSort" or "display" field in order to show data in the cell.

|field|Description|
| :---: | :--- |
|"key"| (Optional) used to highlight the row if selected.|
|"itemsPerPage"| (Optional) defaults to 10|
|"display"|(Optional if "fieldSort" has value) function to calculate a node for table cell.

  "onRowClick" will not be fired for cells that use this option

   but the "onRowClick" is passed as a parameter.|
|"fieldSort"|(Optional if "display" has value) sorting and is used for the cell value

if "display" is not provided|
|"defaultSort"|(Optional) sort field when table is first rendered.

if not provided the first column is used.|
|"sortDescending"|(Optional) default sort in descending order when table is

first rendered when true as a default. if not provided it is false.|

``` javascript
const headerConfig = {
    key: "id",
    itemsPerPage: 8,
    defaultSort: "lastName",
    sortDescending: true,
    columns: [
        { fieldForSort: "firstName", columnLabel: "Name First", headerCellStyle:{width:80} },
        { fieldForSort: "lastName", columnLabel: "Name Last" },
        { fieldForSort: "location.city", columnLabel: "Location" },
        {
            display: (row, columnConfig, onRowClick)=> `${row.lastName}, ${row.firstName}`,
            columnLabel: "Full Name"
        }
    ]
};
//Sample Data
const users = [
    {
        "id": 0,
        "firstName": "Cassandra",
        "lastName": "Andrews",
        "location": { "city" : "Dotseron" }
    },
    {
        "id": 1,
        "firstName": "Lakisha",
        "lastName": "Alvarez",
        "location": { "city" :  "Winfredes" }
    }
];
```

# Sample Component Use

"loading" = (Optional) when set to true the table is replaced with a spinner

"dataList" = data list to display in the table

"onRowClick" = (Optional) called when user clicks on a row of the table

"tableStyleName" = (Optional) string name for the class of the table object


```javascript
  <TablePaging  loading={loading}
                dataList={users}
                headerConfig={headerConfig}
                filterText={filterText}
  />
```
## Server Side Paging

When server side paging is needed the following options can be used.  For server side paging, the "dataList" should
have the same number of records or less than the "itemsPerPage" of the "headerConfig" object.

---

"totalRecordsFromServer" = since the dataList only has one page of data, the total number of records is needed
to render the page buttons and display total record count to the user.

"onServerSidePaging" = This is call any time a sort or page change happens.  The fields that are provider are :
 {sortField, sortDescending, activePage}.

 "restPageNumber" = this value is ignored if less than zero and should be a number between 1 and the number of
 pages.  When the value is greater than zero, the page number will be set active for the page buttons