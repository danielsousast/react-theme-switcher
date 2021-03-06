import React from 'react';
import { Element } from 'react-scroll';

import {
  Container,
  SectionTitle,
  Row,
  StyledButton,
} from '../../styles/styles';
import {
  Section,
  PlanContainer,
  PlanInfoContainer,
  PlanFooter,
} from './styles';

const Pricing = () => {
  return (
    <Element name="pricing">
      <Section>
        <Container>
          <SectionTitle>
            <h2>Pricing</h2>
            <p>Example Pricing Section, with fake pricing plans</p>
          </SectionTitle>
          <Row>
            <PlanContainer>
              <PlanInfoContainer>
                <p>Monthly</p>
                <h4>Standard</h4>
                <h1>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(10.0)}
                </h1>
                <ul>
                  <li>10 pages</li>
                  <li>500 gb storage</li>
                  <li>integrated e-commerce</li>
                  <li>Custom domain free</li>
                  <li>24/7 customer support</li>
                </ul>
                <PlanFooter>
                  <StyledButton>Select Plan</StyledButton>
                </PlanFooter>
              </PlanInfoContainer>
            </PlanContainer>
            <PlanContainer>
              <PlanInfoContainer>
                <p>Monthly</p>
                <h4>Premium</h4>
                <h1>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(50.0)}
                </h1>
                <ul>
                  <li>50 pages</li>
                  <li>700 gb storage</li>
                  <li>integrated e-commerce</li>
                  <li>Custom domain free</li>
                  <li>24/7 customer support</li>
                </ul>
                <PlanFooter>
                  <StyledButton>Select Plan</StyledButton>
                </PlanFooter>
              </PlanInfoContainer>
            </PlanContainer>
            <PlanContainer>
              <PlanInfoContainer>
                <p>Monthly</p>
                <h4>Enterprise</h4>
                <h1>
                  {Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(100.0)}
                </h1>
                <ul>
                  <li>100 pages</li>
                  <li>1000 gb storage</li>
                  <li>integrated e-commerce</li>
                  <li>Custom domain free</li>
                  <li>24/7 customer support</li>
                </ul>
                <PlanFooter>
                  <StyledButton>Select Plan</StyledButton>
                </PlanFooter>
              </PlanInfoContainer>
            </PlanContainer>
          </Row>
        </Container>
      </Section>
    </Element>
  );
};

export default Pricing;
