#!/usr/bin/env node
import gameBody from '../src/index.js';
import task from '../games/even.js';

const descrption = 'Answer "yes" if the number is even, otherwise answer "no".';

gameBody(descrption, task);
