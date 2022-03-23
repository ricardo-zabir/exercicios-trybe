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
exports.askUser = void 0;
const readline = __importStar(require("readline-sync"));
var months;
(function (months) {
    months[months["janeiro"] = 1] = "janeiro";
    months[months["fevereiro"] = 2] = "fevereiro";
    months[months["marco"] = 3] = "marco";
    months[months["abril"] = 4] = "abril";
    months[months["maio"] = 5] = "maio";
    months[months["junho"] = 6] = "junho";
    months[months["julho"] = 7] = "julho";
    months[months["agosto"] = 8] = "agosto";
    months[months["setembro"] = 9] = "setembro";
    months[months["outubro"] = 10] = "outubro";
    months[months["novembro"] = 11] = "novembro";
    months[months["dezembro"] = 12] = "dezembro";
})(months || (months = {}));
var stations;
(function (stations) {
    stations["winter"] = "Inverno";
    stations["summer"] = "Ver\u00E3o";
    stations["fall"] = "Outuno";
    stations["spring"] = "Primavera";
})(stations || (stations = {}));
const askUser = () => {
    const month = readline.question('Qual mês deseja verificar ?');
    const noOfMonth = months[month];
    if (noOfMonth === 1 || noOfMonth === 2)
        console.log(stations.summer);
    if (noOfMonth === 3)
        console.log(`${stations.summer} e ${stations.fall}`);
    if (noOfMonth === 4 || noOfMonth === 5)
        console.log(stations.fall);
    if (noOfMonth === 6)
        console.log(`${stations.fall} e ${stations.winter}`);
    if (noOfMonth === 7 || noOfMonth === 8)
        console.log(stations.winter);
    if (noOfMonth === 9)
        console.log(`${stations.winter} e ${stations.spring}`);
    if (noOfMonth === 10 || noOfMonth === 11)
        console.log(stations.spring);
    if (noOfMonth === 12)
        console.log(`${stations.spring} e ${stations.summer}`);
};
exports.askUser = askUser;
