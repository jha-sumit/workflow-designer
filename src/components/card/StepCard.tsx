import React, { FunctionComponent, useState, MouseEvent } from "react";
import { Paper, Grid, IconButton } from "@material-ui/core";
import PlusOneIcon from '@material-ui/icons/PlusOne';
import SettingsIcon from '@material-ui/icons/Settings';
import CallSplitIcon from '@material-ui/icons/CallSplit';
import { StepConfiguration } from "../../models";

interface StepCardProps {
    workflow: StepConfiguration;
    onConfigSelect: (step: StepConfiguration) => void;
    onSplitSelect: (step: StepConfiguration) => void;
    onAnotherSelect: (step: StepConfiguration) => void;
}

export const StepCard: FunctionComponent<StepCardProps> = (props) => {
    const [showOption, setShowOption] = useState(false);
    const { workflow } = props;
    const {onConfigSelect, onSplitSelect, onAnotherSelect} = props;

    const onMouseHover = (event: MouseEvent<HTMLElement>) => {
        setShowOption(true);
    }

    const onMouseOut = (event: MouseEvent<HTMLElement>) => {
        setShowOption(false);
    }
    return (
        <Paper style={{ width: 240, height: 60 }} onMouseEnter={onMouseHover} onMouseLeave={onMouseOut}>
            {showOption ?
                <Grid container justify="center">
                    <Grid item alignContent="center">
                        <IconButton onClick={() => onConfigSelect(workflow)}>
                            <SettingsIcon/>
                        </IconButton>
                        {workflow.children.length !== 0 ?
                            <IconButton onClick={() => onAnotherSelect(workflow)}>
                                <PlusOneIcon />
                            </IconButton> :
                            <IconButton onClick={() => onSplitSelect(workflow)}>
                                <CallSplitIcon />
                            </IconButton>}
                    </Grid>
                </Grid> : <> </>
            }
        </Paper >
    );
}
