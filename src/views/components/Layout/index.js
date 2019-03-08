import React from 'react';
import { any } from 'prop-types';
import { Body, Container, Navbar } from './styled';

export const Layout = ({ children }) => (
    <Container>
        <Navbar>
            Dogs
        </Navbar>
        <Body>
            { children }
        </Body>
    </Container>
);

Layout.propTypes = {
    children: any
};

Layout.displayName = 'Layout';
