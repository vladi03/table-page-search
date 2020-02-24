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
``` javascript
const headerConfig = { columns: [
        { fieldForSort: "firstName", columnLabel: "Name First" },
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
        "location": { "city" : "Dotsero" }
    },
    {
        "id": 1,
        "firstName": "Lakisha",
        "lastName": "Alvarez",
        "location": { "city" :  "Winfred" }
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