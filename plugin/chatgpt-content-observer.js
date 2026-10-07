// LoftSims GPT Session Length Tracker Plugin v0.2.0
// Runs in a ChatGPT page via a browser-extension content script.
// It observes customer-visible text only. It does not read hidden provider meters,
// intercept network traffic, or manufacture provider timestamps.
(()=>{"use strict";
const patterns=[/usage limit/i,/reached.{0,40}limit/i,/limit.{0,40}reached/i,/wait.{0,60}usage.{0,30}reset/i,/usage.{0,30}reset/i];
let last="";
function visibleText(){return document.body?document.body.innerText:""}
function scan(){const text=visibleText();for(const p of patterns){const m=text.match(p);if(m){const evidence=m[0];if(evidence===last)return;last=evidence;window.postMessage({loftsims_plugin:"GPT_SESSION_LENGTH_TRACKER",type:"RESTRICTION_OBSERVED",provider_visible_text:evidence,provider_url:location.href},"*");return}}}
window.postMessage({loftsims_plugin:"GPT_SESSION_LENGTH_TRACKER",type:"PLUGIN_CONNECTED"},"*");
new MutationObserver(scan).observe(document.documentElement,{subtree:true,childList:true,characterData:true});scan();
})();