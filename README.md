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

"key" - (Optional) used to highlight the row if selected.

"itemsPerPage" - (Optional) defaults to 10

"display" - (Optional if "fieldSort" has value) function to calculate a node

"fieldSort" - (Optional if "display" has value) sorting and is used for the cell value if "display" is not provided

"defaultSort" - (Optional) sort field when table is first rendered.  if not provided the first column is used.
"sortDescending" = (Optional) sort in descending order when true as a default. if not provided it is false.

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
            display: (row)=> `${row.lastName}, ${row.firstName}`,
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
```javascript
  <TablePaging  loading={loading}
                dataList={users}
                headerConfig={headerConfig}
                filterText={filterText}
  />
```