import React from "react";

import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';

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