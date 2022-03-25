import styled from 'styled-components'

export const Container = styled.main`
    margin: 0 auto;
    padding: 2.5rem 1rem;

    th{
        width:100%;
        color: var(--text-body);
        font-weight:400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
    }

    td{
        padding: 1rem 2rem;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;
    }

    &:first-child{
        color: var(--text-title);
    }
`;