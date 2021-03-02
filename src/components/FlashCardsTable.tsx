import React from "react";
import { FlashCardTableProps } from "./interfaces";
import { FlashCardTableRow } from "./FlashCardTableRow";
import {
  makeStyles,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    margin: 20,
    width: "100%"
  },
  header: {
    display: "block",
    textAlign: "center",
    width: "100%"
  },
  headerText: {
    fontSize: 18,
    color: "green"
  }
});

export const FlashCardsTable: React.FC<FlashCardTableProps> = ({
  flashCards
}: FlashCardTableProps) => {
  const classes = useStyles();
  return (
    <div>
      <Table className={classes.table}>
        <TableHead className={classes.header}>
          <Typography className={classes.headerText}>
            Your Flash Cards
          </Typography>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <h4>#</h4>
            </TableCell>
            <TableCell>
              <h4>Question</h4>
            </TableCell>
            <TableCell>
              <h4>Answer</h4>
            </TableCell>
          </TableRow>
          {flashCards.map((item) => {
            return (
              <FlashCardTableRow
                id={item.id}
                question={item.question}
                answer={item.answer}
              ></FlashCardTableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};
