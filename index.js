"use strict";

import { log } from "console";
import express from "express";
import generateName from "sillyname";

console.log("Whaddyasaythere!");

const myName = generateName();

console.log(`I am the great ${myName}`);
