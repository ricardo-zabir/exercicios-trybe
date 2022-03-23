"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const length = __importStar(require("./length"));
const area = __importStar(require("./area"));
const mass = __importStar(require("./mass"));
const volume = __importStar(require("./volume"));
const capacity = __importStar(require("./capacity"));
const readline = __importStar(require("readline-sync"));
const stations = __importStar(require("./enum"));
const arr = [length, area, mass, volume, capacity];
stations.askUser();
const script = readline.questionInt(`Qual conversão deseja ?
1- Comprimento
2- Area
3- Massa
4- Volume
5- Capacidade`);
arr[script - 1].exec();
