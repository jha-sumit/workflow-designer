import React, { useState, Fragment } from 'react';
import { makeStyles, Theme, createStyles, Toolbar, Typography, Tooltip, IconButton, lighten, TextField, Collapse, ClickAwayListener, Popover } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import clsx from 'clsx';
import { TableFilter } from '..';

const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
        highlight:
            theme.palette.type === 'light'
                ? {
                    color: theme.palette.secondary.main,
                    backgroundColor: lighten(theme.palette.secondary.light, 0.85),
                }
                : {
                    color: theme.palette.text.primary,
                    backgroundColor: theme.palette.secondary.dark,
                },
        title: {
            flex: '1 1 100%',
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

interface EnhancedTableToolbarProps {
    numSelected: number;
}

export const EnhancedTableToolbar: React.FunctionComponent<EnhancedTableToolbarProps> = (props) => {
    const classes = useToolbarStyles();
    const { numSelected } = props;
    const [showSearch, setShowSearch] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const showFilter = Boolean(anchorEl);
    const filterId = showFilter ? 'simple-popover' : undefined;

    return (
        <Toolbar
            className={clsx(classes.root, {
                [classes.highlight]: numSelected > 0,
            })}
        >
            {numSelected > 0 ? (
                <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
                    {numSelected} selected
                </Typography>
            ) : (
                    <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
                        Workflows
                    </Typography>
                )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                    <Fragment>
                        <Tooltip title="Search List">
                            <Collapse in={showSearch} >
                                <ClickAwayListener onClickAway={() => setShowSearch(false)}>
                                    <TextField id="input-with-icon-grid" label="Search" />
                                </ClickAwayListener>
                            </Collapse>
                        </Tooltip>
                        <Tooltip title="Search List">
                            <IconButton aria-label="search list" onMouseEnter={() => setShowSearch(true)}>
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Filter list">
                            <IconButton aria-label="filter list" onClick={handleClick}>
                                <FilterListIcon />
                            </IconButton>
                        </Tooltip>
                        <Popover
                            id={filterId}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={showFilter}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                            <TableFilter columns={['name', 'activeInstanceCount', 'errorInstancesCount', 'lastRunAt', 'status']}/>
                        </Popover>
                    </Fragment>
                )}
        </Toolbar>
    );
};