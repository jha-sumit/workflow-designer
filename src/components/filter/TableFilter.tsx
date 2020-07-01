import React, { FunctionComponent, useState } from 'react';
import { IconButton, CardActions, CardHeader, CardContent, Grid, Card, makeStyles, createStyles, Theme, Divider } from '@material-ui/core';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { red } from '@material-ui/core/colors';
import { FilterControl, FilterData } from './FilterControl';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 455,
            minWidth: 400,
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

interface TableFilterProps {
    columns: string[];
}

export const TableFilter: FunctionComponent<TableFilterProps> = (props) => {
    const classes = useStyles();
    const [filters, setFilters] = useState(new Array<FilterData>());

    return (<Card className={classes.root}>
        <CardHeader
            title="Choose Filter" />
        <CardContent>
            <Grid>
                {filters.map((filter: FilterData) => <FilterControl item={filter} />)}
            </Grid>
            <Grid container alignItems="flex-end">
                <Grid item>
                    <IconButton onClick={() => setFilters([...filters, {columns: props.columns, selected: '', value: ''}])}>
                        <PlaylistAddIcon />
                    </IconButton>
                </Grid>
            </Grid>
            <Divider />
        </CardContent>
        <CardActions>
            <Grid container alignItems='flex-end' justify='flex-end'>
                <Grid item>
                    <IconButton>
                        <PlaylistAddCheckIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton>
                        <ClearAllIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </CardActions>
    </Card>);
}