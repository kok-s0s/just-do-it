import { motion } from "framer-motion";
import styled from "styled-components";

export const InfoScreen = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 300px;
  padding: 1rem;
  background-color: #fffffe;
`;

export const GithubInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const GithubInfoImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 50%;
`;

export const GithubInfoText = styled.div`
  width: 100%;
`;

export const FontStyle = styled.div`
  margin-bottom: 0.7rem;
  font-size: 21px;
  letter-spacing: 1px;
  color: #7a7f86;
`;

export const UserName = styled(FontStyle)`
  margin: 0.5rem 0 0.6rem 0.5rem;
  font-size: 22px;
`;

export const Location = styled(FontStyle)`
  line-height: 20px;
`;

export const Blog = styled(FontStyle)`
  line-height: 20px;
`;

export const InfoFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const OtherInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  & > div:first-child {
    margin-bottom: 1rem;
  }
`;

export const ActionButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem 0 1rem;
`;

export const Icon = styled(motion.div)`
  display: flex;
  font-size: 2rem;
  color: rgba(80, 80, 80, 0.4);
  cursor: pointer;
`;
