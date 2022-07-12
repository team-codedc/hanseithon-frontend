import styled from "@emotion/styled";

import { Device } from "src/constants";

export const TitleContainer = styled.div`
  width: 100%;
  text-align: center;
  letter-spacing: -0.15rem;
  margin-bottom: 8rem;
  padding-bottom: 5.1rem;
  border-bottom: 1px solid #aaaaaa;

  @media ${Device.tabletL} {
    font-size: 10rem;
  }
  @media ${Device.tabletS} {
    font-size: 6rem;
  }
`;

export const JoinPageWrapper = styled.section`
  margin-top: 10rem;
  padding-bottom: 20rem;

  @media ${Device.tabletL} {
    padding-bottom: 12rem;
  }
`;

export const JoinDeadLineTitle = styled.h1`
  margin: 0 0 -1.5rem 0;
  padding: 0;
  text-align: center;
  font-size: 3.2rem;
  font-weight: 300;
  font-family: "Spectral SC", sans-serif;

  strong {
    font-weight: 800;
    font-family: "Spectral SC", sans-serif;
  }

  @media ${Device.tabletL} {
    font-size: 1.8rem;
  }
`;

export const JoinDeadLineTimeText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 13rem;
  font-weight: 700;
  @media ${Device.tabletL} {
    margin-top: 1rem;
    font-size: 5.5rem;
  }
`;

export const JoinPageSectionContentContainer = styled.div`
  display: flex;
  @media ${Device.tabletL} {
    flex-direction: column;
    padding: 0.5rem;
  }
`;

export const HanseithonJoinContainer = styled.div``;

export const HanseithonTitleText = styled.p`
  margin: 0;
  padding: 0;
  letter-spacing: -0.25rem;
  font-size: 4.6rem;
  font-weight: 300;
  font-family: "Spectral SC", sans-serif;

  @media ${Device.tabletL} {
    font-size: 4rem;
  }
`;

export const HanseithonDescriptionText = styled.div`
  font-size: 2rem;
  font-weight: 300;
  line-height: 3.8rem;
  margin-bottom: 5rem;

  @media ${Device.tabletL} {
    font-size: 1.4rem;
    line-height: 2rem;
  }
`;

export const HanseithonDateText = styled.p`
  font-size: 1.5rem;
  line-height: 3rem;

  @media ${Device.tabletL} {
    font-size: 1.3rem;
    line-height: 2.3rem;
    margin-bottom: -0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding-left: 15rem;

  & > button {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  & > button:not(:last-child) {
    margin-bottom: 1.5rem;
  }

  @media ${Device.tabletL} {
    font-size: 0rem;
    padding-left: 0rem;
    margin-top: 5rem;
  }
`;

export const TeamModalInputContainer = styled.div`
  margin-bottom: 3.6rem;

  & > div:not(:last-child) {
    margin-bottom: 2rem;
  }

  & > div > div:not(:last-child) {
    margin-bottom: 0.7rem;
  }

  & > div > p {
    margin: 0;
  }
`;

export const TeamModalSelectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > div {
    width: 100%;
  }

  & > div:not(:last-child) {
    margin-right: 2rem;
  }
`;
