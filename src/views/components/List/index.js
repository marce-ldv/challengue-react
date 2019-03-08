import { Item } from './styled';
import React from 'react';
import { string } from 'prop-types';

export const List = ({ label }) => (
    <Item
        to={{
            pathname: `/details/${ label }`,
            state: label
        }}
    >
        { label }
    </Item>
);

List.propTypes = {
    label: string.isRequired
};

List.displayName = 'List';
