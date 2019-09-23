import React from 'react';
import { render } from 'react-dom';
import Game from './game';
import '../styles/reset.scss';
import '../styles/main.scss';
import './resize';

const e = React.createElement;

const gameContainer = document.querySelector('#game');
render(<Game />, gameContainer);
