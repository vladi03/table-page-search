import React from "react";
import {TablePaging} from "./tableStandard/TablePaging";

export class TableDemo extends React.Component {
    state = {
        loading: true
    };

    constructor(){
        super();
        this.timeOut = this.timeOut.bind(this)
    }

    componentDidMount() {
        setTimeout(this.timeOut, 2000);
    }

    timeOut() {
        // noinspection JSCheckFunctionSignatures
        this.setState({loading:false});
    }

    render() {
        const {loading} = this.state;
        return (
            <React.Fragment>
                <h4 style={{marginLeft: 20}}>
                    Table with paging and search
                </h4>
                <TablePaging loading={loading}>
                    Template
                </TablePaging>
            </React.Fragment>
        );
    }
}