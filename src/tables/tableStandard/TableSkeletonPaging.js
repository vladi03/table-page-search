import React from "react";
import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';
import { TablePagination } from "./TablePagination";
import {ListNoData} from "../extras/NoData";

export const TableSkeletonPaging = ({tableHeader, tableRows, paging, onPageChange, condensed}) => {

    return (
        <React.Fragment>
            <Table className="stripe-table">
                {tableHeader}
                <TableBody>
                    {paging.rows.map(tableRows)}
                    {paging.rows.length === 0 &&
                    <TableRow>
                        <TableCell>
                            <ListNoData dataCount={0} />
                        </TableCell>
                    </TableRow>
                    }
                </TableBody>
            </Table>

            <TablePagination {...paging} onPageChange={onPageChange} condensed={condensed} />
        </React.Fragment>
    );
};