#!/usr/bin/env node

import gameBody from '../src/index.js';
import task from '../games/progression.js';

const descrption = 'What number is missing in the progression?';

gameBody(descrption, task);
