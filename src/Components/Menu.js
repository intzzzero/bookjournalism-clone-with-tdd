import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { menuItems } from '../config';

const Menu = ({ menuOpenToggle }) => {
	// const [ menuList, setMenuList ] = useState({});

	// useEffect(() => {
	// 	fetch('http://my-json-server.typicode.com/codeameba/mockdata/menuitems')
	// 		.then(res => res.json())
	// 		.then(res => setMenuList({ ...res }));
	// }, []);

	return (
		<MenuContainer data-testid='Menu'>
			<AiOutlineClose className='closeIcon' data-testid='closeIcon' onClick={menuOpenToggle} />
			<h4>북저널리즘</h4>

			<div>
				<ul>{menuItems.bookjournalism.map((item, idx) => <li key={item + idx}>{item}</li>)}</ul>
			</div>
			<h4>뉴스</h4>

			<div>
				<ul>{menuItems.news.map((item, idx) => <li key={item + idx}>{item}</li>)}</ul>
			</div>
			<h4>더 보기</h4>

			<div>
				<ul>{menuItems.more.map((item, idx) => <li key={item + idx}>{item}</li>)}</ul>
			</div>
		</MenuContainer>
	);
};

const MenuSlideAnimation = keyframes`
	0% {
		left: -400px;
		opacity: 0;
	}
	100% {
		left: 0;
		opacity: 1;
	}
`;

const MenuContainer = styled.section`
	width: 310px;
	height: 100vh;
	position: fixed;
	z-index: 20;
	background-color: #fff;
	border-right: 1px solid rgba(0, 0, 0, 1);
	animation: ${MenuSlideAnimation} .3s ease-in-out;
	overflow: auto;

	.closeIcon {
		font-size: 25px;
		margin-left: 30px;
		margin-top: 20px;
		cursor: pointer;
		transition: 0.3s ease-in-out;

		&:hover {
			color: #0166ff;
		}
	}

	h4 {
		font-size: 16.5px;
		margin-left: 30px;
		margin-top: 30px;
		cursor: pointer;
		font-family: serif;
		&:hover {
			color: #0166ff;
		}
	}

	div {
		max-height: 25vh;
		border-top: 1px solid rgba(0, 0, 0, 1);
		font-family: serif;

		ul {
			font-size: 13.5px;
			font-weight: 400;
			position: relative;
			right: 10px;
			display: flex;
			flex-wrap: wrap;

			li {
				list-style: none;
				margin-bottom: 20px;
				width: 50%;
				cursor: pointer;
				&:hover {
					color: #0166ff;
				}
			}
		}
	}
`;

export default Menu;
