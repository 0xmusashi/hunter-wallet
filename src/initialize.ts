import { registerWallet } from './register.js';
import { HunterXHunterWallet } from './wallet.js';
import type { HunterXHunter } from './window.js';

export function initialize(hunterXHunter: HunterXHunter): void {
    registerWallet(new HunterXHunterWallet(hunterXHunter));
}
