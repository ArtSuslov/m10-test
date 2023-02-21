import process from 'process'
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { utils, signer, client, collections } from "m10-sdk";
import { m10 } from  "m10-sdk/protobufs";

window.process = process

const LEDGER_URL = "...";
const OPERATOR_KEY = "...";
const ledgerClient = new client.LedgerClient(LEDGER_URL, true);
const operatorSigner = signer.CryptoSigner.getSignerFromPkcs8V2(OPERATOR_KEY);

createApp(App).mount('#app')
