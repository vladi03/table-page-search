import React from "react";
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"

import {TablePaging} from "./tableStandard/TablePaging";
export {TableSkeletonPaging} from "./tableStandard/TableSkeletonPaging";

export const headerConfig = {
    key: "id",
    itemsPerPage: 8,
    defaultSort: "firstName",
    columns: [
        {  fieldForSort: "id", columnLabel: "Id",
            headerCellStyle:{width:80}, hideWhenCondensed: true
        },
        {
            fieldForSort: "firstName",
            columnLabel: "Name First",
            headerCellStyle:{width:120},
            disableCellClick: true
        },
        { fieldForSort: "lastName", columnLabel: "Name Last",
            headerCellStyle:{width:120}
        },
        { fieldForSort: "location.city", columnLabel: "Location" },
        { display: (row)=> `${row.lastName}, ${row.firstName}`, columnLabel: "Full Name" }
    ]
};

export {TablePaging};

export class TableDemo extends React.Component {
    state = {
        loading: true,
        users: mockUsers,
        filterText: "",
        removeStyling: true,
        selectedUser: null
    };

    constructor() {
        super();
        //this.timeOut = this.timeOut.bind(this);
    }

    componentDidMount() {
        setTimeout(() => this.timeOut(), 2000);
    }

    searchName(itemList) {
        const {filterText} = this.state;
        return itemList.filter((user) => {
            return user.firstName.toLowerCase().indexOf(filterText.toLowerCase()) > -1;
        });
    };

    timeOut() {
        // noinspection JSCheckFunctionSignatures
        this.setState({loading:false});
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    };

    handleRowClick = (user) => {
        // noinspection JSCheckFunctionSignatures
        this.setState({selectedUser: user});
    };

    render() {
        const {loading, users, filterText, removeStyling, selectedUser} = this.state;
        return (
            <React.Fragment>

                <div style={{display:"flex"}}>
                    <h4 style={{marginLeft: 20}}>
                        Table with Paging and Search
                    </h4>
                    <TextField
                        label="Search"
                        style={{marginLeft: 40}}
                        vaule={filterText}
                        onChange={(event) => this.handleChange("filterText", event.target.value)}
                    />
                    <FormControlLabel
                        style={{marginLeft: 10}}
                        control={
                            <Checkbox
                                checked={removeStyling}
                                onChange={() => this.setState({removeStyling: !removeStyling}) }
                                value="checkedB"
                                color="primary"
                            />
                        }
                        label="Remove Styling"
                    />
                    {selectedUser === null && <span style={{marginTop: 21}} > | Click on a Row</span>}
                    {selectedUser && <span style={{marginTop: 21}}> | Selected {selectedUser.firstName} {selectedUser.lastName}</span>}
                </div>
                <TablePaging loading={loading}
                             dataList={users}
                             headerConfig={headerConfig}
                             filterText={filterText}
                             tableStyleName={removeStyling ? "" : "stripe-table"}
                             onRowClick = {(user) => this.handleRowClick(user)}
                             useMaterialUiPaging={true}
                             //searchFunction={(dataList) => this.searchName(dataList)}
                />
            </React.Fragment>
        );
    }
}

export const mockUsers = [
    {
        "id": 9,
        "firstName": "Cassandra",
        "lastName": "Andrews",
        "location": { "city" : "Dotsero" }
    },
    {
        "id": 1,
        "firstName": "Lakisha",
        "lastName": "Alvarez",
        "location": { "city" : "Winfred" }
    },
    {
        "id": 2,
        "firstName": "Kathy",
        "lastName": "Fox",
        "location": { "city" : "Gorst"}
    },
    {
        "id": 3,
        "firstName": "Cote",
        "lastName": "Haynes",
        "location": { "city" : "Fairhaven"}
    },
    {
        "id": 4,
        "firstName": "Toni",
        "lastName": "Rose",
        "location": { "city" : "Leroy"}
    },
    {
        "id": 5,
        "firstName": "Lauren",
        "lastName": "Clark",
        "location": { "city" : "Marne"}
    },
    {
        "id": 6,
        "firstName": "Mckenzie",
        "lastName": "Davidson",
        "location": { "city" : "Tetherow"}
    },
    {
        "id": 7,
        "firstName": "Mallory",
        "lastName": "Roman",
        "location": { "city" : "Sterling" }
    },
    {
        "id": 8,
        "firstName": "Walls",
        "lastName": "Mack",
        "location": { "city" : "Onton" }
    },
    {
        "id": 0,
        "firstName": "Amie",
        "lastName": "Shepherd",
        "location": { "city" : "Catherine"}
    },
    {
        "id": 10,
        "firstName": "Jewel",
        "lastName": "Wise",
        "location": { "city" : "Rutherford"}
    },
    {
        "id": 11,
        "firstName": "Christina",
        "lastName": "Woodard",
        "location": { "city" : "Websterville"}
    },
    {
        "id": 12,
        "firstName": "Nicole",
        "lastName": "Tillman",
        "location": { "city" : "Beaulieu"}
    },
    {
        "id": 13,
        "firstName": "Robinson",
        "lastName": "Larsen",
        "location": { "city" : "Benson"}
    },
    {
        "id": 14,
        "firstName": "Carissa",
        "lastName": "Hogan",
        "location": { "city" : "Kenwood" }
    },
    {
        "id": 15,
        "firstName": "Garrett",
        "lastName": "Sutton",
        "location": { "city" : "Torboy"}
    },
    {
        "id": 16,
        "firstName": "Beach",
        "lastName": "Abbott",
        "location": { "city" : "Ruckersville"}
    },
    {
        "id": 17,
        "firstName": "Lacy",
        "lastName": "Bird",
        "location": { "city" : "Belleview"}
    },
    {
        "id": 18,
        "firstName": "Misty",
        "lastName": "Cooley",
        "location": { "city" : "Fowlerville"}
    }
];