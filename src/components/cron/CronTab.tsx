import { Paper, Tab, Tabs } from '@material-ui/core';
import React, { Component } from 'react';
import { CronOptions } from './CronOptions';

interface CronTabProps {
    options: number[];
}

interface CronTabState {
    value: number;
    selectedValues: number[];
}
export class CronTab extends Component<CronTabProps, CronTabState> {

    constructor(props: CronTabProps) {
        super(props);
        this.state = {
            value: 0,
            selectedValues: [],
        };
    }

    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        this.setState({
            value: newValue
        });
    };

    handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setValue((event.target as HTMLInputElement).value);
    };

    tabProps = (index: number) => {
        return {
            id: `scrollable-force-tab-${index}`,
            'aria-controls': `scrollable-force-tabpanel-${index}`,
        };
    }

    render() {
        const { value } = this.state;
        return (<Paper variant="outlined" elevation={3} style={{maxWidth: 380}}>
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="primary"
                variant="scrollable"
                scrollButtons="on"
                textColor="primary">
                <Tab label="Seconds" {...this.tabProps(0)} />
                <Tab label="Minutes" {...this.tabProps(1)} />
                <Tab label="Hours" {...this.tabProps(2)} />
                <Tab label="Day of Month" {...this.tabProps(3)} />
                <Tab label="Month" {...this.tabProps(4)} />
                <Tab label="Day of Week" {...this.tabProps(5)} />
                <Tab label="Years" {...this.tabProps(6)} />
            </Tabs>

            <CronOptions value={value} index={0} type={'Second'} />
            <CronOptions value={value} index={1} type={'Minute'} />
            <CronOptions value={value} index={2} type={'Hour'} />
            <CronOptions value={value} index={3} type={'Day of Month'} />
            <CronOptions value={value} index={4} type={'Month'} />
            <CronOptions value={value} index={5} type={'Day of Week'} />
            <CronOptions value={value} index={6} type={'Year'} />
        </Paper>);
    }
}