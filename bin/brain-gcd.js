#!/usr/bin/env node

import gameBody from '../src/index.js';
import task from '../games/gcd.js';

const descrption = 'Find the greatest common divisor of given numbers.';

gameBody(descrption, task);
