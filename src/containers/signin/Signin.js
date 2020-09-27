import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import classes from './Signin.module.css';

export const Signin = (props) => {
  return (
    <div className={classes.container}>
      <Card className={classes.signin_container}>
        <div className={classes.title}>Sign in</div>
        <form noValidate autoComplete='off'>
          <TextField
            className={classes.input_field}
            id='email'
            label='Email'
            variant='outlined'
            type='email'
            required
          />
          <TextField
            className={classes.input_field}
            id='password'
            label='Password'
            variant='outlined'
            type='password'
            required
          />
          <div className={classes.action_container}>
            <Button variant='contained' color='primary'>
              Sign in
            </Button>
          </div>
        </form>
        <Button size='small' color='primary'>
          Create an account
        </Button>
      </Card>
    </div>
  );
};
