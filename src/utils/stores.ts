import { type Writable, writable } from "svelte/store";
import type { Errors, Subnet, NetworkInfo, Host } from "./types";

const errors: Writable<Errors> = writable({});

const ip: Writable<string> = writable("172.16.0.0");
const cidrMask: Writable<string> = writable("12");
const subnets: Writable<string> = writable("3");
const parsedSubnets: Writable<number> = writable(3);
const hosts: Writable<Host[]> = writable([]);

const generatedSubnets: Writable<Subnet[]> = writable([]);
const networkInfo: Writable<NetworkInfo> = writable({} as NetworkInfo);

export {
  errors,
  ip,
  cidrMask,
  subnets,
  parsedSubnets,
  hosts,
  generatedSubnets,
  networkInfo,
};
