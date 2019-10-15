import React, {useState} from "react";
import PropTypes from 'prop-types';
import {SpinnerDownloading} from "../extras/SpinnerDownloading";
import {TableSkeletonPaging} from "./TableSkeletonPaging";
import {TableRow ,TableCell} from "@material-ui/core";
import { TableHeaderSort } from "./TableHeaderSort";
import {calcPage, sortItems} from "../helpers/pagingCalc";

export const TablePaging = ({loading, dataList, headerConfig, filterText, tableStyleName}) => {
    const itemsPerPage = 10;
    const [sortField, setSortField]= useState(headerConfig.columns[0].fieldForSort);
    const [sortDescending, setSortDescending]= useState(false);
    const [paging, setPaging] = useState(() => {
        sortItems(dataList, headerConfig.columns[0].fieldForSort, false);
        return calcPage(dataList,10, 1);
    });
    const [filteredList, setFilteredList ] = useState(dataList);
    const [lastFilterText, setLastFilterText ] = useState("");

    if((filterText || filterText === "" ) && filterText !== lastFilterText) {
        const filtered= dataList.filter((item) =>
            Object.values(item).join().toLowerCase().indexOf(filterText.toLowerCase()) > -1 );
        sortItems(filtered, sortField, sortDescending);
        setFilteredList(filtered);
        setLastFilterText(filterText);
        setPaging(calcPage(filtered,10, 1));
    }

    const onSetSortField = (newSortField) => {
        const isDescending = newSortField === sortField && !sortDescending;
        sortItems(filteredList, newSortField, isDescending);
        setSortDescending(isDescending);
        setSortField(newSortField);
        setPaging(calcPage(filteredList, itemsPerPage, 1));
    };

    const onPageChange = (newPage) => {
        setPaging(calcPage(filteredList, itemsPerPage, newPage));
    };

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
                tableRows={tableRows(headerConfig)}
                tableHeader={tableHeader}
                condensed={false}
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
    tableStyleName: PropTypes.string
};

export const tableRows = (headerConfig) => {

    return (row, index) => (
        <TableRow key={index} style={{height: 39}}>
            {headerConfig.columns.map((header) => (
                <TableCell style={{fontSize: "14px"}} >
                    <span>{row[header.fieldForSort]}</span>
                </TableCell>
            ))}
        </TableRow>
    );
};