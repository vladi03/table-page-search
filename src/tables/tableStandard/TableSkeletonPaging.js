import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Pagination from "@material-ui/core/TablePagination";
import { TablePagination } from "./TablePagination";
import {ListNoData} from "../extras/NoData";

export const TableSkeletonPaging = ({tableHeader, tableRows, paging, tableStyleName, onPageChange, condensed, useMaterialUiPaging}) => {

    return (
        <React.Fragment>
            <Table className={tableStyleName}>
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

            {useMaterialUiPaging ?
                <Pagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    rowsPerPage={paging.itemsPerPage}
                    page={paging.currentPageNum - 1}
                    count={paging.totalRows}
                    onChangePage={(event, page) => {
                        onPageChange(page + 1);
                    }}
                    onChangeRowsPerPage={(event) => {
                        const pages = parseInt(event.target.value, 10);
                        onPageChange(1, pages);
                    }}
                /> :
                <TablePagination {...paging} onPageChange={onPageChange} condensed={condensed}/>
            }
        </React.Fragment>
    );
};