import React from "react";
import styled from "styled-components";

const NavTab = ({ icon, text, badge }) => {
  icon = "./imgs/" + icon;
  if (badge !== undefined) {
    badge = "./imgs/" + badge;
  }
  return (
    <Container>
      <IconContainer>
        <Icon src={icon} />
        {badge && <Badge src={badge} />}
      </IconContainer>

      <Text>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  width: 251px;
  height: 50px;
  display: flex;
  align-items: center;
  color: #d9d9d9;
  gap: 20px;
`;

const IconContainer = styled.div`
  display: flex;
  position: relative;
`;

const Icon = styled.img`
  padding-left: 13px;
`;

const Text = styled.span`
  font-size: 19px;
  font-weight: 700;
`;

const Badge = styled.img`
  position: absolute;
  left: 24px;
  bottom: 12px;
`;

export default NavTab;
