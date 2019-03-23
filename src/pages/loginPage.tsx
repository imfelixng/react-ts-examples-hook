import * as React from "react";
import { Link } from "react-router-dom";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withStyles, createStyles, WithStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { FormHelperText } from "@material-ui/core";

// https://material-ui.com/guides/typescript/
const styles = theme =>
  createStyles({
    card: {
      maxWidth: 400,
      margin: "0 auto"
    }
  });

type Props = Props & RouteComponentProps, WithStyles<typeof styles> {}

const LoginForm = props => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
      }}
    >
      <TextField label="Name" margin="normal" />
      <TextField label="Password" type="password" margin="normal" />
      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  );
};

const LoginPageInner = (props: Props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardHeader title="Login" />
      <CardContent>
        <LoginForm />
      </CardContent>
    </Card>
  );
};

export const LoginPage = withStyles(styles)(
  withRouter < Props > LoginPageInner
);