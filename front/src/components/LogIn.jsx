import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        display: "flex",
        flexWrap: "wrap"
    },
    input: {
        margin: theme.spacing(1)
    }
}));
export default function LogIn({ onSubmit, handleEmail, handlePassword }) {

    const classes = useStyles();
    return (


        <div>
            <form onSubmit={onSubmit} method="POST"  >
                <Input
                    onChange={handleEmail}
                    placeholder="Email"
                    className={classes.input}
                    inputProps={{
                        "aria-label": "description"
                    }}
                />
                <Input
                    onChange={handlePassword}
                    placeholder="Password"
                    type="password"
                    className={classes.input}
                    inputProps={{
                        "aria-label": "description"
                    }}
                />
                <Button type="submit">Submit</Button>
            </form>
    </div>
  );
}