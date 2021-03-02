import React from "react";
import { FlashCardProps } from "./interfaces";
import { TableRow, TableCell } from "@material-ui/core";

export const FlashCardTableRow: React.FC<FlashCardProps> = ({
  id,
  answer,
  question
}: FlashCardProps) => {
  return (
    <TableRow>
      <TableCell>
        <h5>{id}</h5>
      </TableCell>
      <TableCell>
        <h5>{question}</h5>
      </TableCell>
      <TableCell>
        <h5>{answer}</h5>
      </TableCell>
    </TableRow>
  );
};
