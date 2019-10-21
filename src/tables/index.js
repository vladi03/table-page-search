import React from "react";
import {TextField, FormControlLabel, Checkbox} from "@material-ui/core"
import {TablePaging} from "./tableStandard/TablePaging";
export {TableSkeletonPaging} from "./tableStandard/TableSkeletonPaging";

export const headerConfig = { columns: [
        { fieldForSort: "firstName", columnLabel: "Name First",
            headerCellStyle:{width:120} },
        { fieldForSort: "lastName", columnLabel: "Name Last",
            headerCellStyle:{width:120}
        },
        { fieldForSort: "location", columnLabel: "Location" },
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
        this.timeOut = this.timeOut.bind(this);
    }

    componentDidMount() {
        setTimeout(this.timeOut, 2000);
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
                        Table with paging and search
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
                             //searchFunction={(dataList) => this.searchName(dataList)}
                />
            </React.Fragment>
        );
    }
}

export const mockUsers = [
    {
        "id": 0,
        "firstName": "Cassandra",
        "lastName": "Andrews",
        "location": "Dotsero"
    },
    {
        "id": 1,
        "firstName": "Lakisha",
        "lastName": "Alvarez",
        "location": "Winfred"
    },
    {
        "id": 2,
        "firstName": "Kathy",
        "lastName": "Fox",
        "location": "Gorst"
    },
    {
        "id": 3,
        "firstName": "Cote",
        "lastName": "Haynes",
        "location": "Fairhaven"
    },
    {
        "id": 4,
        "firstName": "Toni",
        "lastName": "Rose",
        "location": "Leroy"
    },
    {
        "id": 5,
        "firstName": "Lauren",
        "lastName": "Clark",
        "location": "Marne"
    },
    {
        "id": 6,
        "firstName": "Mckenzie",
        "lastName": "Davidson",
        "location": "Tetherow"
    },
    {
        "id": 7,
        "firstName": "Mallory",
        "lastName": "Roman",
        "location": "Sterling"
    },
    {
        "id": 8,
        "firstName": "Walls",
        "lastName": "Mack",
        "location": "Onton"
    },
    {
        "id": 9,
        "firstName": "Amie",
        "lastName": "Shepherd",
        "location": "Catherine"
    },
    {
        "id": 10,
        "firstName": "Jewel",
        "lastName": "Wise",
        "location": "Rutherford"
    },
    {
        "id": 11,
        "firstName": "Christina",
        "lastName": "Woodard",
        "location": "Websterville"
    },
    {
        "id": 12,
        "firstName": "Nicole",
        "lastName": "Tillman",
        "location": "Beaulieu"
    },
    {
        "id": 13,
        "firstName": "Robinson",
        "lastName": "Larsen",
        "location": "Benson"
    },
    {
        "id": 14,
        "firstName": "Carissa",
        "lastName": "Hogan",
        "location": "Kenwood"
    },
    {
        "id": 15,
        "firstName": "Garrett",
        "lastName": "Sutton",
        "location": "Torboy"
    },
    {
        "id": 16,
        "firstName": "Beach",
        "lastName": "Abbott",
        "location": "Ruckersville"
    },
    {
        "id": 17,
        "firstName": "Lacy",
        "lastName": "Bird",
        "location": "Belleview"
    },
    {
        "id": 18,
        "firstName": "Misty",
        "lastName": "Cooley",
        "location": "Fowlerville"
    }
];