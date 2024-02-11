#!/usr/bin/env node

import gameBody from '../src/index.js';
import task from '../games/prime.js';

const descrption = 'Answer "yes" if given number is prime. Otherwise answer "no"';

gameBody(descrption, task);
