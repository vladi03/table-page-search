import React, {useState} from "react";
import PropTypes from 'prop-types';
import {SpinnerDownloading} from "../extras/SpinnerDownloading";
import {TableSkeletonPaging} from "./TableSkeletonPaging";
import {TableRow ,TableCell, makeStyles} from "@material-ui/core";
import { TableHeaderSort } from "./TableHeaderSort";
import {calcPage, sortItems} from "../helpers/pagingCalc";
import {getObjectValue, getObjectJoin} from "../helpers/objectValue";


export const TablePaging = ({loading, dataList, headerConfig, filterText, tableStyleName,
                                searchFunction, onRowClick, condensed}) => {
    const itemsPerPage = 10;
    const [sortField, setSortField]= useState(headerConfig.columns[0].fieldForSort);
    const [sortDescending, setSortDescending]= useState(false);
    const [activePage, setActivePage] = useState(1);
    const filterTextLower  = filterText && filterText.toLowerCase();

    let filteredList = [];
    if(filterText && filterText.length > 0) {
        filteredList = searchFunction ? searchFunction(dataList) : dataList.filter((item) => {
            return item && getObjectJoin(item).toLowerCase().indexOf(filterTextLower) > -1;//.indexOf(filterText.toLowerCase()) > -1;
        });
    } else {
        filteredList = [...dataList];
    }

    const onSetSortField = (newSortField) => {
        const isDescending = newSortField === sortField && !sortDescending;
        setSortDescending(isDescending);
        setSortField(newSortField);
    };

    const onPageChange = (newPage) => {
        setActivePage(newPage);
    };

    sortItems(filteredList, sortField, sortDescending);
    const paging = calcPage(filteredList, itemsPerPage, activePage);

    const tableHeader =(
        <TableHeaderSort headerConfig={headerConfig}
                         sortField={sortField}
                         sortDescending={sortDescending}
                         onSetSortField={onSetSortField}
        />);

    return (
        <SpinnerDownloading spinnerSize={50} loading={loading}>
            <TableSkeletonPaging
                paging={paging}
                tableRows={tableRows(headerConfig, onRowClick)}
                tableHeader={tableHeader}
                condensed={condensed}
                onPageChange={onPageChange}
                tableStyleName={tableStyleName}
            />
        </SpinnerDownloading>
    )
};

TablePaging.propTypes = {
    loading: PropTypes.bool,
    dataList: PropTypes.array.isRequired,
    headerConfig: PropTypes.object.isRequired,
    filterText: PropTypes.string,
    tableStyleName: PropTypes.string,
    searchFunction: PropTypes.func,
    onRowClick: PropTypes.func,
    condensed: PropTypes.bool,
};

export const tableRows = (headerConfig, onItemClick) => {
    const classes = useStyles();
    const [selectedRowId, setSelectedRowId ] = useState(null);
    const [selectedRowIndex, setSelectedRowIndex ] = useState(-1);
    const getValue = (row, header) => header.display && header.display(row)
                                || getObjectValue(row,header.fieldForSort);

    const onSelectRow = (row, index)=> {
        if(headerConfig.key)
            setSelectedRowId(row[headerConfig.key]);
        setSelectedRowIndex(index);
        onItemClick(row)
    };

    return (row, index) => {
        const hasClick = onItemClick && selectedRowIndex !== index;

        /** @namespace header.cellStyle */
        return (
            <TableRow key={index}
                      className={hasClick ? classes.rowWithClick : classes.rowWithoutClick}
                      onClick={() => hasClick ? onSelectRow(row, index) : undefined}>
                {headerConfig.columns.map((header, index) => (
                    <TableCell key={index} style={{
                        fontSize: 14,
                        backgroundColor: selectedRowId !== null && headerConfig.key &&
                        selectedRowId === row[headerConfig.key] && "#cfcdd1",
                        ...header.cellStyle
                    }}>
                        <span>{getValue(row, header)}</span>
                    </TableCell>
                ))}
            </TableRow>
        );
    };
};

//'&:hover': {
const useStyles = makeStyles({
    rowWithoutClick:{
        height: 39
    },
    rowWithClick:{
        height: 39,
        '&:hover': { backgroundColor: "red" },
        cursor: "pointer"
    }
});