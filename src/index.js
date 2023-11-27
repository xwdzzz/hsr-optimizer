import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { Constants } from './lib/constants'
import { OcrParser } from './lib/ocrParser'
import { DataParser } from './lib/dataParser'
import { OptimizerTabController } from './lib/optimizerTabController'
import { DB } from './lib/db'
import { CharacterStats } from './lib/characterStats'
import { GPUOptimizer } from './lib/gpuOptimizer'
import { Utils } from './lib/utils'
import { Assets } from './lib/assets'
import { RelicAugmenter } from './lib/relicAugmenter'
import { StateEditor } from './lib/stateEditor'
import { StatCalculator } from './lib/statCalculator'
import { ThreadWorker } from "./lib/threadWorker";
import { Gradient } from "./lib/gradient";
import { SaveState } from "./lib/saveState";
import { RelicFilters } from "./lib/relicFilters";
import { Renderer } from "./lib/renderer";
import { Message } from "./lib/message";
import { Hint } from "./lib/hint";
import { CharacterConverter } from "./lib/characterConverter";
window.Constants = Constants;
window.OcrParser = OcrParser;
window.DataParser = DataParser;
window.OptimizerTabController = OptimizerTabController;
window.DB = DB;
window.CharacterStats = CharacterStats;
window.GPUOptimizer = GPUOptimizer;
window.Utils = Utils;
window.Assets = Assets;
window.RelicAugmenter = RelicAugmenter;
window.StateEditor = StateEditor;
window.StatCalculator = StatCalculator;
window.ThreadWorker = ThreadWorker;
window.Gradient = Gradient;
window.SaveState = SaveState;
window.RelicFilters = RelicFilters;
window.Renderer = Renderer;
window.Message = Message;
window.Hint = Hint;
window.CharacterConverter = CharacterConverter

const workerpool = require('workerpool');
window.CPUs = workerpool.cpus
window.ThreadPool = workerpool.pool();

console.log('Data parser', DataParser.parse());
SaveState.load()

document.addEventListener("DOMContentLoaded", function(event) { 
  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});
