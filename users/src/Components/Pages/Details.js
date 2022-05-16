import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import "./Details.css";

const Details = () => {
  return (
    <div className="container mt-4">
      <h1 style={{ fontWeight: 400 }}>Javascript course</h1>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <div className="row">
            <div className="left_view col-lg-6 col-md-6 col-12 ">
              <h3 className="mt-3" style={{ fontWeight: 400 }}>
                Trainer name:<span>Roshan</span>
              </h3>
              <p className="mt-3" style={{ fontWeight: 400 }}>
                Date(s): <span>12 to 14</span>
              </p>
              <p className="mt-3" style={{ fontWeight: 400 }}>
                Start time: <span>11am</span>
              </p>
              <p className="mt-3" style={{ fontWeight: 400 }}>
                End time: <span>2pm</span>
              </p>
              <p className="mt-3" style={{ fontWeight: 400 }}>
                Fee Amount: <span>300rs</span>
              </p>
              <p className="mt-3" style={{ fontWeight: 400 }}>
                Discount amount: <span>50</span>
              </p>
              <p className="mt-3" style={{ fontWeight: 400 }}>
                batch size: <span>20</span>
              </p>
            </div>
            <div className="right_view col-lg-6 col-md-6 col-12">
              <button className="btn btn-primary mx-2">
                <i className="fas fa-pen"></i>
              </button>
              <button className="btn btn-danger">
                <i className="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
