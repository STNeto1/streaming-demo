import { query } from "@solidjs/router";
import { setTimeout } from "node:timers/promises";

export const fastData = query(async () => {
	await setTimeout(200);
	return {
		name: "fast",
	};
}, "fast");

export const slowData = query(async () => {
	await setTimeout(500);
	return {
		name: "slow",
	};
}, "slow");

export const reallySlowData = query(async () => {
	await setTimeout(1000);
	return {
		name: "really slow",
	};
}, "really-slow");
