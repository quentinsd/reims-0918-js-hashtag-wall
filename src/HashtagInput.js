import React from "react";
import "./HashtagInput.css";
import { InputGroup, InputGroupAddon, Input, Button } from "reactstrap";
import Loading from "./Loading";

const HashtagInput = props => {
  return (
    <div>
      <form>
        <InputGroup size="lg">
          <InputGroupAddon addonType="prepend">#</InputGroupAddon>
          <Input
            className="sizeInput"
            value={props.title}
            placeholder="Your Tag !"
            onChange={props.onInputContent}
            type="text"
            onKeyPress={event => {
              if (event.key === "Enter") {
                props.getTweet(props.title);
              }
            }}
          />
          {props.title.length > 0 ? (
            <InputGroupAddon addonType="append">
              <Button color="primary" onClick={props.onXClick}>
                X
              </Button>
            </InputGroupAddon>
          ) : (
            ""
          )}
        </InputGroup>
        {!props.startLoad ? (
          <div className="buttonPosition">
            <Button
              id="startBtn"
              href="#titleHashtag"
              className="w-25 mt-5"
              color="primary"
              disabled={props.title.length === 0}
              onClick={() => props.getTweet(props.title)}
            >
              <p className="buttonText">#Start</p>
            </Button>
          </div>
        ) : (
          <div className="d-flex justify-content-center mt-5">
            <Loading />
          </div>
        )}
      </form>
    </div>
  );
};

export default HashtagInput;
