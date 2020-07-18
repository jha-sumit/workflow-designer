import React from 'react';
import { TableHead, TableRow, TableCell, Checkbox, TableSortLabel } from "@material-ui/core";
import { Order } from '../../models';
import { ColumnLabel } from '../../components';

interface EnhancedTableProps<T> {
    classes: any;
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof T) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: keyof T;
    rowCount: number;
    columns: ColumnLabel<T>[];
    allowMultipleSelection?: boolean;
}

export function EnhancedTableHead<T>(props: EnhancedTableProps<T>) {
    const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort, columns, allowMultipleSelection } = props;
    const createSortHandler = (property: keyof T) => (event: React.MouseEvent<unknown>) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {allowMultipleSelection &&
                <TableCell padding="checkbox">
                    <Checkbox
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{ 'aria-label': 'select all desserts' }}
                    />
                </TableCell>}
                {columns.map((headCell) => (
                    <TableCell
                        key={headCell.id.toString()}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === headCell.id ? order : false}>
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}>
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}