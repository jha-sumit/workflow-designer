import React, { FunctionComponent, useState, MouseEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { Grid, Paper, Drawer } from '@material-ui/core';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import { WorkflowStep, StepConfiguration } from '../../models';
import { StepCard } from '../../components';
import { WorkflowStepConfiguration } from './WorkflowStepConfiguration';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'relative',
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
        root: {
            width: '100%',
        },
        button: {
            marginTop: theme.spacing(1),
            marginRight: theme.spacing(1),
        },
        actionsContainer: {
            marginBottom: theme.spacing(2),
        },
        resetContainer: {
            padding: theme.spacing(3),
        },
    }),
);

const getSteps = (): StepConfiguration[] => {
    return [
        {
            label: 'Select campaign settings',
            children: [[{
                label: 'Create an ad group',
                children: [],
                step: new WorkflowStep(),
                description: 'An ad group contains one or more ads which target a shared set of keywords.'
            }, {
                label: 'Create an ad group',
                children: [],
                step: new WorkflowStep(),
                description: 'An ad group contains one or more ads which target a shared set of keywords.'
            }],
            [{
                label: 'Create an ad group',
                children: [],
                step: new WorkflowStep(),
                description: 'An ad group contains one or more ads which target a shared set of keywords.'
            }, {
                label: 'Create an ad group',
                children: [],
                step: new WorkflowStep(),
                description: 'An ad group contains one or more ads which target a shared set of keywords.'
            }]],
            step: null,
            description: `For each ad campaign that you create, you can control how much
        you're willing to spend on clicks and conversions, which networks
        and geographical locations you want your ads to show on, and more.`},
        {
            label: 'Create an ad group',
            children: [],
            step: new WorkflowStep(),
            description: 'An ad group contains one or more ads which target a shared set of keywords.'
        },
        {
            label: 'Create an ad', children: [], step: new WorkflowStep(), description: `Try out different ad text to see what brings in the most customers,
    and learn how to enhance your ads using features like ad extensions.
    If you run into any problems with your ads, find out how to tell if
    they're running and how to resolve approval issues.`}];
}

interface StepPlaceholderProps {
    steps: StepConfiguration[];
    openConfigPanel: (step: StepConfiguration) => void;
}

export const StepPlaceholder: FunctionComponent<StepPlaceholderProps> = (props) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const [refresh, setRefresh] = useState(false);
    const { openConfigPanel } = props;

    let { steps } = props;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleNew = () => {
        steps.splice(activeStep, 0, {
            label: 'Create an ad group',
            children: [],
            step: new WorkflowStep(),
            description: 'An ad group contains one or more ads which target a shared set of keywords.'
        });
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const addSubflow = (step: StepConfiguration) => {
        step.children.push([{
            label: 'Create an ad group',
            children: [],
            step: new WorkflowStep(),
            description: 'An ad group contains one or more ads which target a shared set of keywords.'
        }]);
        setRefresh(!refresh);
    }

    const splitIntoSubflow = (step: StepConfiguration) => {
        step.children.push([{
            label: 'Create an ad group',
            children: [],
            step: new WorkflowStep(),
            description: 'An ad group contains one or more ads which target a shared set of keywords.'
        }]);
        step.children.push([{
            label: 'Create an ad group',
            children: [],
            step: new WorkflowStep(),
            description: 'An ad group contains one or more ads which target a shared set of keywords.'
        }]);
        setRefresh(!refresh);
    }

    const showConfiguration = (step: StepConfiguration) => {
        openConfigPanel(step);
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((workflow, index) => (
                    <Step key={workflow.label}>
                        <StepLabel>{workflow.label}</StepLabel>
                        <StepContent>
                            {workflow.children.length !== 0 ?
                                <Grid container spacing={3}>
                                    {workflow.children.map((wfl, index) =>
                                        <Grid item><Stepper activeStep={activeStep} orientation="vertical">
                                            <StepPlaceholder steps={wfl} openConfigPanel={openConfigPanel} />
                                        </Stepper></Grid>)}
                                </Grid> : <> </>}
                            <StepCard workflow={workflow}
                                onAnotherSelect={addSubflow}
                                onSplitSelect={splitIntoSubflow}
                                onConfigSelect={showConfiguration} />

                            <div className={classes.actionsContainer}>
                                <div>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        className={classes.button}>
                                        Back
                                    </Button>
                                    <Button
                                        onClick={handleNew}
                                        className={classes.button}>
                                        Add
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        className={classes.button}>
                                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                    </Button>
                                </div>
                            </div>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} className={classes.resetContainer}>
                    <Typography>All steps completed - you&apos;re finished</Typography>
                    <Button onClick={handleReset} className={classes.button}>
                        Reset
          </Button>
                </Paper>
            )}
        </div>
    );
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

interface WorkflowEditorProps {
    isOpen: boolean;
    value: null | number;
    onClose: (isdirty: boolean) => void;
}

export const WorkflowEditor: FunctionComponent<WorkflowEditorProps> = (props) => {
    const classes = useStyles();
    const { isOpen, onClose } = props;
    const [anchorEl, setAnchorEl] = React.useState<StepConfiguration | null>(null);

    const openConfigPanel = (step: StepConfiguration) => {
        setAnchorEl(step);
    };

    const handleConfigurationClose = (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
        setAnchorEl(null);
    };

    const showConfiguration = Boolean(anchorEl);

    const handleClose = () => {
        onClose(false);
    };

    return (
        <div>
            <Dialog fullScreen open={isOpen} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Workflow Editor
            </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Save
            </Button>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Cancel
            </Button>
                    </Toolbar>
                </AppBar>
                <Grid container md={12}>
                    <Grid item>
                        <StepPlaceholder steps={getSteps()} openConfigPanel={openConfigPanel} />
                    </Grid>
                </Grid>
                <Drawer anchor={'right'} open={showConfiguration} onClose={handleConfigurationClose}>
                    <WorkflowStepConfiguration />
                </Drawer>
            </Dialog>
        </div >
    );
}