import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";

import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredusername, setUsername] = useState('');
  const [enteredage, setAge] = useState('');
  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const submiHandler = (event) => {
    event.preventDefault();
    if (enteredusername.trim().length === 0 || enteredage.trim().length === 0) {
      setError({
        title: "INAVALID INPUT",
        message: "please enter valid input",
      });
      return;
    }
    if (+enteredage < 1) {
      setError({
        title: "INAVALID AGE",
        message: "pleas Enter valide Age (>1)",
      });
      return;
    }
    props.onSave(enteredusername, enteredage);
    setUsername("");
    setAge("");
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submiHandler}>
          <label htmlFor="username"> username</label>
          <input
            type="text"
            id="username"
            value={enteredusername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            value={enteredage}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </React.Fragment>
  );
}

export default AddUser;
