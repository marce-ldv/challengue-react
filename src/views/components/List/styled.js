import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Item = styled(Link)`
    background-color: #FFFFFF;
    border-bottom: thin solid #EEEEEE;
    color: #000000;
    display: block;
    font-size: 1rem;
    padding: 1rem 2rem;
    text-decoration: none;
    text-transform: capitalize;

    &:hover {
        background-color: #EEEEEE;
        cursor: pointer;
    }
`;
