import * as React from "react";
import { connect } from "react-redux";
import * as actionHandler from "../../redux/users"
import { bindActionCreators } from "redux";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Navigate } from "react-router-dom";
import { WorkflowIcon } from "../../common/icons/WorkflowIcon";

interface LoginState {

}

interface LoginProps {
    style?: any;
    theme?: any;
    history: any;
    isAuthed: boolean;
    isFetching: boolean;
    error: string;
    fetchAndHandleAuthentication: (history: any) => void;
}

class LoginComponent extends React.Component<LoginProps, LoginState> {
    handleAuth = (event: React.FormEvent) => {
        event.preventDefault();
        this.props.fetchAndHandleAuthentication(this.props.history);
    }

    render() {
        console.log("Log in", this.props.isAuthed);
        const classes = this.props.style;
        return (<div>
            {!this.props.isAuthed ? (
                <Grid container component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item xs={false} sm={4} md={7} component={Paper} elevation={6} square>
                        <Grid container justify="center" alignItems="center" className={classes.root}>
                            {/* <Grid key={'workflowIcon'} item justify="center" alignItems="flex-end" style={{height: '50%', width: '50%'}}>
                                <FishIcon />
                            </Grid> */}
                            <Grid key={'fishIcon'} item justify="center">
                                <WorkflowIcon size="md"/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign in
                            </Typography>
                            <form className={classes.form} noValidate onSubmit={this.handleAuth}>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}>
                                    Sign In
            </Button>
                                <Grid container>
                                    <Grid item xs>
                                        <Link href="#" variant="body2">
                                            Forgot password?
                </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2">
                                            {"Don't have an account? Sign Up"}
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    </Grid>
                </Grid>)
                : (<Navigate to="/dashboard" />)
            }</div>
        );
    }
}

export const Login = connect(
    (state: any) => (
        { isFetching: state.auth.isFetching, error: state.auth.error, isAuthed: state.auth.isAuthed }
    ), (dispatch) => bindActionCreators(actionHandler, dispatch)
)(LoginComponent);