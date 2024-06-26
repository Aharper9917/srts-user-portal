import { Alert, Box, Button, Collapse, TextField } from "@mui/material";
import { useState } from "react";
import "./App.css";

function App() {
  const [UUID, setUUID] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
        <a href="https://www.mesacountysaferoutes.com/" target="_blank">
          <img src={"/student.png"} className="logo" alt="SRTS logo" />
        </a>
      </div>
      <h1>Mesa County Safe Routes</h1>
      <h2>Data Safety</h2>
      <p>
        At <b>Mesa County Safe Routes</b>, we prioritize your privacy and data
        security above all else. Rest assured, we do not collect any location
        data from our users. Furthermore, all the data stored on your device and
        within our databases remains completely anonymous, ensuring your
        confidentiality is preserved. Your trust is paramount to us, and we
        remain steadfast in our commitment to upholding the highest standards of
        data safety practices.
      </p>
      <p>
        Your privacy and control over your data are paramount to us. We offer
        these straightforward methods to ensure you have full autonomy over your
        information both locally and on our servers.
      </p>
      <br></br>
      <p>You can delete your data useing one of the two options below.</p>
      <div className="steps">
        <h2>
          <u>Option 1</u>
        </h2>

        <p>
          <b>
            To delete all your data stored locally on your personal device and
            our servers:
          </b>
        </p>
        <ol>
          <li>Open the "Mesa County Safe Routes" App.</li>
          <li>Navigate to the bottom of the settings page.</li>
          <li>Tap on the "Delete All Data" button.</li>
        </ol>
      </div>

      <br></br>
      <br></br>
      <div className="steps">
        <h2>
          <u>Option 2</u>
        </h2>
        <p>
          <b>
            Alternatively, if you do not prefer the above option to delete your
            you can follow these steps below to delete your data from our
            server:
          </b>
        </p>
        <ol>
          <li>
            Copy anonymous unique ID at the bottom of the "Mesa County Safe
            Routes" App's settings page.
          </li>
          <li>Enter your anonymous unique ID below.</li>
          <li>
            Click "Delete Data" to initiate the deletion process for your data
            stored on our servers.
          </li>
        </ol>
        <p>
          <i>
            <b>
              <u>Note:</u>
            </b>{" "}
            This will only delete the data stored on ower servers, <b>not</b>{" "}
            the data stored locally on your device. If data is still stored on
            the device when the app is opened, that data will get synced back to
            our servers.<br></br>Uninstall the app to prevent this
          </i>
        </p>
        <div
          className="card"
          style={{
            justifyContent: "",
          }}
        >
          <TextField
            fullWidth
            id="UUID-field"
            label="UUID"
            variant="outlined"
            color="error"
            value={UUID}
            onChange={(e) => setUUID(e.target.value)}
            focused
          />
          <br></br>
          <Button
            style={{ marginTop: 10, marginBottom: 10 }}
            variant="contained"
            color="error"
            onClick={() => {
              setUUID("");
              setOpen(true);
              setTimeout(() => setOpen(false), 5000);
            }}
          >
            Delete Data
          </Button>
          <Box sx={{ width: "100%" }}>
            <Collapse in={open}>
              <Alert variant="filled" severity="success">
                This is a filled success Alert.
              </Alert>
            </Collapse>
          </Box>
        </div>
      </div>
    </>
  );
}

export default App;
