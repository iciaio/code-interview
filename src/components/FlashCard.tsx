import React, { useState } from "react";
import { FlashCardProps } from "./interfaces";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  TextField,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  },
  title: {
    fontSize: 22,
    marginBottom: 20
  },
  card: {
    minWidth: 250
  },
  label: {
    fontSize: 15,
    marginTop: 10
  }
});

export const FlashCard = (props: { addFlashCard: void }): any => {
  const classes = useStyles();
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Add New Flash Card
        </Typography>
        <Typography className={classes.label} color="textSecondary">
          Question:
        </Typography>
        <TextField
          error={!newQuestion.length}
          id="question"
          helperText="Cannot be empty"
          value={newQuestion}
          onChange={(e) => {
            setNewQuestion(e.target.value);
          }}
        />
        <Typography className={classes.label} color="textSecondary">
          Answer:
        </Typography>
        <TextField
          error={!newAnswer.length}
          id="answer"
          helperText="Cannot be empty"
          value={newAnswer}
          onChange={(e) => {
            setNewAnswer(e.target.value);
          }}
        />
        <CardActions>
          <Button
            disabled={!newQuestion.length || !newAnswer.length}
            size="small"
            onClick={props.addFlashCard}
          >
            Add
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};
