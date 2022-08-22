#!/usr/bin/env node
import { brainGamesCore } from '../index.js';
import { rulesOfGame, arrayQuestions, arrayAnswers } from '../src/games/game-progression.js';

brainGamesCore(rulesOfGame, arrayQuestions, arrayAnswers);
