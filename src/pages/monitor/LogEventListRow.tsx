import React, { FunctionComponent, MouseEvent } from 'react';
import { TableRow, TableCell, Checkbox, IconButton } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import { Workflow } from '../../models';

interface LogEventListRowProps {
    row: Workflow;
    isSelected: boolean;
    index: number;
    onSelect: (event: MouseEvent, row: Workflow) => void;
}
export const LogEventListRow: FunctionComponent<LogEventListRowProps> = (props) => {
    const { row, isSelected, index, onSelect } = props;
    const labelId = `enhanced-table-checkbox-${index}`;

    const viewInstances = (event: MouseEvent, data: any) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("View" + data);
    }

    const editWorkflow = (event: MouseEvent<unknown>, data: any) => {
        event.preventDefault();
        event.stopPropagation();
        console.log("Edit" + data);
    }

    return (
        <TableRow
            hover
            onClick={(event) => onSelect(event, row)}
            role="checkbox"
            aria-checked={isSelected}
            tabIndex={-1}
            key={row.name}
            selected={isSelected}>
            <TableCell padding="checkbox">
                <Checkbox
                    checked={isSelected}
                    inputProps={{ 'aria-labelledby': labelId }}
                />
            </TableCell>
            <TableCell component="th" id={labelId} scope="row" padding="none">
                {row.name}
            </TableCell>
            <TableCell align="right">{row.activeInstanceCount}</TableCell>
            <TableCell align="right">{row.errorInstancesCount}</TableCell>
            <TableCell align="right">{row.lastRunAt}</TableCell>
            <TableCell align="right">
                <IconButton size="small" onClick={(event) => editWorkflow(event, row)}>
                    <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={(event) => viewInstances(event, row)}>
                    <VisibilityIcon fontSize="small" />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}