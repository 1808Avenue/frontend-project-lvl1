#!/usr/bin/env node
import { brainGamesCore } from '../index.js';
import { rulesOfGame, arrayQuestions, arrayAnswers } from '../src/games/game-even.js';

brainGamesCore(rulesOfGame, arrayQuestions, arrayAnswers);
