import { Button, Grid } from "@material-ui/core";
import React from "react";

const Pay: React.FC = () => {
  return (
    <div className="pay-body">
      <div className="pay-body-text">
      {/* <Grid container spacing={1} direction="row" justify="flex-end">
        <Button variant="contained" href="https://www.venmo.com/evanextreme">Venmo</Button>
      </Grid> */}
      <h3>Venmo is <a href="https://www.venmo.com/evanextreme">@evanextreme</a></h3>
      <h3>Message me for Apple Pay info</h3>
      </div>
    </div>
  );
};

export default Pay;
