import React from "react";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { DescriptionContext } from "./DescriptionContextState";

const Description = () => {

  const [descriptionState, setDescriptionState] = useContext(DescriptionContext);

  const handleDescriptionChange = (event) => {
    setDescriptionState({...descriptionState, Description:event.target.value});
  };

  return (
    <div className="description height">
      <div className="">
        {/* <div className="card-body box"> */}
          {/* <h4 className="component-title ">شرح </h4>
          <hr className="blue-line" /> */}

          <TextField
            label="شرح"
            multiline
            rows={8}
            value={descriptionState.Description}
            onChange={handleDescriptionChange}
            fullWidth
            inputProps={{ style: { textAlign: "right" } }}
          />

        </div>
      {/* </div> */}
    </div>
  );
};

export default Description;
