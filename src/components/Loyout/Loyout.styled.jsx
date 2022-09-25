import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
	padding: 20px;
	border-bottom: 1px solid #fbf9fa3f;
`;

export const NavLinkStyled = styled(NavLink)`
	font-size: 28px;
	font-weight: 600;
	&:first-of-type {
		margin-right: 30px;
	}
	&.active {
		color: #5ffbf1;
	}
`;

export const AppContainer = styled.div`
	/* height: 100vh; */
	min-height: 100vh;
	font-size: 40px;
	color: #fff;
	padding: 50px;
	background-color: #F4A460;
`;