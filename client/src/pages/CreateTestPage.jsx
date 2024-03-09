import React, { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import "../css/CreateTestPage.css";
import { Link } from "react-router-dom";

const CreateTestPage = () => {
  const [nextSlide, setNextSilde] = useState(true);

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const onNext = () => {
    setNextSilde(false);
  };

  const onBack = () => {
    setNextSilde(true);
  };

  return (
    <div className="flex flex-row items-center justify-center w-full">
      {nextSlide ? (
        <div className="flex flex-col items-center justify-center w-10/12">
          <div className="flex-col text-center">
            <Typography sx={{ m: 2 }} variant="h4" component="h2" gutterBottom>
              Welcome to the Test Creation Page
            </Typography>
          </div>
          <Typography sx={{ m: 2 }} variant="h5" component="h2" gutterBottom>
            Please enter the title for the test:
          </Typography>
          <div className="overflow-hidden">
            <TextField
              sx={{ margin: "0px 30px", width: "100%" }}
              id="outlined-basic"
              color="secondary"
              label="Test Title"
              fullWidth
              variant="filled"
            />

            <TextField
              sx={{ margin: "0px 30px", width: "100%" }}
              id="outlined-basic"
              color="secondary"
              label="Pass Percentage"
              fullWidth
              variant="filled"
            />

            <TextField
              sx={{ margin: "0px 30px", width: "100%" }}
              id="outlined-basic"
              color="secondary"
              label="Duration"
              fullWidth
              variant="filled"
            />

            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Age"
              sx={{ width: "300px" }}
              onChange={handleChange}
              placeholder="Select The Test Type"
            >
              <MenuItem value={"public"}>Public</MenuItem>
              <MenuItem value={"private"}>Private</MenuItem>
            </Select>
            <FormHelperText>With label + helper text</FormHelperText>
          </div>
          <div className="flex flex-row items-center justify-end w-full">
            <button
              className="pt-2 pb-2 pl-5 pr-5 border-2 rounded-lg"
              onClick={onNext}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-10/12">
          <div className="w-3/4 form-group file-area">
            <label for="images">
              Question PDF/Images{" "}
              <span>Try To Upload A Image With Resolution.</span>
            </label>
            <input
              // ref={media}
              type="file"
              name="images"
              id="images"
              required="required"
            />
            <div class="file-dummy">
              <div class="success">
                Great, your files are selected. Keep on.
              </div>
              <div class="default">Please select a Question PDF/Images</div>
            </div>
          </div>

          <div className="w-3/4 form-group file-area">
            <label for="images">
              Answer PDF/Images{" "}
              <span>Try To Upload A Image With Resolution.</span>
            </label>
            <input
              // ref={media}
              type="file"
              name="images"
              id="images"
              required="required"
            />
            <div class="file-dummy">
              <div class="success">
                Great, your files are selected. Keep on.
              </div>
              <div class="default">Please select a Answer PDF/Images</div>
            </div>
          </div>
          <button className="pt-2 pb-2 pl-5 pr-5 border-2 rounded-lg">
            Create
          </button>
          <h1 className="mt-5 mb-5">OR</h1>
          <Link to={"/custom"}>
            <button className="pt-3 pb-3 pl-5 pr-5 border-2 rounded-lg">
              Create A Custom Test
            </button>
          </Link>
          <div className="flex flex-row items-center justify-start w-full">
            <button
              className="pt-2 pb-2 pl-5 pr-5 border-2 rounded-lg"
              onClick={onBack}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateTestPage;
