import React, {useState} from "react";
import PropTypes from 'prop-types';
import {SpinnerDownloading} from "../extras/SpinnerDownloading";
import {TableSkeletonPaging} from "./TableSkeletonPaging";
import {TableRow ,TableCell} from "@material-ui/core";
import { TableHeaderSort } from "./TableHeaderSort";
import {calcPage, sortItems} from "../helpers/pagingCalc";

export const TablePaging = ({loading, dataList, headerConfig, filterText, tableStyleName,
                                searchFunction, onRowClick, condensed}) => {
    const itemsPerPage = 10;
    const [sortField, setSortField]= useState(headerConfig.columns[0].fieldForSort);
    const [sortDescending, setSortDescending]= useState(false);
    const [activePage, setActivePage] = useState(1);

    let filteredList = [];
    if(filterText && filterText.length > 0) {
        filteredList = searchFunction ? searchFunction(dataList) : dataList.filter((item) =>
            Object.values(item).join().toLowerCase().indexOf(filterText.toLowerCase()) > -1 );
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
    const [selectedRowId, setSelectedRowId ] = useState(null);
    const getValue = (row, header) => header.display && header.display(row)
                                || row[header.fieldForSort];

    const onSelectRow = (row)=> {
        if(headerConfig.key)
            setSelectedRowId(row[headerConfig.key]);

        onItemClick(row)
    };

    return (row, index) => (
        <TableRow key={index} style={{height: 39}} onClick={() => onItemClick && onSelectRow(row)}>
            {headerConfig.columns.map((header, index) => (
                <TableCell key={index} style={{
                    fontSize: 14,
                    backgroundColor: selectedRowId !== null && headerConfig.key &&
                                        selectedRowId === row[headerConfig.key] && "#cfcdd1",
                    ...header.cellStyle}} >
                    <span>{getValue(row, header)}</span>
                </TableCell>
            ))}
        </TableRow>
    );
};