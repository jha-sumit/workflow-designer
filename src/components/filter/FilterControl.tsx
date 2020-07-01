import React, { FunctionComponent, Fragment } from 'react';
import { FormControl, InputLabel, Select, MenuItem, makeStyles, createStyles, Theme, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 100,
        },
    }),
);

export interface FilterData {
    columns: string[];
    selected: null | string;
    value: string;
}
interface FilterControlProps {
    item: FilterData;
}
export const FilterControl: FunctionComponent<FilterControlProps> = (props) => {
    const classes = useStyles();
    const { item } = props;
    return (
        <Fragment>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Column</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={item.value}
                    onChange={console.log}>
                    {item.columns.map((col) => <MenuItem value={col}>{col}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <TextField id="standard-basic" label="Column Value" />
            </FormControl>
        </Fragment>);
}