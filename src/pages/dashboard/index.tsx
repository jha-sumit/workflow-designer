import {Grid} from "@material-ui/core";
import ErrorPivotTable from "@pages/dashboard/error-pivot";
import WorkflowInstancePivotTable from "@pages/dashboard/instance-pivot";
import {StyledPaper} from "@components/StyledPaper";
import {Flex} from "@components/Flex";

const Dashboard = () => {
    return (
        <Flex>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <StyledPaper>xs=12</StyledPaper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ErrorPivotTable/>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <WorkflowInstancePivotTable/>
                </Grid>
            </Grid>
        </Flex>
    );
}

export default Dashboard;