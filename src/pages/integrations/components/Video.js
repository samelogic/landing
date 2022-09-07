import React from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";

import {
  Section,
  Box,
  Title,
  Text,
  Button,
  List,
} from "../../../components/Core";

import imgCase1 from "../../../assets/image/jpeg/case-details--details.jpg";

const VideoContainer = styled(Box)`
  border-radius: 10px;
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

const Video = ({ videoUrl }) => (
  <Container>
    <VideoContainer className="text-center" pb={["50px", null, "75px"]}>
      <ReactPlayer
        url={videoUrl}
        width="100%"
        height="100%"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </VideoContainer>
  </Container>
);

export default Video;
