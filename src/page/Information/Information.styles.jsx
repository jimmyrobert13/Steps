import Styled from "styled-components";

export const Title = Styled.h1`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;

  height: 48px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 48px;

  color: rgba(255, 255, 255, 0.8);
`;

export const SubTitle = Styled.h1`
  width: 30%;
  height: 24px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;

  color: #fffff;
`;

export const Rows = Styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  align-items: center;
  margin-bottom: 10px;
`;

export const Container = Styled.div`
  width: 70%;
  background: #0A131A;
  border-radius: 20px;
  padding: 10px 0 0 10px;
  height: 44px;
  color: white;
`;
