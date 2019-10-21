import React from "react";
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core';

export const TableHeaderSort = ({headerConfig, sortField, sortDescending, onSetSortField})=>(
    <TableHead>
        <TableRow>
            {headerConfig.columns.map((config, index) => (
                <TableCell key={index}
                           style={config.headerCellStyle}
                           className={sortField === config.fieldForSort ? "sorted" : ""}>
                    {config.fieldForSort ?
                        <TableSortLabel
                            active={sortField === config.fieldForSort}
                            direction={sortDescending ? "desc" : "asc"}
                            onClick={() => onSetSortField(config.fieldForSort)}
                        >
                            {config.columnLabel}
                        </TableSortLabel>
                        :
                        <span>{config.columnLabel}</span>
                    }
                </TableCell>
            )) }
        </TableRow>
    </TableHead>
);