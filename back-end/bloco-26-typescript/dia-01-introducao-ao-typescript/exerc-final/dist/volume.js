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
exports.exec = void 0;
const readline = __importStar(require("readline-sync"));
const metrics = ['km3', 'hm3', 'dam3', 'm3', 'dm3', 'cm3', 'mm3'];
const values = [1000, 100, 10, 1, 0.1, 0.01, 0.0001];
const exec = () => {
    const num = readline.questionFloat('Qual o valor ?');
    const base_unit = readline.question('Qual a unidade base ?');
    const conversion_unit = readline.question('Qual a unidade para conversão ?');
    const result = covert(num, base_unit, conversion_unit);
    console.log(`${num}${base_unit} é igual a ${result}${conversion_unit}`);
};
exports.exec = exec;
const covert = (valor, base_unit, conversion_unit) => {
    if (!metrics.some((metric) => metric === base_unit)) {
        throw new Error('Unidade de base inválida');
    }
    if (!metrics.some((metric) => metric === conversion_unit)) {
        throw new Error('Unidade de conversão inválida');
    }
    const valueInCubicMeters = values[metrics.indexOf(base_unit)] * valor;
    return valueInCubicMeters / values[metrics.indexOf(conversion_unit)];
};