#!/usr/bin/env node

import gameBody from '../src/index.js';
import task from '../games/calc.js';

const descrption = 'What is the result of the expression?';

gameBody(descrption, task);
