import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  width: 95vw;
  height: 100%;
`;

export const LeftContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 100vh;
  padding: 1rem 0 1rem 1rem;
`;

export const Icons = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IconsCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
`;

export const IconsTitle = styled(motion.div)`
  margin-bottom: 1rem;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  color: rgba(80, 80, 80, 0.8);
`;

export const IconsList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
`;

export const IconImg = styled(motion.img)`
  width: 3rem;
`;

export const Equipment = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin-top: 3rem;
`;

export const Exhibit = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Etitle = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(80, 80, 80, 0.8);
`;

export const Eimg = styled(motion.img)`
  height: 20vh;
  object-fit: cover;
`;
