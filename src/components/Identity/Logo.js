import React from "react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

const Logo = (props) => {
  const Logo = styled.div`
    width: 60px;
    height: 60px;
    background-image: url("/img/Identity/Logo/Logo@2x.png");
    background-size: contain;
    border-radius: 30px;
    cursor: grab;
  `;

  return (
    <motion.div
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <Logo />
    </motion.div>
  );
};

export default Logo;
