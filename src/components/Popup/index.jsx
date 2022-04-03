import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import getBankDetails from "../../services/getBankDetails";
import { useState, useEffect } from "react";

export default function BasicPopover() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [loanTypes, setLoanTypes] = useState([]);

  useEffect(() => {
    getBankDetails(setLoanTypes);

    console.log("loanTypes", loanTypes);
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function editLoanType(loanType) {
    let removeEmprestimo = loanType.replace(/EMPRESTIMO_/g, " ");
    let removeUnderline = removeEmprestimo.replace(/_/g, " ");
    let allLettersToLowerCase = removeUnderline.toLowerCase();
    let firstLetterToUpperCase =
      allLettersToLowerCase.charAt(1).toUpperCase() +
      allLettersToLowerCase.slice(2);
    return firstLetterToUpperCase;
  }

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="popup">
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Conheça algumas de nossas
        <br />
        modalidades de empréstimo!
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          {loanTypes.map((loanType) => (
            <p>
              <strong>{editLoanType(loanType.type)}</strong>
            </p>
          ))}
        </Typography>
      </Popover>
    </div>
  );
}
