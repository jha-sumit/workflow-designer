import React, { FunctionComponent, useState } from 'react';
import { Grid, Radio, Typography, TextField, InputAdornment, Chip, Box } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

interface OptionProps {
    type: string;
    index: number;
    selectedIndex: number;
    onSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const EveryOption: FunctionComponent<OptionProps> = (props) => {
    const { type, index, selectedIndex, onSelect } = props;
    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item>
                <Radio checked={index === selectedIndex} onChange={onSelect} value={index} />
            </Grid>
            <Grid item>
                <Typography>Every {type}s</Typography>
            </Grid>
        </Grid>);
}

const RangeOption: FunctionComponent<OptionProps> = (props) => {
    const { type, index, selectedIndex, onSelect } = props;
    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item>
            <Radio checked={index === selectedIndex} onChange={onSelect} value={index} />
            </Grid>
            <Grid item>
                <Typography>Every {type}s</Typography>
            </Grid>
            <Grid item>
                <TextField
                    id="filled-secondary"
                    label="between"
                    variant="filled"
                    size="small"
                    color="secondary"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{type}</InputAdornment>
                    }}
                /></Grid>
            <Grid item>
                <TextField
                    id="filled-secondary"
                    label="And"
                    variant="filled"
                    size="small"
                    color="secondary"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{type}</InputAdornment>
                    }}
                /></Grid>
        </Grid>);
}

const RecursiveOption: FunctionComponent<OptionProps> = (props) => {
    const { type, index, selectedIndex, onSelect } = props;
    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item>
            <Radio checked={index === selectedIndex} onChange={onSelect} value={index} />
            </Grid>
            <Grid item>
                <TextField
                    id="filled-secondary"
                    label="Every"
                    variant="filled"
                    size="small"
                    color="secondary"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{type}</InputAdornment>
                    }}
                /></Grid>
            <Grid item>
                <TextField
                    id="filled-secondary"
                    label="Starting"
                    variant="filled"
                    size="small"
                    color="secondary"
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{type}</InputAdornment>
                    }}
                /></Grid>
        </Grid>);
}

const SpecificOption: FunctionComponent<OptionProps> = (props) => {
    const { type, index, selectedIndex, onSelect } = props;
    return (
        <Grid container spacing={1} alignItems="center">
            <Grid item>
            <Radio checked={index === selectedIndex} onChange={onSelect} value={index} />
            </Grid>
            <Grid item>
                <Autocomplete
                    multiple
                    id="size-small-filled-multi"
                    size="small"
                    options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
                        16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                        31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45,
                        46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59]}
                    style={{ minWidth: 280 }}
                    getOptionLabel={(option) => option.toString()}
                    autoHighlight
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip
                                color="secondary"
                                label={option.toString()}
                                size="small"
                                {...getTagProps({ index })}
                            />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField {...params} variant="filled" label="At " />
                    )}
                />
            </Grid>
            <Grid item>
                <Typography>{type}(s)</Typography>
            </Grid>
        </Grid>);
}

interface CronOptionsProps {
    index: any;
    value: any;
    type: string;
}

export const CronOptions: FunctionComponent<CronOptionsProps> = (props) => {
    const { type, value, index, ...other } = props;
    const [selectedIndex, setSelectedIndex] = useState('0');

    const onSelectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedIndex(event.target.value);
    }

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`wrapped-tabpanel-${index}`}
            aria-labelledby={`wrapped-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <EveryOption type={type} index={0} selectedIndex={Number(selectedIndex)} onSelect={onSelectionChange} />
                    <RangeOption type={type} index={1} selectedIndex={Number(selectedIndex)} onSelect={onSelectionChange} />
                    <RecursiveOption type={type} index={2} selectedIndex={Number(selectedIndex)} onSelect={onSelectionChange} />
                    <SpecificOption type={type} index={3} selectedIndex={Number(selectedIndex)} onSelect={onSelectionChange} />
                </Box>
            )}
        </div>
    );
}