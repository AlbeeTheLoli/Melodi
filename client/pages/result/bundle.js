(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Tone=e():t.Tone=e()}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function s(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}return s.m=t,s.c=e,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(n,i,function(e){return t[e]}.bind(null,i));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=9)}([function(t,e,s){!function(t,e,s,n){"use strict";function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=i(e),r=i(s),a=i(n),c=function(t,e,s){return{endTime:e,insertTime:s,type:"exponentialRampToValue",value:t}},h=function(t,e,s){return{endTime:e,insertTime:s,type:"linearRampToValue",value:t}},u=function(t,e){return{startTime:e,type:"setValue",value:t}},l=function(t,e,s){return{duration:s,startTime:e,type:"setValueCurve",values:t}},p=function(t,e,s){var n=s.startTime,i=s.target,o=s.timeConstant;return i+(e-i)*Math.exp((n-t)/o)},d=function(t){return"exponentialRampToValue"===t.type},f=function(t){return"linearRampToValue"===t.type},_=function(t){return d(t)||f(t)},m=function(t){return"setValue"===t.type},g=function(t){return"setValueCurve"===t.type},v=function t(e,s,n,i){var o=e[s];return void 0===o?i:_(o)||m(o)?o.value:g(o)?o.values[o.values.length-1]:p(n,t(e,s-1,o.startTime,i),o)},y=function(t,e,s,n,i){return void 0===s?[n.insertTime,i]:_(s)?[s.endTime,s.value]:m(s)?[s.startTime,s.value]:g(s)?[s.startTime+s.duration,s.values[s.values.length-1]]:[s.startTime,v(t,e-1,s.startTime,i)]},x=function(t){return"cancelAndHold"===t.type},w=function(t){return"cancelScheduledValues"===t.type},b=function(t){return x(t)||w(t)?t.cancelTime:d(t)||f(t)?t.endTime:t.startTime},T=function(t,e,s,n){var i=n.endTime,o=n.value;return s===o?o:0<s&&0<o||s<0&&o<0?s*Math.pow(o/s,(t-e)/(i-e)):0},S=function(t,e,s,n){return s+(t-e)/(n.endTime-e)*(n.value-s)},k=function(t,e){var s=e.duration,n=e.startTime,i=e.values;return function(t,e){var s=Math.floor(e),n=Math.ceil(e);return s===n?t[s]:(1-(e-s))*t[s]+(1-(n-e))*t[n]}(i,(t-n)/s*(i.length-1))},C=function(t){return"setTarget"===t.type},A=function(){function t(e){r.default(this,t),this._automationEvents=[],this._currenTime=0,this._defaultValue=e}return a.default(t,[{key:Symbol.iterator,value:function(){return this._automationEvents[Symbol.iterator]()}},{key:"add",value:function(t){var e=b(t);if(x(t)||w(t)){var s=this._automationEvents.findIndex((function(s){return w(t)&&g(s)?s.startTime+s.duration>=e:b(s)>=e})),n=this._automationEvents[s];if(-1!==s&&(this._automationEvents=this._automationEvents.slice(0,s)),x(t)){var i=this._automationEvents[this._automationEvents.length-1];if(void 0!==n&&_(n)){if(C(i))throw new Error("The internal list is malformed.");var o=g(i)?i.startTime+i.duration:b(i),r=g(i)?i.values[i.values.length-1]:i.value,a=d(n)?T(e,o,r,n):S(e,o,r,n),p=d(n)?c(a,e,this._currenTime):h(a,e,this._currenTime);this._automationEvents.push(p)}void 0!==i&&C(i)&&this._automationEvents.push(u(this.getValue(e),e)),void 0!==i&&g(i)&&i.startTime+i.duration>e&&(this._automationEvents[this._automationEvents.length-1]=l(new Float32Array([6,7]),i.startTime,e-i.startTime))}}else{var m=this._automationEvents.findIndex((function(t){return b(t)>e})),v=-1===m?this._automationEvents[this._automationEvents.length-1]:this._automationEvents[m-1];if(void 0!==v&&g(v)&&b(v)+v.duration>e)return!1;var y=d(t)?c(t.value,t.endTime,this._currenTime):f(t)?h(t.value,e,this._currenTime):t;if(-1===m)this._automationEvents.push(y);else{if(g(t)&&e+t.duration>b(this._automationEvents[m]))return!1;this._automationEvents.splice(m,0,y)}}return!0}},{key:"flush",value:function(t){var e=this._automationEvents.findIndex((function(e){return b(e)>t}));if(e>1){var s=this._automationEvents.slice(e-1),n=s[0];C(n)&&s.unshift(u(v(this._automationEvents,e-2,n.startTime,this._defaultValue),n.startTime)),this._automationEvents=s}}},{key:"getValue",value:function(t){if(0===this._automationEvents.length)return this._defaultValue;var e=this._automationEvents[this._automationEvents.length-1],s=this._automationEvents.findIndex((function(e){return b(e)>t})),n=this._automationEvents[s],i=b(e)<=t?e:this._automationEvents[s-1];if(void 0!==i&&C(i)&&(void 0===n||!_(n)||n.insertTime>t))return p(t,v(this._automationEvents,s-2,i.startTime,this._defaultValue),i);if(void 0!==i&&m(i)&&(void 0===n||!_(n)))return i.value;if(void 0!==i&&g(i)&&(void 0===n||!_(n)||i.startTime+i.duration>t))return t<i.startTime+i.duration?k(t,i):i.values[i.values.length-1];if(void 0!==i&&_(i)&&(void 0===n||!_(n)))return i.value;if(void 0!==n&&d(n)){var r=y(this._automationEvents,s-1,i,n,this._defaultValue),a=o.default(r,2),c=a[0],h=a[1];return T(t,c,h,n)}if(void 0!==n&&f(n)){var u=y(this._automationEvents,s-1,i,n,this._defaultValue),l=o.default(u,2),x=l[0],w=l[1];return S(t,x,w,n)}return this._defaultValue}}]),t}();t.AutomationEventList=A,t.createCancelAndHoldAutomationEvent=function(t){return{cancelTime:t,type:"cancelAndHold"}},t.createCancelScheduledValuesAutomationEvent=function(t){return{cancelTime:t,type:"cancelScheduledValues"}},t.createExponentialRampToValueAutomationEvent=function(t,e){return{endTime:e,type:"exponentialRampToValue",value:t}},t.createLinearRampToValueAutomationEvent=function(t,e){return{endTime:e,type:"linearRampToValue",value:t}},t.createSetTargetAutomationEvent=function(t,e,s){return{startTime:e,target:t,timeConstant:s,type:"setTarget"}},t.createSetValueAutomationEvent=u,t.createSetValueCurveAutomationEvent=l,Object.defineProperty(t,"__esModule",{value:!0})}(e,s(1),s(7),s(8))},function(t,e,s){var n=s(2),i=s(3),o=s(4),r=s(6);t.exports=function(t,e){return n(t)||i(t,e)||o(t,e)||r()}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,i=!1,o=void 0;try{for(var r,a=t[Symbol.iterator]();!(n=(r=a.next()).done)&&(s.push(r.value),!e||s.length!==e);n=!0);}catch(t){i=!0,o=t}finally{try{n||null==a.return||a.return()}finally{if(i)throw o}}return s}}},function(t,e,s){var n=s(5);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);return"Object"===s&&t.constructor&&(s=t.constructor.name),"Map"===s||"Set"===s?Array.from(t):"Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s)?n(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=t[s];return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function s(t,e){for(var s=0;s<e.length;s++){var n=e[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}},function(t,e,s){"use strict";s.r(e),s.d(e,"getContext",(function(){return Ji})),s.d(e,"setContext",(function(){return Ki})),s.d(e,"Clock",(function(){return qo})),s.d(e,"Context",(function(){return Gi})),s.d(e,"BaseContext",(function(){return Wi})),s.d(e,"Delay",(function(){return Fo})),s.d(e,"Gain",(function(){return ko})),s.d(e,"Offline",(function(){return Io})),s.d(e,"OfflineContext",(function(){return Yi})),s.d(e,"Param",(function(){return xo})),s.d(e,"ToneAudioBuffer",(function(){return Xi})),s.d(e,"ToneAudioBuffers",(function(){return Vo})),s.d(e,"ToneAudioNode",(function(){return wo})),s.d(e,"connectSeries",(function(){return bo})),s.d(e,"connect",(function(){return To})),s.d(e,"disconnect",(function(){return So})),s.d(e,"FrequencyClass",(function(){return lo})),s.d(e,"Frequency",(function(){return _o})),s.d(e,"MidiClass",(function(){return No})),s.d(e,"Midi",(function(){return Po})),s.d(e,"TimeClass",(function(){return ho})),s.d(e,"Time",(function(){return uo})),s.d(e,"TicksClass",(function(){return jo})),s.d(e,"Ticks",(function(){return Lo})),s.d(e,"TransportTimeClass",(function(){return mo})),s.d(e,"TransportTime",(function(){return go})),s.d(e,"Emitter",(function(){return Bi})),s.d(e,"IntervalTimeline",(function(){return Bo})),s.d(e,"StateTimeline",(function(){return yo})),s.d(e,"Timeline",(function(){return Ni})),s.d(e,"isUndef",(function(){return ai})),s.d(e,"isDefined",(function(){return ci})),s.d(e,"isFunction",(function(){return hi})),s.d(e,"isNumber",(function(){return ui})),s.d(e,"isObject",(function(){return li})),s.d(e,"isBoolean",(function(){return pi})),s.d(e,"isArray",(function(){return di})),s.d(e,"isString",(function(){return fi})),s.d(e,"isNote",(function(){return _i})),s.d(e,"dbToGain",(function(){return eo})),s.d(e,"gainToDb",(function(){return so})),s.d(e,"intervalToFrequencyRatio",(function(){return no})),s.d(e,"ftom",(function(){return oo})),s.d(e,"mtof",(function(){return ao})),s.d(e,"optionsFromArguments",(function(){return Di})),s.d(e,"defaultArg",(function(){return Oi})),s.d(e,"Unit",(function(){return i})),s.d(e,"debug",(function(){return n})),s.d(e,"Noise",(function(){return Jo})),s.d(e,"UserMedia",(function(){return er})),s.d(e,"Oscillator",(function(){return ir})),s.d(e,"AMOscillator",(function(){return hr})),s.d(e,"FMOscillator",(function(){return ur})),s.d(e,"PulseOscillator",(function(){return lr})),s.d(e,"FatOscillator",(function(){return pr})),s.d(e,"PWMOscillator",(function(){return dr})),s.d(e,"OmniOscillator",(function(){return _r})),s.d(e,"ToneOscillatorNode",(function(){return nr})),s.d(e,"LFO",(function(){return yr})),s.d(e,"ToneBufferSource",(function(){return $o})),s.d(e,"Player",(function(){return br})),s.d(e,"Players",(function(){return Tr})),s.d(e,"GrainPlayer",(function(){return Sr})),s.d(e,"Add",(function(){return mr})),s.d(e,"Abs",(function(){return kr})),s.d(e,"AudioToGain",(function(){return ar})),s.d(e,"GainToAudio",(function(){return Cr})),s.d(e,"GreaterThan",(function(){return Mr})),s.d(e,"GreaterThanZero",(function(){return Or})),s.d(e,"Multiply",(function(){return cr})),s.d(e,"Negate",(function(){return Ar})),s.d(e,"Pow",(function(){return Er})),s.d(e,"Signal",(function(){return Do})),s.d(e,"connectSignal",(function(){return Oo})),s.d(e,"Scale",(function(){return gr})),s.d(e,"ScaleExp",(function(){return Rr})),s.d(e,"Subtract",(function(){return Dr})),s.d(e,"SyncedSignal",(function(){return qr})),s.d(e,"WaveShaper",(function(){return rr})),s.d(e,"Zero",(function(){return vr})),s.d(e,"AMSynth",(function(){return zr})),s.d(e,"DuoSynth",(function(){return Qr})),s.d(e,"FMSynth",(function(){return Zr})),s.d(e,"MetalSynth",(function(){return Yr})),s.d(e,"MembraneSynth",(function(){return Hr})),s.d(e,"MonoSynth",(function(){return Ur})),s.d(e,"NoiseSynth",(function(){return $r})),s.d(e,"PluckSynth",(function(){return oa})),s.d(e,"PolySynth",(function(){return ra})),s.d(e,"Sampler",(function(){return aa})),s.d(e,"Synth",(function(){return jr})),s.d(e,"Loop",(function(){return ha})),s.d(e,"Part",(function(){return ua})),s.d(e,"Pattern",(function(){return xa})),s.d(e,"Sequence",(function(){return wa})),s.d(e,"ToneEvent",(function(){return ca})),s.d(e,"AutoFilter",(function(){return ka})),s.d(e,"AutoPanner",(function(){return Aa})),s.d(e,"AutoWah",(function(){return Oa})),s.d(e,"BitCrusher",(function(){return Ma})),s.d(e,"Chebyshev",(function(){return Ra})),s.d(e,"Chorus",(function(){return Na})),s.d(e,"Distortion",(function(){return Pa})),s.d(e,"FeedbackDelay",(function(){return La})),s.d(e,"FrequencyShifter",(function(){return Ba})),s.d(e,"Freeverb",(function(){return Ua})),s.d(e,"JCReverb",(function(){return Ya})),s.d(e,"PingPongDelay",(function(){return $a})),s.d(e,"PitchShift",(function(){return Ja})),s.d(e,"Phaser",(function(){return Ka})),s.d(e,"Reverb",(function(){return tc})),s.d(e,"StereoWidener",(function(){return ic})),s.d(e,"Tremolo",(function(){return oc})),s.d(e,"Vibrato",(function(){return rc})),s.d(e,"Analyser",(function(){return ac})),s.d(e,"Meter",(function(){return hc})),s.d(e,"FFT",(function(){return uc})),s.d(e,"DCMeter",(function(){return lc})),s.d(e,"Waveform",(function(){return pc})),s.d(e,"Follower",(function(){return Da})),s.d(e,"Channel",(function(){return _c})),s.d(e,"CrossFade",(function(){return ba})),s.d(e,"Merge",(function(){return Fa})),s.d(e,"MidSideMerge",(function(){return sc})),s.d(e,"MidSideSplit",(function(){return ec})),s.d(e,"Mono",(function(){return mc})),s.d(e,"MultibandSplit",(function(){return gc})),s.d(e,"Panner",(function(){return Ca})),s.d(e,"Panner3D",(function(){return yc})),s.d(e,"PanVol",(function(){return fc})),s.d(e,"Recorder",(function(){return xc})),s.d(e,"Solo",(function(){return dc})),s.d(e,"Split",(function(){return qa})),s.d(e,"Volume",(function(){return Go})),s.d(e,"Compressor",(function(){return wc})),s.d(e,"Gate",(function(){return bc})),s.d(e,"Limiter",(function(){return Tc})),s.d(e,"MidSideCompressor",(function(){return Sc})),s.d(e,"MultibandCompressor",(function(){return kc})),s.d(e,"AmplitudeEnvelope",(function(){return Pr})),s.d(e,"Envelope",(function(){return Fr})),s.d(e,"FrequencyEnvelope",(function(){return Gr})),s.d(e,"EQ3",(function(){return Cc})),s.d(e,"Filter",(function(){return Wr})),s.d(e,"OnePoleFilter",(function(){return na})),s.d(e,"FeedbackCombFilter",(function(){return sa})),s.d(e,"LowpassCombFilter",(function(){return ia})),s.d(e,"Convolver",(function(){return Ac})),s.d(e,"BiquadFilter",(function(){return Br})),s.d(e,"version",(function(){return o})),s.d(e,"start",(function(){return to})),s.d(e,"supported",(function(){return Kn})),s.d(e,"now",(function(){return Dc})),s.d(e,"immediate",(function(){return Oc})),s.d(e,"Transport",(function(){return Mc})),s.d(e,"getTransport",(function(){return Ec})),s.d(e,"Destination",(function(){return Rc})),s.d(e,"Master",(function(){return qc})),s.d(e,"getDestination",(function(){return Fc})),s.d(e,"Listener",(function(){return Ic})),s.d(e,"getListener",(function(){return Vc})),s.d(e,"Draw",(function(){return Nc})),s.d(e,"getDraw",(function(){return Pc})),s.d(e,"context",(function(){return jc})),s.d(e,"loaded",(function(){return Lc})),s.d(e,"Buffer",(function(){return zc})),s.d(e,"Buffers",(function(){return Bc})),s.d(e,"BufferSource",(function(){return Wc}));var n={};s.r(n),s.d(n,"assert",(function(){return ti})),s.d(n,"assertRange",(function(){return ei})),s.d(n,"assertContextRunning",(function(){return si})),s.d(n,"setLogger",(function(){return ii})),s.d(n,"log",(function(){return oi})),s.d(n,"warn",(function(){return ri}));var i={};s.r(i);const o="14.7.77";var r=s(0);const a=new WeakSet,c=new WeakMap,h=new WeakMap,u=new WeakMap,l=new WeakMap,p=new WeakMap,d=new WeakMap,f=new WeakMap,_=new WeakMap,m=new WeakMap,g={construct:()=>g},v=/^import(?:(?:[\s]+[\w]+|(?:[\s]+[\w]+[\s]*,)?[\s]*\{[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?(?:[\s]*,[\s]*[\w]+(?:[\s]+as[\s]+[\w]+)?)*[\s]*}|(?:[\s]+[\w]+[\s]*,)?[\s]*\*[\s]+as[\s]+[\w]+)[\s]+from)?(?:[\s]*)("([^"\\]|\\.)+"|'([^'\\]|\\.)+')(?:[\s]*);?/,y=(t,e)=>{const s=[];let n=t.replace(/^[\s]+/,""),i=n.match(v);for(;null!==i;){const t=i[1].slice(1,-1),o=i[0].replace(/([\s]+)?;?$/,"").replace(t,new URL(t,e).toString());s.push(o),n=n.slice(i[0].length).replace(/^[\s]+/,""),i=n.match(v)}return[s.join(";"),n]},x=t=>{if(void 0!==t&&!Array.isArray(t))throw new TypeError("The parameterDescriptors property of given value for processorCtor is not an array.")},w=t=>{if(!(t=>{try{new new Proxy(t,g)}catch{return!1}return!0})(t))throw new TypeError("The given value for processorCtor should be a constructor.");if(null===t.prototype||"object"!=typeof t.prototype)throw new TypeError("The given value for processorCtor should have a prototype.")},b=(t,e)=>{const s=t.get(e);if(void 0===s)throw new Error("A value with the given key could not be found.");return s},T=(t,e)=>{const s=Array.from(t).filter(e);if(s.length>1)throw Error("More than one element was found.");if(0===s.length)throw Error("No element was found.");const[n]=s;return t.delete(n),n},S=(t,e,s,n)=>{const i=b(t,e),o=T(i,t=>t[0]===s&&t[1]===n);return 0===i.size&&t.delete(e),o},k=t=>b(d,t),C=t=>{if(a.has(t))throw new Error("The AudioNode is already stored.");a.add(t),k(t).forEach(t=>t(!0))},A=t=>"port"in t,D=t=>{if(!a.has(t))throw new Error("The AudioNode is not stored.");a.delete(t),k(t).forEach(t=>t(!1))},O=(t,e)=>{!A(t)&&e.every(t=>0===t.size)&&D(t)},M={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",fftSize:2048,maxDecibels:-30,minDecibels:-100,smoothingTimeConstant:.8},E=(t,e)=>t.context===e,R=t=>{try{t.copyToChannel(new Float32Array(1),0,-1)}catch{return!1}return!0},q=()=>new DOMException("","IndexSizeError"),F=t=>{var e;t.getChannelData=(e=t.getChannelData,s=>{try{return e.call(t,s)}catch(t){if(12===t.code)throw q();throw t}})},I={numberOfChannels:1},V=-34028234663852886e22,N=-V,P=t=>a.has(t),j={buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1},L=t=>b(c,t),z=t=>b(u,t),B=(t,e)=>{const{activeInputs:s}=L(t);s.forEach(s=>s.forEach(([s])=>{e.includes(t)||B(s,[...e,t])}));const n=(t=>"playbackRate"in t)(t)?[t.playbackRate]:A(t)?Array.from(t.parameters.values()):(t=>"frequency"in t&&"gain"in t)(t)?[t.Q,t.detune,t.frequency,t.gain]:(t=>"offset"in t)(t)?[t.offset]:(t=>!("frequency"in t)&&"gain"in t)(t)?[t.gain]:(t=>"detune"in t&&"frequency"in t)(t)?[t.detune,t.frequency]:(t=>"pan"in t)(t)?[t.pan]:[];for(const t of n){const s=z(t);void 0!==s&&s.activeInputs.forEach(([t])=>B(t,e))}P(t)&&D(t)},W=t=>{B(t.destination,[])},G=t=>void 0===t||"number"==typeof t||"string"==typeof t&&("balanced"===t||"interactive"===t||"playback"===t),U=t=>"context"in t,Q=t=>U(t[0]),Z=(t,e,s,n)=>{for(const e of t)if(s(e)){if(n)return!1;throw Error("The set contains at least one similar element.")}return t.add(e),!0},X=(t,e,[s,n],i)=>{Z(t,[e,s,n],t=>t[0]===e&&t[1]===s,i)},Y=(t,[e,s,n],i)=>{const o=t.get(e);void 0===o?t.set(e,new Set([[s,n]])):Z(o,[s,n],t=>t[0]===s,i)},H=t=>"inputs"in t,$=(t,e,s,n)=>{if(H(e)){const i=e.inputs[n];return t.connect(i,s,0),[i,s,0]}return t.connect(e,s,n),[e,s,n]},J=(t,e,s)=>{for(const n of t)if(n[0]===e&&n[1]===s)return t.delete(n),n;return null},K=(t,e)=>{if(!k(t).delete(e))throw new Error("Missing the expected event listener.")},tt=(t,e,s)=>{const n=b(t,e),i=T(n,t=>t[0]===s);return 0===n.size&&t.delete(e),i},et=(t,e,s,n)=>{H(e)?t.disconnect(e.inputs[n],s,0):t.disconnect(e,s,n)},st=t=>b(h,t),nt=t=>b(l,t),it=t=>f.has(t),ot=t=>!a.has(t),rt=t=>new Promise(e=>{const s=t.createScriptProcessor(256,1,1),n=t.createGain(),i=t.createBuffer(1,2,44100),o=i.getChannelData(0);o[0]=1,o[1]=1;const r=t.createBufferSource();r.buffer=i,r.loop=!0,r.connect(s).connect(t.destination),r.connect(n),r.disconnect(n),s.onaudioprocess=n=>{const i=n.inputBuffer.getChannelData(0);Array.prototype.some.call(i,t=>1===t)?e(!0):e(!1),r.stop(),s.onaudioprocess=null,r.disconnect(s),s.disconnect(t.destination)},r.start()}),at=(t,e)=>{const s=new Map;for(const e of t)for(const t of e){const e=s.get(t);s.set(t,void 0===e?1:e+1)}s.forEach((t,s)=>e(s,t))},ct=t=>"context"in t,ht=(t,e,s,n)=>{const{activeInputs:i,passiveInputs:o}=z(e),{outputs:r}=L(t),a=k(t),c=r=>{const a=st(t),c=nt(e);if(r){const e=tt(o,t,s);X(i,t,e,!1),n||it(t)||a.connect(c,s)}else{const e=((t,e,s)=>T(t,t=>t[0]===e&&t[1]===s))(i,t,s);Y(o,e,!1),n||it(t)||a.disconnect(c,s)}};return!!Z(r,[e,s],t=>t[0]===e&&t[1]===s,!0)&&(a.add(c),P(t)?X(i,t,[s,c],!0):Y(o,[t,s,c],!0),!0)},ut=(t,e,s,n,i)=>{const[o,r]=((t,e,s,n)=>{const{activeInputs:i,passiveInputs:o}=L(e),r=J(i[n],t,s);if(null===r){return[S(o,t,s,n)[2],!1]}return[r[2],!0]})(t,s,n,i);if(null!==o&&(K(t,o),!r||e||it(t)||et(st(t),st(s),n,i)),P(s)){const{activeInputs:t}=L(s);O(s,t)}},lt=(t,e,s,n)=>{const[i,o]=((t,e,s)=>{const{activeInputs:n,passiveInputs:i}=z(e),o=J(n,t,s);if(null===o){return[tt(i,t,s)[1],!1]}return[o[2],!0]})(t,s,n);null!==i&&(K(t,i),!o||e||it(t)||st(t).disconnect(nt(s),n))};class pt{constructor(t){this._map=new Map(t)}get size(){return this._map.size}entries(){return this._map.entries()}forEach(t,e=null){return this._map.forEach((s,n)=>t.call(e,s,n,this))}get(t){return this._map.get(t)}has(t){return this._map.has(t)}keys(){return this._map.keys()}values(){return this._map.values()}}const dt={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:1,numberOfOutputs:1,parameterData:{},processorOptions:{}};function ft(t,e,s,n,i){if("function"==typeof t.copyFromChannel)0===e[s].byteLength&&(e[s]=new Float32Array(128)),t.copyFromChannel(e[s],n,i);else{const o=t.getChannelData(n);if(0===e[s].byteLength)e[s]=o.slice(i,i+128);else{const t=new Float32Array(o.buffer,i*Float32Array.BYTES_PER_ELEMENT,128);e[s].set(t)}}}const _t=(t,e,s,n,i)=>{"function"==typeof t.copyToChannel?0!==e[s].byteLength&&t.copyToChannel(e[s],n,i):0!==e[s].byteLength&&t.getChannelData(n).set(e[s],i)},mt=(t,e)=>{const s=[];for(let n=0;n<t;n+=1){const t=[],i="number"==typeof e?e:e[n];for(let e=0;e<i;e+=1)t.push(new Float32Array(128));s.push(t)}return s},gt=async(t,e,s,n,i,o,r)=>{const a=null===e?128*Math.ceil(t.context.length/128):e.length,c=n.channelCount*n.numberOfInputs,h=i.reduce((t,e)=>t+e,0),u=0===h?null:s.createBuffer(h,a,s.sampleRate);if(void 0===o)throw new Error("Missing the processor constructor.");const l=L(t),p=await((t,e)=>{const s=b(m,t),n=st(e);return b(s,n)})(s,t),d=mt(n.numberOfInputs,n.channelCount),f=mt(n.numberOfOutputs,i),_=Array.from(t.parameters.keys()).reduce((t,e)=>({...t,[e]:new Float32Array(128)}),{});for(let h=0;h<a;h+=128){if(n.numberOfInputs>0&&null!==e)for(let t=0;t<n.numberOfInputs;t+=1)for(let s=0;s<n.channelCount;s+=1)ft(e,d[t],s,s,h);void 0!==o.parameterDescriptors&&null!==e&&o.parameterDescriptors.forEach(({name:t},s)=>{ft(e,_,t,c+s,h)});for(let t=0;t<n.numberOfInputs;t+=1)for(let e=0;e<i[t];e+=1)0===f[t][e].byteLength&&(f[t][e]=new Float32Array(128));try{const t=d.map((t,e)=>0===l.activeInputs[e].size?[]:t),e=r(h/s.sampleRate,s.sampleRate,()=>p.process(t,f,_));if(null!==u)for(let t=0,e=0;t<n.numberOfOutputs;t+=1){for(let s=0;s<i[t];s+=1)_t(u,f[t],s,e+s,h);e+=i[t]}if(!e)break}catch(e){t.dispatchEvent(new ErrorEvent("processorerror",{colno:e.colno,filename:e.filename,lineno:e.lineno,message:e.message}));break}}return u},vt={Q:1,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:350,gain:0,type:"lowpass"},yt={channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6},xt={channelCount:6,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:6},wt={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",offset:1},bt={buffer:null,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",disableNormalization:!1},Tt={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",delayTime:0,maxDelayTime:1},St=(t,e,s)=>{const n=e[s];if(void 0===n)throw t();return n},kt={attack:.003,channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",knee:30,ratio:12,release:.25,threshold:-24},Ct={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",gain:1},At=()=>new DOMException("","InvalidStateError"),Dt=()=>new DOMException("","InvalidAccessError"),Ot={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers"},Mt=(t,e,s,n,i,o,r,a,c,h,u)=>{const l=h.length;let p=a;for(let a=0;a<l;a+=1){let l=s[0]*h[a];for(let e=1;e<i;e+=1){const n=p-e&c-1;l+=s[e]*o[n],l-=t[e]*r[n]}for(let t=i;t<n;t+=1)l+=s[t]*o[p-t&c-1];for(let s=i;s<e;s+=1)l-=t[s]*r[p-s&c-1];o[p]=h[a],r[p]=l,p=p+1&c-1,u[a]=l}return p},Et={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers"},Rt=t=>{const e=new Uint32Array([1179011410,40,1163280727,544501094,16,131073,44100,176400,1048580,1635017060,4,0]);try{const s=t.decodeAudioData(e.buffer,()=>{});return void 0!==s&&(s.catch(()=>{}),!0)}catch{}return!1},qt={numberOfChannels:1},Ft=(t,e,s)=>{const n=e[s];void 0!==n&&n!==t[s]&&(t[s]=n)},It=(t,e)=>{Ft(t,e,"channelCount"),Ft(t,e,"channelCountMode"),Ft(t,e,"channelInterpretation")},Vt=t=>"function"==typeof t.getFloatTimeDomainData,Nt=(t,e,s)=>{const n=e[s];void 0!==n&&n!==t[s].value&&(t[s].value=n)},Pt=t=>{var e;t.start=(e=t.start,(s=0,n=0,i)=>{if("number"==typeof i&&i<0||n<0||s<0)throw new RangeError("The parameters can't be negative.");e.call(t,s,n,i)})},jt=t=>{var e;t.stop=(e=t.stop,(s=0)=>{if(s<0)throw new RangeError("The parameter can't be negative.");e.call(t,s)})},Lt=(t,e)=>null===t?512:Math.max(512,Math.min(16384,Math.pow(2,Math.round(Math.log2(t*e))))),zt=async(t,e)=>new t(await(t=>new Promise((e,s)=>{const{port1:n,port2:i}=new MessageChannel;n.onmessage=({data:t})=>{n.close(),i.close(),e(t)},n.onmessageerror=({data:t})=>{n.close(),i.close(),s(t)},i.postMessage(t)}))(e)),Bt=(t,e)=>{const s=t.createBiquadFilter();return It(s,e),Nt(s,e,"Q"),Nt(s,e,"detune"),Nt(s,e,"frequency"),Nt(s,e,"gain"),Ft(s,e,"type"),s},Wt=(t,e)=>{const s=t.createChannelSplitter(e.numberOfOutputs);return It(s,e),(t=>{const e=t.numberOfOutputs;Object.defineProperty(t,"channelCount",{get:()=>e,set:t=>{if(t!==e)throw At()}}),Object.defineProperty(t,"channelCountMode",{get:()=>"explicit",set:t=>{if("explicit"!==t)throw At()}}),Object.defineProperty(t,"channelInterpretation",{get:()=>"discrete",set:t=>{if("discrete"!==t)throw At()}})})(s),s},Gt=(t,e)=>(t.connect=e.connect.bind(e),t.disconnect=e.disconnect.bind(e),t),Ut=(t,e)=>{const s=t.createDelay(e.maxDelayTime);return It(s,e),Nt(s,e,"delayTime"),s},Qt=(t,e)=>{const s=t.createGain();return It(s,e),Nt(s,e,"gain"),s};function Zt(t,e){const s=e[0]*e[0]+e[1]*e[1];return[(t[0]*e[0]+t[1]*e[1])/s,(t[1]*e[0]-t[0]*e[1])/s]}function Xt(t,e){let s=[0,0];for(let o=t.length-1;o>=0;o-=1)i=e,s=[(n=s)[0]*i[0]-n[1]*i[1],n[0]*i[1]+n[1]*i[0]],s[0]+=t[o];var n,i;return s}const Yt=(t,e,s,n)=>t.createScriptProcessor(e,s,n),Ht=()=>new DOMException("","NotSupportedError"),$t={numberOfChannels:1},Jt={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",detune:0,frequency:440,periodicWave:void 0,type:"sine"},Kt={channelCount:2,channelCountMode:"clamped-max",channelInterpretation:"speakers",coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:1,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1},te={disableNormalization:!1},ee={channelCount:2,channelCountMode:"explicit",channelInterpretation:"speakers",pan:0},se=()=>new DOMException("","UnknownError"),ne={channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",curve:null,oversample:"none"},ie=t=>{if(null===t)return!1;const e=t.length;return e%2!=0?0!==t[Math.floor(e/2)]:t[e/2-1]+t[e/2]!==0},oe=(t,e,s,n)=>{let i=Object.getPrototypeOf(t);for(;!i.hasOwnProperty(e);)i=Object.getPrototypeOf(i);const{get:o,set:r}=Object.getOwnPropertyDescriptor(i,e);Object.defineProperty(t,e,{get:s(o),set:n(r)})},re=(t,e,s)=>{try{t.setValueAtTime(e,s)}catch(n){if(9!==n.code)throw n;re(t,e,s+1e-7)}},ae=t=>{const e=t.createOscillator();try{e.start(-1)}catch(t){return t instanceof RangeError}return!1},ce=t=>{const e=t.createBuffer(1,1,44100),s=t.createBufferSource();s.buffer=e,s.start(),s.stop();try{return s.stop(),!0}catch{return!1}},he=t=>{const e=t.createOscillator();try{e.stop(-1)}catch(t){return t instanceof RangeError}return!1},ue=()=>{try{new DOMException}catch{return!1}return!0},le=()=>new Promise(t=>{const e=new ArrayBuffer(0),{port1:s,port2:n}=new MessageChannel;s.onmessage=({data:e})=>t(null!==e),n.postMessage(e,[e])}),pe=(t,e)=>{const s=e.createGain();t.connect(s);const n=(i=t.disconnect,()=>{i.call(t,s),t.removeEventListener("ended",n)});var i;t.addEventListener("ended",n),Gt(t,s),t.stop=(e=>{let n=!1;return(i=0)=>{if(n)try{e.call(t,i)}catch{s.gain.setValueAtTime(0,i)}else e.call(t,i),n=!0}})(t.stop)},de=(t,e)=>s=>{const n={value:t};return Object.defineProperties(s,{currentTarget:n,target:n}),"function"==typeof e?e.call(t,s):e.handleEvent.call(t,s)},fe=(_e=Z,(t,e,[s,n,i],o)=>{_e(t[n],[e,s,i],t=>t[0]===e&&t[1]===s,o)});var _e;const me=(t=>(e,s,[n,i,o],r)=>{const a=e.get(n);void 0===a?e.set(n,new Set([[i,s,o]])):t(a,[i,s,o],t=>t[0]===i&&t[1]===s,r)})(Z),ge=(t=>(e,s,n,i)=>t(e[i],t=>t[0]===s&&t[1]===n))(T),ve=new WeakMap,ye=(t=>e=>{var s;return null!==(s=t.get(e))&&void 0!==s?s:0})(ve),xe=(we=new Map,be=new WeakMap,(t,e)=>{const s=be.get(t);if(void 0!==s)return s;const n=we.get(t);if(void 0!==n)return n;try{const s=e();return s instanceof Promise?(we.set(t,s),s.catch(()=>!1).then(e=>(we.delete(t),be.set(t,e),e))):(be.set(t,s),s)}catch{return be.set(t,!1),!1}});var we,be;const Te="undefined"==typeof window?null:window,Se=(ke=xe,Ce=q,(t,e)=>{const s=t.createAnalyser();if(It(s,e),!(e.maxDecibels>e.minDecibels))throw Ce();return Ft(s,e,"fftSize"),Ft(s,e,"maxDecibels"),Ft(s,e,"minDecibels"),Ft(s,e,"smoothingTimeConstant"),ke(Vt,()=>Vt(s))||(t=>{t.getFloatTimeDomainData=e=>{const s=new Uint8Array(e.length);t.getByteTimeDomainData(s);const n=Math.max(s.length,t.fftSize);for(let t=0;t<n;t+=1)e[t]=.0078125*(s[t]-128);return e}})(s),s});var ke,Ce;const Ae=(De=L,t=>{const e=De(t);if(null===e.renderer)throw new Error("Missing the renderer of the given AudioNode in the audio graph.");return e.renderer});var De;const Oe=((t,e,s)=>async(n,i,o,r)=>{const a=t(n),c=[...r,n];await Promise.all(a.activeInputs.map((t,r)=>Array.from(t).filter(([t])=>!c.includes(t)).map(async([t,a])=>{const h=e(t),u=await h.render(t,i,c),l=n.context.destination;s(t)||n===l&&s(n)||u.connect(o,a,r)})).reduce((t,e)=>[...t,...e],[]))})(L,Ae,it),Me=(Ee=Se,Re=st,qe=Oe,()=>{const t=new WeakMap;return{render(e,s,n){const i=t.get(s);return void 0!==i?Promise.resolve(i):(async(e,s,n)=>{let i=Re(e);if(!E(i,s)){const t={channelCount:i.channelCount,channelCountMode:i.channelCountMode,channelInterpretation:i.channelInterpretation,fftSize:i.fftSize,maxDecibels:i.maxDecibels,minDecibels:i.minDecibels,smoothingTimeConstant:i.smoothingTimeConstant};i=Ee(s,t)}return t.set(s,i),await qe(e,s,i,n),i})(e,s,n)}}});var Ee,Re,qe;const Fe=(Ie=p,t=>{const e=Ie.get(t);if(void 0===e)throw At();return e});var Ie;const Ve=(t=>null===t?null:t.hasOwnProperty("OfflineAudioContext")?t.OfflineAudioContext:t.hasOwnProperty("webkitOfflineAudioContext")?t.webkitOfflineAudioContext:null)(Te),Ne=(Pe=Ve,t=>null!==Pe&&t instanceof Pe);var Pe;const je=new WeakMap,Le=(ze=de,class{constructor(t){this._nativeEventTarget=t,this._listeners=new WeakMap}addEventListener(t,e,s){if(null!==e){let n=this._listeners.get(e);void 0===n&&(n=ze(this,e),"function"==typeof e&&this._listeners.set(e,n)),this._nativeEventTarget.addEventListener(t,n,s)}}dispatchEvent(t){return this._nativeEventTarget.dispatchEvent(t)}removeEventListener(t,e,s){const n=null===e?void 0:this._listeners.get(e);this._nativeEventTarget.removeEventListener(t,void 0===n?null:n,s)}});var ze;const Be=(t=>null===t?null:t.hasOwnProperty("AudioContext")?t.AudioContext:t.hasOwnProperty("webkitAudioContext")?t.webkitAudioContext:null)(Te),We=(Ge=Be,t=>null!==Ge&&t instanceof Ge);var Ge;const Ue=(t=>e=>null!==t&&"function"==typeof t.AudioNode&&e instanceof t.AudioNode)(Te),Qe=(t=>e=>null!==t&&"function"==typeof t.AudioParam&&e instanceof t.AudioParam)(Te),Ze=((t,e,s,n,i,o,r,a,c,u,l,p,f,_,m)=>class extends u{constructor(e,n,i,o){super(i),this._context=e,this._nativeAudioNode=i;const r=l(e);p(r)&&!0!==s(rt,()=>rt(r))&&(t=>{const e=new Map;var s,n;t.connect=(s=t.connect.bind(t),(t,n=0,i=0)=>{const o=ct(t)?s(t,n,i):s(t,n),r=e.get(t);return void 0===r?e.set(t,[{input:i,output:n}]):r.every(t=>t.input!==i||t.output!==n)&&r.push({input:i,output:n}),o}),t.disconnect=(n=t.disconnect,(s,i,o)=>{if(n.apply(t),void 0===s)e.clear();else if("number"==typeof s)for(const[t,n]of e){const i=n.filter(t=>t.output!==s);0===i.length?e.delete(t):e.set(t,i)}else if(e.has(s))if(void 0===i)e.delete(s);else{const t=e.get(s);if(void 0!==t){const n=t.filter(t=>t.output!==i&&(t.input!==o||void 0===o));0===n.length?e.delete(s):e.set(s,n)}}for(const[s,n]of e)n.forEach(e=>{ct(s)?t.connect(s,e.output,e.input):t.connect(s,e.output)})})})(i),h.set(this,i),d.set(this,new Set),"closed"!==e.state&&n&&C(this),t(this,o,i)}get channelCount(){return this._nativeAudioNode.channelCount}set channelCount(t){this._nativeAudioNode.channelCount=t}get channelCountMode(){return this._nativeAudioNode.channelCountMode}set channelCountMode(t){this._nativeAudioNode.channelCountMode=t}get channelInterpretation(){return this._nativeAudioNode.channelInterpretation}set channelInterpretation(t){this._nativeAudioNode.channelInterpretation=t}get context(){return this._context}get numberOfInputs(){return this._nativeAudioNode.numberOfInputs}get numberOfOutputs(){return this._nativeAudioNode.numberOfOutputs}connect(t,s=0,a=0){if(s<0||s>=this._nativeAudioNode.numberOfOutputs)throw i();const h=l(this._context),u=m(h);if(f(t)||_(t))throw o();if(U(t)){const i=st(t);try{const e=$(this._nativeAudioNode,i,s,a),n=ot(this);(u||n)&&this._nativeAudioNode.disconnect(...e),"closed"!==this.context.state&&!n&&ot(t)&&C(t)}catch(t){if(12===t.code)throw o();throw t}if(e(this,t,s,a,u)){const e=c([this],t);at(e,n(u))}return t}const p=nt(t);if("playbackRate"===p.name)throw r();try{this._nativeAudioNode.connect(p,s),(u||ot(this))&&this._nativeAudioNode.disconnect(p,s)}catch(t){if(12===t.code)throw o();throw t}if(ht(this,t,s,u)){const e=c([this],t);at(e,n(u))}}disconnect(t,e,s){let n;const r=l(this._context),h=m(r);if(void 0===t)n=((t,e)=>{const s=L(t),n=[];for(const i of s.outputs)Q(i)?ut(t,e,...i):lt(t,e,...i),n.push(i[0]);return s.outputs.clear(),n})(this,h);else if("number"==typeof t){if(t<0||t>=this.numberOfOutputs)throw i();n=((t,e,s)=>{const n=L(t),i=[];for(const o of n.outputs)o[1]===s&&(Q(o)?ut(t,e,...o):lt(t,e,...o),i.push(o[0]),n.outputs.delete(o));return i})(this,h,t)}else{if(void 0!==e&&(e<0||e>=this.numberOfOutputs))throw i();if(U(t)&&void 0!==s&&(s<0||s>=t.numberOfInputs))throw i();if(n=((t,e,s,n,i)=>{const o=L(t);return Array.from(o.outputs).filter(t=>!(t[0]!==s||void 0!==n&&t[1]!==n||void 0!==i&&t[2]!==i)).map(s=>(Q(s)?ut(t,e,...s):lt(t,e,...s),o.outputs.delete(s),s[0]))})(this,h,t,e,s),0===n.length)throw o()}for(const t of n){const e=c([this],t);at(e,a)}}})((Xe=c,(t,e,s)=>{const n=[];for(let t=0;t<s.numberOfInputs;t+=1)n.push(new Set);Xe.set(t,{activeInputs:n,outputs:new Set,passiveInputs:new WeakMap,renderer:e})}),((t,e,s,n,i,o,r,a,c,h,u,l,p)=>(d,f,_,m,g)=>{const{activeInputs:v,passiveInputs:y}=o(f),{outputs:x}=o(d),w=a(d),b=o=>{const a=c(f),h=c(d);if(o){const e=S(y,d,_,m);t(v,d,e,!1),g||l(d)||s(h,a,_,m),p(f)&&C(f)}else{const t=n(v,d,_,m);e(y,m,t,!1),g||l(d)||i(h,a,_,m);const s=r(f);0===s?u(f)&&O(f,v):setTimeout(()=>{u(f)&&O(f,v)},1e3*s)}};return!!h(x,[f,_,m],t=>t[0]===f&&t[1]===_&&t[2]===m,!0)&&(w.add(b),u(d)?t(v,d,[_,m,b],!0):e(y,m,[d,_,b],!0),!0)})(fe,me,$,ge,et,L,ye,k,st,Z,P,it,ot),xe,((t,e,s,n,i,o)=>r=>(a,c)=>{const h=t.get(a);if(void 0===h){if(!r&&o(a)){const t=n(a),{outputs:o}=s(a);for(const s of o)if(Q(s)){const i=n(s[0]);e(t,i,s[1],s[2])}else{const e=i(s[0]);t.disconnect(e,s[1])}}t.set(a,c)}else t.set(a,h+c)})(f,et,L,st,nt,P),q,Dt,Ht,((t,e,s,n,i,o,r,a)=>(c,h)=>{const u=e.get(c);if(void 0===u)throw new Error("Missing the expected cycle count.");const l=o(c.context),p=a(l);if(u===h){if(e.delete(c),!p&&r(c)){const e=n(c),{outputs:o}=s(c);for(const s of o)if(Q(s)){const i=n(s[0]);t(e,i,s[1],s[2])}else{const t=i(s[0]);e.connect(t,s[1])}}}else e.set(c,u-h)})($,f,L,st,nt,Fe,P,Ne),((t,e,s)=>function n(i,o){const r=U(o)?o:s(t,o);if((t=>"delayTime"in t)(r))return[];if(i[0]===r)return[i];if(i.includes(r))return[];const{outputs:a}=e(r);return Array.from(a).map(t=>n([...i,r],t[0])).reduce((t,e)=>t.concat(e),[])})(je,L,b),Le,Fe,We,Ue,Qe,Ne);var Xe;const Ye=((t,e,s,n,i,o)=>class extends t{constructor(t,s){const r=i(t),a={...M,...s},c=n(r,a);super(t,!1,c,o(r)?e():null),this._nativeAnalyserNode=c}get fftSize(){return this._nativeAnalyserNode.fftSize}set fftSize(t){this._nativeAnalyserNode.fftSize=t}get frequencyBinCount(){return this._nativeAnalyserNode.frequencyBinCount}get maxDecibels(){return this._nativeAnalyserNode.maxDecibels}set maxDecibels(t){const e=this._nativeAnalyserNode.maxDecibels;if(this._nativeAnalyserNode.maxDecibels=t,!(t>this._nativeAnalyserNode.minDecibels))throw this._nativeAnalyserNode.maxDecibels=e,s()}get minDecibels(){return this._nativeAnalyserNode.minDecibels}set minDecibels(t){const e=this._nativeAnalyserNode.minDecibels;if(this._nativeAnalyserNode.minDecibels=t,!(this._nativeAnalyserNode.maxDecibels>t))throw this._nativeAnalyserNode.minDecibels=e,s()}get smoothingTimeConstant(){return this._nativeAnalyserNode.smoothingTimeConstant}set smoothingTimeConstant(t){this._nativeAnalyserNode.smoothingTimeConstant=t}getByteFrequencyData(t){this._nativeAnalyserNode.getByteFrequencyData(t)}getByteTimeDomainData(t){this._nativeAnalyserNode.getByteTimeDomainData(t)}getFloatFrequencyData(t){this._nativeAnalyserNode.getFloatFrequencyData(t)}getFloatTimeDomainData(t){this._nativeAnalyserNode.getFloatTimeDomainData(t)}})(Ze,Me,q,Se,Fe,Ne),He=new WeakSet,$e=(t=>null===t?null:t.hasOwnProperty("AudioBuffer")?t.AudioBuffer:null)(Te),Je=(Ke=new Uint32Array(1),t=>(Ke[0]=t,Ke[0]));var Ke;const ts=((t,e)=>s=>{s.copyFromChannel=(n,i,o=0)=>{const r=t(o),a=t(i);if(a>=s.numberOfChannels)throw e();const c=s.length,h=s.getChannelData(a),u=n.length;for(let t=r<0?-r:0;t+r<c&&t<u;t+=1)n[t]=h[t+r]},s.copyToChannel=(n,i,o=0)=>{const r=t(o),a=t(i);if(a>=s.numberOfChannels)throw e();const c=s.length,h=s.getChannelData(a),u=n.length;for(let t=r<0?-r:0;t+r<c&&t<u;t+=1)h[t+r]=n[t]}})(Je,q),es=(t=>e=>{e.copyFromChannel=(s=>(n,i,o=0)=>{const r=t(o),a=t(i);if(r<e.length)return s.call(e,n,a,r)})(e.copyFromChannel),e.copyToChannel=(s=>(n,i,o=0)=>{const r=t(o),a=t(i);if(r<e.length)return s.call(e,n,a,r)})(e.copyToChannel)})(Je),ss=((t,e,s,n,i,o,r,a)=>{let c=null;return class h{constructor(h){if(null===i)throw new Error("Missing the native OfflineAudioContext constructor.");const{length:u,numberOfChannels:l,sampleRate:p}={...I,...h};null===c&&(c=new i(1,1,44100));const d=null!==n&&e(o,o)?new n({length:u,numberOfChannels:l,sampleRate:p}):c.createBuffer(l,u,p);if(0===d.numberOfChannels)throw s();return"function"!=typeof d.copyFromChannel?(r(d),F(d)):e(R,()=>R(d))||a(d),t.add(d),d}static[Symbol.hasInstance](e){return null!==e&&"object"==typeof e&&Object.getPrototypeOf(e)===h.prototype||t.has(e)}}})(He,xe,Ht,$e,Ve,(ns=$e,()=>{if(null===ns)return!1;try{new ns({length:1,sampleRate:44100})}catch{return!1}return!0}),ts,es);var ns;const is=(os=Qt,(t,e)=>{const s=os(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});e.connect(s).connect(t.destination);const n=()=>{e.removeEventListener("ended",n),e.disconnect(s),s.disconnect()};e.addEventListener("ended",n)});var os;const rs=((t,e,s)=>async(n,i,o,r)=>{const a=e(n);await Promise.all(Array.from(a.activeInputs).map(async([e,n])=>{const a=t(e),c=await a.render(e,i,r);s(e)||c.connect(o,n)}))})(Ae,z,it),as=(t=>(e,s,n,i)=>t(s,e,n,i))(rs),cs=((t,e,s,n,i,o,r,a,c,h,u)=>(l,p)=>{const d=l.createBufferSource();return It(d,p),Nt(d,p,"playbackRate"),Ft(d,p,"buffer"),Ft(d,p,"loop"),Ft(d,p,"loopEnd"),Ft(d,p,"loopStart"),e(s,()=>s(l))||(t=>{t.start=(e=>{let s=!1;return(n=0,i=0,o)=>{if(s)throw At();e.call(t,n,i,o),s=!0}})(t.start)})(d),e(n,()=>n(l))||c(d),e(i,()=>i(l))||h(d,l),e(o,()=>o(l))||Pt(d),e(r,()=>r(l))||u(d,l),e(a,()=>a(l))||jt(d),t(l,d),d})(is,xe,t=>{const e=t.createBufferSource();e.start();try{e.start()}catch{return!0}return!1},t=>{const e=t.createBufferSource(),s=t.createBuffer(1,1,44100);e.buffer=s;try{e.start(0,1)}catch{return!1}return!0},t=>{const e=t.createBufferSource();e.start();try{e.stop()}catch{return!1}return!0},ae,ce,he,t=>{var e;t.start=(e=t.start,(s=0,n=0,i)=>{const o=t.buffer,r=null===o?n:Math.min(o.duration,n);null!==o&&r>o.duration-.5/t.context.sampleRate?e.call(t,s,0,0):e.call(t,s,r,i)})},(hs=oe,(t,e)=>{const s=e.createBuffer(1,1,44100);null===t.buffer&&(t.buffer=s),hs(t,"buffer",e=>()=>{const n=e.call(t);return n===s?null:n},e=>n=>e.call(t,null===n?s:n))}),pe);var hs;const us=((t,e)=>(s,n,i,o)=>(t(n).replay(i),e(n,s,i,o)))((t=>e=>{const s=t(e);if(null===s.renderer)throw new Error("Missing the renderer of the given AudioParam in the audio graph.");return s.renderer})(z),rs),ls=((t,e,s,n,i)=>()=>{const o=new WeakMap;let r=null,a=null;return{set start(t){r=t},set stop(t){a=t},render(c,h,u){const l=o.get(h);return void 0!==l?Promise.resolve(l):(async(c,h,u)=>{let l=s(c);const p=E(l,h);if(!p){const t={buffer:l.buffer,channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,loop:l.loop,loopEnd:l.loopEnd,loopStart:l.loopStart,playbackRate:l.playbackRate.value};l=e(h,t),null!==r&&l.start(...r),null!==a&&l.stop(a)}return o.set(h,l),p?await t(h,c.playbackRate,l.playbackRate,u):await n(h,c.playbackRate,l.playbackRate,u),await i(c,h,l,u),l})(c,h,u)}}})(as,cs,st,us,Oe),ps=((t,e,s,n,i,o,a,c,h,u,l,p,d)=>(f,_,m,g=null,v=null)=>{const y=new r.AutomationEventList(m.defaultValue),x=_?n(y):null,w={get defaultValue(){return m.defaultValue},get maxValue(){return null===g?m.maxValue:g},get minValue(){return null===v?m.minValue:v},get value(){return m.value},set value(t){m.value=t,w.setValueAtTime(t,f.context.currentTime)},cancelAndHoldAtTime(t){if("function"==typeof m.cancelAndHoldAtTime)null===x&&y.flush(f.context.currentTime),y.add(i(t)),m.cancelAndHoldAtTime(t);else{const e=Array.from(y).pop();null===x&&y.flush(f.context.currentTime),y.add(i(t));const s=Array.from(y).pop();m.cancelScheduledValues(t),e!==s&&void 0!==s&&("exponentialRampToValue"===s.type?m.exponentialRampToValueAtTime(s.value,s.endTime):"linearRampToValue"===s.type?m.linearRampToValueAtTime(s.value,s.endTime):"setValue"===s.type?m.setValueAtTime(s.value,s.startTime):"setValueCurve"===s.type&&m.setValueCurveAtTime(s.values,s.startTime,s.duration))}return w},cancelScheduledValues:t=>(null===x&&y.flush(f.context.currentTime),y.add(o(t)),m.cancelScheduledValues(t),w),exponentialRampToValueAtTime(t,e){if(0===t)throw new RangeError;if(!Number.isFinite(e)||e<0)throw new RangeError;return null===x&&y.flush(f.context.currentTime),y.add(a(t,e)),m.exponentialRampToValueAtTime(t,e),w},linearRampToValueAtTime:(t,e)=>(null===x&&y.flush(f.context.currentTime),y.add(c(t,e)),m.linearRampToValueAtTime(t,e),w),setTargetAtTime:(t,e,s)=>(null===x&&y.flush(f.context.currentTime),y.add(h(t,e,s)),m.setTargetAtTime(t,e,s),w),setValueAtTime:(t,e)=>(null===x&&y.flush(f.context.currentTime),y.add(u(t,e)),m.setValueAtTime(t,e),w),setValueCurveAtTime(t,e,s){const n=t instanceof Float32Array?t:new Float32Array(t);if(null!==p&&"webkitAudioContext"===p.name){const t=e+s,i=f.context.sampleRate,o=Math.ceil(e*i),r=Math.floor(t*i),a=r-o,c=new Float32Array(a);for(let t=0;t<a;t+=1){const r=(n.length-1)/s*((o+t)/i-e),a=Math.floor(r),h=Math.ceil(r);c[t]=a===h?n[a]:(1-(r-a))*n[a]+(1-(h-r))*n[h]}null===x&&y.flush(f.context.currentTime),y.add(l(c,e,s)),m.setValueCurveAtTime(c,e,s);const h=r/i;h<t&&d(w,c[c.length-1],h),d(w,n[n.length-1],t)}else null===x&&y.flush(f.context.currentTime),y.add(l(n,e,s)),m.setValueCurveAtTime(n,e,s);return w}};return s.set(w,m),e.set(w,f),t(w,x),w})((ds=u,(t,e)=>{ds.set(t,{activeInputs:new Set,passiveInputs:new WeakMap,renderer:e})}),je,l,t=>({replay(e){for(const s of t)if("exponentialRampToValue"===s.type){const{endTime:t,value:n}=s;e.exponentialRampToValueAtTime(n,t)}else if("linearRampToValue"===s.type){const{endTime:t,value:n}=s;e.linearRampToValueAtTime(n,t)}else if("setTarget"===s.type){const{startTime:t,target:n,timeConstant:i}=s;e.setTargetAtTime(n,t,i)}else if("setValue"===s.type){const{startTime:t,value:n}=s;e.setValueAtTime(n,t)}else{if("setValueCurve"!==s.type)throw new Error("Can't apply an unknown automation.");{const{duration:t,startTime:n,values:i}=s;e.setValueCurveAtTime(i,n,t)}}}}),r.createCancelAndHoldAutomationEvent,r.createCancelScheduledValuesAutomationEvent,r.createExponentialRampToValueAutomationEvent,r.createLinearRampToValueAutomationEvent,r.createSetTargetAutomationEvent,r.createSetValueAutomationEvent,r.createSetValueCurveAutomationEvent,Be,re);var ds;const fs=((t,e,s,n,i,o,r,a)=>class extends t{constructor(t,n){const a=o(t),c={...j,...n},h=i(a,c),u=r(a),l=u?e():null;super(t,!1,h,l),this._audioBufferSourceNodeRenderer=l,this._isBufferNullified=!1,this._isBufferSet=null!==c.buffer,this._nativeAudioBufferSourceNode=h,this._onended=null,this._playbackRate=s(this,u,h.playbackRate,N,V)}get buffer(){return this._isBufferNullified?null:this._nativeAudioBufferSourceNode.buffer}set buffer(t){if(this._nativeAudioBufferSourceNode.buffer=t,null!==t){if(this._isBufferSet)throw n();this._isBufferSet=!0}}get loop(){return this._nativeAudioBufferSourceNode.loop}set loop(t){this._nativeAudioBufferSourceNode.loop=t}get loopEnd(){return this._nativeAudioBufferSourceNode.loopEnd}set loopEnd(t){this._nativeAudioBufferSourceNode.loopEnd=t}get loopStart(){return this._nativeAudioBufferSourceNode.loopStart}set loopStart(t){this._nativeAudioBufferSourceNode.loopStart=t}get onended(){return this._onended}set onended(t){const e="function"==typeof t?a(this,t):null;this._nativeAudioBufferSourceNode.onended=e;const s=this._nativeAudioBufferSourceNode.onended;this._onended=null!==s&&s===e?t:s}get playbackRate(){return this._playbackRate}start(t=0,e=0,s){if(this._nativeAudioBufferSourceNode.start(t,e,s),null!==this._audioBufferSourceNodeRenderer&&(this._audioBufferSourceNodeRenderer.start=void 0===s?[t,e]:[t,e,s]),"closed"!==this.context.state){C(this);const t=()=>{this._nativeAudioBufferSourceNode.removeEventListener("ended",t),P(this)&&D(this)};this._nativeAudioBufferSourceNode.addEventListener("ended",t)}}stop(t=0){this._nativeAudioBufferSourceNode.stop(t),null!==this._audioBufferSourceNodeRenderer&&(this._audioBufferSourceNodeRenderer.stop=t)}})(Ze,ls,ps,At,cs,Fe,Ne,de),_s=((t,e,s,n,i,o,r,a)=>class extends t{constructor(t,s){const n=o(t),c=r(n),h=i(n,s,c);super(t,!1,h,c?e(a):null),this._isNodeOfNativeOfflineAudioContext=c,this._nativeAudioDestinationNode=h}get channelCount(){return this._nativeAudioDestinationNode.channelCount}set channelCount(t){if(this._isNodeOfNativeOfflineAudioContext)throw n();if(t>this._nativeAudioDestinationNode.maxChannelCount)throw s();this._nativeAudioDestinationNode.channelCount=t}get channelCountMode(){return this._nativeAudioDestinationNode.channelCountMode}set channelCountMode(t){if(this._isNodeOfNativeOfflineAudioContext)throw n();this._nativeAudioDestinationNode.channelCountMode=t}get maxChannelCount(){return this._nativeAudioDestinationNode.maxChannelCount}})(Ze,t=>{let e=null;return{render:(s,n,i)=>(null===e&&(e=(async(e,s,n)=>{const i=s.destination;return await t(e,s,i,n),i})(s,n,i)),e)}},q,At,((t,e)=>(s,n,i)=>{const o=s.destination;if(o.channelCount!==n)try{o.channelCount=n}catch{}i&&"explicit"!==o.channelCountMode&&(o.channelCountMode="explicit"),0===o.maxChannelCount&&Object.defineProperty(o,"maxChannelCount",{value:n});const r=t(s,{channelCount:n,channelCountMode:o.channelCountMode,channelInterpretation:o.channelInterpretation,gain:1});return e(r,"channelCount",t=>()=>t.call(r),t=>e=>{t.call(r,e);try{o.channelCount=e}catch(t){if(e>o.maxChannelCount)throw t}}),e(r,"channelCountMode",t=>()=>t.call(r),t=>e=>{t.call(r,e),o.channelCountMode=e}),e(r,"channelInterpretation",t=>()=>t.call(r),t=>e=>{t.call(r,e),o.channelInterpretation=e}),Object.defineProperty(r,"maxChannelCount",{get:()=>o.maxChannelCount}),r.connect(o),r})(Qt,oe),Fe,Ne,Oe),ms=((t,e,s,n,i)=>()=>{const o=new WeakMap;return{render(r,a,c){const h=o.get(a);return void 0!==h?Promise.resolve(h):(async(r,a,c)=>{let h=s(r);const u=E(h,a);if(!u){const t={Q:h.Q.value,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,detune:h.detune.value,frequency:h.frequency.value,gain:h.gain.value,type:h.type};h=e(a,t)}return o.set(a,h),u?(await t(a,r.Q,h.Q,c),await t(a,r.detune,h.detune,c),await t(a,r.frequency,h.frequency,c),await t(a,r.gain,h.gain,c)):(await n(a,r.Q,h.Q,c),await n(a,r.detune,h.detune,c),await n(a,r.frequency,h.frequency,c),await n(a,r.gain,h.gain,c)),await i(r,a,h,c),h})(r,a,c)}}})(as,Bt,st,us,Oe),gs=(t=>(e,s)=>t.set(e,s))(ve),vs=(ys=Ze,xs=ps,ws=ms,bs=Dt,Ts=Bt,Ss=Fe,ks=Ne,Cs=gs,class extends ys{constructor(t,e){const s=Ss(t),n={...vt,...e},i=Ts(s,n),o=ks(s);super(t,!1,i,o?ws():null),this._Q=xs(this,o,i.Q,N,V),this._detune=xs(this,o,i.detune,1200*Math.log2(N),-1200*Math.log2(N)),this._frequency=xs(this,o,i.frequency,t.sampleRate/2,0),this._gain=xs(this,o,i.gain,40*Math.log10(N),V),this._nativeBiquadFilterNode=i,Cs(this,1)}get detune(){return this._detune}get frequency(){return this._frequency}get gain(){return this._gain}get Q(){return this._Q}get type(){return this._nativeBiquadFilterNode.type}set type(t){this._nativeBiquadFilterNode.type=t}getFrequencyResponse(t,e,s){try{this._nativeBiquadFilterNode.getFrequencyResponse(t,e,s)}catch(t){if(11===t.code)throw bs();throw t}if(t.length!==e.length||e.length!==s.length)throw bs()}});var ys,xs,ws,bs,Ts,Ss,ks,Cs;const As=((t,e)=>(s,n,i)=>{const o=new Set;var r,a;return s.connect=(r=s.connect,(i,a=0,c=0)=>{const h=0===o.size;if(e(i))return r.call(s,i,a,c),t(o,[i,a,c],t=>t[0]===i&&t[1]===a&&t[2]===c,!0),h&&n(),i;r.call(s,i,a),t(o,[i,a],t=>t[0]===i&&t[1]===a,!0),h&&n()}),s.disconnect=(a=s.disconnect,(t,n,r)=>{const c=o.size>0;if(void 0===t)a.apply(s),o.clear();else if("number"==typeof t){a.call(s,t);for(const e of o)e[1]===t&&o.delete(e)}else{e(t)?a.call(s,t,n,r):a.call(s,t,n);for(const e of o)e[0]!==t||void 0!==n&&e[1]!==n||void 0!==r&&e[2]!==r||o.delete(e)}const h=0===o.size;c&&h&&i()}),s})(Z,Ue),Ds=(Os=At,Ms=As,(t,e)=>{e.channelCount=1,e.channelCountMode="explicit",Object.defineProperty(e,"channelCount",{get:()=>1,set:()=>{throw Os()}}),Object.defineProperty(e,"channelCountMode",{get:()=>"explicit",set:()=>{throw Os()}});const s=t.createBufferSource();Ms(e,()=>{const t=e.numberOfInputs;for(let n=0;n<t;n+=1)s.connect(e,0,n)},()=>s.disconnect(e))});var Os,Ms;const Es=((t,e)=>(s,n)=>{const i=s.createChannelMerger(n.numberOfInputs);return null!==t&&"webkitAudioContext"===t.name&&e(s,i),It(i,n),i})(Be,Ds),Rs=((t,e,s,n,i)=>class extends t{constructor(t,o){const r=n(t),a={...yt,...o};super(t,!1,s(r,a),i(r)?e():null)}})(Ze,((t,e,s)=>()=>{const n=new WeakMap;return{render(i,o,r){const a=n.get(o);return void 0!==a?Promise.resolve(a):(async(i,o,r)=>{let a=e(i);if(!E(a,o)){const e={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfInputs:a.numberOfInputs};a=t(o,e)}return n.set(o,a),await s(i,o,a,r),a})(i,o,r)}}})(Es,st,Oe),Es,Fe,Ne),qs=((t,e,s,n,i,o)=>class extends t{constructor(t,r){const a=n(t),c=o({...xt,...r});super(t,!1,s(a,c),i(a)?e():null)}})(Ze,((t,e,s)=>()=>{const n=new WeakMap;return{render(i,o,r){const a=n.get(o);return void 0!==a?Promise.resolve(a):(async(i,o,r)=>{let a=e(i);if(!E(a,o)){const e={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,numberOfOutputs:a.numberOfOutputs};a=t(o,e)}return n.set(o,a),await s(i,o,a,r),a})(i,o,r)}}})(Wt,st,Oe),Wt,Fe,Ne,t=>({...t,channelCount:t.numberOfOutputs})),Fs=((t,e,s,n)=>(i,{offset:o,...r})=>{const a=i.createBuffer(1,2,44100),c=e(i,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),h=s(i,{...r,gain:o}),u=a.getChannelData(0);u[0]=1,u[1]=1,c.buffer=a,c.loop=!0;const l={get bufferSize(){},get channelCount(){return h.channelCount},set channelCount(t){h.channelCount=t},get channelCountMode(){return h.channelCountMode},set channelCountMode(t){h.channelCountMode=t},get channelInterpretation(){return h.channelInterpretation},set channelInterpretation(t){h.channelInterpretation=t},get context(){return h.context},get inputs(){return[]},get numberOfInputs(){return c.numberOfInputs},get numberOfOutputs(){return h.numberOfOutputs},get offset(){return h.gain},get onended(){return c.onended},set onended(t){c.onended=t},addEventListener:(...t)=>c.addEventListener(t[0],t[1],t[2]),dispatchEvent:(...t)=>c.dispatchEvent(t[0]),removeEventListener:(...t)=>c.removeEventListener(t[0],t[1],t[2]),start(t=0){c.start.call(c,t)},stop(t=0){c.stop.call(c,t)}};return t(i,c),n(Gt(l,h),()=>c.connect(h),()=>c.disconnect(h))})(is,cs,Qt,As),Is=((t,e,s,n,i)=>(o,r)=>{if(void 0===o.createConstantSource)return s(o,r);const a=o.createConstantSource();return It(a,r),Nt(a,r,"offset"),e(n,()=>n(o))||Pt(a),e(i,()=>i(o))||jt(a),t(o,a),a})(is,xe,Fs,ae,he),Vs=((t,e,s,n,i,o,r)=>class extends t{constructor(t,r){const a=i(t),c={...wt,...r},h=n(a,c),u=o(a),l=u?s():null;super(t,!1,h,l),this._constantSourceNodeRenderer=l,this._nativeConstantSourceNode=h,this._offset=e(this,u,h.offset,N,V),this._onended=null}get offset(){return this._offset}get onended(){return this._onended}set onended(t){const e="function"==typeof t?r(this,t):null;this._nativeConstantSourceNode.onended=e;const s=this._nativeConstantSourceNode.onended;this._onended=null!==s&&s===e?t:s}start(t=0){if(this._nativeConstantSourceNode.start(t),null!==this._constantSourceNodeRenderer&&(this._constantSourceNodeRenderer.start=t),"closed"!==this.context.state){C(this);const t=()=>{this._nativeConstantSourceNode.removeEventListener("ended",t),P(this)&&D(this)};this._nativeConstantSourceNode.addEventListener("ended",t)}}stop(t=0){this._nativeConstantSourceNode.stop(t),null!==this._constantSourceNodeRenderer&&(this._constantSourceNodeRenderer.stop=t)}})(Ze,ps,((t,e,s,n,i)=>()=>{const o=new WeakMap;let r=null,a=null;return{set start(t){r=t},set stop(t){a=t},render(c,h,u){const l=o.get(h);return void 0!==l?Promise.resolve(l):(async(c,h,u)=>{let l=s(c);const p=E(l,h);if(!p){const t={channelCount:l.channelCount,channelCountMode:l.channelCountMode,channelInterpretation:l.channelInterpretation,offset:l.offset.value};l=e(h,t),null!==r&&l.start(r),null!==a&&l.stop(a)}return o.set(h,l),p?await t(h,c.offset,l.offset,u):await n(h,c.offset,l.offset,u),await i(c,h,l,u),l})(c,h,u)}}})(as,Is,st,us,Oe),Is,Fe,Ne,de),Ns=((t,e)=>(s,n)=>{const i=s.createConvolver();if(It(i,n),n.disableNormalization===i.normalize&&(i.normalize=!n.disableNormalization),Ft(i,n,"buffer"),n.channelCount>2)throw t();if(e(i,"channelCount",t=>()=>t.call(i),e=>s=>{if(s>2)throw t();return e.call(i,s)}),"max"===n.channelCountMode)throw t();return e(i,"channelCountMode",t=>()=>t.call(i),e=>s=>{if("max"===s)throw t();return e.call(i,s)}),i})(Ht,oe),Ps=((t,e,s,n,i,o)=>class extends t{constructor(t,r){const a=n(t),c={...bt,...r},h=s(a,c);super(t,!1,h,i(a)?e():null),this._isBufferNullified=!1,this._nativeConvolverNode=h,null!==c.buffer&&o(this,c.buffer.duration)}get buffer(){return this._isBufferNullified?null:this._nativeConvolverNode.buffer}set buffer(t){if(this._nativeConvolverNode.buffer=t,null===t&&null!==this._nativeConvolverNode.buffer){const t=this._nativeConvolverNode.context;this._nativeConvolverNode.buffer=t.createBuffer(1,1,44100),this._isBufferNullified=!0,o(this,0)}else this._isBufferNullified=!1,o(this,null===this._nativeConvolverNode.buffer?0:this._nativeConvolverNode.buffer.duration)}get normalize(){return this._nativeConvolverNode.normalize}set normalize(t){this._nativeConvolverNode.normalize=t}})(Ze,((t,e,s)=>()=>{const n=new WeakMap;return{render(i,o,r){const a=n.get(o);return void 0!==a?Promise.resolve(a):(async(i,o,r)=>{let a=e(i);if(!E(a,o)){const e={buffer:a.buffer,channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,disableNormalization:!a.normalize};a=t(o,e)}return n.set(o,a),H(a)?await s(i,o,a.inputs[0],r):await s(i,o,a,r),a})(i,o,r)}}})(Ns,st,Oe),Ns,Fe,Ne,gs),js=((t,e,s,n,i,o,r)=>class extends t{constructor(t,a){const c=i(t),h={...Tt,...a},u=n(c,h),l=o(c);super(t,!1,u,l?s(h.maxDelayTime):null),this._delayTime=e(this,l,u.delayTime),r(this,h.maxDelayTime)}get delayTime(){return this._delayTime}})(Ze,ps,((t,e,s,n,i)=>o=>{const r=new WeakMap;return{render(a,c,h){const u=r.get(c);return void 0!==u?Promise.resolve(u):(async(a,c,h)=>{let u=s(a);const l=E(u,c);if(!l){const t={channelCount:u.channelCount,channelCountMode:u.channelCountMode,channelInterpretation:u.channelInterpretation,delayTime:u.delayTime.value,maxDelayTime:o};u=e(c,t)}return r.set(c,u),l?await t(c,a.delayTime,u.delayTime,h):await n(c,a.delayTime,u.delayTime,h),await i(a,c,u,h),u})(a,c,h)}}})(as,Ut,st,us,Oe),Ut,Fe,Ne,gs),Ls=(zs=Ht,(t,e)=>{const s=t.createDynamicsCompressor();if(It(s,e),e.channelCount>2)throw zs();if("max"===e.channelCountMode)throw zs();return Nt(s,e,"attack"),Nt(s,e,"knee"),Nt(s,e,"ratio"),Nt(s,e,"release"),Nt(s,e,"threshold"),s});var zs;const Bs=((t,e,s,n,i,o,r,a)=>class extends t{constructor(t,i){const c=o(t),h={...kt,...i},u=n(c,h),l=r(c);super(t,!1,u,l?s():null),this._attack=e(this,l,u.attack),this._knee=e(this,l,u.knee),this._nativeDynamicsCompressorNode=u,this._ratio=e(this,l,u.ratio),this._release=e(this,l,u.release),this._threshold=e(this,l,u.threshold),a(this,.006)}get attack(){return this._attack}get channelCount(){return this._nativeDynamicsCompressorNode.channelCount}set channelCount(t){const e=this._nativeDynamicsCompressorNode.channelCount;if(this._nativeDynamicsCompressorNode.channelCount=t,t>2)throw this._nativeDynamicsCompressorNode.channelCount=e,i()}get channelCountMode(){return this._nativeDynamicsCompressorNode.channelCountMode}set channelCountMode(t){const e=this._nativeDynamicsCompressorNode.channelCountMode;if(this._nativeDynamicsCompressorNode.channelCountMode=t,"max"===t)throw this._nativeDynamicsCompressorNode.channelCountMode=e,i()}get knee(){return this._knee}get ratio(){return this._ratio}get reduction(){return"number"==typeof this._nativeDynamicsCompressorNode.reduction.value?this._nativeDynamicsCompressorNode.reduction.value:this._nativeDynamicsCompressorNode.reduction}get release(){return this._release}get threshold(){return this._threshold}})(Ze,ps,((t,e,s,n,i)=>()=>{const o=new WeakMap;return{render(r,a,c){const h=o.get(a);return void 0!==h?Promise.resolve(h):(async(r,a,c)=>{let h=s(r);const u=E(h,a);if(!u){const t={attack:h.attack.value,channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,knee:h.knee.value,ratio:h.ratio.value,release:h.release.value,threshold:h.threshold.value};h=e(a,t)}return o.set(a,h),u?(await t(a,r.attack,h.attack,c),await t(a,r.knee,h.knee,c),await t(a,r.ratio,h.ratio,c),await t(a,r.release,h.release,c),await t(a,r.threshold,h.threshold,c)):(await n(a,r.attack,h.attack,c),await n(a,r.knee,h.knee,c),await n(a,r.ratio,h.ratio,c),await n(a,r.release,h.release,c),await n(a,r.threshold,h.threshold,c)),await i(r,a,h,c),h})(r,a,c)}}})(as,Ls,st,us,Oe),Ls,Ht,Fe,Ne,gs),Ws=((t,e,s,n,i,o)=>class extends t{constructor(t,r){const a=i(t),c={...Ct,...r},h=n(a,c),u=o(a);super(t,!1,h,u?s():null),this._gain=e(this,u,h.gain,N,V)}get gain(){return this._gain}})(Ze,ps,((t,e,s,n,i)=>()=>{const o=new WeakMap;return{render(r,a,c){const h=o.get(a);return void 0!==h?Promise.resolve(h):(async(r,a,c)=>{let h=s(r);const u=E(h,a);if(!u){const t={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,gain:h.gain.value};h=e(a,t)}return o.set(a,h),u?await t(a,r.gain,h.gain,c):await n(a,r.gain,h.gain,c),await i(r,a,h,c),h})(r,a,c)}}})(as,Qt,st,us,Oe),Qt,Fe,Ne),Gs=((t,e,s,n)=>(i,o,{channelCount:r,channelCountMode:a,channelInterpretation:c,feedback:h,feedforward:u})=>{const l=Lt(o,i.sampleRate),p=h instanceof Float64Array?h:new Float64Array(h),d=u instanceof Float64Array?u:new Float64Array(u),f=p.length,_=d.length,m=Math.min(f,_);if(0===f||f>20)throw n();if(0===p[0])throw e();if(0===_||_>20)throw n();if(0===d[0])throw e();if(1!==p[0]){for(let t=0;t<_;t+=1)d[t]/=p[0];for(let t=1;t<f;t+=1)p[t]/=p[0]}const g=s(i,l,r,r);g.channelCount=r,g.channelCountMode=a,g.channelInterpretation=c;const v=[],y=[],x=[];for(let t=0;t<r;t+=1){v.push(0);const t=new Float32Array(32),e=new Float32Array(32);t.fill(0),e.fill(0),y.push(t),x.push(e)}g.onaudioprocess=t=>{const e=t.inputBuffer,s=t.outputBuffer,n=e.numberOfChannels;for(let t=0;t<n;t+=1){const n=e.getChannelData(t),i=s.getChannelData(t);v[t]=Mt(p,f,d,_,m,y[t],x[t],v[t],32,n,i)}};const w=i.sampleRate/2;return Gt({get bufferSize(){return l},get channelCount(){return g.channelCount},set channelCount(t){g.channelCount=t},get channelCountMode(){return g.channelCountMode},set channelCountMode(t){g.channelCountMode=t},get channelInterpretation(){return g.channelInterpretation},set channelInterpretation(t){g.channelInterpretation=t},get context(){return g.context},get inputs(){return[g]},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},addEventListener:(...t)=>g.addEventListener(t[0],t[1],t[2]),dispatchEvent:(...t)=>g.dispatchEvent(t[0]),getFrequencyResponse(e,s,n){if(e.length!==s.length||s.length!==n.length)throw t();const i=e.length;for(let t=0;t<i;t+=1){const i=-Math.PI*(e[t]/w),o=[Math.cos(i),Math.sin(i)],r=Zt(Xt(d,o),Xt(p,o));s[t]=Math.sqrt(r[0]*r[0]+r[1]*r[1]),n[t]=Math.atan2(r[1],r[0])}},removeEventListener:(...t)=>g.removeEventListener(t[0],t[1],t[2])},g)})(Dt,At,Yt,Ht),Us=((t,e,s,n)=>i=>t(Rt,()=>Rt(i))?Promise.resolve(t(n,n)).then(t=>{if(!t){const t=s(i,512,0,1);i.oncomplete=()=>{t.onaudioprocess=null,t.disconnect()},t.onaudioprocess=()=>i.currentTime,t.connect(i.destination)}return i.startRendering()}):new Promise(t=>{const s=e(i,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});i.oncomplete=e=>{s.disconnect(),t(e.renderedBuffer)},s.connect(i.destination),i.startRendering()}))(xe,Qt,Yt,((t,e)=>()=>{if(null===e)return Promise.resolve(!1);const s=new e(1,1,44100),n=t(s,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});return new Promise(t=>{s.oncomplete=()=>{n.disconnect(),t(0!==s.currentTime)},s.startRendering()})})(Qt,Ve)),Qs=((t,e,s,n,i)=>(o,r)=>{const a=new WeakMap;let c=null;const h=async(h,u,l)=>{let p=null,d=e(h);const f=E(d,u);if(void 0===u.createIIRFilter?p=t(u,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}):f||(d=u.createIIRFilter(r,o)),a.set(u,null===p?d:p),null!==p){if(null===c){if(null===s)throw new Error("Missing the native OfflineAudioContext constructor.");const t=new s(h.context.destination.channelCount,h.context.length,u.sampleRate);c=(async()=>{await n(h,t,t.destination,l);return((t,e,s,n)=>{const i=s instanceof Float64Array?s:new Float64Array(s),o=n instanceof Float64Array?n:new Float64Array(n),r=i.length,a=o.length,c=Math.min(r,a);if(1!==i[0]){for(let t=0;t<r;t+=1)o[t]/=i[0];for(let t=1;t<a;t+=1)i[t]/=i[0]}const h=new Float32Array(32),u=new Float32Array(32),l=e.createBuffer(t.numberOfChannels,t.length,t.sampleRate),p=t.numberOfChannels;for(let e=0;e<p;e+=1){const s=t.getChannelData(e),n=l.getChannelData(e);h.fill(0),u.fill(0),Mt(i,r,o,a,c,h,u,0,32,s,n)}return l})(await i(t),u,o,r)})()}const t=await c;return p.buffer=t,p.start(0),p}return await n(h,u,d,l),d};return{render(t,e,s){const n=a.get(e);return void 0!==n?Promise.resolve(n):h(t,e,s)}}})(cs,st,Ve,Oe,Us);var Zs;const Xs=((t,e,s,n,i,o)=>class extends t{constructor(t,r){const a=n(t),c=i(a),h={...Ot,...r},u=e(a,c?null:t.baseLatency,h);super(t,!1,u,c?s(h.feedback,h.feedforward):null),(t=>{var e;t.getFrequencyResponse=(e=t.getFrequencyResponse,(s,n,i)=>{if(s.length!==n.length||n.length!==i.length)throw Dt();return e.call(t,s,n,i)})})(u),this._nativeIIRFilterNode=u,o(this,1)}getFrequencyResponse(t,e,s){return this._nativeIIRFilterNode.getFrequencyResponse(t,e,s)}})(Ze,(Zs=Gs,(t,e,s)=>{if(void 0===t.createIIRFilter)return Zs(t,e,s);const n=t.createIIRFilter(s.feedforward,s.feedback);return It(n,s),n}),Qs,Fe,Ne,gs),Ys=((t,e,s,n,i)=>(o,r)=>{const a=r.listener,{forwardX:c,forwardY:h,forwardZ:u,positionX:l,positionY:p,positionZ:d,upX:f,upY:_,upZ:m}=void 0===a.forwardX?(()=>{const c=e(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:9}),h=i(r),u=n(r,256,9,0),l=(e,n)=>{const i=s(r,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:n});return i.connect(c,0,e),i.start(),Object.defineProperty(i.offset,"defaultValue",{get:()=>n}),t({context:o},h,i.offset,N,V)};let p=[0,0,-1,0,1,0],d=[0,0,0];return u.onaudioprocess=({inputBuffer:t})=>{const e=[t.getChannelData(0)[0],t.getChannelData(1)[0],t.getChannelData(2)[0],t.getChannelData(3)[0],t.getChannelData(4)[0],t.getChannelData(5)[0]];e.some((t,e)=>t!==p[e])&&(a.setOrientation(...e),p=e);const s=[t.getChannelData(6)[0],t.getChannelData(7)[0],t.getChannelData(8)[0]];s.some((t,e)=>t!==d[e])&&(a.setPosition(...s),d=s)},c.connect(u),{forwardX:l(0,0),forwardY:l(1,0),forwardZ:l(2,-1),positionX:l(6,0),positionY:l(7,0),positionZ:l(8,0),upX:l(3,0),upY:l(4,1),upZ:l(5,0)}})():a;return{get forwardX(){return c},get forwardY(){return h},get forwardZ(){return u},get positionX(){return l},get positionY(){return p},get positionZ(){return d},get upX(){return f},get upY(){return _},get upZ(){return m}}})(ps,Es,Is,Yt,Ne),Hs=new WeakMap,$s=((t,e,s,n,i,o)=>class extends s{constructor(s,o){super(s),this._nativeContext=s,p.set(this,s),n(s)&&i.set(s,new Set),this._destination=new t(this,o),this._listener=e(this,s),this._onstatechange=null}get currentTime(){return this._nativeContext.currentTime}get destination(){return this._destination}get listener(){return this._listener}get onstatechange(){return this._onstatechange}set onstatechange(t){const e="function"==typeof t?o(this,t):null;this._nativeContext.onstatechange=e;const s=this._nativeContext.onstatechange;this._onstatechange=null!==s&&s===e?t:s}get sampleRate(){return this._nativeContext.sampleRate}get state(){return this._nativeContext.state}})(_s,Ys,Le,Ne,Hs,de),Js=((t,e,s,n,i,o)=>(r,a)=>{const c=r.createOscillator();return It(c,a),Nt(c,a,"detune"),Nt(c,a,"frequency"),void 0!==a.periodicWave?c.setPeriodicWave(a.periodicWave):Ft(c,a,"type"),e(s,()=>s(r))||Pt(c),e(n,()=>n(r))||o(c,r),e(i,()=>i(r))||jt(c),t(r,c),c})(is,xe,ae,ce,he,pe),Ks=((t,e,s,n,i,o,r)=>class extends t{constructor(t,r){const a=i(t),c={...Jt,...r},h=s(a,c),u=o(a),l=u?n():null,p=t.sampleRate/2;super(t,!1,h,l),this._detune=e(this,u,h.detune,153600,-153600),this._frequency=e(this,u,h.frequency,p,-p),this._nativeOscillatorNode=h,this._onended=null,this._oscillatorNodeRenderer=l,null!==this._oscillatorNodeRenderer&&void 0!==c.periodicWave&&(this._oscillatorNodeRenderer.periodicWave=c.periodicWave)}get detune(){return this._detune}get frequency(){return this._frequency}get onended(){return this._onended}set onended(t){const e="function"==typeof t?r(this,t):null;this._nativeOscillatorNode.onended=e;const s=this._nativeOscillatorNode.onended;this._onended=null!==s&&s===e?t:s}get type(){return this._nativeOscillatorNode.type}set type(t){this._nativeOscillatorNode.type=t,null!==this._oscillatorNodeRenderer&&(this._oscillatorNodeRenderer.periodicWave=null)}setPeriodicWave(t){this._nativeOscillatorNode.setPeriodicWave(t),null!==this._oscillatorNodeRenderer&&(this._oscillatorNodeRenderer.periodicWave=t)}start(t=0){if(this._nativeOscillatorNode.start(t),null!==this._oscillatorNodeRenderer&&(this._oscillatorNodeRenderer.start=t),"closed"!==this.context.state){C(this);const t=()=>{this._nativeOscillatorNode.removeEventListener("ended",t),P(this)&&D(this)};this._nativeOscillatorNode.addEventListener("ended",t)}}stop(t=0){this._nativeOscillatorNode.stop(t),null!==this._oscillatorNodeRenderer&&(this._oscillatorNodeRenderer.stop=t)}})(Ze,ps,Js,((t,e,s,n,i)=>()=>{const o=new WeakMap;let r=null,a=null,c=null;return{set periodicWave(t){r=t},set start(t){a=t},set stop(t){c=t},render(h,u,l){const p=o.get(u);return void 0!==p?Promise.resolve(p):(async(h,u,l)=>{let p=s(h);const d=E(p,u);if(!d){const t={channelCount:p.channelCount,channelCountMode:p.channelCountMode,channelInterpretation:p.channelInterpretation,detune:p.detune.value,frequency:p.frequency.value,periodicWave:null===r?void 0:r,type:p.type};p=e(u,t),null!==a&&p.start(a),null!==c&&p.stop(c)}return o.set(u,p),d?(await t(u,h.detune,p.detune,l),await t(u,h.frequency,p.frequency,l)):(await n(u,h.detune,p.detune,l),await n(u,h.frequency,p.frequency,l)),await i(h,u,p,l),p})(h,u,l)}}})(as,Js,st,us,Oe),Fe,Ne,de),tn=(en=cs,(t,e)=>{const s=en(t,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),n=t.createBuffer(1,2,44100);return s.buffer=n,s.loop=!0,s.connect(e),s.start(),()=>{s.stop(),s.disconnect(e)}});var en;const sn=((t,e,s,n,i)=>(o,{curve:r,oversample:a,...c})=>{const h=o.createWaveShaper(),u=o.createWaveShaper();It(h,c),It(u,c);const l=s(o,{...c,gain:1}),p=s(o,{...c,gain:-1}),d=s(o,{...c,gain:1}),f=s(o,{...c,gain:-1});let _=null,m=!1,g=null;const v={get bufferSize(){},get channelCount(){return h.channelCount},set channelCount(t){l.channelCount=t,p.channelCount=t,h.channelCount=t,d.channelCount=t,u.channelCount=t,f.channelCount=t},get channelCountMode(){return h.channelCountMode},set channelCountMode(t){l.channelCountMode=t,p.channelCountMode=t,h.channelCountMode=t,d.channelCountMode=t,u.channelCountMode=t,f.channelCountMode=t},get channelInterpretation(){return h.channelInterpretation},set channelInterpretation(t){l.channelInterpretation=t,p.channelInterpretation=t,h.channelInterpretation=t,d.channelInterpretation=t,u.channelInterpretation=t,f.channelInterpretation=t},get context(){return h.context},get curve(){return g},set curve(s){if(null!==s&&s.length<2)throw e();if(null===s)h.curve=s,u.curve=s;else{const t=s.length,e=new Float32Array(t+2-t%2),n=new Float32Array(t+2-t%2);e[0]=s[0],n[0]=-s[t-1];const i=Math.ceil((t+1)/2),o=(t+1)/2-1;for(let r=1;r<i;r+=1){const a=r/i*o,c=Math.floor(a),h=Math.ceil(a);e[r]=c===h?s[c]:(1-(a-c))*s[c]+(1-(h-a))*s[h],n[r]=c===h?-s[t-1-c]:-(1-(a-c))*s[t-1-c]-(1-(h-a))*s[t-1-h]}e[i]=t%2==1?s[i-1]:(s[i-2]+s[i-1])/2,h.curve=e,u.curve=n}g=s,m&&(n(g)&&null===_?_=t(o,l):null!==_&&(_(),_=null))},get inputs(){return[l]},get numberOfInputs(){return h.numberOfInputs},get numberOfOutputs(){return h.numberOfOutputs},get oversample(){return h.oversample},set oversample(t){h.oversample=t,u.oversample=t},addEventListener:(...t)=>l.addEventListener(t[0],t[1],t[2]),dispatchEvent:(...t)=>l.dispatchEvent(t[0]),removeEventListener:(...t)=>l.removeEventListener(t[0],t[1],t[2])};null!==r&&(v.curve=r instanceof Float32Array?r:new Float32Array(r)),a!==v.oversample&&(v.oversample=a);return i(Gt(v,d),()=>{l.connect(h).connect(d),l.connect(p).connect(u).connect(f).connect(d),m=!0,n(g)&&(_=t(o,l))},()=>{l.disconnect(h),h.disconnect(d),l.disconnect(p),p.disconnect(u),u.disconnect(f),f.disconnect(d),m=!1,null!==_&&(_(),_=null)})})(tn,At,Qt,ie,As),nn=((t,e,s,n,i,o,r)=>(a,c)=>{const h=a.createWaveShaper();if(null!==o&&"webkitAudioContext"===o.name&&void 0===a.createGain().gain.automationRate)return s(a,c);It(h,c);const u=null===c.curve||c.curve instanceof Float32Array?c.curve:new Float32Array(c.curve);if(null!==u&&u.length<2)throw e();Ft(h,{curve:u},"curve"),Ft(h,c,"oversample");let l=null,p=!1;r(h,"curve",t=>()=>t.call(h),e=>s=>(e.call(h,s),p&&(n(s)&&null===l?l=t(a,h):n(s)||null===l||(l(),l=null)),s));return i(h,()=>{p=!0,n(h.curve)&&(l=t(a,h))},()=>{p=!1,null!==l&&(l(),l=null)})})(tn,At,sn,ie,As,Be,oe),on=((t,e,s,n,i,o,r,a,c)=>(h,{coneInnerAngle:u,coneOuterAngle:l,coneOuterGain:p,distanceModel:d,maxDistance:f,orientationX:_,orientationY:m,orientationZ:g,panningModel:v,positionX:y,positionY:x,positionZ:w,refDistance:b,rolloffFactor:T,...S})=>{const k=h.createPanner();if(S.channelCount>2)throw r();if("max"===S.channelCountMode)throw r();It(k,S);const C={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},A=s(h,{...C,channelInterpretation:"speakers",numberOfInputs:6}),D=n(h,{...S,gain:1}),O=n(h,{...C,gain:1}),M=n(h,{...C,gain:0}),E=n(h,{...C,gain:0}),R=n(h,{...C,gain:0}),q=n(h,{...C,gain:0}),F=n(h,{...C,gain:0}),I=i(h,256,6,1),V=o(h,{...C,curve:new Float32Array([1,1]),oversample:"none"});let N=[_,m,g],P=[y,x,w];I.onaudioprocess=({inputBuffer:t})=>{const e=[t.getChannelData(0)[0],t.getChannelData(1)[0],t.getChannelData(2)[0]];e.some((t,e)=>t!==N[e])&&(k.setOrientation(...e),N=e);const s=[t.getChannelData(3)[0],t.getChannelData(4)[0],t.getChannelData(5)[0]];s.some((t,e)=>t!==P[e])&&(k.setPosition(...s),P=s)},Object.defineProperty(M.gain,"defaultValue",{get:()=>0}),Object.defineProperty(E.gain,"defaultValue",{get:()=>0}),Object.defineProperty(R.gain,"defaultValue",{get:()=>0}),Object.defineProperty(q.gain,"defaultValue",{get:()=>0}),Object.defineProperty(F.gain,"defaultValue",{get:()=>0});const j={get bufferSize(){},get channelCount(){return k.channelCount},set channelCount(t){if(t>2)throw r();D.channelCount=t,k.channelCount=t},get channelCountMode(){return k.channelCountMode},set channelCountMode(t){if("max"===t)throw r();D.channelCountMode=t,k.channelCountMode=t},get channelInterpretation(){return k.channelInterpretation},set channelInterpretation(t){D.channelInterpretation=t,k.channelInterpretation=t},get coneInnerAngle(){return k.coneInnerAngle},set coneInnerAngle(t){k.coneInnerAngle=t},get coneOuterAngle(){return k.coneOuterAngle},set coneOuterAngle(t){k.coneOuterAngle=t},get coneOuterGain(){return k.coneOuterGain},set coneOuterGain(t){if(t<0||t>1)throw e();k.coneOuterGain=t},get context(){return k.context},get distanceModel(){return k.distanceModel},set distanceModel(t){k.distanceModel=t},get inputs(){return[D]},get maxDistance(){return k.maxDistance},set maxDistance(t){if(t<0)throw new RangeError;k.maxDistance=t},get numberOfInputs(){return k.numberOfInputs},get numberOfOutputs(){return k.numberOfOutputs},get orientationX(){return O.gain},get orientationY(){return M.gain},get orientationZ(){return E.gain},get panningModel(){return k.panningModel},set panningModel(t){k.panningModel=t},get positionX(){return R.gain},get positionY(){return q.gain},get positionZ(){return F.gain},get refDistance(){return k.refDistance},set refDistance(t){if(t<0)throw new RangeError;k.refDistance=t},get rolloffFactor(){return k.rolloffFactor},set rolloffFactor(t){if(t<0)throw new RangeError;k.rolloffFactor=t},addEventListener:(...t)=>D.addEventListener(t[0],t[1],t[2]),dispatchEvent:(...t)=>D.dispatchEvent(t[0]),removeEventListener:(...t)=>D.removeEventListener(t[0],t[1],t[2])};u!==j.coneInnerAngle&&(j.coneInnerAngle=u),l!==j.coneOuterAngle&&(j.coneOuterAngle=l),p!==j.coneOuterGain&&(j.coneOuterGain=p),d!==j.distanceModel&&(j.distanceModel=d),f!==j.maxDistance&&(j.maxDistance=f),_!==j.orientationX.value&&(j.orientationX.value=_),m!==j.orientationY.value&&(j.orientationY.value=m),g!==j.orientationZ.value&&(j.orientationZ.value=g),v!==j.panningModel&&(j.panningModel=v),y!==j.positionX.value&&(j.positionX.value=y),x!==j.positionY.value&&(j.positionY.value=x),w!==j.positionZ.value&&(j.positionZ.value=w),b!==j.refDistance&&(j.refDistance=b),T!==j.rolloffFactor&&(j.rolloffFactor=T),1===N[0]&&0===N[1]&&0===N[2]||k.setOrientation(...N),0===P[0]&&0===P[1]&&0===P[2]||k.setPosition(...P);return c(Gt(j,k),()=>{D.connect(k),t(D,V,0,0),V.connect(O).connect(A,0,0),V.connect(M).connect(A,0,1),V.connect(E).connect(A,0,2),V.connect(R).connect(A,0,3),V.connect(q).connect(A,0,4),V.connect(F).connect(A,0,5),A.connect(I).connect(h.destination)},()=>{D.disconnect(k),a(D,V,0,0),V.disconnect(O),O.disconnect(A),V.disconnect(M),M.disconnect(A),V.disconnect(E),E.disconnect(A),V.disconnect(R),R.disconnect(A),V.disconnect(q),q.disconnect(A),V.disconnect(F),F.disconnect(A),A.disconnect(I),I.disconnect(h.destination)})})($,At,Es,Qt,Yt,nn,Ht,et,As),rn=(an=on,(t,e)=>{const s=t.createPanner();return void 0===s.orientationX?an(t,e):(It(s,e),Nt(s,e,"orientationX"),Nt(s,e,"orientationY"),Nt(s,e,"orientationZ"),Nt(s,e,"positionX"),Nt(s,e,"positionY"),Nt(s,e,"positionZ"),Ft(s,e,"coneInnerAngle"),Ft(s,e,"coneOuterAngle"),Ft(s,e,"coneOuterGain"),Ft(s,e,"distanceModel"),Ft(s,e,"maxDistance"),Ft(s,e,"panningModel"),Ft(s,e,"refDistance"),Ft(s,e,"rolloffFactor"),s)});var an;const cn=((t,e,s,n,i,o,r)=>class extends t{constructor(t,a){const c=i(t),h={...Kt,...a},u=s(c,h),l=o(c);super(t,!1,u,l?n():null),this._nativePannerNode=u,this._orientationX=e(this,l,u.orientationX,N,V),this._orientationY=e(this,l,u.orientationY,N,V),this._orientationZ=e(this,l,u.orientationZ,N,V),this._positionX=e(this,l,u.positionX,N,V),this._positionY=e(this,l,u.positionY,N,V),this._positionZ=e(this,l,u.positionZ,N,V),r(this,1)}get coneInnerAngle(){return this._nativePannerNode.coneInnerAngle}set coneInnerAngle(t){this._nativePannerNode.coneInnerAngle=t}get coneOuterAngle(){return this._nativePannerNode.coneOuterAngle}set coneOuterAngle(t){this._nativePannerNode.coneOuterAngle=t}get coneOuterGain(){return this._nativePannerNode.coneOuterGain}set coneOuterGain(t){this._nativePannerNode.coneOuterGain=t}get distanceModel(){return this._nativePannerNode.distanceModel}set distanceModel(t){this._nativePannerNode.distanceModel=t}get maxDistance(){return this._nativePannerNode.maxDistance}set maxDistance(t){this._nativePannerNode.maxDistance=t}get orientationX(){return this._orientationX}get orientationY(){return this._orientationY}get orientationZ(){return this._orientationZ}get panningModel(){return this._nativePannerNode.panningModel}set panningModel(t){this._nativePannerNode.panningModel=t}get positionX(){return this._positionX}get positionY(){return this._positionY}get positionZ(){return this._positionZ}get refDistance(){return this._nativePannerNode.refDistance}set refDistance(t){this._nativePannerNode.refDistance=t}get rolloffFactor(){return this._nativePannerNode.rolloffFactor}set rolloffFactor(t){this._nativePannerNode.rolloffFactor=t}})(Ze,ps,rn,((t,e,s,n,i,o,r,a,c,h)=>()=>{const u=new WeakMap;let l=null;return{render(p,d,f){const _=u.get(d);return void 0!==_?Promise.resolve(_):(async(p,d,f)=>{let _=null,m=o(p);const g={channelCount:m.channelCount,channelCountMode:m.channelCountMode,channelInterpretation:m.channelInterpretation},v={...g,coneInnerAngle:m.coneInnerAngle,coneOuterAngle:m.coneOuterAngle,coneOuterGain:m.coneOuterGain,distanceModel:m.distanceModel,maxDistance:m.maxDistance,panningModel:m.panningModel,refDistance:m.refDistance,rolloffFactor:m.rolloffFactor},y=E(m,d);if("bufferSize"in m)_=n(d,{...g,gain:1});else if(!y){const t={...v,orientationX:m.orientationX.value,orientationY:m.orientationY.value,orientationZ:m.orientationZ.value,positionX:m.positionX.value,positionY:m.positionY.value,positionZ:m.positionZ.value};m=i(d,t)}if(u.set(d,null===_?m:_),null!==_){if(null===l){if(null===r)throw new Error("Missing the native OfflineAudioContext constructor.");const t=new r(6,p.context.length,d.sampleRate),n=e(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:6});n.connect(t.destination),l=(async()=>{const e=await Promise.all([p.orientationX,p.orientationY,p.orientationZ,p.positionX,p.positionY,p.positionZ].map(async(e,n)=>{const i=s(t,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:0===n?1:0});return await a(t,e,i.offset,f),i}));for(let t=0;t<6;t+=1)e[t].connect(n,0,t),e[t].start(0);return h(t)})()}const t=await l,o=n(d,{...g,gain:1});await c(p,d,o,f);const u=[];for(let e=0;e<t.numberOfChannels;e+=1)u.push(t.getChannelData(e));let m=[u[0][0],u[1][0],u[2][0]],y=[u[3][0],u[4][0],u[5][0]],x=n(d,{...g,gain:1}),w=i(d,{...v,orientationX:m[0],orientationY:m[1],orientationZ:m[2],positionX:y[0],positionY:y[1],positionZ:y[2]});o.connect(x).connect(w.inputs[0]),w.connect(_);for(let e=128;e<t.length;e+=128){const t=[u[0][e],u[1][e],u[2][e]],s=[u[3][e],u[4][e],u[5][e]];if(t.some((t,e)=>t!==m[e])||s.some((t,e)=>t!==y[e])){m=t,y=s;const r=e/d.sampleRate;x.gain.setValueAtTime(0,r),x=n(d,{...g,gain:0}),w=i(d,{...v,orientationX:m[0],orientationY:m[1],orientationZ:m[2],positionX:y[0],positionY:y[1],positionZ:y[2]}),x.gain.setValueAtTime(1,r),o.connect(x).connect(w.inputs[0]),w.connect(_)}}return _}return y?(await t(d,p.orientationX,m.orientationX,f),await t(d,p.orientationY,m.orientationY,f),await t(d,p.orientationZ,m.orientationZ,f),await t(d,p.positionX,m.positionX,f),await t(d,p.positionY,m.positionY,f),await t(d,p.positionZ,m.positionZ,f)):(await a(d,p.orientationX,m.orientationX,f),await a(d,p.orientationY,m.orientationY,f),await a(d,p.orientationZ,m.orientationZ,f),await a(d,p.positionX,m.positionX,f),await a(d,p.positionY,m.positionY,f),await a(d,p.positionZ,m.positionZ,f)),H(m)?await c(p,d,m.inputs[0],f):await c(p,d,m,f),m})(p,d,f)}}})(as,Es,Is,Qt,rn,st,Ve,us,Oe,Us),Fe,Ne,gs),hn=((t,e,s,n)=>class i{constructor(i,o){const r=e(i),a=n({...te,...o}),c=t(r,a);return s.add(c),c}static[Symbol.hasInstance](t){return null!==t&&"object"==typeof t&&Object.getPrototypeOf(t)===i.prototype||s.has(t)}})((t=>(e,{disableNormalization:s,imag:n,real:i})=>{const o=n instanceof Float32Array?n:new Float32Array(n),r=i instanceof Float32Array?i:new Float32Array(i),a=e.createPeriodicWave(r,o,{disableNormalization:s});if(Array.from(n).length<2)throw t();return a})(q),Fe,new WeakSet,t=>{const{imag:e,real:s}=t;return void 0===e?void 0===s?{...t,imag:[0,0],real:[0,0]}:{...t,imag:Array.from(s,()=>0),real:s}:void 0===s?{...t,imag:e,real:Array.from(e,()=>0)}:{...t,imag:e,real:s}}),un=((t,e)=>(s,n)=>{const i=n.channelCountMode;if("clamped-max"===i)throw e();if(void 0===s.createStereoPanner)return t(s,n);const o=s.createStereoPanner();return It(o,n),Nt(o,n,"pan"),Object.defineProperty(o,"channelCountMode",{get:()=>i,set:t=>{if(t!==i)throw e()}}),o})(((t,e,s,n,i,o)=>{const r=new Float32Array([1,1]),a=Math.PI/2,c={channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete"},h={...c,oversample:"none"},u=(t,o,u,l,p)=>{if(1===o)return((t,e,i,o)=>{const u=new Float32Array(16385),l=new Float32Array(16385);for(let t=0;t<16385;t+=1){const e=t/16384*a;u[t]=Math.cos(e),l[t]=Math.sin(e)}const p=s(t,{...c,gain:0}),d=n(t,{...h,curve:u}),f=n(t,{...h,curve:r}),_=s(t,{...c,gain:0}),m=n(t,{...h,curve:l});return{connectGraph(){e.connect(p),e.connect(void 0===f.inputs?f:f.inputs[0]),e.connect(_),f.connect(i),i.connect(void 0===d.inputs?d:d.inputs[0]),i.connect(void 0===m.inputs?m:m.inputs[0]),d.connect(p.gain),m.connect(_.gain),p.connect(o,0,0),_.connect(o,0,1)},disconnectGraph(){e.disconnect(p),e.disconnect(void 0===f.inputs?f:f.inputs[0]),e.disconnect(_),f.disconnect(i),i.disconnect(void 0===d.inputs?d:d.inputs[0]),i.disconnect(void 0===m.inputs?m:m.inputs[0]),d.disconnect(p.gain),m.disconnect(_.gain),p.disconnect(o,0,0),_.disconnect(o,0,1)}}})(t,u,l,p);if(2===o)return((t,i,o,u)=>{const l=new Float32Array(16385),p=new Float32Array(16385),d=new Float32Array(16385),f=new Float32Array(16385),_=Math.floor(8192.5);for(let t=0;t<16385;t+=1)if(t>_){const e=(t-_)/(16384-_)*a;l[t]=Math.cos(e),p[t]=Math.sin(e),d[t]=0,f[t]=1}else{const e=t/(16384-_)*a;l[t]=1,p[t]=0,d[t]=Math.cos(e),f[t]=Math.sin(e)}const m=e(t,{channelCount:2,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:2}),g=s(t,{...c,gain:0}),v=n(t,{...h,curve:l}),y=s(t,{...c,gain:0}),x=n(t,{...h,curve:p}),w=n(t,{...h,curve:r}),b=s(t,{...c,gain:0}),T=n(t,{...h,curve:d}),S=s(t,{...c,gain:0}),k=n(t,{...h,curve:f});return{connectGraph(){i.connect(m),i.connect(void 0===w.inputs?w:w.inputs[0]),m.connect(g,0),m.connect(y,0),m.connect(b,1),m.connect(S,1),w.connect(o),o.connect(void 0===v.inputs?v:v.inputs[0]),o.connect(void 0===x.inputs?x:x.inputs[0]),o.connect(void 0===T.inputs?T:T.inputs[0]),o.connect(void 0===k.inputs?k:k.inputs[0]),v.connect(g.gain),x.connect(y.gain),T.connect(b.gain),k.connect(S.gain),g.connect(u,0,0),b.connect(u,0,0),y.connect(u,0,1),S.connect(u,0,1)},disconnectGraph(){i.disconnect(m),i.disconnect(void 0===w.inputs?w:w.inputs[0]),m.disconnect(g,0),m.disconnect(y,0),m.disconnect(b,1),m.disconnect(S,1),w.disconnect(o),o.disconnect(void 0===v.inputs?v:v.inputs[0]),o.disconnect(void 0===x.inputs?x:x.inputs[0]),o.disconnect(void 0===T.inputs?T:T.inputs[0]),o.disconnect(void 0===k.inputs?k:k.inputs[0]),v.disconnect(g.gain),x.disconnect(y.gain),T.disconnect(b.gain),k.disconnect(S.gain),g.disconnect(u,0,0),b.disconnect(u,0,0),y.disconnect(u,0,1),S.disconnect(u,0,1)}}})(t,u,l,p);throw i()};return(e,{channelCount:n,channelCountMode:r,pan:a,...c})=>{if("max"===r)throw i();const h=t(e,{...c,channelCount:1,channelCountMode:r,numberOfInputs:2}),l=s(e,{...c,channelCount:n,channelCountMode:r,gain:1}),p=s(e,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:a});let{connectGraph:d,disconnectGraph:f}=u(e,n,l,p,h);Object.defineProperty(p.gain,"defaultValue",{get:()=>0}),Object.defineProperty(p.gain,"maxValue",{get:()=>1}),Object.defineProperty(p.gain,"minValue",{get:()=>-1});const _={get bufferSize(){},get channelCount(){return l.channelCount},set channelCount(t){l.channelCount!==t&&(m&&f(),({connectGraph:d,disconnectGraph:f}=u(e,t,l,p,h)),m&&d()),l.channelCount=t},get channelCountMode(){return l.channelCountMode},set channelCountMode(t){if("clamped-max"===t||"max"===t)throw i();l.channelCountMode=t},get channelInterpretation(){return l.channelInterpretation},set channelInterpretation(t){l.channelInterpretation=t},get context(){return l.context},get inputs(){return[l]},get numberOfInputs(){return l.numberOfInputs},get numberOfOutputs(){return l.numberOfOutputs},get pan(){return p.gain},addEventListener:(...t)=>l.addEventListener(t[0],t[1],t[2]),dispatchEvent:(...t)=>l.dispatchEvent(t[0]),removeEventListener:(...t)=>l.removeEventListener(t[0],t[1],t[2])};let m=!1;return o(Gt(_,h),()=>{d(),m=!0},()=>{f(),m=!1})}})(Es,Wt,Qt,nn,Ht,As),Ht),ln=((t,e,s,n,i,o)=>class extends t{constructor(t,r){const a=i(t),c={...ee,...r},h=s(a,c),u=o(a);super(t,!1,h,u?n():null),this._pan=e(this,u,h.pan)}get pan(){return this._pan}})(Ze,ps,un,((t,e,s,n,i)=>()=>{const o=new WeakMap;return{render(r,a,c){const h=o.get(a);return void 0!==h?Promise.resolve(h):(async(r,a,c)=>{let h=s(r);const u=E(h,a);if(!u){const t={channelCount:h.channelCount,channelCountMode:h.channelCountMode,channelInterpretation:h.channelInterpretation,pan:h.pan.value};h=e(a,t)}return o.set(a,h),u?await t(a,r.pan,h.pan,c):await n(a,r.pan,h.pan,c),H(h)?await i(r,a,h.inputs[0],c):await i(r,a,h,c),h})(r,a,c)}}})(as,un,st,us,Oe),Fe,Ne),pn=((t,e,s)=>()=>{const n=new WeakMap;return{render(i,o,r){const a=n.get(o);return void 0!==a?Promise.resolve(a):(async(i,o,r)=>{let a=e(i);if(!E(a,o)){const e={channelCount:a.channelCount,channelCountMode:a.channelCountMode,channelInterpretation:a.channelInterpretation,curve:a.curve,oversample:a.oversample};a=t(o,e)}return n.set(o,a),H(a)?await s(i,o,a.inputs[0],r):await s(i,o,a,r),a})(i,o,r)}}})(nn,st,Oe),dn=((t,e,s,n,i,o,r)=>class extends t{constructor(t,e){const a=i(t),c={...ne,...e},h=s(a,c);super(t,!0,h,o(a)?n():null),this._isCurveNullified=!1,this._nativeWaveShaperNode=h,r(this,1)}get curve(){return this._isCurveNullified?null:this._nativeWaveShaperNode.curve}set curve(t){if(null===t)this._isCurveNullified=!0,this._nativeWaveShaperNode.curve=new Float32Array([0,0]);else{if(t.length<2)throw e();this._isCurveNullified=!1,this._nativeWaveShaperNode.curve=t}}get oversample(){return this._nativeWaveShaperNode.oversample}set oversample(t){this._nativeWaveShaperNode.oversample=t}})(Ze,At,nn,pn,Fe,Ne,gs),fn=(t=>null!==t&&t.isSecureContext)(Te),_n=(t=>(e,s,n)=>{Object.defineProperties(t,{currentFrame:{configurable:!0,get:()=>Math.round(e*s)},currentTime:{configurable:!0,get:()=>e}});try{return n()}finally{null!==t&&(delete t.currentFrame,delete t.currentTime)}})(Te),mn=new WeakMap,gn=((t,e)=>s=>{let n=t.get(s);if(void 0!==n)return n;if(null===e)throw new Error("Missing the native OfflineAudioContext constructor.");return n=new e(1,1,8e3),t.set(s,n),n})(mn,Ve),vn=(t=>null===t?null:t.hasOwnProperty("AudioWorkletNode")?t.AudioWorkletNode:null)(Te),yn=fn?((t,e,s,n,i,o,r,a,c,h,u,l)=>(p,d,f={credentials:"omit"})=>{const m=o(p);if(void 0!==m.audioWorklet)return Promise.all([i(d),Promise.resolve(t(u,u))]).then(([[t,e],s])=>{const[n,i]=y(t,e),o=s?i:i.replace(/\s+extends\s+AudioWorkletProcessor\s*{/," extends (class extends AudioWorkletProcessor {__b=new WeakSet();constructor(){super();(p=>p.postMessage=(q=>(m,t)=>q.call(p,m,t?t.filter(u=>!this.__b.has(u)):t))(p.postMessage))(this.port)}}){"),c=new Blob([`${n};(registerProcessor=>{${o}\n})((n,p)=>registerProcessor(n,class extends p{${s?"":"__c = (a) => a.forEach(e=>this.__b.add(e.buffer));"}process(i,o,p){${s?"":"i.forEach(this.__c);o.forEach(this.__c);this.__c(Object.values(p));"}return super.process(i.map(j=>j.some(k=>k.length===0)?[]:j),o,p)}}))`],{type:"application/javascript; charset=utf-8"}),h=URL.createObjectURL(c);return m.audioWorklet.addModule(h,f).then(()=>{if(a(m))return;return r(m).audioWorklet.addModule(h,f)}).finally(()=>URL.revokeObjectURL(h))});const g=h.get(p);if(void 0!==g&&g.has(d))return Promise.resolve();const v=c.get(p);if(void 0!==v){const t=v.get(d);if(void 0!==t)return t}const b=i(d).then(([t,e])=>{const[n,i]=y(t,e);return s(`${n};((a,b)=>{(a[b]=a[b]||[]).push((AudioWorkletProcessor,global,registerProcessor,sampleRate,self,window)=>{${i}\n})})(window,'_AWGS')`)}).then(()=>{const t=l._AWGS.pop();if(void 0===t)throw new SyntaxError;n(m.currentTime,m.sampleRate,()=>t(class{},void 0,(t,s)=>{if(""===t.trim())throw e();const n=_.get(m);if(void 0!==n){if(n.has(t))throw e();w(s),x(s.parameterDescriptors),n.set(t,s)}else w(s),x(s.parameterDescriptors),_.set(m,new Map([[t,s]]))},m.sampleRate,void 0,void 0))});return void 0===v?c.set(p,new Map([[d,b]])):v.set(d,b),b.then(()=>{const t=h.get(p);void 0===t?h.set(p,new Set([d])):t.add(d)}).finally(()=>{const t=c.get(p);void 0!==t&&t.delete(d)}),b})(xe,Ht,(t=>e=>new Promise((s,n)=>{if(null===t)return void n(new SyntaxError);const i=t.document.head;if(null===i)n(new SyntaxError);else{const o=t.document.createElement("script"),r=new Blob([e],{type:"application/javascript"}),a=URL.createObjectURL(r),c=t.onerror,h=()=>{t.onerror=c,URL.revokeObjectURL(a)};t.onerror=(e,s,i,o,r)=>s===a||s===t.location.href&&1===i&&1===o?(h(),n(r),!1):null!==c?c(e,s,i,o,r):void 0,o.onerror=()=>{h(),n(new SyntaxError)},o.onload=()=>{h(),s()},o.src=a,o.type="module",i.appendChild(o)}}))(Te),_n,(t=>async e=>{try{const t=await fetch(e);if(t.ok)return[await t.text(),t.url]}catch{}throw t()})(()=>new DOMException("","AbortError")),Fe,gn,Ne,new WeakMap,new WeakMap,((t,e)=>async()=>{if(null===t)return!0;if(null===e)return!1;const s=new Blob(['class A extends AudioWorkletProcessor{process(i){this.port.postMessage(i,[i[0][0].buffer])}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,8e3),i=URL.createObjectURL(s);let o=!1,r=!1;try{await n.audioWorklet.addModule(i);const e=new t(n,"a",{numberOfOutputs:0}),s=n.createOscillator();e.port.onmessage=()=>o=!0,e.onprocessorerror=()=>r=!0,s.connect(e),await n.startRendering()}catch{}finally{URL.revokeObjectURL(i)}return o&&!r})(vn,Ve),Te):void 0,xn=((t,e)=>s=>t(s)||e(s))(We,Ne),wn=((t,e,s,n,i,o,r,a,c,h,u,l,p,d,f,_,m,g,v,y)=>class extends f{constructor(e,s){super(e,s),this._nativeContext=e,this._audioWorklet=void 0===t?void 0:{addModule:(e,s)=>t(this,e,s)}}get audioWorklet(){return this._audioWorklet}createAnalyser(){return new e(this)}createBiquadFilter(){return new i(this)}createBuffer(t,e,n){return new s({length:e,numberOfChannels:t,sampleRate:n})}createBufferSource(){return new n(this)}createChannelMerger(t=6){return new o(this,{numberOfInputs:t})}createChannelSplitter(t=6){return new r(this,{numberOfOutputs:t})}createConstantSource(){return new a(this)}createConvolver(){return new c(this)}createDelay(t=1){return new u(this,{maxDelayTime:t})}createDynamicsCompressor(){return new l(this)}createGain(){return new p(this)}createIIRFilter(t,e){return new d(this,{feedback:e,feedforward:t})}createOscillator(){return new _(this)}createPanner(){return new m(this)}createPeriodicWave(t,e,s={disableNormalization:!1}){return new g(this,{...s,imag:e,real:t})}createStereoPanner(){return new v(this)}createWaveShaper(){return new y(this)}decodeAudioData(t,e,s){return h(this._nativeContext,t).then(t=>("function"==typeof e&&e(t),t)).catch(t=>{throw"function"==typeof s&&s(t),t})}})(yn,Ye,ss,fs,vs,Rs,qs,Vs,Ps,((t,e,s,n,i,o,r,a,c,h,u)=>(l,p)=>{const d=r(l)?l:o(l);if(i.has(p)){const t=s();return Promise.reject(t)}try{i.add(p)}catch{}return e(c,()=>c(d))?d.decodeAudioData(p).then(s=>(e(a,()=>a(s))||u(s),t.add(s),s)):new Promise((e,s)=>{const i=()=>{try{(t=>{const{port1:e}=new MessageChannel;e.postMessage(t,[t])})(p)}catch{}},o=t=>{s(t),i()};try{d.decodeAudioData(p,s=>{"function"!=typeof s.copyFromChannel&&(h(s),F(s)),t.add(s),i(),e(s)},t=>{o(null===t?n():t)})}catch(t){o(t)}})})(He,xe,()=>new DOMException("","DataCloneError"),()=>new DOMException("","EncodingError"),new WeakSet,Fe,xn,R,Rt,ts,es),js,Bs,Ws,Xs,$s,Ks,cn,hn,ln,dn),bn=((t,e,s,n)=>class extends t{constructor(t,i){const o=s(t),r=e(o,i);if(n(o))throw TypeError();super(t,!0,r,null),this._nativeMediaElementAudioSourceNode=r}get mediaElement(){return this._nativeMediaElementAudioSourceNode.mediaElement}})(Ze,(t,e)=>t.createMediaElementSource(e.mediaElement),Fe,Ne),Tn=((t,e,s,n)=>class extends t{constructor(t,i){const o=s(t);if(n(o))throw new TypeError;const r={...Et,...i},a=e(o,r);super(t,!1,a,null),this._nativeMediaStreamAudioDestinationNode=a}get stream(){return this._nativeMediaStreamAudioDestinationNode.stream}})(Ze,(t,e)=>{const s=t.createMediaStreamDestination();return It(s,e),1===s.numberOfOutputs&&Object.defineProperty(s,"numberOfOutputs",{get:()=>0}),s},Fe,Ne),Sn=((t,e,s,n)=>class extends t{constructor(t,i){const o=s(t),r=e(o,i);if(n(o))throw new TypeError;super(t,!0,r,null),this._nativeMediaStreamAudioSourceNode=r}get mediaStream(){return this._nativeMediaStreamAudioSourceNode.mediaStream}})(Ze,(t,{mediaStream:e})=>{const s=e.getAudioTracks();s.sort((t,e)=>t.id<e.id?-1:t.id>e.id?1:0);const n=s.slice(0,1),i=t.createMediaStreamSource(new MediaStream(n));return Object.defineProperty(i,"mediaStream",{value:e}),i},Fe,Ne),kn=((t,e,s)=>class extends t{constructor(t,n){const i=s(t);super(t,!0,e(i,n),null)}})(Ze,((t,e)=>(s,{mediaStreamTrack:n})=>{if("function"==typeof s.createMediaStreamTrackSource)return s.createMediaStreamTrackSource(n);const i=new MediaStream([n]),o=s.createMediaStreamSource(i);if("audio"!==n.kind)throw t();if(e(s))throw new TypeError;return o})(At,Ne),Fe),Cn=((t,e,s,n,i,o,r,a,c)=>class extends t{constructor(t={}){if(null===c)throw new Error("Missing the native AudioContext constructor.");const e=new c(t);if(null===e)throw n();if(!G(t.latencyHint))throw new TypeError(`The provided value '${t.latencyHint}' is not a valid enum value of type AudioContextLatencyCategory.`);if(void 0!==t.sampleRate&&e.sampleRate!==t.sampleRate)throw s();super(e,2);const{latencyHint:i}=t,{sampleRate:o}=e;if(this._baseLatency="number"==typeof e.baseLatency?e.baseLatency:"balanced"===i?512/o:"interactive"===i||void 0===i?256/o:"playback"===i?1024/o:128*Math.max(2,Math.min(128,Math.round(i*o/128)))/o,this._nativeAudioContext=e,"webkitAudioContext"===c.name?(this._nativeGainNode=e.createGain(),this._nativeOscillatorNode=e.createOscillator(),this._nativeGainNode.gain.value=1e-37,this._nativeOscillatorNode.connect(this._nativeGainNode).connect(e.destination),this._nativeOscillatorNode.start()):(this._nativeGainNode=null,this._nativeOscillatorNode=null),this._state=null,"running"===e.state){this._state="suspended";const t=()=>{"suspended"===this._state&&(this._state=null),e.removeEventListener("statechange",t)};e.addEventListener("statechange",t)}}get baseLatency(){return this._baseLatency}get state(){return null!==this._state?this._state:this._nativeAudioContext.state}close(){return"closed"===this.state?this._nativeAudioContext.close().then(()=>{throw e()}):("suspended"===this._state&&(this._state=null),this._nativeAudioContext.close().then(()=>{null!==this._nativeGainNode&&null!==this._nativeOscillatorNode&&(this._nativeOscillatorNode.stop(),this._nativeGainNode.disconnect(),this._nativeOscillatorNode.disconnect()),W(this)}))}createMediaElementSource(t){return new i(this,{mediaElement:t})}createMediaStreamDestination(){return new o(this)}createMediaStreamSource(t){return new r(this,{mediaStream:t})}createMediaStreamTrackSource(t){return new a(this,{mediaStreamTrack:t})}resume(){return"suspended"===this._state?new Promise((t,e)=>{const s=()=>{this._nativeAudioContext.removeEventListener("statechange",s),"running"===this._nativeAudioContext.state?t():this.resume().then(t,e)};this._nativeAudioContext.addEventListener("statechange",s)}):this._nativeAudioContext.resume().catch(t=>{if(void 0===t||15===t.code)throw e();throw t})}suspend(){return this._nativeAudioContext.suspend().catch(t=>{if(void 0===t)throw e();throw t})}})(wn,At,Ht,se,bn,Tn,Sn,kn,Be),An=(Dn=Hs,t=>{const e=Dn.get(t);if(void 0===e)throw new Error("The context has no set of AudioWorkletNodes.");return e});var Dn;const On=(Mn=An,(t,e)=>{Mn(t).add(e)});var Mn;const En=(t=>(e,s,n=0,i=0)=>{const o=e[n];if(void 0===o)throw t();return ct(s)?o.connect(s,0,i):o.connect(s,0)})(q),Rn=(t=>(e,s)=>{t(e).delete(s)})(An),qn=(t=>(e,s,n,i=0)=>void 0===s?e.forEach(t=>t.disconnect()):"number"==typeof s?St(t,e,s).disconnect():ct(s)?void 0===n?e.forEach(t=>t.disconnect(s)):void 0===i?St(t,e,n).disconnect(s,0):St(t,e,n).disconnect(s,0,i):void 0===n?e.forEach(t=>t.disconnect(s)):St(t,e,n).disconnect(s,0))(q),Fn=new WeakMap,In=((t,e)=>s=>e(t,s))(Fn,b),Vn=((t,e,s,n,i,o,r,a,c,h,u,l,p)=>(d,f,_,g)=>{if(0===g.numberOfInputs&&0===g.numberOfOutputs)throw c();const v=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(v.some(t=>t<1))throw c();if(v.length!==g.numberOfOutputs)throw e();if("explicit"!==g.channelCountMode)throw c();const y=g.channelCount*g.numberOfInputs,x=v.reduce((t,e)=>t+e,0),w=void 0===_.parameterDescriptors?0:_.parameterDescriptors.length;if(y+w>6||x>6)throw c();const b=new MessageChannel,T=[],S=[];for(let t=0;t<g.numberOfInputs;t+=1)T.push(r(d,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),S.push(i(d,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const k=[];if(void 0!==_.parameterDescriptors)for(const{defaultValue:t,maxValue:e,minValue:s,name:n}of _.parameterDescriptors){const i=o(d,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:void 0!==g.parameterData[n]?g.parameterData[n]:void 0===t?0:t});Object.defineProperties(i.offset,{defaultValue:{get:()=>void 0===t?0:t},maxValue:{get:()=>void 0===e?N:e},minValue:{get:()=>void 0===s?V:s}}),k.push(i)}const C=n(d,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,y+w)}),A=Lt(f,d.sampleRate),D=a(d,A,y+w,Math.max(1,x)),O=i(d,{channelCount:Math.max(1,x),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,x)}),M=[];for(let t=0;t<g.numberOfOutputs;t+=1)M.push(n(d,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:v[t]}));for(let t=0;t<g.numberOfInputs;t+=1){T[t].connect(S[t]);for(let e=0;e<g.channelCount;e+=1)S[t].connect(C,e,t*g.channelCount+e)}const E=new pt(void 0===_.parameterDescriptors?[]:_.parameterDescriptors.map(({name:t},e)=>{const s=k[e];return s.connect(C,0,y+e),s.start(0),[t,s.offset]}));C.connect(D);let R=g.channelInterpretation,q=null;const F=0===g.numberOfOutputs?[D]:M,I={get bufferSize(){return A},get channelCount(){return g.channelCount},set channelCount(t){throw s()},get channelCountMode(){return g.channelCountMode},set channelCountMode(t){throw s()},get channelInterpretation(){return R},set channelInterpretation(t){for(const e of T)e.channelInterpretation=t;R=t},get context(){return D.context},get inputs(){return T},get numberOfInputs(){return g.numberOfInputs},get numberOfOutputs(){return g.numberOfOutputs},get onprocessorerror(){return q},set onprocessorerror(t){"function"==typeof q&&I.removeEventListener("processorerror",q),q="function"==typeof t?t:null,"function"==typeof q&&I.addEventListener("processorerror",q)},get parameters(){return E},get port(){return b.port2},addEventListener:(...t)=>D.addEventListener(t[0],t[1],t[2]),connect:t.bind(null,F),disconnect:h.bind(null,F),dispatchEvent:(...t)=>D.dispatchEvent(t[0]),removeEventListener:(...t)=>D.removeEventListener(t[0],t[1],t[2])},P=new Map;var j,L;b.port1.addEventListener=(j=b.port1.addEventListener,(...t)=>{if("message"===t[0]){const e="function"==typeof t[1]?t[1]:"object"==typeof t[1]&&null!==t[1]&&"function"==typeof t[1].handleEvent?t[1].handleEvent:null;if(null!==e){const s=P.get(t[1]);void 0!==s?t[1]=s:(t[1]=t=>{u(d.currentTime,d.sampleRate,()=>e(t))},P.set(e,t[1]))}}return j.call(b.port1,t[0],t[1],t[2])}),b.port1.removeEventListener=(L=b.port1.removeEventListener,(...t)=>{if("message"===t[0]){const e=P.get(t[1]);void 0!==e&&(P.delete(t[1]),t[1]=e)}return L.call(b.port1,t[0],t[1],t[2])});let z=null;Object.defineProperty(b.port1,"onmessage",{get:()=>z,set:t=>{"function"==typeof z&&b.port1.removeEventListener("message",z),z="function"==typeof t?t:null,"function"==typeof z&&(b.port1.addEventListener("message",z),b.port1.start())}}),_.prototype.port=b.port1;let B=null;((t,e,s,n)=>{let i=m.get(t);void 0===i&&(i=new WeakMap,m.set(t,i));const o=zt(s,n);return i.set(e,o),o})(d,I,_,g).then(t=>B=t);const W=mt(g.numberOfInputs,g.channelCount),G=mt(g.numberOfOutputs,v),U=void 0===_.parameterDescriptors?[]:_.parameterDescriptors.reduce((t,{name:e})=>({...t,[e]:new Float32Array(128)}),{});let Q=!0;const Z=()=>{g.numberOfOutputs>0&&D.disconnect(O);for(let t=0,e=0;t<g.numberOfOutputs;t+=1){const s=M[t];for(let n=0;n<v[t];n+=1)O.disconnect(s,e+n,n);e+=v[t]}},X=new Map;D.onaudioprocess=({inputBuffer:t,outputBuffer:e})=>{if(null!==B){const s=l(I);for(let n=0;n<A;n+=128){for(let e=0;e<g.numberOfInputs;e+=1)for(let s=0;s<g.channelCount;s+=1)ft(t,W[e],s,s,n);void 0!==_.parameterDescriptors&&_.parameterDescriptors.forEach(({name:e},s)=>{ft(t,U,e,y+s,n)});for(let t=0;t<g.numberOfInputs;t+=1)for(let e=0;e<v[t];e+=1)0===G[t][e].byteLength&&(G[t][e]=new Float32Array(128));try{const t=W.map((t,e)=>{if(s[e].size>0)return X.set(e,A/128),t;const n=X.get(e);return void 0===n?[]:(t.every(t=>t.every(t=>0===t))&&(1===n?X.delete(e):X.set(e,n-1)),t)}),i=u(d.currentTime+n/d.sampleRate,d.sampleRate,()=>B.process(t,G,U));Q=i;for(let t=0,s=0;t<g.numberOfOutputs;t+=1){for(let i=0;i<v[t];i+=1)_t(e,G[t],i,s+i,n);s+=v[t]}}catch(t){Q=!1,I.dispatchEvent(new ErrorEvent("processorerror",{colno:t.colno,filename:t.filename,lineno:t.lineno,message:t.message}))}if(!Q){for(let t=0;t<g.numberOfInputs;t+=1){T[t].disconnect(S[t]);for(let e=0;e<g.channelCount;e+=1)S[n].disconnect(C,e,t*g.channelCount+e)}if(void 0!==_.parameterDescriptors){const t=_.parameterDescriptors.length;for(let e=0;e<t;e+=1){const t=k[e];t.disconnect(C,0,y+e),t.stop()}}C.disconnect(D),D.onaudioprocess=null,Y?Z():J();break}}}};let Y=!1;const H=r(d,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0}),$=()=>D.connect(H).connect(d.destination),J=()=>{D.disconnect(H),H.disconnect()};return $(),p(I,()=>{if(Q){J(),g.numberOfOutputs>0&&D.connect(O);for(let t=0,e=0;t<g.numberOfOutputs;t+=1){const s=M[t];for(let n=0;n<v[t];n+=1)O.connect(s,e+n,n);e+=v[t]}}Y=!0},()=>{Q&&($(),Z()),Y=!1})})(En,q,At,Es,Wt,Is,Qt,Yt,Ht,qn,_n,In,As),Nn=((t,e,s,n,i)=>(o,r,a,c,h,u)=>{if(null!==a)try{const e=new a(o,c,u),n=new Map;let r=null;if(Object.defineProperties(e,{channelCount:{get:()=>u.channelCount,set:()=>{throw t()}},channelCountMode:{get:()=>"explicit",set:()=>{throw t()}},onprocessorerror:{get:()=>r,set:t=>{"function"==typeof r&&e.removeEventListener("processorerror",r),r="function"==typeof t?t:null,"function"==typeof r&&e.addEventListener("processorerror",r)}}}),e.addEventListener=(p=e.addEventListener,(...t)=>{if("processorerror"===t[0]){const e="function"==typeof t[1]?t[1]:"object"==typeof t[1]&&null!==t[1]&&"function"==typeof t[1].handleEvent?t[1].handleEvent:null;if(null!==e){const s=n.get(t[1]);void 0!==s?t[1]=s:(t[1]=s=>{"error"===s.type?(Object.defineProperties(s,{type:{value:"processorerror"}}),e(s)):e(new ErrorEvent(t[0],{...s}))},n.set(e,t[1]))}}return p.call(e,"error",t[1],t[2]),p.call(e,...t)}),e.removeEventListener=(l=e.removeEventListener,(...t)=>{if("processorerror"===t[0]){const e=n.get(t[1]);void 0!==e&&(n.delete(t[1]),t[1]=e)}return l.call(e,"error",t[1],t[2]),l.call(e,t[0],t[1],t[2])}),0!==u.numberOfOutputs){const t=s(o,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",gain:0});e.connect(t).connect(o.destination);return i(e,()=>t.disconnect(),()=>t.connect(o.destination))}return e}catch(t){if(11===t.code)throw n();throw t}var l,p;if(void 0===h)throw n();return(t=>{const{port1:e}=new MessageChannel;try{e.postMessage(t)}finally{e.close()}})(u),e(o,r,h,u)})(At,Vn,Qt,Ht,As),Pn=((t,e,s,n,i,o,r,a,c,h,u,l,p,d,f,_)=>(m,g,v)=>{const y=new WeakMap;let x=null;return{render(w,b,T){a(b,w);const S=y.get(b);return void 0!==S?Promise.resolve(S):(async(a,w,b)=>{let T=u(a),S=null;const k=E(T,w),C=Array.isArray(g.outputChannelCount)?g.outputChannelCount:Array.from(g.outputChannelCount);if(null===l){const t=C.reduce((t,e)=>t+e,0),s=i(w,{channelCount:Math.max(1,t),channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:Math.max(1,t)}),o=[];for(let t=0;t<a.numberOfOutputs;t+=1)o.push(n(w,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:C[t]}));const h=r(w,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1});h.connect=e.bind(null,o),h.disconnect=c.bind(null,o),S=[s,o,h]}else k||(T=new l(w,m));if(y.set(w,null===S?T:S[2]),null!==S){if(null===x){if(void 0===v)throw new Error("Missing the processor constructor.");if(null===p)throw new Error("Missing the native OfflineAudioContext constructor.");const t=a.channelCount*a.numberOfInputs,e=void 0===v.parameterDescriptors?0:v.parameterDescriptors.length,s=t+e,c=async()=>{const c=new p(s,128*Math.ceil(a.context.length/128),w.sampleRate),h=[],u=[];for(let t=0;t<g.numberOfInputs;t+=1)h.push(r(c,{channelCount:g.channelCount,channelCountMode:g.channelCountMode,channelInterpretation:g.channelInterpretation,gain:1})),u.push(i(c,{channelCount:g.channelCount,channelCountMode:"explicit",channelInterpretation:"discrete",numberOfOutputs:g.channelCount}));const l=await Promise.all(Array.from(a.parameters.values()).map(async t=>{const e=o(c,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"discrete",offset:t.value});return await d(c,t,e.offset,b),e})),m=n(c,{channelCount:1,channelCountMode:"explicit",channelInterpretation:"speakers",numberOfInputs:Math.max(1,t+e)});for(let t=0;t<g.numberOfInputs;t+=1){h[t].connect(u[t]);for(let e=0;e<g.channelCount;e+=1)u[t].connect(m,e,t*g.channelCount+e)}for(const[e,s]of l.entries())s.connect(m,0,t+e),s.start(0);return m.connect(c.destination),await Promise.all(h.map(t=>f(a,c,t,b))),_(c)};x=gt(a,0===s?null:await c(),w,g,C,v,h)}const t=await x,e=s(w,{buffer:null,channelCount:2,channelCountMode:"max",channelInterpretation:"speakers",loop:!1,loopEnd:0,loopStart:0,playbackRate:1}),[c,u,l]=S;null!==t&&(e.buffer=t,e.start(0)),e.connect(c);for(let t=0,e=0;t<a.numberOfOutputs;t+=1){const s=u[t];for(let n=0;n<C[t];n+=1)c.connect(s,e+n,n);e+=C[t]}return l}if(k)for(const[e,s]of a.parameters.entries())await t(w,s,T.parameters.get(e),b);else for(const[t,e]of a.parameters.entries())await d(w,e,T.parameters.get(t),b);return await f(a,w,T,b),T})(w,b,T)}}})(as,En,cs,Es,Wt,Is,Qt,Rn,qn,_n,st,vn,Ve,us,Oe,Us),jn=(t=>e=>t.get(e))(mn),Ln=(t=>(e,s)=>{t.set(e,s)})(Fn),zn=fn?((t,e,s,n,i,o,r,a,c,h,u,l,p)=>class extends e{constructor(e,p,d){var f;const m=a(e),g=c(m),v=u({...dt,...d}),y=_.get(m),x=null==y?void 0:y.get(p),w=g||"closed"!==m.state?m:null!==(f=r(m))&&void 0!==f?f:m,b=i(w,g?null:e.baseLatency,h,p,x,v);super(e,!0,b,g?n(p,v,x):null);const T=[];b.parameters.forEach((t,e)=>{const n=s(this,g,t);T.push([e,n])}),this._nativeAudioWorkletNode=b,this._onprocessorerror=null,this._parameters=new pt(T),g&&t(m,this);const{activeInputs:S}=o(this);l(b,S)}get onprocessorerror(){return this._onprocessorerror}set onprocessorerror(t){const e="function"==typeof t?p(this,t):null;this._nativeAudioWorkletNode.onprocessorerror=e;const s=this._nativeAudioWorkletNode.onprocessorerror;this._onprocessorerror=null!==s&&s===e?t:s}get parameters(){return null===this._parameters?this._nativeAudioWorkletNode.parameters:this._parameters}get port(){return this._nativeAudioWorkletNode.port}})(On,Ze,ps,Pn,Nn,L,jn,Fe,Ne,vn,t=>({...t,outputChannelCount:void 0!==t.outputChannelCount?t.outputChannelCount:1===t.numberOfInputs&&1===t.numberOfOutputs?[t.channelCount]:Array.from({length:t.numberOfOutputs},()=>1)}),Ln,de):void 0,Bn=(((t,e,s,n,i)=>{})(At,Ht,se,$s,Be),((t,e)=>(s,n,i)=>{if(null===e)throw new Error("Missing the native OfflineAudioContext constructor.");try{return new e(s,n,i)}catch(e){if("SyntaxError"===e.name)throw t();throw e}})(Ht,Ve)),Wn=((t,e,s,n,i,o,r,a)=>{const c=[];return(h,u)=>s(h).render(h,u,c).then(()=>Promise.all(Array.from(n(u)).map(t=>s(t).render(t,u,c)))).then(()=>i(u)).then(s=>("function"!=typeof s.copyFromChannel?(r(s),F(s)):e(o,()=>o(s))||a(s),t.add(s),s))})(He,xe,Ae,An,Us,R,ts,es),Gn=(((t,e,s,n,i)=>{})(xe,At,Bn,$s,Wn),((t,e,s,n,i)=>class extends t{constructor(t,s,i){let o;if("number"==typeof t&&void 0!==s&&void 0!==i)o={length:s,numberOfChannels:t,sampleRate:i};else{if("object"!=typeof t)throw new Error("The given parameters are not valid.");o=t}const{length:r,numberOfChannels:a,sampleRate:c}={...$t,...o},h=n(a,r,c);e(Rt,()=>Rt(h))||h.addEventListener("statechange",(()=>{let t=0;const e=s=>{"running"===this._state&&(t>0?(h.removeEventListener("statechange",e),s.stopImmediatePropagation(),this._waitForThePromiseToSettle(s)):t+=1)};return e})()),super(h,a),this._length=r,this._nativeOfflineAudioContext=h,this._state=null}get length(){return void 0===this._nativeOfflineAudioContext.length?this._length:this._nativeOfflineAudioContext.length}get state(){return null===this._state?this._nativeOfflineAudioContext.state:this._state}startRendering(){return"running"===this._state?Promise.reject(s()):(this._state="running",i(this.destination,this._nativeOfflineAudioContext).finally(()=>{this._state=null,W(this)}))}_waitForThePromiseToSettle(t){null===this._state?this._nativeOfflineAudioContext.dispatchEvent(t):setTimeout(()=>this._waitForThePromiseToSettle(t))}})(wn,xe,At,Bn,Wn)),Un=((t,e)=>s=>{const n=t.get(s);return e(n)||e(s)})(p,We),Qn=(Zn=h,Xn=Ue,t=>Zn.has(t)||Xn(t));var Zn,Xn;const Yn=(Hn=l,$n=Qe,t=>Hn.has(t)||$n(t));var Hn,$n;const Jn=((t,e)=>s=>{const n=t.get(s);return e(n)||e(s)})(p,Ne),Kn=()=>(async(t,e,s,n,i,o,r,a,c,h,u,l,p,d,f,_)=>{if(t(e,e)&&t(s,s)&&t(i,i)&&t(o,o)&&t(a,a)&&t(c,c)&&t(h,h)&&t(u,u)&&t(l,l)&&t(p,p)&&t(d,d)){return(await Promise.all([t(n,n),t(r,r),t(f,f),t(_,_)])).every(t=>t)}return!1})(xe,(t=>()=>{if(null===t)return!1;const e=new t(1,1,44100).createBuffer(1,1,44100);if(void 0===e.copyToChannel)return!0;const s=new Float32Array(2);try{e.copyFromChannel(s,0,0)}catch{return!1}return!0})(Ve),(t=>()=>{if(null===t)return!1;if(void 0!==t.prototype&&void 0!==t.prototype.close)return!0;const e=new t,s=void 0!==e.close;try{e.close()}catch{}return s})(Be),(t=>()=>{if(null===t)return Promise.resolve(!1);const e=new t(1,1,44100);return new Promise(t=>{let s=!0;const n=n=>{s&&(s=!1,e.startRendering(),t(n instanceof TypeError))};let i;try{i=e.decodeAudioData(null,()=>{},n)}catch(t){n(t)}void 0!==i&&i.catch(n)})})(Ve),(t=>()=>{if(null===t)return!1;let e;try{e=new t({latencyHint:"balanced"})}catch{return!1}return e.close(),!0})(Be),(t=>()=>{if(null===t)return!1;const e=new t(1,1,44100).createGain(),s=e.connect(e)===e;return e.disconnect(e),s})(Ve),((t,e)=>async()=>{if(null===t)return!0;if(null===e)return!1;const s=new Blob(['class A extends AudioWorkletProcessor{process(){this.port.postMessage(0)}}registerProcessor("a",A)'],{type:"application/javascript; charset=utf-8"}),n=new e(1,128,8e3),i=URL.createObjectURL(s);let o=!1;try{await n.audioWorklet.addModule(i);const e=new t(n,"a",{numberOfOutputs:0}),s=n.createOscillator();e.port.onmessage=()=>o=!0,s.connect(e),s.start(0),await n.startRendering(),o||await new Promise(t=>setTimeout(t,5))}catch{}finally{URL.revokeObjectURL(i)}return o})(vn,Ve),(t=>()=>{if(null===t)return!1;const e=new t(1,1,44100).createChannelMerger();if("max"===e.channelCountMode)return!0;try{e.channelCount=2}catch{return!0}return!1})(Ve),(t=>()=>{if(null===t)return!1;const e=new t(1,1,44100);if(void 0===e.createConstantSource)return!0;return e.createConstantSource().offset.maxValue!==Number.POSITIVE_INFINITY})(Ve),(t=>()=>{if(null===t)return!1;const e=new t(1,1,44100),s=e.createConvolver();s.buffer=e.createBuffer(1,1,e.sampleRate);try{s.buffer=e.createBuffer(1,1,e.sampleRate)}catch{return!1}return!0})(Ve),(t=>()=>{if(null===t)return!1;const e=new t(1,1,44100).createConvolver();try{e.channelCount=1}catch{return!1}return!0})(Ve),ue,(t=>()=>null!==t&&t.hasOwnProperty("isSecureContext"))(Te),(t=>()=>{if(null===t)return!1;const e=new t;try{return e.createMediaStreamSource(new MediaStream),!1}catch(t){return!0}})(Be),(t=>()=>{if(null===t)return Promise.resolve(!1);const e=new t(1,1,44100);if(void 0===e.createStereoPanner)return Promise.resolve(!0);if(void 0===e.createConstantSource)return Promise.resolve(!0);const s=e.createConstantSource(),n=e.createStereoPanner();return s.channelCount=1,s.offset.value=1,n.channelCount=1,s.start(),s.connect(n).connect(e.destination),e.startRendering().then(t=>1!==t.getChannelData(0)[0])})(Ve),le);function ti(t,e){if(!t)throw new Error(e)}function ei(t,e,s=1/0){if(!(e<=t&&t<=s))throw new RangeError(`Value must be within [${e}, ${s}], got: ${t}`)}function si(t){t.isOffline||"running"===t.state||ri('The AudioContext is "suspended". Invoke Tone.start() from a user action to start the audio.')}let ni=console;function ii(t){ni=t}function oi(...t){ni.log(...t)}function ri(...t){ni.warn(...t)}function ai(t){return void 0===t}function ci(t){return!ai(t)}function hi(t){return"function"==typeof t}function ui(t){return"number"==typeof t}function li(t){return"[object Object]"===Object.prototype.toString.call(t)&&t.constructor===Object}function pi(t){return"boolean"==typeof t}function di(t){return Array.isArray(t)}function fi(t){return"string"==typeof t}function _i(t){return fi(t)&&/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i.test(t)}const mi="object"==typeof self?self:null,gi=mi&&(mi.hasOwnProperty("AudioContext")||mi.hasOwnProperty("webkitAudioContext"));function vi(t,e,s,n){var i,o=arguments.length,r=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,s):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,s,n);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,s,r):i(e,s))||r);return o>3&&r&&Object.defineProperty(e,s,r),r}function yi(t,e,s,n){return new(s||(s=Promise))((function(i,o){function r(t){try{c(n.next(t))}catch(t){o(t)}}function a(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof s?e:new s((function(t){t(e)}))).then(r,a)}c((n=n.apply(t,e||[])).next())}))}Object.create;Object.create;class xi{constructor(t,e,s){this._callback=t,this._type=e,this._updateInterval=s,this._createClock()}_createWorker(){const t=new Blob([`\n\t\t\t// the initial timeout time\n\t\t\tlet timeoutTime =  ${(1e3*this._updateInterval).toFixed(1)};\n\t\t\t// onmessage callback\n\t\t\tself.onmessage = function(msg){\n\t\t\t\ttimeoutTime = parseInt(msg.data);\n\t\t\t};\n\t\t\t// the tick function which posts a message\n\t\t\t// and schedules a new tick\n\t\t\tfunction tick(){\n\t\t\t\tsetTimeout(tick, timeoutTime);\n\t\t\t\tself.postMessage('tick');\n\t\t\t}\n\t\t\t// call tick initially\n\t\t\ttick();\n\t\t\t`],{type:"text/javascript"}),e=URL.createObjectURL(t),s=new Worker(e);s.onmessage=this._callback.bind(this),this._worker=s}_createTimeout(){this._timeout=setTimeout(()=>{this._createTimeout(),this._callback()},1e3*this._updateInterval)}_createClock(){if("worker"===this._type)try{this._createWorker()}catch(t){this._type="timeout",this._createClock()}else"timeout"===this._type&&this._createTimeout()}_disposeClock(){this._timeout&&(clearTimeout(this._timeout),this._timeout=0),this._worker&&(this._worker.terminate(),this._worker.onmessage=null)}get updateInterval(){return this._updateInterval}set updateInterval(t){this._updateInterval=Math.max(t,128/44100),"worker"===this._type&&this._worker.postMessage(Math.max(1e3*t,1))}get type(){return this._type}set type(t){this._disposeClock(),this._type=t,this._createClock()}dispose(){this._disposeClock()}}function wi(t){return Yn(t)}function bi(t){return Qn(t)}function Ti(t){return Jn(t)}function Si(t){return Un(t)}function ki(t){return t instanceof AudioBuffer}function Ci(t,e){return"value"===t||wi(e)||bi(e)||ki(e)}function Ai(t,...e){if(!e.length)return t;const s=e.shift();if(li(t)&&li(s))for(const e in s)Ci(e,s[e])?t[e]=s[e]:li(s[e])?(t[e]||Object.assign(t,{[e]:{}}),Ai(t[e],s[e])):Object.assign(t,{[e]:s[e]});return Ai(t,...e)}function Di(t,e,s=[],n){const i={},o=Array.from(e);if(li(o[0])&&n&&!Reflect.has(o[0],n)){Object.keys(o[0]).some(e=>Reflect.has(t,e))||(Ai(i,{[n]:o[0]}),s.splice(s.indexOf(n),1),o.shift())}if(1===o.length&&li(o[0]))Ai(i,o[0]);else for(let t=0;t<s.length;t++)ci(o[t])&&(i[s[t]]=o[t]);return Ai(t,i)}function Oi(t,e){return ai(t)?e:t}function Mi(t,e){return e.forEach(e=>{Reflect.has(t,e)&&delete t[e]}),t}
/**
 * Tone.js
 * @author Yotam Mann
 * @license http://opensource.org/licenses/MIT MIT License
 * @copyright 2014-2019 Yotam Mann
 */class Ei{constructor(){this.debug=!1,this._wasDisposed=!1}static getDefaults(){return{}}log(...t){(this.debug||mi&&this.toString()===mi.TONE_DEBUG_CLASS)&&oi(this,...t)}dispose(){return this._wasDisposed=!0,this}get disposed(){return this._wasDisposed}toString(){return this.name}}Ei.version=o;function Ri(t,e){return t>e+1e-6}function qi(t,e){return Ri(t,e)||Ii(t,e)}function Fi(t,e){return t+1e-6<e}function Ii(t,e){return Math.abs(t-e)<1e-6}function Vi(t,e,s){return Math.max(Math.min(t,s),e)}class Ni extends Ei{constructor(){super(),this.name="Timeline",this._timeline=[];const t=Di(Ni.getDefaults(),arguments,["memory"]);this.memory=t.memory,this.increasing=t.increasing}static getDefaults(){return{memory:1/0,increasing:!1}}get length(){return this._timeline.length}add(t){if(ti(Reflect.has(t,"time"),"Timeline: events must have a time attribute"),t.time=t.time.valueOf(),this.increasing&&this.length){const e=this._timeline[this.length-1];ti(qi(t.time,e.time),"The time must be greater than or equal to the last scheduled time"),this._timeline.push(t)}else{const e=this._search(t.time);this._timeline.splice(e+1,0,t)}if(this.length>this.memory){const t=this.length-this.memory;this._timeline.splice(0,t)}return this}remove(t){const e=this._timeline.indexOf(t);return-1!==e&&this._timeline.splice(e,1),this}get(t,e="time"){const s=this._search(t,e);return-1!==s?this._timeline[s]:null}peek(){return this._timeline[0]}shift(){return this._timeline.shift()}getAfter(t,e="time"){const s=this._search(t,e);return s+1<this._timeline.length?this._timeline[s+1]:null}getBefore(t){const e=this._timeline.length;if(e>0&&this._timeline[e-1].time<t)return this._timeline[e-1];const s=this._search(t);return s-1>=0?this._timeline[s-1]:null}cancel(t){if(this._timeline.length>1){let e=this._search(t);if(e>=0)if(Ii(this._timeline[e].time,t)){for(let s=e;s>=0&&Ii(this._timeline[s].time,t);s--)e=s;this._timeline=this._timeline.slice(0,e)}else this._timeline=this._timeline.slice(0,e+1);else this._timeline=[]}else 1===this._timeline.length&&qi(this._timeline[0].time,t)&&(this._timeline=[]);return this}cancelBefore(t){const e=this._search(t);return e>=0&&(this._timeline=this._timeline.slice(e+1)),this}previousEvent(t){const e=this._timeline.indexOf(t);return e>0?this._timeline[e-1]:null}_search(t,e="time"){if(0===this._timeline.length)return-1;let s=0;const n=this._timeline.length;let i=n;if(n>0&&this._timeline[n-1][e]<=t)return n-1;for(;s<i;){let n=Math.floor(s+(i-s)/2);const o=this._timeline[n],r=this._timeline[n+1];if(Ii(o[e],t)){for(let s=n;s<this._timeline.length;s++){if(!Ii(this._timeline[s][e],t))break;n=s}return n}if(Fi(o[e],t)&&Ri(r[e],t))return n;Ri(o[e],t)?i=n:s=n+1}return-1}_iterate(t,e=0,s=this._timeline.length-1){this._timeline.slice(e,s+1).forEach(t)}forEach(t){return this._iterate(t),this}forEachBefore(t,e){const s=this._search(t);return-1!==s&&this._iterate(e,0,s),this}forEachAfter(t,e){const s=this._search(t);return this._iterate(e,s+1),this}forEachBetween(t,e,s){let n=this._search(t),i=this._search(e);return-1!==n&&-1!==i?(this._timeline[n].time!==t&&(n+=1),this._timeline[i].time===e&&(i-=1),this._iterate(s,n,i)):-1===n&&this._iterate(s,0,i),this}forEachFrom(t,e){let s=this._search(t);for(;s>=0&&this._timeline[s].time>=t;)s--;return this._iterate(e,s+1),this}forEachAtTime(t,e){const s=this._search(t);if(-1!==s&&Ii(this._timeline[s].time,t)){let n=s;for(let e=s;e>=0&&Ii(this._timeline[e].time,t);e--)n=e;this._iterate(t=>{e(t)},n,s)}return this}dispose(){return super.dispose(),this._timeline=[],this}}const Pi=[];function ji(t){Pi.push(t)}const Li=[];function zi(t){Li.push(t)}class Bi extends Ei{constructor(){super(...arguments),this.name="Emitter"}on(t,e){return t.split(/\W+/).forEach(t=>{ai(this._events)&&(this._events={}),this._events.hasOwnProperty(t)||(this._events[t]=[]),this._events[t].push(e)}),this}once(t,e){const s=(...n)=>{e(...n),this.off(t,s)};return this.on(t,s),this}off(t,e){return t.split(/\W+/).forEach(s=>{if(ai(this._events)&&(this._events={}),this._events.hasOwnProperty(t))if(ai(e))this._events[t]=[];else{const s=this._events[t];for(let t=s.length-1;t>=0;t--)s[t]===e&&s.splice(t,1)}}),this}emit(t,...e){if(this._events&&this._events.hasOwnProperty(t)){const s=this._events[t].slice(0);for(let t=0,n=s.length;t<n;t++)s[t].apply(this,e)}return this}static mixin(t){["on","once","off","emit"].forEach(e=>{const s=Object.getOwnPropertyDescriptor(Bi.prototype,e);Object.defineProperty(t.prototype,e,s)})}dispose(){return super.dispose(),this._events=void 0,this}}class Wi extends Bi{constructor(){super(...arguments),this.isOffline=!1}toJSON(){return{}}}class Gi extends Wi{constructor(){super(),this.name="Context",this._constants=new Map,this._timeouts=new Ni,this._timeoutIds=0,this._initialized=!1,this.isOffline=!1,this._workletModules=new Map;const t=Di(Gi.getDefaults(),arguments,["context"]);t.context?this._context=t.context:this._context=function(t){return new Cn(t)}({latencyHint:t.latencyHint}),this._ticker=new xi(this.emit.bind(this,"tick"),t.clockSource,t.updateInterval),this.on("tick",this._timeoutLoop.bind(this)),this._context.onstatechange=()=>{this.emit("statechange",this.state)},this._setLatencyHint(t.latencyHint),this.lookAhead=t.lookAhead}static getDefaults(){return{clockSource:"worker",latencyHint:"interactive",lookAhead:.1,updateInterval:.05}}initialize(){var t;return this._initialized||(t=this,Pi.forEach(e=>e(t)),this._initialized=!0),this}createAnalyser(){return this._context.createAnalyser()}createOscillator(){return this._context.createOscillator()}createBufferSource(){return this._context.createBufferSource()}createBiquadFilter(){return this._context.createBiquadFilter()}createBuffer(t,e,s){return this._context.createBuffer(t,e,s)}createChannelMerger(t){return this._context.createChannelMerger(t)}createChannelSplitter(t){return this._context.createChannelSplitter(t)}createConstantSource(){return this._context.createConstantSource()}createConvolver(){return this._context.createConvolver()}createDelay(t){return this._context.createDelay(t)}createDynamicsCompressor(){return this._context.createDynamicsCompressor()}createGain(){return this._context.createGain()}createIIRFilter(t,e){return this._context.createIIRFilter(t,e)}createPanner(){return this._context.createPanner()}createPeriodicWave(t,e,s){return this._context.createPeriodicWave(t,e,s)}createStereoPanner(){return this._context.createStereoPanner()}createWaveShaper(){return this._context.createWaveShaper()}createMediaStreamSource(t){ti(Si(this._context),"Not available if OfflineAudioContext");return this._context.createMediaStreamSource(t)}createMediaElementSource(t){ti(Si(this._context),"Not available if OfflineAudioContext");return this._context.createMediaElementSource(t)}createMediaStreamDestination(){ti(Si(this._context),"Not available if OfflineAudioContext");return this._context.createMediaStreamDestination()}decodeAudioData(t){return this._context.decodeAudioData(t)}get currentTime(){return this._context.currentTime}get state(){return this._context.state}get sampleRate(){return this._context.sampleRate}get listener(){return this.initialize(),this._listener}set listener(t){ti(!this._initialized,"The listener cannot be set after initialization."),this._listener=t}get transport(){return this.initialize(),this._transport}set transport(t){ti(!this._initialized,"The transport cannot be set after initialization."),this._transport=t}get draw(){return this.initialize(),this._draw}set draw(t){ti(!this._initialized,"Draw cannot be set after initialization."),this._draw=t}get destination(){return this.initialize(),this._destination}set destination(t){ti(!this._initialized,"The destination cannot be set after initialization."),this._destination=t}createAudioWorkletNode(t,e){return function(t,e,s){return ti(ci(zn),"This node only works in a secure context (https or localhost)"),new zn(t,e,s)}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */(this.rawContext,t,e)}addAudioWorkletModule(t,e){return yi(this,void 0,void 0,(function*(){ti(ci(this.rawContext.audioWorklet),"AudioWorkletNode is only available in a secure context (https or localhost)"),this._workletModules.has(e)||this._workletModules.set(e,this.rawContext.audioWorklet.addModule(t)),yield this._workletModules.get(e)}))}workletsAreReady(){return yi(this,void 0,void 0,(function*(){const t=[];this._workletModules.forEach(e=>t.push(e)),yield Promise.all(t)}))}get updateInterval(){return this._ticker.updateInterval}set updateInterval(t){this._ticker.updateInterval=t}get clockSource(){return this._ticker.type}set clockSource(t){this._ticker.type=t}get latencyHint(){return this._latencyHint}_setLatencyHint(t){let e=0;if(this._latencyHint=t,fi(t))switch(t){case"interactive":e=.1;break;case"playback":e=.5;break;case"balanced":e=.25}this.lookAhead=e,this.updateInterval=e/2}get rawContext(){return this._context}now(){return this._context.currentTime+this.lookAhead}immediate(){return this._context.currentTime}resume(){return Si(this._context)?this._context.resume():Promise.resolve()}close(){return yi(this,void 0,void 0,(function*(){var t;Si(this._context)&&(yield this._context.close()),this._initialized&&(t=this,Li.forEach(e=>e(t)))}))}getConstant(t){if(this._constants.has(t))return this._constants.get(t);{const e=this._context.createBuffer(1,128,this._context.sampleRate),s=e.getChannelData(0);for(let e=0;e<s.length;e++)s[e]=t;const n=this._context.createBufferSource();return n.channelCount=1,n.channelCountMode="explicit",n.buffer=e,n.loop=!0,n.start(0),this._constants.set(t,n),n}}dispose(){return super.dispose(),this._ticker.dispose(),this._timeouts.dispose(),Object.keys(this._constants).map(t=>this._constants[t].disconnect()),this}_timeoutLoop(){const t=this.now();let e=this._timeouts.peek();for(;this._timeouts.length&&e&&e.time<=t;)e.callback(),this._timeouts.shift(),e=this._timeouts.peek()}setTimeout(t,e){this._timeoutIds++;const s=this.now();return this._timeouts.add({callback:t,id:this._timeoutIds,time:s+e}),this._timeoutIds}clearTimeout(t){return this._timeouts.forEach(e=>{e.id===t&&this._timeouts.remove(e)}),this}clearInterval(t){return this.clearTimeout(t)}setInterval(t,e){const s=++this._timeoutIds,n=()=>{const i=this.now();this._timeouts.add({callback:()=>{t(),n()},id:s,time:i+e})};return n(),s}}function Ui(t,e){di(e)?e.forEach(e=>Ui(t,e)):Object.defineProperty(t,e,{enumerable:!0,writable:!1})}function Qi(t,e){di(e)?e.forEach(e=>Qi(t,e)):Object.defineProperty(t,e,{writable:!0})}const Zi=()=>{};class Xi extends Ei{constructor(){super(),this.name="ToneAudioBuffer",this.onload=Zi;const t=Di(Xi.getDefaults(),arguments,["url","onload","onerror"]);this.reverse=t.reverse,this.onload=t.onload,t.url&&ki(t.url)||t.url instanceof Xi?this.set(t.url):fi(t.url)&&this.load(t.url).catch(t.onerror)}static getDefaults(){return{onerror:Zi,onload:Zi,reverse:!1}}get sampleRate(){return this._buffer?this._buffer.sampleRate:Ji().sampleRate}set(t){return t instanceof Xi?t.loaded?this._buffer=t.get():t.onload=()=>{this.set(t),this.onload(this)}:this._buffer=t,this._reversed&&this._reverse(),this}get(){return this._buffer}load(t){return yi(this,void 0,void 0,(function*(){const e=Xi.load(t).then(t=>{this.set(t),this.onload(this)});Xi.downloads.push(e);try{yield e}finally{const t=Xi.downloads.indexOf(e);Xi.downloads.splice(t,1)}return this}))}dispose(){return super.dispose(),this._buffer=void 0,this}fromArray(t){const e=di(t)&&t[0].length>0,s=e?t.length:1,n=e?t[0].length:t.length,i=Ji(),o=i.createBuffer(s,n,i.sampleRate),r=e||1!==s?t:[t];for(let t=0;t<s;t++)o.copyToChannel(r[t],t);return this._buffer=o,this}toMono(t){if(ui(t))this.fromArray(this.toArray(t));else{let t=new Float32Array(this.length);const e=this.numberOfChannels;for(let s=0;s<e;s++){const e=this.toArray(s);for(let s=0;s<e.length;s++)t[s]+=e[s]}t=t.map(t=>t/e),this.fromArray(t)}return this}toArray(t){if(ui(t))return this.getChannelData(t);if(1===this.numberOfChannels)return this.toArray(0);{const t=[];for(let e=0;e<this.numberOfChannels;e++)t[e]=this.getChannelData(e);return t}}getChannelData(t){return this._buffer?this._buffer.getChannelData(t):new Float32Array(0)}slice(t,e=this.duration){const s=Math.floor(t*this.sampleRate),n=Math.floor(e*this.sampleRate);ti(s<n,"The start time must be less than the end time");const i=n-s,o=Ji().createBuffer(this.numberOfChannels,i,this.sampleRate);for(let t=0;t<this.numberOfChannels;t++)o.copyToChannel(this.getChannelData(t).subarray(s,n),t);return new Xi(o)}_reverse(){if(this.loaded)for(let t=0;t<this.numberOfChannels;t++)this.getChannelData(t).reverse();return this}get loaded(){return this.length>0}get duration(){return this._buffer?this._buffer.duration:0}get length(){return this._buffer?this._buffer.length:0}get numberOfChannels(){return this._buffer?this._buffer.numberOfChannels:0}get reverse(){return this._reversed}set reverse(t){this._reversed!==t&&(this._reversed=t,this._reverse())}static fromArray(t){return(new Xi).fromArray(t)}static fromUrl(t){return yi(this,void 0,void 0,(function*(){const e=new Xi;return yield e.load(t)}))}static load(t){return yi(this,void 0,void 0,(function*(){const e=t.match(/\[([^\]\[]+\|.+)\]$/);if(e){const s=e[1].split("|");let n=s[0];for(const t of s)if(Xi.supportsType(t)){n=t;break}t=t.replace(e[0],n)}const s=""===Xi.baseUrl||Xi.baseUrl.endsWith("/")?Xi.baseUrl:Xi.baseUrl+"/",n=yield fetch(s+t);if(!n.ok)throw new Error("could not load url: "+t);const i=yield n.arrayBuffer();return yield Ji().decodeAudioData(i)}))}static supportsType(t){const e=t.split("."),s=e[e.length-1];return""!==document.createElement("audio").canPlayType("audio/"+s)}static loaded(){return yi(this,void 0,void 0,(function*(){for(yield Promise.resolve();Xi.downloads.length;)yield Xi.downloads[0]}))}}Xi.baseUrl="",Xi.downloads=[];class Yi extends Gi{constructor(){var t,e,s;super({clockSource:"offline",context:Ti(arguments[0])?arguments[0]:(t=arguments[0],e=arguments[1]*arguments[2],s=arguments[2],new Gn(t,e,s)),lookAhead:0,updateInterval:Ti(arguments[0])?128/arguments[0].sampleRate:128/arguments[2]}),this.name="OfflineContext",this._currentTime=0,this.isOffline=!0,this._duration=Ti(arguments[0])?arguments[0].length/arguments[0].sampleRate:arguments[1]}now(){return this._currentTime}get currentTime(){return this._currentTime}_renderClock(t){return yi(this,void 0,void 0,(function*(){let e=0;for(;this._duration-this._currentTime>=0;){this.emit("tick"),this._currentTime+=128/this.sampleRate,e++;const s=Math.floor(this.sampleRate/128);t&&e%s==0&&(yield new Promise(t=>setTimeout(t,1)))}}))}render(t=!0){return yi(this,void 0,void 0,(function*(){yield this.workletsAreReady(),yield this._renderClock(t);const e=yield this._context.startRendering();return new Xi(e)}))}close(){return Promise.resolve()}}const Hi=new class extends Wi{constructor(){super(...arguments),this.lookAhead=0,this.latencyHint=0,this.isOffline=!1}createAnalyser(){return{}}createOscillator(){return{}}createBufferSource(){return{}}createBiquadFilter(){return{}}createBuffer(t,e,s){return{}}createChannelMerger(t){return{}}createChannelSplitter(t){return{}}createConstantSource(){return{}}createConvolver(){return{}}createDelay(t){return{}}createDynamicsCompressor(){return{}}createGain(){return{}}createIIRFilter(t,e){return{}}createPanner(){return{}}createPeriodicWave(t,e,s){return{}}createStereoPanner(){return{}}createWaveShaper(){return{}}createMediaStreamSource(t){return{}}createMediaElementSource(t){return{}}createMediaStreamDestination(){return{}}decodeAudioData(t){return Promise.resolve({})}createAudioWorkletNode(t,e){return{}}get rawContext(){return{}}addAudioWorkletModule(t,e){return yi(this,void 0,void 0,(function*(){return Promise.resolve()}))}resume(){return Promise.resolve()}setTimeout(t,e){return 0}clearTimeout(t){return this}setInterval(t,e){return 0}clearInterval(t){return this}getConstant(t){return{}}get currentTime(){return 0}get state(){return{}}get sampleRate(){return 0}get listener(){return{}}get transport(){return{}}get draw(){return{}}set draw(t){}get destination(){return{}}set destination(t){}now(){return 0}immediate(){return 0}};let $i=Hi;function Ji(){return $i===Hi&&gi&&Ki(new Gi),$i}function Ki(t){$i=Si(t)?new Gi(t):Ti(t)?new Yi(t):t}function to(){return $i.resume()}if(mi&&!mi.TONE_SILENCE_LOGGING){let t="v";"dev"===o&&(t="");const e=` * Tone.js ${t}${o} * `;console.log("%c"+e,"background: #000; color: #fff")}function eo(t){return Math.pow(10,t/20)}function so(t){return Math.log(t)/Math.LN10*20}function no(t){return Math.pow(2,t/12)}let io=440;function oo(t){return Math.round(ro(t))}function ro(t){return 69+12*Math.log2(t/io)}function ao(t){return io*Math.pow(2,(t-69)/12)}class co extends Ei{constructor(t,e,s){super(),this.defaultUnits="s",this._val=e,this._units=s,this.context=t,this._expressions=this._getExpressions()}_getExpressions(){return{hz:{method:t=>this._frequencyToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)hz$/i},i:{method:t=>this._ticksToUnits(parseInt(t,10)),regexp:/^(\d+)i$/i},m:{method:t=>this._beatsToUnits(parseInt(t,10)*this._getTimeSignature()),regexp:/^(\d+)m$/i},n:{method:(t,e)=>{const s=parseInt(t,10),n="."===e?1.5:1;return 1===s?this._beatsToUnits(this._getTimeSignature())*n:this._beatsToUnits(4/s)*n},regexp:/^(\d+)n(\.?)$/i},number:{method:t=>this._expressions[this.defaultUnits].method.call(this,t),regexp:/^(\d+(?:\.\d+)?)$/},s:{method:t=>this._secondsToUnits(parseFloat(t)),regexp:/^(\d+(?:\.\d+)?)s$/},samples:{method:t=>parseInt(t,10)/this.context.sampleRate,regexp:/^(\d+)samples$/},t:{method:t=>{const e=parseInt(t,10);return this._beatsToUnits(8/(3*Math.floor(e)))},regexp:/^(\d+)t$/i},tr:{method:(t,e,s)=>{let n=0;return t&&"0"!==t&&(n+=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(n+=this._beatsToUnits(parseFloat(e))),s&&"0"!==s&&(n+=this._beatsToUnits(parseFloat(s)/4)),n},regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?$/}}}valueOf(){if(this._val instanceof co&&this.fromType(this._val),ai(this._val))return this._noArg();if(fi(this._val)&&ai(this._units)){for(const t in this._expressions)if(this._expressions[t].regexp.test(this._val.trim())){this._units=t;break}}else if(li(this._val)){let t=0;for(const e in this._val)if(ci(this._val[e])){const s=this._val[e];t+=new this.constructor(this.context,e).valueOf()*s}return t}if(ci(this._units)){const t=this._expressions[this._units],e=this._val.toString().trim().match(t.regexp);return e?t.method.apply(this,e.slice(1)):t.method.call(this,this._val)}return fi(this._val)?parseFloat(this._val):this._val}_frequencyToUnits(t){return 1/t}_beatsToUnits(t){return 60/this._getBpm()*t}_secondsToUnits(t){return t}_ticksToUnits(t){return t*this._beatsToUnits(1)/this._getPPQ()}_noArg(){return this._now()}_getBpm(){return this.context.transport.bpm.value}_getTimeSignature(){return this.context.transport.timeSignature}_getPPQ(){return this.context.transport.PPQ}fromType(t){switch(this._units=void 0,this.defaultUnits){case"s":this._val=t.toSeconds();break;case"i":this._val=t.toTicks();break;case"hz":this._val=t.toFrequency();break;case"midi":this._val=t.toMidi()}return this}toFrequency(){return 1/this.toSeconds()}toSamples(){return this.toSeconds()*this.context.sampleRate}toMilliseconds(){return 1e3*this.toSeconds()}}class ho extends co{constructor(){super(...arguments),this.name="TimeClass"}_getExpressions(){return Object.assign(super._getExpressions(),{now:{method:t=>this._now()+new this.constructor(this.context,t).valueOf(),regexp:/^\+(.+)/},quantize:{method:t=>{const e=new ho(this.context,t).valueOf();return this._secondsToUnits(this.context.transport.nextSubdivision(e))},regexp:/^@(.+)/}})}quantize(t,e=1){const s=new this.constructor(this.context,t).valueOf(),n=this.valueOf();return n+(Math.round(n/s)*s-n)*e}toNotation(){const t=this.toSeconds(),e=["1m"];for(let t=1;t<9;t++){const s=Math.pow(2,t);e.push(s+"n."),e.push(s+"n"),e.push(s+"t")}e.push("0");let s=e[0],n=new ho(this.context,e[0]).toSeconds();return e.forEach(e=>{const i=new ho(this.context,e).toSeconds();Math.abs(i-t)<Math.abs(n-t)&&(s=e,n=i)}),s}toBarsBeatsSixteenths(){const t=this._beatsToUnits(1);let e=this.valueOf()/t;e=parseFloat(e.toFixed(4));const s=Math.floor(e/this._getTimeSignature());let n=e%1*4;e=Math.floor(e)%this._getTimeSignature();const i=n.toString();i.length>3&&(n=parseFloat(parseFloat(i).toFixed(3)));return[s,e,n].join(":")}toTicks(){const t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.round(e*this._getPPQ())}toSeconds(){return this.valueOf()}toMidi(){return oo(this.toFrequency())}_now(){return this.context.now()}}function uo(t,e){return new ho(Ji(),t,e)}class lo extends ho{constructor(){super(...arguments),this.name="Frequency",this.defaultUnits="hz"}static get A4(){return io}static set A4(t){!function(t){io=t}(t)}_getExpressions(){return Object.assign({},super._getExpressions(),{midi:{regexp:/^(\d+(?:\.\d+)?midi)/,method(t){return"midi"===this.defaultUnits?t:lo.mtof(t)}},note:{regexp:/^([a-g]{1}(?:b|#|x|bb)?)(-?[0-9]+)/i,method(t,e){const s=po[t.toLowerCase()]+12*(parseInt(e,10)+1);return"midi"===this.defaultUnits?s:lo.mtof(s)}},tr:{regexp:/^(\d+(?:\.\d+)?):(\d+(?:\.\d+)?):?(\d+(?:\.\d+)?)?/,method(t,e,s){let n=1;return t&&"0"!==t&&(n*=this._beatsToUnits(this._getTimeSignature()*parseFloat(t))),e&&"0"!==e&&(n*=this._beatsToUnits(parseFloat(e))),s&&"0"!==s&&(n*=this._beatsToUnits(parseFloat(s)/4)),n}}})}transpose(t){return new lo(this.context,this.valueOf()*no(t))}harmonize(t){return t.map(t=>this.transpose(t))}toMidi(){return oo(this.valueOf())}toNote(){const t=this.toFrequency(),e=Math.log2(t/lo.A4);let s=Math.round(12*e)+57;const n=Math.floor(s/12);n<0&&(s+=-12*n);return fo[s%12]+n.toString()}toSeconds(){return 1/super.toSeconds()}toTicks(){const t=this._beatsToUnits(1),e=this.valueOf()/t;return Math.floor(e*this._getPPQ())}_noArg(){return 0}_frequencyToUnits(t){return t}_ticksToUnits(t){return 1/(60*t/(this._getBpm()*this._getPPQ()))}_beatsToUnits(t){return 1/super._beatsToUnits(t)}_secondsToUnits(t){return 1/t}static mtof(t){return ao(t)}static ftom(t){return oo(t)}}const po={cbb:-2,cb:-1,c:0,"c#":1,cx:2,dbb:0,db:1,d:2,"d#":3,dx:4,ebb:2,eb:3,e:4,"e#":5,ex:6,fbb:3,fb:4,f:5,"f#":6,fx:7,gbb:5,gb:6,g:7,"g#":8,gx:9,abb:7,ab:8,a:9,"a#":10,ax:11,bbb:9,bb:10,b:11,"b#":12,bx:13},fo=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function _o(t,e){return new lo(Ji(),t,e)}class mo extends ho{constructor(){super(...arguments),this.name="TransportTime"}_now(){return this.context.transport.seconds}}function go(t,e){return new mo(Ji(),t,e)}class vo extends Ei{constructor(){super();const t=Di(vo.getDefaults(),arguments,["context"]);this.defaultContext?this.context=this.defaultContext:this.context=t.context}static getDefaults(){return{context:Ji()}}now(){return this.context.currentTime+this.context.lookAhead}immediate(){return this.context.currentTime}get sampleTime(){return 1/this.context.sampleRate}get blockTime(){return 128/this.context.sampleRate}toSeconds(t){return new ho(this.context,t).toSeconds()}toFrequency(t){return new lo(this.context,t).toFrequency()}toTicks(t){return new mo(this.context,t).toTicks()}_getPartialProperties(t){const e=this.get();return Object.keys(e).forEach(s=>{ai(t[s])&&delete e[s]}),e}get(){const t=this.constructor.getDefaults();return Object.keys(t).forEach(e=>{if(Reflect.has(this,e)){const s=this[e];ci(s)&&ci(s.value)&&ci(s.setValueAtTime)?t[e]=s.value:s instanceof vo?t[e]=s._getPartialProperties(t[e]):di(s)||ui(s)||fi(s)||pi(s)?t[e]=s:delete t[e]}}),t}set(t){return Object.keys(t).forEach(e=>{Reflect.has(this,e)&&ci(this[e])&&(this[e]&&ci(this[e].value)&&ci(this[e].setValueAtTime)?this[e].value!==t[e]&&(this[e].value=t[e]):this[e]instanceof vo?this[e].set(t[e]):this[e]=t[e])}),this}}class yo extends Ni{constructor(t="stopped"){super(),this.name="StateTimeline",this._initial=t,this.setStateAtTime(this._initial,0)}getValueAtTime(t){const e=this.get(t);return null!==e?e.state:this._initial}setStateAtTime(t,e,s){return ei(e,0),this.add(Object.assign({},s,{state:t,time:e})),this}getLastState(t,e){for(let s=this._search(e);s>=0;s--){const e=this._timeline[s];if(e.state===t)return e}}getNextState(t,e){const s=this._search(e);if(-1!==s)for(let e=s;e<this._timeline.length;e++){const s=this._timeline[e];if(s.state===t)return s}}}class xo extends vo{constructor(){super(Di(xo.getDefaults(),arguments,["param","units","convert"])),this.name="Param",this.overridden=!1,this._minOutput=1e-7;const t=Di(xo.getDefaults(),arguments,["param","units","convert"]);for(ti(ci(t.param)&&(wi(t.param)||t.param instanceof xo),"param must be an AudioParam");!wi(t.param);)t.param=t.param._param;this._swappable=!!ci(t.swappable)&&t.swappable,this._swappable?(this.input=this.context.createGain(),this._param=t.param,this.input.connect(this._param)):this._param=this.input=t.param,this._events=new Ni(1e3),this._initialValue=this._param.defaultValue,this.units=t.units,this.convert=t.convert,this._minValue=t.minValue,this._maxValue=t.maxValue,ci(t.value)&&t.value!==this._toType(this._initialValue)&&this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(vo.getDefaults(),{convert:!0,units:"number"})}get value(){const t=this.now();return this.getValueAtTime(t)}set value(t){this.cancelScheduledValues(this.now()),this.setValueAtTime(t,this.now())}get minValue(){return ci(this._minValue)?this._minValue:"time"===this.units||"frequency"===this.units||"normalRange"===this.units||"positive"===this.units||"transportTime"===this.units||"ticks"===this.units||"bpm"===this.units||"hertz"===this.units||"samples"===this.units?0:"audioRange"===this.units?-1:"decibels"===this.units?-1/0:this._param.minValue}get maxValue(){return ci(this._maxValue)?this._maxValue:"normalRange"===this.units||"audioRange"===this.units?1:this._param.maxValue}_is(t,e){return this.units===e}_assertRange(t){return ci(this.maxValue)&&ci(this.minValue)&&ei(t,this._fromType(this.minValue),this._fromType(this.maxValue)),t}_fromType(t){return this.convert&&!this.overridden?this._is(t,"time")?this.toSeconds(t):this._is(t,"decibels")?eo(t):this._is(t,"frequency")?this.toFrequency(t):t:this.overridden?0:t}_toType(t){return this.convert&&"decibels"===this.units?so(t):t}setValueAtTime(t,e){const s=this.toSeconds(e),n=this._fromType(t);return ti(isFinite(n)&&isFinite(s),`Invalid argument(s) to setValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(n),this.log(this.units,"setValueAtTime",t,s),this._events.add({time:s,type:"setValueAtTime",value:n}),this._param.setValueAtTime(n,s),this}getValueAtTime(t){const e=Math.max(this.toSeconds(t),0),s=this._events.getAfter(e),n=this._events.get(e);let i=this._initialValue;if(null===n)i=this._initialValue;else if("setTargetAtTime"!==n.type||null!==s&&"setValueAtTime"!==s.type)if(null===s)i=n.value;else if("linearRampToValueAtTime"===s.type||"exponentialRampToValueAtTime"===s.type){let t=n.value;if("setTargetAtTime"===n.type){const e=this._events.getBefore(n.time);t=null===e?this._initialValue:e.value}i="linearRampToValueAtTime"===s.type?this._linearInterpolate(n.time,t,s.time,s.value,e):this._exponentialInterpolate(n.time,t,s.time,s.value,e)}else i=n.value;else{const t=this._events.getBefore(n.time);let s;s=null===t?this._initialValue:t.value,"setTargetAtTime"===n.type&&(i=this._exponentialApproach(n.time,s,n.value,n.constant,e))}return this._toType(i)}setRampPoint(t){t=this.toSeconds(t);let e=this.getValueAtTime(t);return this.cancelAndHoldAtTime(t),0===this._fromType(e)&&(e=this._toType(this._minOutput)),this.setValueAtTime(e,t),this}linearRampToValueAtTime(t,e){const s=this._fromType(t),n=this.toSeconds(e);return ti(isFinite(s)&&isFinite(n),`Invalid argument(s) to linearRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._assertRange(s),this._events.add({time:n,type:"linearRampToValueAtTime",value:s}),this.log(this.units,"linearRampToValueAtTime",t,n),this._param.linearRampToValueAtTime(s,n),this}exponentialRampToValueAtTime(t,e){let s=this._fromType(t);s=Ii(s,0)?this._minOutput:s,this._assertRange(s);const n=this.toSeconds(e);return ti(isFinite(s)&&isFinite(n),`Invalid argument(s) to exponentialRampToValueAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({time:n,type:"exponentialRampToValueAtTime",value:s}),this.log(this.units,"exponentialRampToValueAtTime",t,n),this._param.exponentialRampToValueAtTime(s,n),this}exponentialRampTo(t,e,s){return s=this.toSeconds(s),this.setRampPoint(s),this.exponentialRampToValueAtTime(t,s+this.toSeconds(e)),this}linearRampTo(t,e,s){return s=this.toSeconds(s),this.setRampPoint(s),this.linearRampToValueAtTime(t,s+this.toSeconds(e)),this}targetRampTo(t,e,s){return s=this.toSeconds(s),this.setRampPoint(s),this.exponentialApproachValueAtTime(t,s,e),this}exponentialApproachValueAtTime(t,e,s){e=this.toSeconds(e),s=this.toSeconds(s);const n=Math.log(s+1)/Math.log(200);return this.setTargetAtTime(t,e,n),this.cancelAndHoldAtTime(e+.9*s),this.linearRampToValueAtTime(t,e+s),this}setTargetAtTime(t,e,s){const n=this._fromType(t);ti(isFinite(s)&&s>0,"timeConstant must be a number greater than 0");const i=this.toSeconds(e);return this._assertRange(n),ti(isFinite(n)&&isFinite(i),`Invalid argument(s) to setTargetAtTime: ${JSON.stringify(t)}, ${JSON.stringify(e)}`),this._events.add({constant:s,time:i,type:"setTargetAtTime",value:n}),this.log(this.units,"setTargetAtTime",t,i,s),this._param.setTargetAtTime(n,i,s),this}setValueCurveAtTime(t,e,s,n=1){s=this.toSeconds(s),e=this.toSeconds(e);const i=this._fromType(t[0])*n;this.setValueAtTime(this._toType(i),e);const o=s/(t.length-1);for(let s=1;s<t.length;s++){const i=this._fromType(t[s])*n;this.linearRampToValueAtTime(this._toType(i),e+s*o)}return this}cancelScheduledValues(t){const e=this.toSeconds(t);return ti(isFinite(e),"Invalid argument to cancelScheduledValues: "+JSON.stringify(t)),this._events.cancel(e),this._param.cancelScheduledValues(e),this.log(this.units,"cancelScheduledValues",e),this}cancelAndHoldAtTime(t){const e=this.toSeconds(t),s=this._fromType(this.getValueAtTime(e));ti(isFinite(e),"Invalid argument to cancelAndHoldAtTime: "+JSON.stringify(t)),this.log(this.units,"cancelAndHoldAtTime",e,"value="+s);const n=this._events.get(e),i=this._events.getAfter(e);return n&&Ii(n.time,e)?i?(this._param.cancelScheduledValues(i.time),this._events.cancel(i.time)):(this._param.cancelAndHoldAtTime(e),this._events.cancel(e+this.sampleTime)):i&&(this._param.cancelScheduledValues(i.time),this._events.cancel(i.time),"linearRampToValueAtTime"===i.type?this.linearRampToValueAtTime(this._toType(s),e):"exponentialRampToValueAtTime"===i.type&&this.exponentialRampToValueAtTime(this._toType(s),e)),this._events.add({time:e,type:"setValueAtTime",value:s}),this._param.setValueAtTime(s,e),this}rampTo(t,e=.1,s){return"frequency"===this.units||"bpm"===this.units||"decibels"===this.units?this.exponentialRampTo(t,e,s):this.linearRampTo(t,e,s),this}apply(t){const e=this.context.currentTime;t.setValueAtTime(this.getValueAtTime(e),e);const s=this._events.get(e);if(s&&"setTargetAtTime"===s.type){const n=this._events.getAfter(s.time),i=n?n.time:e+2,o=(i-e)/10;for(let s=e;s<i;s+=o)t.linearRampToValueAtTime(this.getValueAtTime(s),s)}return this._events.forEachAfter(this.context.currentTime,e=>{"cancelScheduledValues"===e.type?t.cancelScheduledValues(e.time):"setTargetAtTime"===e.type?t.setTargetAtTime(e.value,e.time,e.constant):t[e.type](e.value,e.time)}),this}setParam(t){ti(this._swappable,"The Param must be assigned as 'swappable' in the constructor");const e=this.input;return e.disconnect(this._param),this.apply(t),this._param=t,e.connect(this._param),this}dispose(){return super.dispose(),this._events.dispose(),this}get defaultValue(){return this._toType(this._param.defaultValue)}_exponentialApproach(t,e,s,n,i){return s+(e-s)*Math.exp(-(i-t)/n)}_linearInterpolate(t,e,s,n,i){return e+(i-t)/(s-t)*(n-e)}_exponentialInterpolate(t,e,s,n,i){return e*Math.pow(n/e,(i-t)/(s-t))}}class wo extends vo{constructor(){super(...arguments),this.name="ToneAudioNode",this._internalChannels=[]}get numberOfInputs(){return ci(this.input)?wi(this.input)||this.input instanceof xo?1:this.input.numberOfInputs:0}get numberOfOutputs(){return ci(this.output)?this.output.numberOfOutputs:0}_isAudioNode(t){return ci(t)&&(t instanceof wo||bi(t))}_getInternalNodes(){const t=this._internalChannels.slice(0);return this._isAudioNode(this.input)&&t.push(this.input),this._isAudioNode(this.output)&&this.input!==this.output&&t.push(this.output),t}_setChannelProperties(t){this._getInternalNodes().forEach(e=>{e.channelCount=t.channelCount,e.channelCountMode=t.channelCountMode,e.channelInterpretation=t.channelInterpretation})}_getChannelProperties(){const t=this._getInternalNodes();ti(t.length>0,"ToneAudioNode does not have any internal nodes");const e=t[0];return{channelCount:e.channelCount,channelCountMode:e.channelCountMode,channelInterpretation:e.channelInterpretation}}get channelCount(){return this._getChannelProperties().channelCount}set channelCount(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCount:t}))}get channelCountMode(){return this._getChannelProperties().channelCountMode}set channelCountMode(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelCountMode:t}))}get channelInterpretation(){return this._getChannelProperties().channelInterpretation}set channelInterpretation(t){const e=this._getChannelProperties();this._setChannelProperties(Object.assign(e,{channelInterpretation:t}))}connect(t,e=0,s=0){return To(this,t,e,s),this}toDestination(){return this.connect(this.context.destination),this}toMaster(){return ri("toMaster() has been renamed toDestination()"),this.toDestination()}disconnect(t,e=0,s=0){return So(this,t,e,s),this}chain(...t){return bo(this,...t),this}fan(...t){return t.forEach(t=>this.connect(t)),this}dispose(){return super.dispose(),ci(this.input)&&(this.input instanceof wo?this.input.dispose():bi(this.input)&&this.input.disconnect()),ci(this.output)&&(this.output instanceof wo?this.output.dispose():bi(this.output)&&this.output.disconnect()),this._internalChannels=[],this}}function bo(...t){const e=t.shift();t.reduce((t,e)=>(t instanceof wo?t.connect(e):bi(t)&&To(t,e),e),e)}function To(t,e,s=0,n=0){for(ti(ci(t),"Cannot connect from undefined node"),ti(ci(e),"Cannot connect to undefined node"),(e instanceof wo||bi(e))&&ti(e.numberOfInputs>0,"Cannot connect to node with no inputs"),ti(t.numberOfOutputs>0,"Cannot connect from node with no outputs");e instanceof wo||e instanceof xo;)ci(e.input)&&(e=e.input);for(;t instanceof wo;)ci(t.output)&&(t=t.output);wi(e)?t.connect(e,s):t.connect(e,s,n)}function So(t,e,s=0,n=0){if(ci(e))for(;e instanceof wo;)e=e.input;for(;!bi(t);)ci(t.output)&&(t=t.output);wi(e)?t.disconnect(e,s):bi(e)?t.disconnect(e,s,n):t.disconnect()}class ko extends wo{constructor(){super(Di(ko.getDefaults(),arguments,["gain","units"])),this.name="Gain",this._gainNode=this.context.createGain(),this.input=this._gainNode,this.output=this._gainNode;const t=Di(ko.getDefaults(),arguments,["gain","units"]);this.gain=new xo({context:this.context,convert:t.convert,param:this._gainNode.gain,units:t.units,value:t.gain,minValue:t.minValue,maxValue:t.maxValue}),Ui(this,"gain")}static getDefaults(){return Object.assign(wo.getDefaults(),{convert:!0,gain:1,units:"gain"})}dispose(){return super.dispose(),this._gainNode.disconnect(),this.gain.dispose(),this}}class Co extends wo{constructor(t){super(t),this.onended=Zi,this._startTime=-1,this._stopTime=-1,this._timeout=-1,this.output=new ko({context:this.context,gain:0}),this._gainNode=this.output,this.getStateAtTime=function(t){const e=this.toSeconds(t);return-1!==this._startTime&&e>=this._startTime&&(-1===this._stopTime||e<=this._stopTime)?"started":"stopped"},this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut,this._curve=t.curve,this.onended=t.onended}static getDefaults(){return Object.assign(wo.getDefaults(),{curve:"linear",fadeIn:0,fadeOut:0,onended:Zi})}_startGain(t,e=1){ti(-1===this._startTime,"Source cannot be started more than once");const s=this.toSeconds(this._fadeIn);return this._startTime=t+s,this._startTime=Math.max(this._startTime,this.context.currentTime),s>0?(this._gainNode.gain.setValueAtTime(0,t),"linear"===this._curve?this._gainNode.gain.linearRampToValueAtTime(e,t+s):this._gainNode.gain.exponentialApproachValueAtTime(e,t,s)):this._gainNode.gain.setValueAtTime(e,t),this}stop(t){return this.log("stop",t),this._stopGain(this.toSeconds(t)),this}_stopGain(t){ti(-1!==this._startTime,"'start' must be called before 'stop'"),this.cancelStop();const e=this.toSeconds(this._fadeOut);return this._stopTime=this.toSeconds(t)+e,this._stopTime=Math.max(this._stopTime,this.context.currentTime),e>0?"linear"===this._curve?this._gainNode.gain.linearRampTo(0,e,t):this._gainNode.gain.targetRampTo(0,e,t):(this._gainNode.gain.cancelAndHoldAtTime(t),this._gainNode.gain.setValueAtTime(0,t)),this.context.clearTimeout(this._timeout),this._timeout=this.context.setTimeout(()=>{const t="exponential"===this._curve?2*e:0;this._stopSource(this.now()+t),this._onended()},this._stopTime-this.context.currentTime),this}_onended(){if(this.onended!==Zi&&(this.onended(this),this.onended=Zi,!this.context.isOffline)){const t=()=>this.dispose();void 0!==window.requestIdleCallback?window.requestIdleCallback(t):setTimeout(t,1e3)}}get state(){return this.getStateAtTime(this.now())}cancelStop(){return this.log("cancelStop"),ti(-1!==this._startTime,"Source is not started"),this._gainNode.gain.cancelScheduledValues(this._startTime+this.sampleTime),this.context.clearTimeout(this._timeout),this._stopTime=-1,this}dispose(){return super.dispose(),this._gainNode.disconnect(),this}}class Ao extends Co{constructor(){super(Di(Ao.getDefaults(),arguments,["offset"])),this.name="ToneConstantSource",this._source=this.context.createConstantSource();const t=Di(Ao.getDefaults(),arguments,["offset"]);To(this._source,this._gainNode),this.offset=new xo({context:this.context,convert:t.convert,param:this._source.offset,units:t.units,value:t.offset,minValue:t.minValue,maxValue:t.maxValue})}static getDefaults(){return Object.assign(Co.getDefaults(),{convert:!0,offset:1,units:"number"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._source.start(e),this}_stopSource(t){this._source.stop(t)}dispose(){return super.dispose(),"started"===this.state&&this.stop(),this._source.disconnect(),this.offset.dispose(),this}}class Do extends wo{constructor(){super(Di(Do.getDefaults(),arguments,["value","units"])),this.name="Signal",this.override=!0;const t=Di(Do.getDefaults(),arguments,["value","units"]);this.output=this._constantSource=new Ao({context:this.context,convert:t.convert,offset:t.value,units:t.units,minValue:t.minValue,maxValue:t.maxValue}),this._constantSource.start(0),this.input=this._param=this._constantSource.offset}static getDefaults(){return Object.assign(wo.getDefaults(),{convert:!0,units:"number",value:0})}connect(t,e=0,s=0){return Oo(this,t,e,s),this}dispose(){return super.dispose(),this._param.dispose(),this._constantSource.dispose(),this}setValueAtTime(t,e){return this._param.setValueAtTime(t,e),this}getValueAtTime(t){return this._param.getValueAtTime(t)}setRampPoint(t){return this._param.setRampPoint(t),this}linearRampToValueAtTime(t,e){return this._param.linearRampToValueAtTime(t,e),this}exponentialRampToValueAtTime(t,e){return this._param.exponentialRampToValueAtTime(t,e),this}exponentialRampTo(t,e,s){return this._param.exponentialRampTo(t,e,s),this}linearRampTo(t,e,s){return this._param.linearRampTo(t,e,s),this}targetRampTo(t,e,s){return this._param.targetRampTo(t,e,s),this}exponentialApproachValueAtTime(t,e,s){return this._param.exponentialApproachValueAtTime(t,e,s),this}setTargetAtTime(t,e,s){return this._param.setTargetAtTime(t,e,s),this}setValueCurveAtTime(t,e,s,n){return this._param.setValueCurveAtTime(t,e,s,n),this}cancelScheduledValues(t){return this._param.cancelScheduledValues(t),this}cancelAndHoldAtTime(t){return this._param.cancelAndHoldAtTime(t),this}rampTo(t,e,s){return this._param.rampTo(t,e,s),this}get value(){return this._param.value}set value(t){this._param.value=t}get convert(){return this._param.convert}set convert(t){this._param.convert=t}get units(){return this._param.units}get overridden(){return this._param.overridden}set overridden(t){this._param.overridden=t}get maxValue(){return this._param.maxValue}get minValue(){return this._param.minValue}apply(t){return this._param.apply(t),this}}function Oo(t,e,s,n){(e instanceof xo||wi(e)||e instanceof Do&&e.override)&&(e.cancelScheduledValues(0),e.setValueAtTime(0,0),e instanceof Do&&(e.overridden=!0)),To(t,e,s,n)}class Mo extends xo{constructor(){super(Di(Mo.getDefaults(),arguments,["value"])),this.name="TickParam",this._events=new Ni(1/0),this._multiplier=1;const t=Di(Mo.getDefaults(),arguments,["value"]);this._multiplier=t.multiplier,this._events.cancel(0),this._events.add({ticks:0,time:0,type:"setValueAtTime",value:this._fromType(t.value)}),this.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(xo.getDefaults(),{multiplier:1,units:"hertz",value:1})}setTargetAtTime(t,e,s){e=this.toSeconds(e),this.setRampPoint(e);const n=this._fromType(t),i=this._events.get(e),o=Math.round(Math.max(1/s,1));for(let t=0;t<=o;t++){const o=s*t+e,r=this._exponentialApproach(i.time,i.value,n,s,o);this.linearRampToValueAtTime(this._toType(r),o)}return this}setValueAtTime(t,e){const s=this.toSeconds(e);super.setValueAtTime(t,e);const n=this._events.get(s),i=this._events.previousEvent(n),o=this._getTicksUntilEvent(i,s);return n.ticks=Math.max(o,0),this}linearRampToValueAtTime(t,e){const s=this.toSeconds(e);super.linearRampToValueAtTime(t,e);const n=this._events.get(s),i=this._events.previousEvent(n),o=this._getTicksUntilEvent(i,s);return n.ticks=Math.max(o,0),this}exponentialRampToValueAtTime(t,e){e=this.toSeconds(e);const s=this._fromType(t),n=this._events.get(e),i=Math.round(Math.max(10*(e-n.time),1)),o=(e-n.time)/i;for(let t=0;t<=i;t++){const i=o*t+n.time,r=this._exponentialInterpolate(n.time,n.value,e,s,i);this.linearRampToValueAtTime(this._toType(r),i)}return this}_getTicksUntilEvent(t,e){if(null===t)t={ticks:0,time:0,type:"setValueAtTime",value:0};else if(ai(t.ticks)){const e=this._events.previousEvent(t);t.ticks=this._getTicksUntilEvent(e,t.time)}const s=this._fromType(this.getValueAtTime(t.time));let n=this._fromType(this.getValueAtTime(e));const i=this._events.get(e);return i&&i.time===e&&"setValueAtTime"===i.type&&(n=this._fromType(this.getValueAtTime(e-this.sampleTime))),.5*(e-t.time)*(s+n)+t.ticks}getTicksAtTime(t){const e=this.toSeconds(t),s=this._events.get(e);return Math.max(this._getTicksUntilEvent(s,e),0)}getDurationOfTicks(t,e){const s=this.toSeconds(e),n=this.getTicksAtTime(e);return this.getTimeOfTick(n+t)-s}getTimeOfTick(t){const e=this._events.get(t,"ticks"),s=this._events.getAfter(t,"ticks");if(e&&e.ticks===t)return e.time;if(e&&s&&"linearRampToValueAtTime"===s.type&&e.value!==s.value){const n=this._fromType(this.getValueAtTime(e.time)),i=(this._fromType(this.getValueAtTime(s.time))-n)/(s.time-e.time),o=Math.sqrt(Math.pow(n,2)-2*i*(e.ticks-t)),r=(-n+o)/i,a=(-n-o)/i;return(r>0?r:a)+e.time}return e?0===e.value?1/0:e.time+(t-e.ticks)/e.value:t/this._initialValue}ticksToTime(t,e){return this.getDurationOfTicks(t,e)}timeToTicks(t,e){const s=this.toSeconds(e),n=this.toSeconds(t),i=this.getTicksAtTime(s);return this.getTicksAtTime(s+n)-i}_fromType(t){return"bpm"===this.units&&this.multiplier?1/(60/t/this.multiplier):super._fromType(t)}_toType(t){return"bpm"===this.units&&this.multiplier?t/this.multiplier*60:super._toType(t)}get multiplier(){return this._multiplier}set multiplier(t){const e=this.value;this._multiplier=t,this.cancelScheduledValues(0),this.setValueAtTime(e,0)}}class Eo extends Do{constructor(){super(Di(Eo.getDefaults(),arguments,["value"])),this.name="TickSignal";const t=Di(Eo.getDefaults(),arguments,["value"]);this.input=this._param=new Mo({context:this.context,convert:t.convert,multiplier:t.multiplier,param:this._constantSource.offset,units:t.units,value:t.value})}static getDefaults(){return Object.assign(Do.getDefaults(),{multiplier:1,units:"hertz",value:1})}ticksToTime(t,e){return this._param.ticksToTime(t,e)}timeToTicks(t,e){return this._param.timeToTicks(t,e)}getTimeOfTick(t){return this._param.getTimeOfTick(t)}getDurationOfTicks(t,e){return this._param.getDurationOfTicks(t,e)}getTicksAtTime(t){return this._param.getTicksAtTime(t)}get multiplier(){return this._param.multiplier}set multiplier(t){this._param.multiplier=t}dispose(){return super.dispose(),this._param.dispose(),this}}class Ro extends vo{constructor(){super(Di(Ro.getDefaults(),arguments,["frequency"])),this.name="TickSource",this._state=new yo,this._tickOffset=new Ni;const t=Di(Ro.getDefaults(),arguments,["frequency"]);this.frequency=new Eo({context:this.context,units:t.units,value:t.frequency}),Ui(this,"frequency"),this._state.setStateAtTime("stopped",0),this.setTicksAtTime(0,0)}static getDefaults(){return Object.assign({frequency:1,units:"hertz"},vo.getDefaults())}get state(){return this.getStateAtTime(this.now())}start(t,e){const s=this.toSeconds(t);return"started"!==this._state.getValueAtTime(s)&&(this._state.setStateAtTime("started",s),ci(e)&&this.setTicksAtTime(e,s)),this}stop(t){const e=this.toSeconds(t);if("stopped"===this._state.getValueAtTime(e)){const t=this._state.get(e);t&&t.time>0&&(this._tickOffset.cancel(t.time),this._state.cancel(t.time))}return this._state.cancel(e),this._state.setStateAtTime("stopped",e),this.setTicksAtTime(0,e),this}pause(t){const e=this.toSeconds(t);return"started"===this._state.getValueAtTime(e)&&this._state.setStateAtTime("paused",e),this}cancel(t){return t=this.toSeconds(t),this._state.cancel(t),this._tickOffset.cancel(t),this}getTicksAtTime(t){const e=this.toSeconds(t),s=this._state.getLastState("stopped",e),n={state:"paused",time:e};this._state.add(n);let i=s,o=0;return this._state.forEachBetween(s.time,e+this.sampleTime,t=>{let e=i.time;const s=this._tickOffset.get(t.time);s&&s.time>=i.time&&(o=s.ticks,e=s.time),"started"===i.state&&"started"!==t.state&&(o+=this.frequency.getTicksAtTime(t.time)-this.frequency.getTicksAtTime(e)),i=t}),this._state.remove(n),o}get ticks(){return this.getTicksAtTime(this.now())}set ticks(t){this.setTicksAtTime(t,this.now())}get seconds(){return this.getSecondsAtTime(this.now())}set seconds(t){const e=this.now(),s=this.frequency.timeToTicks(t,e);this.setTicksAtTime(s,e)}getSecondsAtTime(t){t=this.toSeconds(t);const e=this._state.getLastState("stopped",t),s={state:"paused",time:t};this._state.add(s);let n=e,i=0;return this._state.forEachBetween(e.time,t+this.sampleTime,t=>{let e=n.time;const s=this._tickOffset.get(t.time);s&&s.time>=n.time&&(i=s.seconds,e=s.time),"started"===n.state&&"started"!==t.state&&(i+=t.time-e),n=t}),this._state.remove(s),i}setTicksAtTime(t,e){return e=this.toSeconds(e),this._tickOffset.cancel(e),this._tickOffset.add({seconds:this.frequency.getDurationOfTicks(t,e),ticks:t,time:e}),this}getStateAtTime(t){return t=this.toSeconds(t),this._state.getValueAtTime(t)}getTimeOfTick(t,e=this.now()){const s=this._tickOffset.get(e),n=this._state.get(e),i=Math.max(s.time,n.time),o=this.frequency.getTicksAtTime(i)+t-s.ticks;return this.frequency.getTimeOfTick(o)}forEachTickBetween(t,e,s){let n=this._state.get(t);this._state.forEachBetween(t,e,e=>{n&&"started"===n.state&&"started"!==e.state&&this.forEachTickBetween(Math.max(n.time,t),e.time-this.sampleTime,s),n=e});let i=null;if(n&&"started"===n.state){const o=Math.max(n.time,t),r=this.frequency.getTicksAtTime(o),a=r-this.frequency.getTicksAtTime(n.time);let c=Math.ceil(a)-a;c=Ii(c,1)?0:c;let h=this.frequency.getTimeOfTick(r+c);for(;h<e;){try{s(h,Math.round(this.getTicksAtTime(h)))}catch(t){i=t;break}h+=this.frequency.getDurationOfTicks(1,h)}}if(i)throw i;return this}dispose(){return super.dispose(),this._state.dispose(),this._tickOffset.dispose(),this.frequency.dispose(),this}}class qo extends vo{constructor(){super(Di(qo.getDefaults(),arguments,["callback","frequency"])),this.name="Clock",this.callback=Zi,this._lastUpdate=0,this._state=new yo("stopped"),this._boundLoop=this._loop.bind(this);const t=Di(qo.getDefaults(),arguments,["callback","frequency"]);this.callback=t.callback,this._tickSource=new Ro({context:this.context,frequency:t.frequency,units:t.units}),this._lastUpdate=0,this.frequency=this._tickSource.frequency,Ui(this,"frequency"),this._state.setStateAtTime("stopped",0),this.context.on("tick",this._boundLoop)}static getDefaults(){return Object.assign(vo.getDefaults(),{callback:Zi,frequency:1,units:"hertz"})}get state(){return this._state.getValueAtTime(this.now())}start(t,e){si(this.context);const s=this.toSeconds(t);return this.log("start",s),"started"!==this._state.getValueAtTime(s)&&(this._state.setStateAtTime("started",s),this._tickSource.start(s,e),s<this._lastUpdate&&this.emit("start",s,e)),this}stop(t){const e=this.toSeconds(t);return this.log("stop",e),this._state.cancel(e),this._state.setStateAtTime("stopped",e),this._tickSource.stop(e),e<this._lastUpdate&&this.emit("stop",e),this}pause(t){const e=this.toSeconds(t);return"started"===this._state.getValueAtTime(e)&&(this._state.setStateAtTime("paused",e),this._tickSource.pause(e),e<this._lastUpdate&&this.emit("pause",e)),this}get ticks(){return Math.ceil(this.getTicksAtTime(this.now()))}set ticks(t){this._tickSource.ticks=t}get seconds(){return this._tickSource.seconds}set seconds(t){this._tickSource.seconds=t}getSecondsAtTime(t){return this._tickSource.getSecondsAtTime(t)}setTicksAtTime(t,e){return this._tickSource.setTicksAtTime(t,e),this}getTimeOfTick(t,e=this.now()){return this._tickSource.getTimeOfTick(t,e)}getTicksAtTime(t){return this._tickSource.getTicksAtTime(t)}nextTickTime(t,e){const s=this.toSeconds(e),n=this.getTicksAtTime(s);return this._tickSource.getTimeOfTick(n+t,s)}_loop(){const t=this._lastUpdate,e=this.now();this._lastUpdate=e,this.log("loop",t,e),t!==e&&(this._state.forEachBetween(t,e,t=>{switch(t.state){case"started":const e=this._tickSource.getTicksAtTime(t.time);this.emit("start",t.time,e);break;case"stopped":0!==t.time&&this.emit("stop",t.time);break;case"paused":this.emit("pause",t.time)}}),this._tickSource.forEachTickBetween(t,e,(t,e)=>{this.callback(t,e)}))}getStateAtTime(t){const e=this.toSeconds(t);return this._state.getValueAtTime(e)}dispose(){return super.dispose(),this.context.off("tick",this._boundLoop),this._tickSource.dispose(),this._state.dispose(),this}}Bi.mixin(qo);class Fo extends wo{constructor(){super(Di(Fo.getDefaults(),arguments,["delayTime","maxDelay"])),this.name="Delay";const t=Di(Fo.getDefaults(),arguments,["delayTime","maxDelay"]),e=this.toSeconds(t.maxDelay);this._maxDelay=Math.max(e,this.toSeconds(t.delayTime)),this._delayNode=this.input=this.output=this.context.createDelay(e),this.delayTime=new xo({context:this.context,param:this._delayNode.delayTime,units:"time",value:t.delayTime,minValue:0,maxValue:this.maxDelay}),Ui(this,"delayTime")}static getDefaults(){return Object.assign(wo.getDefaults(),{delayTime:0,maxDelay:1})}get maxDelay(){return this._maxDelay}dispose(){return super.dispose(),this._delayNode.disconnect(),this.delayTime.dispose(),this}}function Io(t,e,s=2,n=Ji().sampleRate){return yi(this,void 0,void 0,(function*(){const i=Ji(),o=new Yi(s,e,n);Ki(o),yield t(o);const r=o.render();Ki(i);const a=yield r;return new Xi(a)}))}class Vo extends Ei{constructor(){super(),this.name="ToneAudioBuffers",this._buffers=new Map,this._loadingCount=0;const t=Di(Vo.getDefaults(),arguments,["urls","onload","baseUrl"],"urls");this.baseUrl=t.baseUrl,Object.keys(t.urls).forEach(e=>{this._loadingCount++;const s=t.urls[e];this.add(e,s,this._bufferLoaded.bind(this,t.onload),t.onerror)})}static getDefaults(){return{baseUrl:"",onerror:Zi,onload:Zi,urls:{}}}has(t){return this._buffers.has(t.toString())}get(t){return ti(this.has(t),"ToneAudioBuffers has no buffer named: "+t),this._buffers.get(t.toString())}_bufferLoaded(t){this._loadingCount--,0===this._loadingCount&&t&&t()}get loaded(){return Array.from(this._buffers).every(([t,e])=>e.loaded)}add(t,e,s=Zi,n=Zi){return fi(e)?this._buffers.set(t.toString(),new Xi(this.baseUrl+e,s,n)):this._buffers.set(t.toString(),new Xi(e,s,n)),this}dispose(){return super.dispose(),this._buffers.forEach(t=>t.dispose()),this._buffers.clear(),this}}class No extends lo{constructor(){super(...arguments),this.name="MidiClass",this.defaultUnits="midi"}_frequencyToUnits(t){return oo(super._frequencyToUnits(t))}_ticksToUnits(t){return oo(super._ticksToUnits(t))}_beatsToUnits(t){return oo(super._beatsToUnits(t))}_secondsToUnits(t){return oo(super._secondsToUnits(t))}toMidi(){return this.valueOf()}toFrequency(){return ao(this.toMidi())}transpose(t){return new No(this.context,this.toMidi()+t)}}function Po(t,e){return new No(Ji(),t,e)}class jo extends mo{constructor(){super(...arguments),this.name="Ticks",this.defaultUnits="i"}_now(){return this.context.transport.ticks}_beatsToUnits(t){return this._getPPQ()*t}_secondsToUnits(t){return Math.floor(t/(60/this._getBpm())*this._getPPQ())}_ticksToUnits(t){return t}toTicks(){return this.valueOf()}toSeconds(){return this.valueOf()/this._getPPQ()*(60/this._getBpm())}}function Lo(t,e){return new jo(Ji(),t,e)}class zo extends vo{constructor(){super(...arguments),this.name="Draw",this.expiration=.25,this.anticipation=.008,this._events=new Ni,this._boundDrawLoop=this._drawLoop.bind(this),this._animationFrame=-1}schedule(t,e){return this._events.add({callback:t,time:this.toSeconds(e)}),1===this._events.length&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop)),this}cancel(t){return this._events.cancel(this.toSeconds(t)),this}_drawLoop(){const t=this.context.currentTime;for(;this._events.length&&this._events.peek().time-this.anticipation<=t;){const e=this._events.shift();e&&t-e.time<=this.expiration&&e.callback()}this._events.length>0&&(this._animationFrame=requestAnimationFrame(this._boundDrawLoop))}dispose(){return super.dispose(),this._events.dispose(),cancelAnimationFrame(this._animationFrame),this}}ji(t=>{t.draw=new zo({context:t})}),zi(t=>{t.draw.dispose()});class Bo extends Ei{constructor(){super(...arguments),this.name="IntervalTimeline",this._root=null,this._length=0}add(t){ti(ci(t.time),"Events must have a time property"),ti(ci(t.duration),"Events must have a duration parameter"),t.time=t.time.valueOf();let e=new Wo(t.time,t.time+t.duration,t);for(null===this._root?this._root=e:this._root.insert(e),this._length++;null!==e;)e.updateHeight(),e.updateMax(),this._rebalance(e),e=e.parent;return this}remove(t){if(null!==this._root){const e=[];this._root.search(t.time,e);for(const s of e)if(s.event===t){this._removeNode(s),this._length--;break}}return this}get length(){return this._length}cancel(t){return this.forEachFrom(t,t=>this.remove(t)),this}_setRoot(t){this._root=t,null!==this._root&&(this._root.parent=null)}_replaceNodeInParent(t,e){null!==t.parent?(t.isLeftChild()?t.parent.left=e:t.parent.right=e,this._rebalance(t.parent)):this._setRoot(e)}_removeNode(t){if(null===t.left&&null===t.right)this._replaceNodeInParent(t,null);else if(null===t.right)this._replaceNodeInParent(t,t.left);else if(null===t.left)this._replaceNodeInParent(t,t.right);else{let e,s=null;if(t.getBalance()>0)if(null===t.left.right)e=t.left,e.right=t.right,s=e;else{for(e=t.left.right;null!==e.right;)e=e.right;e.parent&&(e.parent.right=e.left,s=e.parent,e.left=t.left,e.right=t.right)}else if(null===t.right.left)e=t.right,e.left=t.left,s=e;else{for(e=t.right.left;null!==e.left;)e=e.left;e.parent&&(e.parent.left=e.right,s=e.parent,e.left=t.left,e.right=t.right)}null!==t.parent?t.isLeftChild()?t.parent.left=e:t.parent.right=e:this._setRoot(e),s&&this._rebalance(s)}t.dispose()}_rotateLeft(t){const e=t.parent,s=t.isLeftChild(),n=t.right;n&&(t.right=n.left,n.left=t),null!==e?s?e.left=n:e.right=n:this._setRoot(n)}_rotateRight(t){const e=t.parent,s=t.isLeftChild(),n=t.left;n&&(t.left=n.right,n.right=t),null!==e?s?e.left=n:e.right=n:this._setRoot(n)}_rebalance(t){const e=t.getBalance();e>1&&t.left?t.left.getBalance()<0?this._rotateLeft(t.left):this._rotateRight(t):e<-1&&t.right&&(t.right.getBalance()>0?this._rotateRight(t.right):this._rotateLeft(t))}get(t){if(null!==this._root){const e=[];if(this._root.search(t,e),e.length>0){let t=e[0];for(let s=1;s<e.length;s++)e[s].low>t.low&&(t=e[s]);return t.event}}return null}forEach(t){if(null!==this._root){const e=[];this._root.traverse(t=>e.push(t)),e.forEach(e=>{e.event&&t(e.event)})}return this}forEachAtTime(t,e){if(null!==this._root){const s=[];this._root.search(t,s),s.forEach(t=>{t.event&&e(t.event)})}return this}forEachFrom(t,e){if(null!==this._root){const s=[];this._root.searchAfter(t,s),s.forEach(t=>{t.event&&e(t.event)})}return this}dispose(){return super.dispose(),null!==this._root&&this._root.traverse(t=>t.dispose()),this._root=null,this}}class Wo{constructor(t,e,s){this._left=null,this._right=null,this.parent=null,this.height=0,this.event=s,this.low=t,this.high=e,this.max=this.high}insert(t){t.low<=this.low?null===this.left?this.left=t:this.left.insert(t):null===this.right?this.right=t:this.right.insert(t)}search(t,e){t>this.max||(null!==this.left&&this.left.search(t,e),this.low<=t&&this.high>t&&e.push(this),this.low>t||null!==this.right&&this.right.search(t,e))}searchAfter(t,e){this.low>=t&&(e.push(this),null!==this.left&&this.left.searchAfter(t,e)),null!==this.right&&this.right.searchAfter(t,e)}traverse(t){t(this),null!==this.left&&this.left.traverse(t),null!==this.right&&this.right.traverse(t)}updateHeight(){null!==this.left&&null!==this.right?this.height=Math.max(this.left.height,this.right.height)+1:null!==this.right?this.height=this.right.height+1:null!==this.left?this.height=this.left.height+1:this.height=0}updateMax(){this.max=this.high,null!==this.left&&(this.max=Math.max(this.max,this.left.max)),null!==this.right&&(this.max=Math.max(this.max,this.right.max))}getBalance(){let t=0;return null!==this.left&&null!==this.right?t=this.left.height-this.right.height:null!==this.left?t=this.left.height+1:null!==this.right&&(t=-(this.right.height+1)),t}isLeftChild(){return null!==this.parent&&this.parent.left===this}get left(){return this._left}set left(t){this._left=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}get right(){return this._right}set right(t){this._right=t,null!==t&&(t.parent=this),this.updateHeight(),this.updateMax()}dispose(){this.parent=null,this._left=null,this._right=null,this.event=null}}class Go extends wo{constructor(){super(Di(Go.getDefaults(),arguments,["volume"])),this.name="Volume";const t=Di(Go.getDefaults(),arguments,["volume"]);this.input=this.output=new ko({context:this.context,gain:t.volume,units:"decibels"}),this.volume=this.output.gain,Ui(this,"volume"),this._unmutedVolume=t.volume,this.mute=t.mute}static getDefaults(){return Object.assign(wo.getDefaults(),{mute:!1,volume:0})}get mute(){return this.volume.value===-1/0}set mute(t){!this.mute&&t?(this._unmutedVolume=this.volume.value,this.volume.value=-1/0):this.mute&&!t&&(this.volume.value=this._unmutedVolume)}dispose(){return super.dispose(),this.input.dispose(),this.volume.dispose(),this}}class Uo extends wo{constructor(){super(Di(Uo.getDefaults(),arguments)),this.name="Destination",this.input=new Go({context:this.context}),this.output=new ko({context:this.context}),this.volume=this.input.volume;const t=Di(Uo.getDefaults(),arguments);bo(this.input,this.output,this.context.rawContext.destination),this.mute=t.mute,this._internalChannels=[this.input,this.context.rawContext.destination,this.output]}static getDefaults(){return Object.assign(wo.getDefaults(),{mute:!1,volume:0})}get mute(){return this.input.mute}set mute(t){this.input.mute=t}chain(...t){return this.input.disconnect(),t.unshift(this.input),t.push(this.output),bo(...t),this}get maxChannelCount(){return this.context.rawContext.destination.maxChannelCount}dispose(){return super.dispose(),this.volume.dispose(),this}}ji(t=>{t.destination=new Uo({context:t})}),zi(t=>{t.destination.dispose()});class Qo extends Ei{constructor(t){super(),this.name="TimelineValue",this._timeline=new Ni({memory:10}),this._initialValue=t}set(t,e){return this._timeline.add({value:t,time:e}),this}get(t){const e=this._timeline.get(t);return e?e.value:this._initialValue}}class Zo{constructor(t,e){this.id=Zo._eventId++;const s=Object.assign(Zo.getDefaults(),e);this.transport=t,this.callback=s.callback,this._once=s.once,this.time=s.time}static getDefaults(){return{callback:Zi,once:!1,time:0}}invoke(t){this.callback&&(this.callback(t),this._once&&this.transport.clear(this.id))}dispose(){return this.callback=void 0,this}}Zo._eventId=0;class Xo extends Zo{constructor(t,e){super(t,e),this._currentId=-1,this._nextId=-1,this._nextTick=this.time,this._boundRestart=this._restart.bind(this);const s=Object.assign(Xo.getDefaults(),e);this.duration=new jo(t.context,s.duration).valueOf(),this._interval=new jo(t.context,s.interval).valueOf(),this._nextTick=s.time,this.transport.on("start",this._boundRestart),this.transport.on("loopStart",this._boundRestart),this.context=this.transport.context,this._restart()}static getDefaults(){return Object.assign({},Zo.getDefaults(),{duration:1/0,interval:1,once:!1})}invoke(t){this._createEvents(t),super.invoke(t)}_createEvents(t){const e=this.transport.getTicksAtTime(t);e>=this.time&&e>=this._nextTick&&this._nextTick+this._interval<this.time+this.duration&&(this._nextTick+=this._interval,this._currentId=this._nextId,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new jo(this.context,this._nextTick).toSeconds()))}_restart(t){this.transport.clear(this._currentId),this.transport.clear(this._nextId),this._nextTick=this.time;const e=this.transport.getTicksAtTime(t);e>this.time&&(this._nextTick=this.time+Math.ceil((e-this.time)/this._interval)*this._interval),this._currentId=this.transport.scheduleOnce(this.invoke.bind(this),new jo(this.context,this._nextTick).toSeconds()),this._nextTick+=this._interval,this._nextId=this.transport.scheduleOnce(this.invoke.bind(this),new jo(this.context,this._nextTick).toSeconds())}dispose(){return super.dispose(),this.transport.clear(this._currentId),this.transport.clear(this._nextId),this.transport.off("start",this._boundRestart),this.transport.off("loopStart",this._boundRestart),this}}class Yo extends vo{constructor(){super(Di(Yo.getDefaults(),arguments)),this.name="Transport",this._loop=new Qo(!1),this._loopStart=0,this._loopEnd=0,this._scheduledEvents={},this._timeline=new Ni,this._repeatedEvents=new Bo,this._syncedSignals=[],this._swingAmount=0;const t=Di(Yo.getDefaults(),arguments);this._ppq=t.ppq,this._clock=new qo({callback:this._processTick.bind(this),context:this.context,frequency:0,units:"bpm"}),this._bindClockEvents(),this.bpm=this._clock.frequency,this._clock.frequency.multiplier=t.ppq,this.bpm.setValueAtTime(t.bpm,0),Ui(this,"bpm"),this._timeSignature=t.timeSignature,this._swingTicks=t.ppq/2}static getDefaults(){return Object.assign(vo.getDefaults(),{bpm:120,loopEnd:"4m",loopStart:0,ppq:192,swing:0,swingSubdivision:"8n",timeSignature:4})}_processTick(t,e){if(this._loop.get(t)&&e>=this._loopEnd&&(this.emit("loopEnd",t),this._clock.setTicksAtTime(this._loopStart,t),e=this._loopStart,this.emit("loopStart",t,this._clock.getSecondsAtTime(t)),this.emit("loop",t)),this._swingAmount>0&&e%this._ppq!=0&&e%(2*this._swingTicks)!=0){const s=e%(2*this._swingTicks)/(2*this._swingTicks),n=Math.sin(s*Math.PI)*this._swingAmount;t+=new jo(this.context,2*this._swingTicks/3).toSeconds()*n}this._timeline.forEachAtTime(e,e=>e.invoke(t))}schedule(t,e){const s=new Zo(this,{callback:t,time:new mo(this.context,e).toTicks()});return this._addEvent(s,this._timeline)}scheduleRepeat(t,e,s,n=1/0){const i=new Xo(this,{callback:t,duration:new ho(this.context,n).toTicks(),interval:new ho(this.context,e).toTicks(),time:new mo(this.context,s).toTicks()});return this._addEvent(i,this._repeatedEvents)}scheduleOnce(t,e){const s=new Zo(this,{callback:t,once:!0,time:new mo(this.context,e).toTicks()});return this._addEvent(s,this._timeline)}clear(t){if(this._scheduledEvents.hasOwnProperty(t)){const e=this._scheduledEvents[t.toString()];e.timeline.remove(e.event),e.event.dispose(),delete this._scheduledEvents[t.toString()]}return this}_addEvent(t,e){return this._scheduledEvents[t.id.toString()]={event:t,timeline:e},e.add(t),t.id}cancel(t=0){const e=this.toTicks(t);return this._timeline.forEachFrom(e,t=>this.clear(t.id)),this._repeatedEvents.forEachFrom(e,t=>this.clear(t.id)),this}_bindClockEvents(){this._clock.on("start",(t,e)=>{e=new jo(this.context,e).toSeconds(),this.emit("start",t,e)}),this._clock.on("stop",t=>{this.emit("stop",t)}),this._clock.on("pause",t=>{this.emit("pause",t)})}get state(){return this._clock.getStateAtTime(this.now())}start(t,e){let s;return ci(e)&&(s=this.toTicks(e)),this._clock.start(t,s),this}stop(t){return this._clock.stop(t),this}pause(t){return this._clock.pause(t),this}toggle(t){return t=this.toSeconds(t),"started"!==this._clock.getStateAtTime(t)?this.start(t):this.stop(t),this}get timeSignature(){return this._timeSignature}set timeSignature(t){di(t)&&(t=t[0]/t[1]*4),this._timeSignature=t}get loopStart(){return new ho(this.context,this._loopStart,"i").toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t)}get loopEnd(){return new ho(this.context,this._loopEnd,"i").toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t)}get loop(){return this._loop.get(this.now())}set loop(t){this._loop.set(t,this.now())}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get swing(){return this._swingAmount}set swing(t){this._swingAmount=t}get swingSubdivision(){return new jo(this.context,this._swingTicks).toNotation()}set swingSubdivision(t){this._swingTicks=this.toTicks(t)}get position(){const t=this.now(),e=this._clock.getTicksAtTime(t);return new jo(this.context,e).toBarsBeatsSixteenths()}set position(t){const e=this.toTicks(t);this.ticks=e}get seconds(){return this._clock.seconds}set seconds(t){const e=this.now(),s=this._clock.frequency.timeToTicks(t,e);this.ticks=s}get progress(){if(this.loop){const t=this.now();return(this._clock.getTicksAtTime(t)-this._loopStart)/(this._loopEnd-this._loopStart)}return 0}get ticks(){return this._clock.ticks}set ticks(t){if(this._clock.ticks!==t){const e=this.now();if("started"===this.state){const s=this._clock.getTicksAtTime(e),n=e+this._clock.frequency.getDurationOfTicks(Math.ceil(s)-s,e);this.emit("stop",n),this._clock.setTicksAtTime(t,n),this.emit("start",n,this._clock.getSecondsAtTime(n))}else this._clock.setTicksAtTime(t,e)}}getTicksAtTime(t){return Math.round(this._clock.getTicksAtTime(t))}getSecondsAtTime(t){return this._clock.getSecondsAtTime(t)}get PPQ(){return this._clock.frequency.multiplier}set PPQ(t){this._clock.frequency.multiplier=t}nextSubdivision(t){if(t=this.toTicks(t),"started"!==this.state)return 0;{const e=this.now(),s=t-this.getTicksAtTime(e)%t;return this._clock.nextTickTime(s,e)}}syncSignal(t,e){if(!e){const s=this.now();if(0!==t.getValueAtTime(s)){const n=1/(60/this.bpm.getValueAtTime(s)/this.PPQ);e=t.getValueAtTime(s)/n}else e=0}const s=new ko(e);return this.bpm.connect(s),s.connect(t._param),this._syncedSignals.push({initial:t.value,ratio:s,signal:t}),t.value=0,this}unsyncSignal(t){for(let e=this._syncedSignals.length-1;e>=0;e--){const s=this._syncedSignals[e];s.signal===t&&(s.ratio.dispose(),s.signal.value=s.initial,this._syncedSignals.splice(e,1))}return this}dispose(){return super.dispose(),this._clock.dispose(),Qi(this,"bpm"),this._timeline.dispose(),this._repeatedEvents.dispose(),this}}Bi.mixin(Yo),ji(t=>{t.transport=new Yo({context:t})}),zi(t=>{t.transport.dispose()});class Ho extends wo{constructor(t){super(t),this.input=void 0,this._state=new yo("stopped"),this._synced=!1,this._scheduled=[],this._syncedStart=Zi,this._syncedStop=Zi,this._state.memory=100,this._state.increasing=!0,this._volume=this.output=new Go({context:this.context,mute:t.mute,volume:t.volume}),this.volume=this._volume.volume,Ui(this,"volume"),this.onstop=t.onstop}static getDefaults(){return Object.assign(wo.getDefaults(),{mute:!1,onstop:Zi,volume:0})}get state(){return this._synced?"started"===this.context.transport.state?this._state.getValueAtTime(this.context.transport.seconds):"stopped":this._state.getValueAtTime(this.now())}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}_clampToCurrentTime(t){return this._synced?t:Math.max(t,this.context.currentTime)}start(t,e,s){let n=ai(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(n=this._clampToCurrentTime(n),this._synced||"started"!==this._state.getValueAtTime(n))if(this.log("start",n),this._state.setStateAtTime("started",n),this._synced){const t=this._state.get(n);t&&(t.offset=this.toSeconds(Oi(e,0)),t.duration=s?this.toSeconds(s):void 0);const i=this.context.transport.schedule(t=>{this._start(t,e,s)},n);this._scheduled.push(i),"started"===this.context.transport.state&&this.context.transport.getSecondsAtTime(this.immediate())>n&&this._syncedStart(this.now(),this.context.transport.seconds)}else si(this.context),this._start(n,e,s);else ti(Ri(n,this._state.get(n).time),"Start time must be strictly greater than previous start time"),this._state.cancel(n),this._state.setStateAtTime("started",n),this.log("restart",n),this.restart(n,e,s);return this}stop(t){let e=ai(t)&&this._synced?this.context.transport.seconds:this.toSeconds(t);if(e=this._clampToCurrentTime(e),"started"===this._state.getValueAtTime(e)||ci(this._state.getNextState("started",e))){if(this.log("stop",e),this._synced){const t=this.context.transport.schedule(this._stop.bind(this),e);this._scheduled.push(t)}else this._stop(e);this._state.cancel(e),this._state.setStateAtTime("stopped",e)}return this}restart(t,e,s){return t=this.toSeconds(t),"started"===this._state.getValueAtTime(t)&&(this._state.cancel(t),this._restart(t,e,s)),this}sync(){return this._synced||(this._synced=!0,this._syncedStart=(t,e)=>{if(e>0){const s=this._state.get(e);if(s&&"started"===s.state&&s.time!==e){const n=e-this.toSeconds(s.time);let i;s.duration&&(i=this.toSeconds(s.duration)-n),this._start(t,this.toSeconds(s.offset)+n,i)}}},this._syncedStop=t=>{const e=this.context.transport.getSecondsAtTime(Math.max(t-this.sampleTime,0));"started"===this._state.getValueAtTime(e)&&this._stop(t)},this.context.transport.on("start",this._syncedStart),this.context.transport.on("loopStart",this._syncedStart),this.context.transport.on("stop",this._syncedStop),this.context.transport.on("pause",this._syncedStop),this.context.transport.on("loopEnd",this._syncedStop)),this}unsync(){return this._synced&&(this.context.transport.off("stop",this._syncedStop),this.context.transport.off("pause",this._syncedStop),this.context.transport.off("loopEnd",this._syncedStop),this.context.transport.off("start",this._syncedStart),this.context.transport.off("loopStart",this._syncedStart)),this._synced=!1,this._scheduled.forEach(t=>this.context.transport.clear(t)),this._scheduled=[],this._state.cancel(0),this._stop(0),this}dispose(){return super.dispose(),this.onstop=Zi,this.unsync(),this._volume.dispose(),this._state.dispose(),this}}class $o extends Co{constructor(){super(Di($o.getDefaults(),arguments,["url","onload"])),this.name="ToneBufferSource",this._source=this.context.createBufferSource(),this._internalChannels=[this._source],this._sourceStarted=!1,this._sourceStopped=!1;const t=Di($o.getDefaults(),arguments,["url","onload"]);To(this._source,this._gainNode),this._source.onended=()=>this._stopSource(),this.playbackRate=new xo({context:this.context,param:this._source.playbackRate,units:"positive",value:t.playbackRate}),this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this._buffer=new Xi(t.url,t.onload,t.onerror),this._internalChannels.push(this._source)}static getDefaults(){return Object.assign(Co.getDefaults(),{url:new Xi,loop:!1,loopEnd:0,loopStart:0,onload:Zi,onerror:Zi,playbackRate:1})}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t}get curve(){return this._curve}set curve(t){this._curve=t}start(t,e,s,n=1){ti(this.buffer.loaded,"buffer is either not set or not loaded");const i=this.toSeconds(t);this._startGain(i,n),e=this.loop?Oi(e,this.loopStart):Oi(e,0);let o=Math.max(this.toSeconds(e),0);if(this.loop){const t=this.toSeconds(this.loopEnd)||this.buffer.duration,e=this.toSeconds(this.loopStart),s=t-e;qi(o,t)&&(o=(o-e)%s+e),Ii(o,this.buffer.duration)&&(o=0)}if(this._source.buffer=this.buffer.get(),this._source.loopEnd=this.toSeconds(this.loopEnd)||this.buffer.duration,Fi(o,this.buffer.duration)&&(this._sourceStarted=!0,this._source.start(i,o)),ci(s)){let t=this.toSeconds(s);t=Math.max(t,0),this.stop(i+t)}return this}_stopSource(t){!this._sourceStopped&&this._sourceStarted&&(this._sourceStopped=!0,this._source.stop(this.toSeconds(t)),this._onended())}get loopStart(){return this._source.loopStart}set loopStart(t){this._source.loopStart=this.toSeconds(t)}get loopEnd(){return this._source.loopEnd}set loopEnd(t){this._source.loopEnd=this.toSeconds(t)}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._source.loop}set loop(t){this._source.loop=t,this._sourceStarted&&this.cancelStop()}dispose(){return super.dispose(),this._source.onended=null,this._source.disconnect(),this._buffer.dispose(),this.playbackRate.dispose(),this}}class Jo extends Ho{constructor(){super(Di(Jo.getDefaults(),arguments,["type"])),this.name="Noise",this._source=null;const t=Di(Jo.getDefaults(),arguments,["type"]);this._playbackRate=t.playbackRate,this.type=t.type,this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Ho.getDefaults(),{fadeIn:0,fadeOut:0,playbackRate:1,type:"white"})}get type(){return this._type}set type(t){if(ti(t in tr,"Noise: invalid type: "+t),this._type!==t&&(this._type=t,"started"===this.state)){const t=this.now();this._stop(t),this._start(t)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._source&&(this._source.playbackRate.value=t)}_start(t){const e=tr[this._type];this._source=new $o({url:e,context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,loop:!0,onended:()=>this.onstop(this),playbackRate:this._playbackRate}).connect(this.output),this._source.start(this.toSeconds(t),Math.random()*(e.duration-.001))}_stop(t){this._source&&(this._source.stop(this.toSeconds(t)),this._source=null)}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t,this._source&&(this._source.fadeIn=this._fadeIn)}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t,this._source&&(this._source.fadeOut=this._fadeOut)}_restart(t){this._stop(t),this._start(t)}dispose(){return super.dispose(),this._source&&this._source.disconnect(),this}}const Ko={brown:null,pink:null,white:null},tr={get brown(){if(!Ko.brown){const t=[];for(let e=0;e<2;e++){const s=new Float32Array(220500);t[e]=s;let n=0;for(let t=0;t<220500;t++){const e=2*Math.random()-1;s[t]=(n+.02*e)/1.02,n=s[t],s[t]*=3.5}}Ko.brown=(new Xi).fromArray(t)}return Ko.brown},get pink(){if(!Ko.pink){const t=[];for(let e=0;e<2;e++){const s=new Float32Array(220500);let n,i,o,r,a,c,h;t[e]=s,n=i=o=r=a=c=h=0;for(let t=0;t<220500;t++){const e=2*Math.random()-1;n=.99886*n+.0555179*e,i=.99332*i+.0750759*e,o=.969*o+.153852*e,r=.8665*r+.3104856*e,a=.55*a+.5329522*e,c=-.7616*c-.016898*e,s[t]=n+i+o+r+a+c+h+.5362*e,s[t]*=.11,h=.115926*e}}Ko.pink=(new Xi).fromArray(t)}return Ko.pink},get white(){if(!Ko.white){const t=[];for(let e=0;e<2;e++){const s=new Float32Array(220500);t[e]=s;for(let t=0;t<220500;t++)s[t]=2*Math.random()-1}Ko.white=(new Xi).fromArray(t)}return Ko.white}};class er extends wo{constructor(){super(Di(er.getDefaults(),arguments,["volume"])),this.name="UserMedia";const t=Di(er.getDefaults(),arguments,["volume"]);this._volume=this.output=new Go({context:this.context,volume:t.volume}),this.volume=this._volume.volume,Ui(this,"volume"),this.mute=t.mute}static getDefaults(){return Object.assign(wo.getDefaults(),{mute:!1,volume:0})}open(t){return yi(this,void 0,void 0,(function*(){ti(er.supported,"UserMedia is not supported"),"started"===this.state&&this.close();const e=yield er.enumerateDevices();ui(t)?this._device=e[t]:(this._device=e.find(e=>e.label===t||e.deviceId===t),!this._device&&e.length>0&&(this._device=e[0]),ti(ci(this._device),"No matching device "+t));const s={audio:{echoCancellation:!1,sampleRate:this.context.sampleRate,noiseSuppression:!1,mozNoiseSuppression:!1}};this._device&&(s.audio.deviceId=this._device.deviceId);const n=yield navigator.mediaDevices.getUserMedia(s);if(!this._stream){this._stream=n;const t=this.context.createMediaStreamSource(n);To(t,this.output),this._mediaStream=t}return this}))}close(){return this._stream&&this._mediaStream&&(this._stream.getAudioTracks().forEach(t=>{t.stop()}),this._stream=void 0,this._mediaStream.disconnect(),this._mediaStream=void 0),this._device=void 0,this}static enumerateDevices(){return yi(this,void 0,void 0,(function*(){return(yield navigator.mediaDevices.enumerateDevices()).filter(t=>"audioinput"===t.kind)}))}get state(){return this._stream&&this._stream.active?"started":"stopped"}get deviceId(){return this._device?this._device.deviceId:void 0}get groupId(){return this._device?this._device.groupId:void 0}get label(){return this._device?this._device.label:void 0}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}dispose(){return super.dispose(),this.close(),this._volume.dispose(),this.volume.dispose(),this}static get supported(){return ci(navigator.mediaDevices)&&ci(navigator.mediaDevices.getUserMedia)}}function sr(t,e){return yi(this,void 0,void 0,(function*(){const s=e/t.context.sampleRate,n=new Yi(1,s,t.context.sampleRate);new t.constructor(Object.assign(t.get(),{frequency:2/s,detune:0,context:n})).toDestination().start(0);return(yield n.render()).getChannelData(0)}))}class nr extends Co{constructor(){super(Di(nr.getDefaults(),arguments,["frequency","type"])),this.name="ToneOscillatorNode",this._oscillator=this.context.createOscillator(),this._internalChannels=[this._oscillator];const t=Di(nr.getDefaults(),arguments,["frequency","type"]);To(this._oscillator,this._gainNode),this.type=t.type,this.frequency=new xo({context:this.context,param:this._oscillator.frequency,units:"frequency",value:t.frequency}),this.detune=new xo({context:this.context,param:this._oscillator.detune,units:"cents",value:t.detune}),Ui(this,["frequency","detune"])}static getDefaults(){return Object.assign(Co.getDefaults(),{detune:0,frequency:440,type:"sine"})}start(t){const e=this.toSeconds(t);return this.log("start",e),this._startGain(e),this._oscillator.start(e),this}_stopSource(t){this._oscillator.stop(t)}setPeriodicWave(t){return this._oscillator.setPeriodicWave(t),this}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t}dispose(){return super.dispose(),"started"===this.state&&this.stop(),this._oscillator.disconnect(),this.frequency.dispose(),this.detune.dispose(),this}}class ir extends Ho{constructor(){super(Di(ir.getDefaults(),arguments,["frequency","type"])),this.name="Oscillator",this._oscillator=null;const t=Di(ir.getDefaults(),arguments,["frequency","type"]);this.frequency=new Do({context:this.context,units:"frequency",value:t.frequency}),Ui(this,"frequency"),this.detune=new Do({context:this.context,units:"cents",value:t.detune}),Ui(this,"detune"),this._partials=t.partials,this._partialCount=t.partialCount,this._type=t.type,t.partialCount&&"custom"!==t.type&&(this._type=this.baseType+t.partialCount.toString()),this.phase=t.phase}static getDefaults(){return Object.assign(Ho.getDefaults(),{detune:0,frequency:440,partialCount:0,partials:[],phase:0,type:"sine"})}_start(t){const e=this.toSeconds(t),s=new nr({context:this.context,onended:()=>this.onstop(this)});this._oscillator=s,this._wave?this._oscillator.setPeriodicWave(this._wave):this._oscillator.type=this._type,this._oscillator.connect(this.output),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.start(e)}_stop(t){const e=this.toSeconds(t);this._oscillator&&this._oscillator.stop(e)}_restart(t){const e=this.toSeconds(t);return this.log("restart",e),this._oscillator&&this._oscillator.cancelStop(),this._state.cancel(e),this}syncFrequency(){return this.context.transport.syncSignal(this.frequency),this}unsyncFrequency(){return this.context.transport.unsyncSignal(this.frequency),this}_getCachedPeriodicWave(){if("custom"===this._type){return ir._periodicWaveCache.find(t=>{return t.phase===this._phase&&(e=t.partials,s=this._partials,e.length===s.length&&e.every((t,e)=>s[e]===t));var e,s})}{const t=ir._periodicWaveCache.find(t=>t.type===this._type&&t.phase===this._phase);return this._partialCount=t?t.partialCount:this._partialCount,t}}get type(){return this._type}set type(t){this._type=t;const e=-1!==["sine","square","sawtooth","triangle"].indexOf(t);if(0===this._phase&&e)this._wave=void 0,this._partialCount=0,null!==this._oscillator&&(this._oscillator.type=t);else{const e=this._getCachedPeriodicWave();if(ci(e)){const{partials:t,wave:s}=e;this._wave=s,this._partials=t,null!==this._oscillator&&this._oscillator.setPeriodicWave(this._wave)}else{const[e,s]=this._getRealImaginary(t,this._phase),n=this.context.createPeriodicWave(e,s);this._wave=n,null!==this._oscillator&&this._oscillator.setPeriodicWave(this._wave),ir._periodicWaveCache.push({imag:s,partialCount:this._partialCount,partials:this._partials,phase:this._phase,real:e,type:this._type,wave:this._wave}),ir._periodicWaveCache.length>100&&ir._periodicWaveCache.shift()}}}get baseType(){return this._type.replace(this.partialCount.toString(),"")}set baseType(t){this.partialCount&&"custom"!==this._type&&"custom"!==t?this.type=t+this.partialCount:this.type=t}get partialCount(){return this._partialCount}set partialCount(t){ei(t,0);let e=this._type;const s=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(this._type);if(s&&(e=s[1]),"custom"!==this._type)this.type=0===t?e:e+t.toString();else{const e=new Float32Array(t);this._partials.forEach((t,s)=>e[s]=t),this._partials=Array.from(e),this.type=this._type}}_getRealImaginary(t,e){let s=2048;const n=new Float32Array(s),i=new Float32Array(s);let o=1;if("custom"===t){if(o=this._partials.length+1,this._partialCount=this._partials.length,s=o,0===this._partials.length)return[n,i]}else{const e=/^(sine|triangle|square|sawtooth)(\d+)$/.exec(t);e?(o=parseInt(e[2],10)+1,this._partialCount=parseInt(e[2],10),t=e[1],o=Math.max(o,2),s=o):this._partialCount=0,this._partials=[]}for(let r=1;r<s;++r){const s=2/(r*Math.PI);let a;switch(t){case"sine":a=r<=o?1:0,this._partials[r-1]=a;break;case"square":a=1&r?2*s:0,this._partials[r-1]=a;break;case"sawtooth":a=s*(1&r?1:-1),this._partials[r-1]=a;break;case"triangle":a=1&r?s*s*2*(r-1>>1&1?-1:1):0,this._partials[r-1]=a;break;case"custom":a=this._partials[r-1];break;default:throw new TypeError("Oscillator: invalid type: "+t)}0!==a?(n[r]=-a*Math.sin(e*r),i[r]=a*Math.cos(e*r)):(n[r]=0,i[r]=0)}return[n,i]}_inverseFFT(t,e,s){let n=0;const i=t.length;for(let o=0;o<i;o++)n+=t[o]*Math.cos(o*s)+e[o]*Math.sin(o*s);return n}getInitialValue(){const[t,e]=this._getRealImaginary(this._type,0);let s=0;const n=2*Math.PI;for(let i=0;i<32;i++)s=Math.max(this._inverseFFT(t,e,i/32*n),s);return Vi(-this._inverseFFT(t,e,this._phase)/s,-1,1)}get partials(){return this._partials.slice(0,this.partialCount)}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this.type="custom")}get phase(){return this._phase*(180/Math.PI)}set phase(t){this._phase=t*Math.PI/180,this.type=this._type}asArray(t=1024){return yi(this,void 0,void 0,(function*(){return sr(this,t)}))}dispose(){return super.dispose(),null!==this._oscillator&&this._oscillator.dispose(),this._wave=void 0,this.frequency.dispose(),this.detune.dispose(),this}}ir._periodicWaveCache=[];class or extends wo{constructor(){super(Object.assign(Di(or.getDefaults(),arguments,["context"])))}connect(t,e=0,s=0){return Oo(this,t,e,s),this}}class rr extends or{constructor(){super(Object.assign(Di(rr.getDefaults(),arguments,["mapping","length"]))),this.name="WaveShaper",this._shaper=this.context.createWaveShaper(),this.input=this._shaper,this.output=this._shaper;const t=Di(rr.getDefaults(),arguments,["mapping","length"]);di(t.mapping)||t.mapping instanceof Float32Array?this.curve=Float32Array.from(t.mapping):hi(t.mapping)&&this.setMap(t.mapping,t.length)}static getDefaults(){return Object.assign(Do.getDefaults(),{length:1024})}setMap(t,e=1024){const s=new Float32Array(e);for(let n=0,i=e;n<i;n++){const e=n/(i-1)*2-1;s[n]=t(e,n)}return this.curve=s,this}get curve(){return this._shaper.curve}set curve(t){this._shaper.curve=t}get oversample(){return this._shaper.oversample}set oversample(t){ti(["none","2x","4x"].some(e=>e.includes(t)),"oversampling must be either 'none', '2x', or '4x'"),this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.disconnect(),this}}class ar extends or{constructor(){super(...arguments),this.name="AudioToGain",this._norm=new rr({context:this.context,mapping:t=>(t+1)/2}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class cr extends Do{constructor(){super(Object.assign(Di(cr.getDefaults(),arguments,["value"]))),this.name="Multiply",this.override=!1;const t=Di(cr.getDefaults(),arguments,["value"]);this._mult=this.input=this.output=new ko({context:this.context,minValue:t.minValue,maxValue:t.maxValue}),this.factor=this._param=this._mult.gain,this.factor.setValueAtTime(t.value,0)}static getDefaults(){return Object.assign(Do.getDefaults(),{value:0})}dispose(){return super.dispose(),this._mult.dispose(),this}}class hr extends Ho{constructor(){super(Di(hr.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="AMOscillator",this._modulationScale=new ar({context:this.context}),this._modulationNode=new ko({context:this.context});const t=Di(hr.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new ir({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.frequency=this._carrier.frequency,this.detune=this._carrier.detune,this._modulator=new ir({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new cr({context:this.context,units:"positive",value:t.harmonicity}),this.frequency.chain(this.harmonicity,this._modulator.frequency),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output),Ui(this,["frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(ir.getDefaults(),{harmonicity:1,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){this._modulator.restart(t),this._carrier.restart(t)}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(t=1024){return yi(this,void 0,void 0,(function*(){return sr(this,t)}))}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this._modulationScale.dispose(),this}}class ur extends Ho{constructor(){super(Di(ur.getDefaults(),arguments,["frequency","type","modulationType"])),this.name="FMOscillator",this._modulationNode=new ko({context:this.context,gain:0});const t=Di(ur.getDefaults(),arguments,["frequency","type","modulationType"]);this._carrier=new ir({context:this.context,detune:t.detune,frequency:0,onstop:()=>this.onstop(this),phase:t.phase,type:t.type}),this.detune=this._carrier.detune,this.frequency=new Do({context:this.context,units:"frequency",value:t.frequency}),this._modulator=new ir({context:this.context,phase:t.phase,type:t.modulationType}),this.harmonicity=new cr({context:this.context,units:"positive",value:t.harmonicity}),this.modulationIndex=new cr({context:this.context,units:"positive",value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output),this.detune.connect(this._modulator.detune),Ui(this,["modulationIndex","frequency","detune","harmonicity"])}static getDefaults(){return Object.assign(ir.getDefaults(),{harmonicity:1,modulationIndex:2,modulationType:"square"})}_start(t){this._modulator.start(t),this._carrier.start(t)}_stop(t){this._modulator.stop(t),this._carrier.stop(t)}_restart(t){return this._modulator.restart(t),this._carrier.restart(t),this}get type(){return this._carrier.type}set type(t){this._carrier.type=t}get baseType(){return this._carrier.baseType}set baseType(t){this._carrier.baseType=t}get partialCount(){return this._carrier.partialCount}set partialCount(t){this._carrier.partialCount=t}get modulationType(){return this._modulator.type}set modulationType(t){this._modulator.type=t}get phase(){return this._carrier.phase}set phase(t){this._carrier.phase=t,this._modulator.phase=t}get partials(){return this._carrier.partials}set partials(t){this._carrier.partials=t}asArray(t=1024){return yi(this,void 0,void 0,(function*(){return sr(this,t)}))}dispose(){return super.dispose(),this.frequency.dispose(),this.harmonicity.dispose(),this._carrier.dispose(),this._modulator.dispose(),this._modulationNode.dispose(),this.modulationIndex.dispose(),this}}class lr extends Ho{constructor(){super(Di(lr.getDefaults(),arguments,["frequency","width"])),this.name="PulseOscillator",this._widthGate=new ko({context:this.context,gain:0}),this._thresh=new rr({context:this.context,mapping:t=>t<=0?-1:1});const t=Di(lr.getDefaults(),arguments,["frequency","width"]);this.width=new Do({context:this.context,units:"audioRange",value:t.width}),this._triangle=new ir({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase,type:"triangle"}),this.frequency=this._triangle.frequency,this.detune=this._triangle.detune,this._triangle.chain(this._thresh,this.output),this.width.chain(this._widthGate,this._thresh),Ui(this,["width","frequency","detune"])}static getDefaults(){return Object.assign(Ho.getDefaults(),{detune:0,frequency:440,phase:0,type:"pulse",width:.2})}_start(t){t=this.toSeconds(t),this._triangle.start(t),this._widthGate.gain.setValueAtTime(1,t)}_stop(t){t=this.toSeconds(t),this._triangle.stop(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(0,t)}_restart(t){this._triangle.restart(t),this._widthGate.gain.cancelScheduledValues(t),this._widthGate.gain.setValueAtTime(1,t)}get phase(){return this._triangle.phase}set phase(t){this._triangle.phase=t}get type(){return"pulse"}get baseType(){return"pulse"}get partials(){return[]}get partialCount(){return 0}set carrierType(t){this._triangle.type=t}asArray(t=1024){return yi(this,void 0,void 0,(function*(){return sr(this,t)}))}dispose(){return super.dispose(),this._triangle.dispose(),this.width.dispose(),this._widthGate.dispose(),this._thresh.dispose(),this}}class pr extends Ho{constructor(){super(Di(pr.getDefaults(),arguments,["frequency","type","spread"])),this.name="FatOscillator",this._oscillators=[];const t=Di(pr.getDefaults(),arguments,["frequency","type","spread"]);this.frequency=new Do({context:this.context,units:"frequency",value:t.frequency}),this.detune=new Do({context:this.context,units:"cents",value:t.detune}),this._spread=t.spread,this._type=t.type,this._phase=t.phase,this._partials=t.partials,this._partialCount=t.partialCount,this.count=t.count,Ui(this,["frequency","detune"])}static getDefaults(){return Object.assign(ir.getDefaults(),{count:3,spread:20,type:"sawtooth"})}_start(t){t=this.toSeconds(t),this._forEach(e=>e.start(t))}_stop(t){t=this.toSeconds(t),this._forEach(e=>e.stop(t))}_restart(t){this._forEach(e=>e.restart(t))}_forEach(t){for(let e=0;e<this._oscillators.length;e++)t(this._oscillators[e],e)}get type(){return this._type}set type(t){this._type=t,this._forEach(e=>e.type=t)}get spread(){return this._spread}set spread(t){if(this._spread=t,this._oscillators.length>1){const e=-t/2,s=t/(this._oscillators.length-1);this._forEach((t,n)=>t.detune.value=e+s*n)}}get count(){return this._oscillators.length}set count(t){if(ei(t,1),this._oscillators.length!==t){this._forEach(t=>t.dispose()),this._oscillators=[];for(let e=0;e<t;e++){const s=new ir({context:this.context,volume:-6-1.1*t,type:this._type,phase:this._phase+e/t*360,partialCount:this._partialCount,onstop:0===e?()=>this.onstop(this):Zi});"custom"===this.type&&(s.partials=this._partials),this.frequency.connect(s.frequency),this.detune.connect(s.detune),s.detune.overridden=!1,s.connect(this.output),this._oscillators[e]=s}this.spread=this._spread,"started"===this.state&&this._forEach(t=>t.start())}}get phase(){return this._phase}set phase(t){this._phase=t,this._forEach((t,e)=>t.phase=this._phase+e/this.count*360)}get baseType(){return this._oscillators[0].baseType}set baseType(t){this._forEach(e=>e.baseType=t),this._type=this._oscillators[0].type}get partials(){return this._oscillators[0].partials}set partials(t){this._partials=t,this._partialCount=this._partials.length,t.length&&(this._type="custom",this._forEach(e=>e.partials=t))}get partialCount(){return this._oscillators[0].partialCount}set partialCount(t){this._partialCount=t,this._forEach(e=>e.partialCount=t),this._type=this._oscillators[0].type}asArray(t=1024){return yi(this,void 0,void 0,(function*(){return sr(this,t)}))}dispose(){return super.dispose(),this.frequency.dispose(),this.detune.dispose(),this._forEach(t=>t.dispose()),this}}class dr extends Ho{constructor(){super(Di(dr.getDefaults(),arguments,["frequency","modulationFrequency"])),this.name="PWMOscillator",this.sourceType="pwm",this._scale=new cr({context:this.context,value:2});const t=Di(dr.getDefaults(),arguments,["frequency","modulationFrequency"]);this._pulse=new lr({context:this.context,frequency:t.modulationFrequency}),this._pulse.carrierType="sine",this.modulationFrequency=this._pulse.frequency,this._modulator=new ir({context:this.context,detune:t.detune,frequency:t.frequency,onstop:()=>this.onstop(this),phase:t.phase}),this.frequency=this._modulator.frequency,this.detune=this._modulator.detune,this._modulator.chain(this._scale,this._pulse.width),this._pulse.connect(this.output),Ui(this,["modulationFrequency","frequency","detune"])}static getDefaults(){return Object.assign(Ho.getDefaults(),{detune:0,frequency:440,modulationFrequency:.4,phase:0,type:"pwm"})}_start(t){t=this.toSeconds(t),this._modulator.start(t),this._pulse.start(t)}_stop(t){t=this.toSeconds(t),this._modulator.stop(t),this._pulse.stop(t)}_restart(t){this._modulator.restart(t),this._pulse.restart(t)}get type(){return"pwm"}get baseType(){return"pwm"}get partials(){return[]}get partialCount(){return 0}get phase(){return this._modulator.phase}set phase(t){this._modulator.phase=t}asArray(t=1024){return yi(this,void 0,void 0,(function*(){return sr(this,t)}))}dispose(){return super.dispose(),this._pulse.dispose(),this._scale.dispose(),this._modulator.dispose(),this}}const fr={am:hr,fat:pr,fm:ur,oscillator:ir,pulse:lr,pwm:dr};class _r extends Ho{constructor(){super(Di(_r.getDefaults(),arguments,["frequency","type"])),this.name="OmniOscillator";const t=Di(_r.getDefaults(),arguments,["frequency","type"]);this.frequency=new Do({context:this.context,units:"frequency",value:t.frequency}),this.detune=new Do({context:this.context,units:"cents",value:t.detune}),Ui(this,["frequency","detune"]),this.set(t)}static getDefaults(){return Object.assign(ir.getDefaults(),ur.getDefaults(),hr.getDefaults(),pr.getDefaults(),lr.getDefaults(),dr.getDefaults())}_start(t){this._oscillator.start(t)}_stop(t){this._oscillator.stop(t)}_restart(t){return this._oscillator.restart(t),this}get type(){let t="";return["am","fm","fat"].some(t=>this._sourceType===t)&&(t=this._sourceType),t+this._oscillator.type}set type(t){"fm"===t.substr(0,2)?(this._createNewOscillator("fm"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):"am"===t.substr(0,2)?(this._createNewOscillator("am"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(2)):"fat"===t.substr(0,3)?(this._createNewOscillator("fat"),this._oscillator=this._oscillator,this._oscillator.type=t.substr(3)):"pwm"===t?(this._createNewOscillator("pwm"),this._oscillator=this._oscillator):"pulse"===t?this._createNewOscillator("pulse"):(this._createNewOscillator("oscillator"),this._oscillator=this._oscillator,this._oscillator.type=t)}get partials(){return this._oscillator.partials}set partials(t){this._getOscType(this._oscillator,"pulse")||this._getOscType(this._oscillator,"pwm")||(this._oscillator.partials=t)}get partialCount(){return this._oscillator.partialCount}set partialCount(t){this._getOscType(this._oscillator,"pulse")||this._getOscType(this._oscillator,"pwm")||(this._oscillator.partialCount=t)}set(t){return Reflect.has(t,"type")&&t.type&&(this.type=t.type),super.set(t),this}_createNewOscillator(t){if(t!==this._sourceType){this._sourceType=t;const e=fr[t],s=this.now();if(this._oscillator){const t=this._oscillator;t.stop(s),this.context.setTimeout(()=>t.dispose(),this.blockTime)}this._oscillator=new e({context:this.context}),this.frequency.connect(this._oscillator.frequency),this.detune.connect(this._oscillator.detune),this._oscillator.connect(this.output),this._oscillator.onstop=()=>this.onstop(this),"started"===this.state&&this._oscillator.start(s)}}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t}get sourceType(){return this._sourceType}set sourceType(t){let e="sine";"pwm"!==this._oscillator.type&&"pulse"!==this._oscillator.type&&(e=this._oscillator.type),"fm"===t?this.type="fm"+e:"am"===t?this.type="am"+e:"fat"===t?this.type="fat"+e:"oscillator"===t?this.type=e:"pulse"===t?this.type="pulse":"pwm"===t&&(this.type="pwm")}_getOscType(t,e){return t instanceof fr[e]}get baseType(){return this._oscillator.baseType}set baseType(t){this._getOscType(this._oscillator,"pulse")||this._getOscType(this._oscillator,"pwm")||"pulse"===t||"pwm"===t||(this._oscillator.baseType=t)}get width(){return this._getOscType(this._oscillator,"pulse")?this._oscillator.width:void 0}get count(){return this._getOscType(this._oscillator,"fat")?this._oscillator.count:void 0}set count(t){this._getOscType(this._oscillator,"fat")&&ui(t)&&(this._oscillator.count=t)}get spread(){return this._getOscType(this._oscillator,"fat")?this._oscillator.spread:void 0}set spread(t){this._getOscType(this._oscillator,"fat")&&ui(t)&&(this._oscillator.spread=t)}get modulationType(){return this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am")?this._oscillator.modulationType:void 0}set modulationType(t){(this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am"))&&fi(t)&&(this._oscillator.modulationType=t)}get modulationIndex(){return this._getOscType(this._oscillator,"fm")?this._oscillator.modulationIndex:void 0}get harmonicity(){return this._getOscType(this._oscillator,"fm")||this._getOscType(this._oscillator,"am")?this._oscillator.harmonicity:void 0}get modulationFrequency(){return this._getOscType(this._oscillator,"pwm")?this._oscillator.modulationFrequency:void 0}asArray(t=1024){return yi(this,void 0,void 0,(function*(){return sr(this,t)}))}dispose(){return super.dispose(),this.detune.dispose(),this.frequency.dispose(),this._oscillator.dispose(),this}}class mr extends Do{constructor(){super(Object.assign(Di(mr.getDefaults(),arguments,["value"]))),this.override=!1,this.name="Add",this._sum=new ko({context:this.context}),this.input=this._sum,this.output=this._sum,this.addend=this._param,bo(this._constantSource,this._sum)}static getDefaults(){return Object.assign(Do.getDefaults(),{value:0})}dispose(){return super.dispose(),this._sum.dispose(),this}}class gr extends or{constructor(){super(Object.assign(Di(gr.getDefaults(),arguments,["min","max"]))),this.name="Scale";const t=Di(gr.getDefaults(),arguments,["min","max"]);this._mult=this.input=new cr({context:this.context,value:t.max-t.min}),this._add=this.output=new mr({context:this.context,value:t.min}),this._min=t.min,this._max=t.max,this.input.connect(this.output)}static getDefaults(){return Object.assign(or.getDefaults(),{max:1,min:0})}get min(){return this._min}set min(t){this._min=t,this._setRange()}get max(){return this._max}set max(t){this._max=t,this._setRange()}_setRange(){this._add.value=this._min,this._mult.value=this._max-this._min}dispose(){return super.dispose(),this._add.dispose(),this._mult.dispose(),this}}class vr extends or{constructor(){super(Object.assign(Di(vr.getDefaults(),arguments))),this.name="Zero",this._gain=new ko({context:this.context}),this.output=this._gain,this.input=void 0,To(this.context.getConstant(0),this._gain)}dispose(){return super.dispose(),So(this.context.getConstant(0),this._gain),this}}class yr extends wo{constructor(){super(Di(yr.getDefaults(),arguments,["frequency","min","max"])),this.name="LFO",this._stoppedValue=0,this._units="number",this.convert=!0,this._fromType=xo.prototype._fromType,this._toType=xo.prototype._toType,this._is=xo.prototype._is,this._clampValue=xo.prototype._clampValue;const t=Di(yr.getDefaults(),arguments,["frequency","min","max"]);this._oscillator=new ir(t),this.frequency=this._oscillator.frequency,this._amplitudeGain=new ko({context:this.context,gain:t.amplitude,units:"normalRange"}),this.amplitude=this._amplitudeGain.gain,this._stoppedSignal=new Do({context:this.context,units:"audioRange",value:0}),this._zeros=new vr({context:this.context}),this._a2g=new ar({context:this.context}),this._scaler=this.output=new gr({context:this.context,max:t.max,min:t.min}),this.units=t.units,this.min=t.min,this.max=t.max,this._oscillator.chain(this._amplitudeGain,this._a2g,this._scaler),this._zeros.connect(this._a2g),this._stoppedSignal.connect(this._a2g),Ui(this,["amplitude","frequency"]),this.phase=t.phase}static getDefaults(){return Object.assign(ir.getDefaults(),{amplitude:1,frequency:"4n",max:1,min:0,type:"sine",units:"number"})}start(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(0,t),this._oscillator.start(t),this}stop(t){return t=this.toSeconds(t),this._stoppedSignal.setValueAtTime(this._stoppedValue,t),this._oscillator.stop(t),this}sync(){return this._oscillator.sync(),this._oscillator.syncFrequency(),this}unsync(){return this._oscillator.unsync(),this._oscillator.unsyncFrequency(),this}_setStoppedValue(){this._stoppedValue=this._oscillator.getInitialValue(),this._stoppedSignal.value=this._stoppedValue}get min(){return this._toType(this._scaler.min)}set min(t){t=this._fromType(t),this._scaler.min=t}get max(){return this._toType(this._scaler.max)}set max(t){t=this._fromType(t),this._scaler.max=t}get type(){return this._oscillator.type}set type(t){this._oscillator.type=t,this._setStoppedValue()}get partials(){return this._oscillator.partials}set partials(t){this._oscillator.partials=t,this._setStoppedValue()}get phase(){return this._oscillator.phase}set phase(t){this._oscillator.phase=t,this._setStoppedValue()}get units(){return this._units}set units(t){const e=this.min,s=this.max;this._units=t,this.min=e,this.max=s}get state(){return this._oscillator.state}connect(t,e,s){return(t instanceof xo||t instanceof Do)&&(this.convert=t.convert,this.units=t.units),Oo(this,t,e,s),this}dispose(){return super.dispose(),this._oscillator.dispose(),this._stoppedSignal.dispose(),this._zeros.dispose(),this._scaler.dispose(),this._a2g.dispose(),this._amplitudeGain.dispose(),this.amplitude.dispose(),this}}function xr(t,e=1/0){const s=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return s.get(this)},set:function(n){ei(n,t,e),s.set(this,n)}})}}function wr(t,e=1/0){const s=new WeakMap;return function(n,i){Reflect.defineProperty(n,i,{configurable:!0,enumerable:!0,get:function(){return s.get(this)},set:function(n){ei(this.toSeconds(n),t,e),s.set(this,n)}})}}class br extends Ho{constructor(){super(Di(br.getDefaults(),arguments,["url","onload"])),this.name="Player",this._activeSources=new Set;const t=Di(br.getDefaults(),arguments,["url","onload"]);this._buffer=new Xi({onload:this._onload.bind(this,t.onload),onerror:t.onerror,reverse:t.reverse,url:t.url}),this.autostart=t.autostart,this._loop=t.loop,this._loopStart=t.loopStart,this._loopEnd=t.loopEnd,this._playbackRate=t.playbackRate,this.fadeIn=t.fadeIn,this.fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Ho.getDefaults(),{autostart:!1,fadeIn:0,fadeOut:0,loop:!1,loopEnd:0,loopStart:0,onload:Zi,onerror:Zi,playbackRate:1,reverse:!1})}load(t){return yi(this,void 0,void 0,(function*(){return yield this._buffer.load(t),this._onload(),this}))}_onload(t=Zi){t(),this.autostart&&this.start()}_onSourceEnd(t){this.onstop(this),this._activeSources.delete(t),0!==this._activeSources.size||this._synced||"started"!==this._state.getValueAtTime(this.now())||(this._state.cancel(this.now()),this._state.setStateAtTime("stopped",this.now()))}start(t,e,s){return super.start(t,e,s),this}_start(t,e,s){e=this._loop?Oi(e,this._loopStart):Oi(e,0);const n=this.toSeconds(e),i=s;s=Oi(s,Math.max(this._buffer.duration-n,0));let o=this.toSeconds(s);o/=this._playbackRate,t=this.toSeconds(t);const r=new $o({url:this._buffer,context:this.context,fadeIn:this.fadeIn,fadeOut:this.fadeOut,loop:this._loop,loopEnd:this._loopEnd,loopStart:this._loopStart,onended:this._onSourceEnd.bind(this),playbackRate:this._playbackRate}).connect(this.output);this._loop||this._synced||(this._state.cancel(t+o),this._state.setStateAtTime("stopped",t+o,{implicitEnd:!0})),this._activeSources.add(r),this._loop&&ai(i)?r.start(t,n):r.start(t,n,o-this.toSeconds(this.fadeOut))}_stop(t){const e=this.toSeconds(t);this._activeSources.forEach(t=>t.stop(e))}restart(t,e,s){return super.restart(t,e,s),this}_restart(t,e,s){this._stop(t),this._start(t,e,s)}seek(t,e){const s=this.toSeconds(e);if("started"===this._state.getValueAtTime(s)){const e=this.toSeconds(t);this._stop(s),this._start(s,e)}return this}setLoopPoints(t,e){return this.loopStart=t,this.loopEnd=e,this}get loopStart(){return this._loopStart}set loopStart(t){this._loopStart=t,this.buffer.loaded&&ei(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopStart=t})}get loopEnd(){return this._loopEnd}set loopEnd(t){this._loopEnd=t,this.buffer.loaded&&ei(this.toSeconds(t),0,this.buffer.duration),this._activeSources.forEach(e=>{e.loopEnd=t})}get buffer(){return this._buffer}set buffer(t){this._buffer.set(t)}get loop(){return this._loop}set loop(t){if(this._loop!==t&&(this._loop=t,this._activeSources.forEach(e=>{e.loop=t}),t)){const t=this._state.getNextState("stopped",this.now());t&&this._state.cancel(t.time)}}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t;const e=this.now(),s=this._state.getNextState("stopped",e);s&&s.implicitEnd&&(this._state.cancel(s.time),this._activeSources.forEach(t=>t.cancelStop())),this._activeSources.forEach(s=>{s.playbackRate.setValueAtTime(t,e)})}get reverse(){return this._buffer.reverse}set reverse(t){this._buffer.reverse=t}get loaded(){return this._buffer.loaded}dispose(){return super.dispose(),this._activeSources.forEach(t=>t.dispose()),this._activeSources.clear(),this._buffer.dispose(),this}}vi([wr(0)],br.prototype,"fadeIn",void 0),vi([wr(0)],br.prototype,"fadeOut",void 0);class Tr extends wo{constructor(){super(Di(Tr.getDefaults(),arguments,["urls","onload"],"urls")),this.name="Players",this.input=void 0,this._players=new Map;const t=Di(Tr.getDefaults(),arguments,["urls","onload"],"urls");this._volume=this.output=new Go({context:this.context,volume:t.volume}),this.volume=this._volume.volume,Ui(this,"volume"),this._buffers=new Vo({urls:t.urls,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.mute=t.mute,this._fadeIn=t.fadeIn,this._fadeOut=t.fadeOut}static getDefaults(){return Object.assign(Ho.getDefaults(),{baseUrl:"",fadeIn:0,fadeOut:0,mute:!1,onload:Zi,onerror:Zi,urls:{},volume:0})}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}get fadeIn(){return this._fadeIn}set fadeIn(t){this._fadeIn=t,this._players.forEach(e=>{e.fadeIn=t})}get fadeOut(){return this._fadeOut}set fadeOut(t){this._fadeOut=t,this._players.forEach(e=>{e.fadeOut=t})}get state(){return Array.from(this._players).some(([t,e])=>"started"===e.state)?"started":"stopped"}has(t){return this._buffers.has(t)}player(t){if(ti(this.has(t),`No Player with the name ${t} exists on this object`),!this._players.has(t)){const e=new br({context:this.context,fadeIn:this._fadeIn,fadeOut:this._fadeOut,url:this._buffers.get(t)}).connect(this.output);this._players.set(t,e)}return this._players.get(t)}get loaded(){return this._buffers.loaded}add(t,e,s){return ti(!this._buffers.has(t),"A buffer with that name already exists on this object"),this._buffers.add(t,e,s),this}stopAll(t){return this._players.forEach(e=>e.stop(t)),this}dispose(){return super.dispose(),this._volume.dispose(),this.volume.dispose(),this._players.forEach(t=>t.dispose()),this._buffers.dispose(),this}}class Sr extends Ho{constructor(){super(Di(Sr.getDefaults(),arguments,["url","onload"])),this.name="GrainPlayer",this._loopStart=0,this._loopEnd=0,this._activeSources=[];const t=Di(Sr.getDefaults(),arguments,["url","onload"]);this.buffer=new Xi({onload:t.onload,onerror:t.onerror,reverse:t.reverse,url:t.url}),this._clock=new qo({context:this.context,callback:this._tick.bind(this),frequency:1/t.grainSize}),this._playbackRate=t.playbackRate,this._grainSize=t.grainSize,this._overlap=t.overlap,this.detune=t.detune,this.overlap=t.overlap,this.loop=t.loop,this.playbackRate=t.playbackRate,this.grainSize=t.grainSize,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.reverse=t.reverse,this._clock.on("stop",this._onstop.bind(this))}static getDefaults(){return Object.assign(Ho.getDefaults(),{onload:Zi,onerror:Zi,overlap:.1,grainSize:.2,playbackRate:1,detune:0,loop:!1,loopStart:0,loopEnd:0,reverse:!1})}_start(t,e,s){e=Oi(e,0),e=this.toSeconds(e),t=this.toSeconds(t);const n=1/this._clock.frequency.getValueAtTime(t);this._clock.start(t,e/n),s&&this.stop(t+this.toSeconds(s))}restart(t,e,s){return super.restart(t,e,s),this}_restart(t,e,s){this._stop(t),this._start(t,e,s)}_stop(t){this._clock.stop(t)}_onstop(t){this._activeSources.forEach(e=>{e.fadeOut=0,e.stop(t)}),this.onstop(this)}_tick(t){const e=this._clock.getTicksAtTime(t),s=e*this._grainSize;if(this.log("offset",s),!this.loop&&s>this.buffer.duration)return void this.stop(t);const n=s<this._overlap?0:this._overlap,i=new $o({context:this.context,url:this.buffer,fadeIn:n,fadeOut:this._overlap,loop:this.loop,loopStart:this._loopStart,loopEnd:this._loopEnd,playbackRate:no(this.detune/100)}).connect(this.output);i.start(t,this._grainSize*e),i.stop(t+this._grainSize/this.playbackRate),this._activeSources.push(i),i.onended=()=>{const t=this._activeSources.indexOf(i);-1!==t&&this._activeSources.splice(t,1)}}get playbackRate(){return this._playbackRate}set playbackRate(t){ei(t,.001),this._playbackRate=t,this.grainSize=this._grainSize}get loopStart(){return this._loopStart}set loopStart(t){this.buffer.loaded&&ei(this.toSeconds(t),0,this.buffer.duration),this._loopStart=this.toSeconds(t)}get loopEnd(){return this._loopEnd}set loopEnd(t){this.buffer.loaded&&ei(this.toSeconds(t),0,this.buffer.duration),this._loopEnd=this.toSeconds(t)}get reverse(){return this.buffer.reverse}set reverse(t){this.buffer.reverse=t}get grainSize(){return this._grainSize}set grainSize(t){this._grainSize=this.toSeconds(t),this._clock.frequency.setValueAtTime(this._playbackRate/this._grainSize,this.now())}get overlap(){return this._overlap}set overlap(t){const e=this.toSeconds(t);ei(e,0),this._overlap=e}get loaded(){return this.buffer.loaded}dispose(){return super.dispose(),this.buffer.dispose(),this._clock.dispose(),this._activeSources.forEach(t=>t.dispose()),this}}class kr extends or{constructor(){super(...arguments),this.name="Abs",this._abs=new rr({context:this.context,mapping:t=>Math.abs(t)<.001?0:Math.abs(t)}),this.input=this._abs,this.output=this._abs}dispose(){return super.dispose(),this._abs.dispose(),this}}class Cr extends or{constructor(){super(...arguments),this.name="GainToAudio",this._norm=new rr({context:this.context,mapping:t=>2*Math.abs(t)-1}),this.input=this._norm,this.output=this._norm}dispose(){return super.dispose(),this._norm.dispose(),this}}class Ar extends or{constructor(){super(...arguments),this.name="Negate",this._multiply=new cr({context:this.context,value:-1}),this.input=this._multiply,this.output=this._multiply}dispose(){return super.dispose(),this._multiply.dispose(),this}}class Dr extends Do{constructor(){super(Object.assign(Di(Dr.getDefaults(),arguments,["value"]))),this.override=!1,this.name="Subtract",this._sum=new ko({context:this.context}),this.input=this._sum,this.output=this._sum,this._neg=new Ar({context:this.context}),this.subtrahend=this._param,bo(this._constantSource,this._neg,this._sum)}static getDefaults(){return Object.assign(Do.getDefaults(),{value:0})}dispose(){return super.dispose(),this._neg.dispose(),this._sum.dispose(),this}}class Or extends or{constructor(){super(Object.assign(Di(Or.getDefaults(),arguments))),this.name="GreaterThanZero",this._thresh=this.output=new rr({context:this.context,length:127,mapping:t=>t<=0?0:1}),this._scale=this.input=new cr({context:this.context,value:1e4}),this._scale.connect(this._thresh)}dispose(){return super.dispose(),this._scale.dispose(),this._thresh.dispose(),this}}class Mr extends Do{constructor(){super(Object.assign(Di(Mr.getDefaults(),arguments,["value"]))),this.name="GreaterThan",this.override=!1;const t=Di(Mr.getDefaults(),arguments,["value"]);this._subtract=this.input=new Dr({context:this.context,value:t.value}),this._gtz=this.output=new Or({context:this.context}),this.comparator=this._param=this._subtract.subtrahend,Ui(this,"comparator"),this._subtract.connect(this._gtz)}static getDefaults(){return Object.assign(Do.getDefaults(),{value:0})}dispose(){return super.dispose(),this._gtz.dispose(),this._subtract.dispose(),this.comparator.dispose(),this}}class Er extends or{constructor(){super(Object.assign(Di(Er.getDefaults(),arguments,["value"]))),this.name="Pow";const t=Di(Er.getDefaults(),arguments,["value"]);this._exponentScaler=this.input=this.output=new rr({context:this.context,mapping:this._expFunc(t.value),length:8192}),this._exponent=t.value}static getDefaults(){return Object.assign(or.getDefaults(),{value:1})}_expFunc(t){return e=>Math.pow(Math.abs(e),t)}get value(){return this._exponent}set value(t){this._exponent=t,this._exponentScaler.setMap(this._expFunc(this._exponent))}dispose(){return super.dispose(),this._exponentScaler.dispose(),this}}class Rr extends gr{constructor(){super(Object.assign(Di(Rr.getDefaults(),arguments,["min","max","exponent"]))),this.name="ScaleExp";const t=Di(Rr.getDefaults(),arguments,["min","max","exponent"]);this.input=this._exp=new Er({context:this.context,value:t.exponent}),this._exp.connect(this._mult)}static getDefaults(){return Object.assign(gr.getDefaults(),{exponent:1})}get exponent(){return this._exp.value}set exponent(t){this._exp.value=t}dispose(){return super.dispose(),this._exp.dispose(),this}}class qr extends Do{constructor(){super(Di(Do.getDefaults(),arguments,["value","units"])),this.name="SyncedSignal",this.override=!1;const t=Di(Do.getDefaults(),arguments,["value","units"]);this._lastVal=t.value,this._synced=this.context.transport.scheduleRepeat(this._onTick.bind(this),"1i"),this._syncedCallback=this._anchorValue.bind(this),this.context.transport.on("start",this._syncedCallback),this.context.transport.on("pause",this._syncedCallback),this.context.transport.on("stop",this._syncedCallback),this._constantSource.disconnect(),this._constantSource.stop(0),this._constantSource=this.output=new Ao({context:this.context,offset:t.value,units:t.units}).start(0),this.setValueAtTime(t.value,0)}_onTick(t){const e=super.getValueAtTime(this.context.transport.seconds);this._lastVal!==e&&(this._lastVal=e,this._constantSource.offset.setValueAtTime(e,t))}_anchorValue(t){const e=super.getValueAtTime(this.context.transport.seconds);this._lastVal=e,this._constantSource.offset.cancelAndHoldAtTime(t),this._constantSource.offset.setValueAtTime(e,t)}getValueAtTime(t){const e=new mo(this.context,t).toSeconds();return super.getValueAtTime(e)}setValueAtTime(t,e){const s=new mo(this.context,e).toSeconds();return super.setValueAtTime(t,s),this}linearRampToValueAtTime(t,e){const s=new mo(this.context,e).toSeconds();return super.linearRampToValueAtTime(t,s),this}exponentialRampToValueAtTime(t,e){const s=new mo(this.context,e).toSeconds();return super.exponentialRampToValueAtTime(t,s),this}setTargetAtTime(t,e,s){const n=new mo(this.context,e).toSeconds();return super.setTargetAtTime(t,n,s),this}cancelScheduledValues(t){const e=new mo(this.context,t).toSeconds();return super.cancelScheduledValues(e),this}setValueCurveAtTime(t,e,s,n){const i=new mo(this.context,e).toSeconds();return s=this.toSeconds(s),super.setValueCurveAtTime(t,i,s,n),this}cancelAndHoldAtTime(t){const e=new mo(this.context,t).toSeconds();return super.cancelAndHoldAtTime(e),this}setRampPoint(t){const e=new mo(this.context,t).toSeconds();return super.setRampPoint(e),this}exponentialRampTo(t,e,s){const n=new mo(this.context,s).toSeconds();return super.exponentialRampTo(t,e,n),this}linearRampTo(t,e,s){const n=new mo(this.context,s).toSeconds();return super.linearRampTo(t,e,n),this}targetRampTo(t,e,s){const n=new mo(this.context,s).toSeconds();return super.targetRampTo(t,e,n),this}dispose(){return super.dispose(),this.context.transport.clear(this._synced),this.context.transport.off("start",this._syncedCallback),this.context.transport.off("pause",this._syncedCallback),this.context.transport.off("stop",this._syncedCallback),this._constantSource.dispose(),this}}class Fr extends wo{constructor(){super(Di(Fr.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="Envelope",this._sig=new Do({context:this.context,value:0}),this.output=this._sig,this.input=void 0;const t=Di(Fr.getDefaults(),arguments,["attack","decay","sustain","release"]);this.attack=t.attack,this.decay=t.decay,this.sustain=t.sustain,this.release=t.release,this.attackCurve=t.attackCurve,this.releaseCurve=t.releaseCurve,this.decayCurve=t.decayCurve}static getDefaults(){return Object.assign(wo.getDefaults(),{attack:.01,attackCurve:"linear",decay:.1,decayCurve:"exponential",release:1,releaseCurve:"exponential",sustain:.5})}get value(){return this.getValueAtTime(this.now())}_getCurve(t,e){if(fi(t))return t;{let s;for(s in Ir)if(Ir[s][e]===t)return s;return t}}_setCurve(t,e,s){if(fi(s)&&Reflect.has(Ir,s)){const n=Ir[s];li(n)?"_decayCurve"!==t&&(this[t]=n[e]):this[t]=n}else{if(!di(s)||"_decayCurve"===t)throw new Error("Envelope: invalid curve: "+s);this[t]=s}}get attackCurve(){return this._getCurve(this._attackCurve,"In")}set attackCurve(t){this._setCurve("_attackCurve","In",t)}get releaseCurve(){return this._getCurve(this._releaseCurve,"Out")}set releaseCurve(t){this._setCurve("_releaseCurve","Out",t)}get decayCurve(){return this._decayCurve}set decayCurve(t){ti(["linear","exponential"].some(e=>e===t),"Invalid envelope curve: "+t),this._decayCurve=t}triggerAttack(t,e=1){this.log("triggerAttack",t,e),t=this.toSeconds(t);let s=this.toSeconds(this.attack);const n=this.toSeconds(this.decay),i=this.getValueAtTime(t);if(i>0){s=(1-i)/(1/s)}if(s<this.sampleTime)this._sig.cancelScheduledValues(t),this._sig.setValueAtTime(e,t);else if("linear"===this._attackCurve)this._sig.linearRampTo(e,s,t);else if("exponential"===this._attackCurve)this._sig.targetRampTo(e,s,t);else{this._sig.cancelAndHoldAtTime(t);let n=this._attackCurve;for(let t=1;t<n.length;t++)if(n[t-1]<=i&&i<=n[t]){n=this._attackCurve.slice(t),n[0]=i;break}this._sig.setValueCurveAtTime(n,t,s,e)}if(n&&this.sustain<1){const i=e*this.sustain,o=t+s;this.log("decay",o),"linear"===this._decayCurve?this._sig.linearRampToValueAtTime(i,n+o):this._sig.exponentialApproachValueAtTime(i,o,n)}return this}triggerRelease(t){this.log("triggerRelease",t),t=this.toSeconds(t);const e=this.getValueAtTime(t);if(e>0){const s=this.toSeconds(this.release);s<this.sampleTime?this._sig.setValueAtTime(0,t):"linear"===this._releaseCurve?this._sig.linearRampTo(0,s,t):"exponential"===this._releaseCurve?this._sig.targetRampTo(0,s,t):(ti(di(this._releaseCurve),"releaseCurve must be either 'linear', 'exponential' or an array"),this._sig.cancelAndHoldAtTime(t),this._sig.setValueCurveAtTime(this._releaseCurve,t,s,e))}return this}getValueAtTime(t){return this._sig.getValueAtTime(t)}triggerAttackRelease(t,e,s=1){return e=this.toSeconds(e),this.triggerAttack(e,s),this.triggerRelease(e+this.toSeconds(t)),this}cancel(t){return this._sig.cancelScheduledValues(this.toSeconds(t)),this}connect(t,e=0,s=0){return Oo(this,t,e,s),this}asArray(t=1024){return yi(this,void 0,void 0,(function*(){const e=t/this.context.sampleRate,s=new Yi(1,e,this.context.sampleRate),n=this.toSeconds(this.attack)+this.toSeconds(this.decay),i=n+this.toSeconds(this.release),o=.1*i,r=i+o,a=new this.constructor(Object.assign(this.get(),{attack:e*this.toSeconds(this.attack)/r,decay:e*this.toSeconds(this.decay)/r,release:e*this.toSeconds(this.release)/r,context:s}));a._sig.toDestination(),a.triggerAttackRelease(e*(n+o)/r,0);return(yield s.render()).getChannelData(0)}))}dispose(){return super.dispose(),this._sig.dispose(),this}}vi([wr(0)],Fr.prototype,"attack",void 0),vi([wr(0)],Fr.prototype,"decay",void 0),vi([xr(0,1)],Fr.prototype,"sustain",void 0),vi([wr(0)],Fr.prototype,"release",void 0);const Ir=(()=>{let t,e;const s=[];for(t=0;t<128;t++)s[t]=Math.sin(t/127*(Math.PI/2));const n=[];for(t=0;t<127;t++){e=t/127;const s=Math.sin(e*(2*Math.PI)*6.4-Math.PI/2)+1;n[t]=s/10+.83*e}n[127]=1;const i=[];for(t=0;t<128;t++)i[t]=Math.ceil(t/127*5)/5;const o=[];for(t=0;t<128;t++)e=t/127,o[t]=.5*(1-Math.cos(Math.PI*e));const r=[];for(t=0;t<128;t++){e=t/127;const s=4*Math.pow(e,3)+.2,n=Math.cos(s*Math.PI*2*e);r[t]=Math.abs(n*(1-e))}function a(t){const e=new Array(t.length);for(let s=0;s<t.length;s++)e[s]=1-t[s];return e}return{bounce:{In:a(r),Out:r},cosine:{In:s,Out:(c=s,c.slice(0).reverse())},exponential:"exponential",linear:"linear",ripple:{In:n,Out:a(n)},sine:{In:o,Out:a(o)},step:{In:i,Out:a(i)}};var c})();class Vr extends wo{constructor(){super(Di(Vr.getDefaults(),arguments)),this._scheduledEvents=[],this._synced=!1,this._original_triggerAttack=this.triggerAttack,this._original_triggerRelease=this.triggerRelease;const t=Di(Vr.getDefaults(),arguments);this._volume=this.output=new Go({context:this.context,volume:t.volume}),this.volume=this._volume.volume,Ui(this,"volume")}static getDefaults(){return Object.assign(wo.getDefaults(),{volume:0})}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",0)),this}_syncState(){let t=!1;return this._synced||(this._synced=!0,t=!0),t}_syncMethod(t,e){const s=this["_original_"+t]=this[t];this[t]=(...t)=>{const n=t[e],i=this.context.transport.schedule(n=>{t[e]=n,s.apply(this,t)},n);this._scheduledEvents.push(i)}}unsync(){return this._scheduledEvents.forEach(t=>this.context.transport.clear(t)),this._scheduledEvents=[],this._synced&&(this._synced=!1,this.triggerAttack=this._original_triggerAttack,this.triggerRelease=this._original_triggerRelease),this}triggerAttackRelease(t,e,s,n){const i=this.toSeconds(s),o=this.toSeconds(e);return this.triggerAttack(t,i,n),this.triggerRelease(i+o),this}dispose(){return super.dispose(),this._volume.dispose(),this.unsync(),this._scheduledEvents=[],this}}class Nr extends Vr{constructor(){super(Di(Nr.getDefaults(),arguments));const t=Di(Nr.getDefaults(),arguments);this.portamento=t.portamento,this.onsilence=t.onsilence}static getDefaults(){return Object.assign(Vr.getDefaults(),{detune:0,onsilence:Zi,portamento:0})}triggerAttack(t,e,s=1){this.log("triggerAttack",t,e,s);const n=this.toSeconds(e);return this._triggerEnvelopeAttack(n,s),this.setNote(t,n),this}triggerRelease(t){this.log("triggerRelease",t);const e=this.toSeconds(t);return this._triggerEnvelopeRelease(e),this}setNote(t,e){const s=this.toSeconds(e),n=t instanceof lo?t.toFrequency():t;if(this.portamento>0&&this.getLevelAtTime(s)>.05){const t=this.toSeconds(this.portamento);this.frequency.exponentialRampTo(n,t,s)}else this.frequency.setValueAtTime(n,s);return this}}vi([wr(0)],Nr.prototype,"portamento",void 0);class Pr extends Fr{constructor(){super(Di(Pr.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="AmplitudeEnvelope",this._gainNode=new ko({context:this.context,gain:0}),this.output=this._gainNode,this.input=this._gainNode,this._sig.connect(this._gainNode.gain),this.output=this._gainNode,this.input=this._gainNode}dispose(){return super.dispose(),this._gainNode.dispose(),this}}class jr extends Nr{constructor(){super(Di(jr.getDefaults(),arguments)),this.name="Synth";const t=Di(jr.getDefaults(),arguments);this.oscillator=new _r(Object.assign({context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)},t.oscillator)),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.envelope=new Pr(Object.assign({context:this.context},t.envelope)),this.oscillator.chain(this.envelope,this.output),Ui(this,["oscillator","frequency","detune","envelope"])}static getDefaults(){return Object.assign(Nr.getDefaults(),{envelope:Object.assign(Mi(Fr.getDefaults(),Object.keys(wo.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.3}),oscillator:Object.assign(Mi(_r.getDefaults(),[...Object.keys(Ho.getDefaults()),"frequency","detune"]),{type:"triangle"})})}_triggerEnvelopeAttack(t,e){if(this.envelope.triggerAttack(t,e),this.oscillator.start(t),0===this.envelope.sustain){const e=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(t+e+s)}}_triggerEnvelopeRelease(t){this.envelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release))}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this}}class Lr extends Nr{constructor(){super(Di(Lr.getDefaults(),arguments)),this.name="ModulationSynth";const t=Di(Lr.getDefaults(),arguments);this._carrier=new jr({context:this.context,oscillator:t.oscillator,envelope:t.envelope,onsilence:()=>this.onsilence(this),volume:-10}),this._modulator=new jr({context:this.context,oscillator:t.modulation,envelope:t.modulationEnvelope,volume:-10}),this.oscillator=this._carrier.oscillator,this.envelope=this._carrier.envelope,this.modulation=this._modulator.oscillator,this.modulationEnvelope=this._modulator.envelope,this.frequency=new Do({context:this.context,units:"frequency"}),this.detune=new Do({context:this.context,value:t.detune,units:"cents"}),this.harmonicity=new cr({context:this.context,value:t.harmonicity,minValue:0}),this._modulationNode=new ko({context:this.context,gain:0}),Ui(this,["frequency","harmonicity","oscillator","envelope","modulation","modulationEnvelope","detune"])}static getDefaults(){return Object.assign(Nr.getDefaults(),{harmonicity:3,oscillator:Object.assign(Mi(_r.getDefaults(),[...Object.keys(Ho.getDefaults()),"frequency","detune"]),{type:"sine"}),envelope:Object.assign(Mi(Fr.getDefaults(),Object.keys(wo.getDefaults())),{attack:.01,decay:.01,sustain:1,release:.5}),modulation:Object.assign(Mi(_r.getDefaults(),[...Object.keys(Ho.getDefaults()),"frequency","detune"]),{type:"square"}),modulationEnvelope:Object.assign(Mi(Fr.getDefaults(),Object.keys(wo.getDefaults())),{attack:.5,decay:0,sustain:1,release:.5})})}_triggerEnvelopeAttack(t,e){this._carrier._triggerEnvelopeAttack(t,e),this._modulator._triggerEnvelopeAttack(t,e)}_triggerEnvelopeRelease(t){return this._carrier._triggerEnvelopeRelease(t),this._modulator._triggerEnvelopeRelease(t),this}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this._carrier.dispose(),this._modulator.dispose(),this.frequency.dispose(),this.detune.dispose(),this.harmonicity.dispose(),this._modulationNode.dispose(),this}}class zr extends Lr{constructor(){super(Di(zr.getDefaults(),arguments)),this.name="AMSynth",this._modulationScale=new ar({context:this.context}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.chain(this._modulationScale,this._modulationNode.gain),this._carrier.chain(this._modulationNode,this.output)}dispose(){return super.dispose(),this._modulationScale.dispose(),this}}class Br extends wo{constructor(){super(Di(Br.getDefaults(),arguments,["frequency","type"])),this.name="BiquadFilter";const t=Di(Br.getDefaults(),arguments,["frequency","type"]);this._filter=this.context.createBiquadFilter(),this.input=this.output=this._filter,this.Q=new xo({context:this.context,units:"number",value:t.Q,param:this._filter.Q}),this.frequency=new xo({context:this.context,units:"frequency",value:t.frequency,param:this._filter.frequency}),this.detune=new xo({context:this.context,units:"cents",value:t.detune,param:this._filter.detune}),this.gain=new xo({context:this.context,units:"decibels",convert:!1,value:t.gain,param:this._filter.gain}),this.type=t.type}static getDefaults(){return Object.assign(wo.getDefaults(),{Q:1,type:"lowpass",frequency:350,detune:0,gain:0})}get type(){return this._filter.type}set type(t){ti(-1!==["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t),"Invalid filter type: "+t),this._filter.type=t}getFrequencyResponse(t=128){const e=new Float32Array(t);for(let s=0;s<t;s++){const n=19980*Math.pow(s/t,2)+20;e[s]=n}const s=new Float32Array(t),n=new Float32Array(t),i=this.context.createBiquadFilter();return i.type=this.type,i.Q.value=this.Q.value,i.frequency.value=this.frequency.value,i.gain.value=this.gain.value,i.getFrequencyResponse(e,s,n),s}dispose(){return super.dispose(),this._filter.disconnect(),this.Q.dispose(),this.frequency.dispose(),this.gain.dispose(),this.detune.dispose(),this}}class Wr extends wo{constructor(){super(Di(Wr.getDefaults(),arguments,["frequency","type","rolloff"])),this.name="Filter",this.input=new ko({context:this.context}),this.output=new ko({context:this.context}),this._filters=[];const t=Di(Wr.getDefaults(),arguments,["frequency","type","rolloff"]);this._filters=[],this.Q=new Do({context:this.context,units:"positive",value:t.Q}),this.frequency=new Do({context:this.context,units:"frequency",value:t.frequency}),this.detune=new Do({context:this.context,units:"cents",value:t.detune}),this.gain=new Do({context:this.context,units:"decibels",convert:!1,value:t.gain}),this._type=t.type,this.rolloff=t.rolloff,Ui(this,["detune","frequency","gain","Q"])}static getDefaults(){return Object.assign(wo.getDefaults(),{Q:1,detune:0,frequency:350,gain:0,rolloff:-12,type:"lowpass"})}get type(){return this._type}set type(t){ti(-1!==["lowpass","highpass","bandpass","lowshelf","highshelf","notch","allpass","peaking"].indexOf(t),"Invalid filter type: "+t),this._type=t,this._filters.forEach(e=>e.type=t)}get rolloff(){return this._rolloff}set rolloff(t){const e=ui(t)?t:parseInt(t,10),s=[-12,-24,-48,-96];let n=s.indexOf(e);ti(-1!==n,"rolloff can only be "+s.join(", ")),n+=1,this._rolloff=e,this.input.disconnect(),this._filters.forEach(t=>t.disconnect()),this._filters=new Array(n);for(let t=0;t<n;t++){const e=new Br({context:this.context});e.type=this._type,this.frequency.connect(e.frequency),this.detune.connect(e.detune),this.Q.connect(e.Q),this.gain.connect(e.gain),this._filters[t]=e}this._internalChannels=this._filters,bo(this.input,...this._internalChannels,this.output)}getFrequencyResponse(t=128){const e=new Br({frequency:this.frequency.value,gain:this.gain.value,Q:this.Q.value,type:this._type,detune:this.detune.value}),s=new Float32Array(t).map(()=>1);return this._filters.forEach(()=>{e.getFrequencyResponse(t).forEach((t,e)=>s[e]*=t)}),e.dispose(),s}dispose(){return super.dispose(),this._filters.forEach(t=>{t.dispose()}),Qi(this,["detune","frequency","gain","Q"]),this.frequency.dispose(),this.Q.dispose(),this.detune.dispose(),this.gain.dispose(),this}}class Gr extends Fr{constructor(){super(Di(Gr.getDefaults(),arguments,["attack","decay","sustain","release"])),this.name="FrequencyEnvelope";const t=Di(Gr.getDefaults(),arguments,["attack","decay","sustain","release"]);this._octaves=t.octaves,this._baseFrequency=this.toFrequency(t.baseFrequency),this._exponent=this.input=new Er({context:this.context,value:t.exponent}),this._scale=this.output=new gr({context:this.context,min:this._baseFrequency,max:this._baseFrequency*Math.pow(2,this._octaves)}),this._sig.chain(this._exponent,this._scale)}static getDefaults(){return Object.assign(Fr.getDefaults(),{baseFrequency:200,exponent:1,octaves:4})}get baseFrequency(){return this._baseFrequency}set baseFrequency(t){const e=this.toFrequency(t);ei(e,0),this._baseFrequency=e,this._scale.min=this._baseFrequency,this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(t){this._octaves=t,this._scale.max=this._baseFrequency*Math.pow(2,t)}get exponent(){return this._exponent.value}set exponent(t){this._exponent.value=t}dispose(){return super.dispose(),this._exponent.dispose(),this._scale.dispose(),this}}class Ur extends Nr{constructor(){super(Di(Ur.getDefaults(),arguments)),this.name="MonoSynth";const t=Di(Ur.getDefaults(),arguments);this.oscillator=new _r(Object.assign(t.oscillator,{context:this.context,detune:t.detune,onstop:()=>this.onsilence(this)})),this.frequency=this.oscillator.frequency,this.detune=this.oscillator.detune,this.filter=new Wr(Object.assign(t.filter,{context:this.context})),this.filterEnvelope=new Gr(Object.assign(t.filterEnvelope,{context:this.context})),this.envelope=new Pr(Object.assign(t.envelope,{context:this.context})),this.oscillator.chain(this.filter,this.envelope,this.output),this.filterEnvelope.connect(this.filter.frequency),Ui(this,["oscillator","frequency","detune","filter","filterEnvelope","envelope"])}static getDefaults(){return Object.assign(Nr.getDefaults(),{envelope:Object.assign(Mi(Fr.getDefaults(),Object.keys(wo.getDefaults())),{attack:.005,decay:.1,release:1,sustain:.9}),filter:Object.assign(Mi(Wr.getDefaults(),Object.keys(wo.getDefaults())),{Q:1,rolloff:-12,type:"lowpass"}),filterEnvelope:Object.assign(Mi(Gr.getDefaults(),Object.keys(wo.getDefaults())),{attack:.6,baseFrequency:200,decay:.2,exponent:2,octaves:3,release:2,sustain:.5}),oscillator:Object.assign(Mi(_r.getDefaults(),Object.keys(Ho.getDefaults())),{type:"sawtooth"})})}_triggerEnvelopeAttack(t,e=1){if(this.envelope.triggerAttack(t,e),this.filterEnvelope.triggerAttack(t),this.oscillator.start(t),0===this.envelope.sustain){const e=this.toSeconds(this.envelope.attack),s=this.toSeconds(this.envelope.decay);this.oscillator.stop(t+e+s)}}_triggerEnvelopeRelease(t){this.envelope.triggerRelease(t),this.filterEnvelope.triggerRelease(t),this.oscillator.stop(t+this.toSeconds(this.envelope.release))}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}dispose(){return super.dispose(),this.oscillator.dispose(),this.envelope.dispose(),this.filterEnvelope.dispose(),this.filter.dispose(),this}}class Qr extends Nr{constructor(){super(Di(Qr.getDefaults(),arguments)),this.name="DuoSynth";const t=Di(Qr.getDefaults(),arguments);this.voice0=new Ur(Object.assign(t.voice0,{context:this.context,onsilence:()=>this.onsilence(this)})),this.voice1=new Ur(Object.assign(t.voice1,{context:this.context})),this.harmonicity=new cr({context:this.context,units:"positive",value:t.harmonicity}),this._vibrato=new yr({frequency:t.vibratoRate,context:this.context,min:-50,max:50}),this._vibrato.start(),this.vibratoRate=this._vibrato.frequency,this._vibratoGain=new ko({context:this.context,units:"normalRange",gain:t.vibratoAmount}),this.vibratoAmount=this._vibratoGain.gain,this.frequency=new Do({context:this.context,units:"frequency",value:440}),this.detune=new Do({context:this.context,units:"cents",value:t.detune}),this.frequency.connect(this.voice0.frequency),this.frequency.chain(this.harmonicity,this.voice1.frequency),this._vibrato.connect(this._vibratoGain),this._vibratoGain.fan(this.voice0.detune,this.voice1.detune),this.detune.fan(this.voice0.detune,this.voice1.detune),this.voice0.connect(this.output),this.voice1.connect(this.output),Ui(this,["voice0","voice1","frequency","vibratoAmount","vibratoRate"])}getLevelAtTime(t){return t=this.toSeconds(t),this.voice0.envelope.getValueAtTime(t)+this.voice1.envelope.getValueAtTime(t)}static getDefaults(){return Ai(Nr.getDefaults(),{vibratoAmount:.5,vibratoRate:5,harmonicity:1.5,voice0:Ai(Mi(Ur.getDefaults(),Object.keys(Nr.getDefaults())),{filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}}),voice1:Ai(Mi(Ur.getDefaults(),Object.keys(Nr.getDefaults())),{filterEnvelope:{attack:.01,decay:0,sustain:1,release:.5},envelope:{attack:.01,decay:0,sustain:1,release:.5}})})}_triggerEnvelopeAttack(t,e){this.voice0._triggerEnvelopeAttack(t,e),this.voice1._triggerEnvelopeAttack(t,e)}_triggerEnvelopeRelease(t){return this.voice0._triggerEnvelopeRelease(t),this.voice1._triggerEnvelopeRelease(t),this}dispose(){return super.dispose(),this.voice0.dispose(),this.voice1.dispose(),this.frequency.dispose(),this.detune.dispose(),this._vibrato.dispose(),this.vibratoRate.dispose(),this._vibratoGain.dispose(),this.harmonicity.dispose(),this}}class Zr extends Lr{constructor(){super(Di(Zr.getDefaults(),arguments)),this.name="FMSynth";const t=Di(Zr.getDefaults(),arguments);this.modulationIndex=new cr({context:this.context,value:t.modulationIndex}),this.frequency.connect(this._carrier.frequency),this.frequency.chain(this.harmonicity,this._modulator.frequency),this.frequency.chain(this.modulationIndex,this._modulationNode),this.detune.fan(this._carrier.detune,this._modulator.detune),this._modulator.connect(this._modulationNode.gain),this._modulationNode.connect(this._carrier.frequency),this._carrier.connect(this.output)}static getDefaults(){return Object.assign(Lr.getDefaults(),{modulationIndex:10})}dispose(){return super.dispose(),this.modulationIndex.dispose(),this}}const Xr=[1,1.483,1.932,2.546,2.63,3.897];class Yr extends Nr{constructor(){super(Di(Yr.getDefaults(),arguments)),this.name="MetalSynth",this._oscillators=[],this._freqMultipliers=[];const t=Di(Yr.getDefaults(),arguments);this.detune=new Do({context:this.context,units:"cents",value:t.detune}),this.frequency=new Do({context:this.context,units:"frequency"}),this._amplitude=new ko({context:this.context,gain:0}).connect(this.output),this._highpass=new Wr({Q:0,context:this.context,type:"highpass"}).connect(this._amplitude);for(let e=0;e<Xr.length;e++){const s=new ur({context:this.context,harmonicity:t.harmonicity,modulationIndex:t.modulationIndex,modulationType:"square",onstop:0===e?()=>this.onsilence(this):Zi,type:"square"});s.connect(this._highpass),this._oscillators[e]=s;const n=new cr({context:this.context,value:Xr[e]});this._freqMultipliers[e]=n,this.frequency.chain(n,s.frequency),this.detune.connect(s.detune)}this._filterFreqScaler=new gr({context:this.context,max:7e3,min:this.toFrequency(t.resonance)}),this.envelope=new Fr({attack:t.envelope.attack,attackCurve:"linear",context:this.context,decay:t.envelope.decay,release:t.envelope.release,sustain:0}),this.envelope.chain(this._filterFreqScaler,this._highpass.frequency),this.envelope.connect(this._amplitude.gain),this._octaves=t.octaves,this.octaves=t.octaves}static getDefaults(){return Ai(Nr.getDefaults(),{envelope:Object.assign(Mi(Fr.getDefaults(),Object.keys(wo.getDefaults())),{attack:.001,decay:1.4,release:.2}),harmonicity:5.1,modulationIndex:32,octaves:1.5,resonance:4e3})}_triggerEnvelopeAttack(t,e=1){return this.envelope.triggerAttack(t,e),this._oscillators.forEach(e=>e.start(t)),0===this.envelope.sustain&&this._oscillators.forEach(e=>{e.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay))}),this}_triggerEnvelopeRelease(t){return this.envelope.triggerRelease(t),this._oscillators.forEach(e=>e.stop(t+this.toSeconds(this.envelope.release))),this}getLevelAtTime(t){return t=this.toSeconds(t),this.envelope.getValueAtTime(t)}get modulationIndex(){return this._oscillators[0].modulationIndex.value}set modulationIndex(t){this._oscillators.forEach(e=>e.modulationIndex.value=t)}get harmonicity(){return this._oscillators[0].harmonicity.value}set harmonicity(t){this._oscillators.forEach(e=>e.harmonicity.value=t)}get resonance(){return this._filterFreqScaler.min}set resonance(t){this._filterFreqScaler.min=this.toFrequency(t),this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(t){this._octaves=t,this._filterFreqScaler.max=this._filterFreqScaler.min*Math.pow(2,t)}dispose(){return super.dispose(),this._oscillators.forEach(t=>t.dispose()),this._freqMultipliers.forEach(t=>t.dispose()),this.frequency.dispose(),this.detune.dispose(),this._filterFreqScaler.dispose(),this._amplitude.dispose(),this.envelope.dispose(),this._highpass.dispose(),this}}class Hr extends jr{constructor(){super(Di(Hr.getDefaults(),arguments)),this.name="MembraneSynth",this.portamento=0;const t=Di(Hr.getDefaults(),arguments);this.pitchDecay=t.pitchDecay,this.octaves=t.octaves,Ui(this,["oscillator","envelope"])}static getDefaults(){return Ai(Nr.getDefaults(),jr.getDefaults(),{envelope:{attack:.001,attackCurve:"exponential",decay:.4,release:1.4,sustain:.01},octaves:10,oscillator:{type:"sine"},pitchDecay:.05})}setNote(t,e){const s=this.toSeconds(e),n=this.toFrequency(t instanceof lo?t.toFrequency():t),i=n*this.octaves;return this.oscillator.frequency.setValueAtTime(i,s),this.oscillator.frequency.exponentialRampToValueAtTime(n,s+this.toSeconds(this.pitchDecay)),this}dispose(){return super.dispose(),this}}vi([xr(0)],Hr.prototype,"octaves",void 0),vi([wr(0)],Hr.prototype,"pitchDecay",void 0);class $r extends Vr{constructor(){super(Di($r.getDefaults(),arguments)),this.name="NoiseSynth";const t=Di($r.getDefaults(),arguments);this.noise=new Jo(Object.assign({context:this.context},t.noise)),this.envelope=new Pr(Object.assign({context:this.context},t.envelope)),this.noise.chain(this.envelope,this.output)}static getDefaults(){return Object.assign(Vr.getDefaults(),{envelope:Object.assign(Mi(Fr.getDefaults(),Object.keys(wo.getDefaults())),{decay:.1,sustain:0}),noise:Object.assign(Mi(Jo.getDefaults(),Object.keys(Ho.getDefaults())),{type:"white"})})}triggerAttack(t,e=1){return t=this.toSeconds(t),this.envelope.triggerAttack(t,e),this.noise.start(t),0===this.envelope.sustain&&this.noise.stop(t+this.toSeconds(this.envelope.attack)+this.toSeconds(this.envelope.decay)),this}triggerRelease(t){return t=this.toSeconds(t),this.envelope.triggerRelease(t),this.noise.stop(t+this.toSeconds(this.envelope.release)),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",0),this._syncMethod("triggerRelease",0)),this}triggerAttackRelease(t,e,s=1){return e=this.toSeconds(e),t=this.toSeconds(t),this.triggerAttack(e,s),this.triggerRelease(e+t),this}dispose(){return super.dispose(),this.noise.dispose(),this.envelope.dispose(),this}}const Jr=new Set;function Kr(t){Jr.add(t)}function ta(t,e){const s=`registerProcessor("${t}", ${e})`;Jr.add(s)}class ea extends wo{constructor(t){super(t),this.name="ToneAudioWorklet",this.workletOptions={},this.onprocessorerror=Zi;const e=URL.createObjectURL(new Blob([Array.from(Jr).join("\n")],{type:"text/javascript"})),s=this._audioWorkletName();this._dummyGain=this.context.createGain(),this._dummyParam=this._dummyGain.gain,this.context.addAudioWorkletModule(e,s).then(()=>{this.disposed||(this._worklet=this.context.createAudioWorkletNode(s,this.workletOptions),this._worklet.onprocessorerror=this.onprocessorerror.bind(this),this.onReady(this._worklet))})}dispose(){return super.dispose(),this._dummyGain.disconnect(),this._worklet&&(this._worklet.port.postMessage("dispose"),this._worklet.disconnect()),this}}Kr('\n\t/**\n\t * The base AudioWorkletProcessor for use in Tone.js. Works with the [[ToneAudioWorklet]]. \n\t */\n\tclass ToneAudioWorkletProcessor extends AudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\t\n\t\t\tsuper(options);\n\t\t\t/**\n\t\t\t * If the processor was disposed or not. Keep alive until it\'s disposed.\n\t\t\t */\n\t\t\tthis.disposed = false;\n\t\t   \t/** \n\t\t\t * The number of samples in the processing block\n\t\t\t */\n\t\t\tthis.blockSize = 128;\n\t\t\t/**\n\t\t\t * the sample rate\n\t\t\t */\n\t\t\tthis.sampleRate = sampleRate;\n\n\t\t\tthis.port.onmessage = (event) => {\n\t\t\t\t// when it receives a dispose \n\t\t\t\tif (event.data === "dispose") {\n\t\t\t\t\tthis.disposed = true;\n\t\t\t\t}\n\t\t\t};\n\t\t}\n\t}\n');Kr("\n\t/**\n\t * Abstract class for a single input/output processor. \n\t * has a 'generate' function which processes one sample at a time\n\t */\n\tclass SingleIOProcessor extends ToneAudioWorkletProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(Object.assign(options, {\n\t\t\t\tnumberOfInputs: 1,\n\t\t\t\tnumberOfOutputs: 1\n\t\t\t}));\n\t\t\t/**\n\t\t\t * Holds the name of the parameter and a single value of that\n\t\t\t * parameter at the current sample\n\t\t\t * @type { [name: string]: number }\n\t\t\t */\n\t\t\tthis.params = {}\n\t\t}\n\n\t\t/**\n\t\t * Generate an output sample from the input sample and parameters\n\t\t * @abstract\n\t\t * @param input number\n\t\t * @param channel number\n\t\t * @param parameters { [name: string]: number }\n\t\t * @returns number\n\t\t */\n\t\tgenerate(){}\n\n\t\t/**\n\t\t * Update the private params object with the \n\t\t * values of the parameters at the given index\n\t\t * @param parameters { [name: string]: Float32Array },\n\t\t * @param index number\n\t\t */\n\t\tupdateParams(parameters, index) {\n\t\t\tfor (const paramName in parameters) {\n\t\t\t\tconst param = parameters[paramName];\n\t\t\t\tif (param.length > 1) {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][index];\n\t\t\t\t} else {\n\t\t\t\t\tthis.params[paramName] = parameters[paramName][0];\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Process a single frame of the audio\n\t\t * @param inputs Float32Array[][]\n\t\t * @param outputs Float32Array[][]\n\t\t */\n\t\tprocess(inputs, outputs, parameters) {\n\t\t\tconst input = inputs[0];\n\t\t\tconst output = outputs[0];\n\t\t\t// get the parameter values\n\t\t\tconst channelCount = Math.max(input && input.length || 0, output.length);\n\t\t\tfor (let sample = 0; sample < this.blockSize; sample++) {\n\t\t\t\tthis.updateParams(parameters, sample);\n\t\t\t\tfor (let channel = 0; channel < channelCount; channel++) {\n\t\t\t\t\tconst inputSample = input && input.length ? input[channel][sample] : 0;\n\t\t\t\t\toutput[channel][sample] = this.generate(inputSample, channel, this.params);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn !this.disposed;\n\t\t}\n\t};\n");Kr("\n\t/**\n\t * A multichannel buffer for use within an AudioWorkletProcessor as a delay line\n\t */\n\tclass DelayLine {\n\t\t\n\t\tconstructor(size, channels) {\n\t\t\tthis.buffer = [];\n\t\t\tthis.writeHead = []\n\t\t\tthis.size = size;\n\n\t\t\t// create the empty channels\n\t\t\tfor (let i = 0; i < channels; i++) {\n\t\t\t\tthis.buffer[i] = new Float32Array(this.size);\n\t\t\t\tthis.writeHead[i] = 0;\n\t\t\t}\n\t\t}\n\n\t\t/**\n\t\t * Push a value onto the end\n\t\t * @param channel number\n\t\t * @param value number\n\t\t */\n\t\tpush(channel, value) {\n\t\t\tthis.writeHead[channel] += 1;\n\t\t\tif (this.writeHead[channel] > this.size) {\n\t\t\t\tthis.writeHead[channel] = 0;\n\t\t\t}\n\t\t\tthis.buffer[channel][this.writeHead[channel]] = value;\n\t\t}\n\n\t\t/**\n\t\t * Get the recorded value of the channel given the delay\n\t\t * @param channel number\n\t\t * @param delay number delay samples\n\t\t */\n\t\tget(channel, delay) {\n\t\t\tlet readHead = this.writeHead[channel] - Math.floor(delay);\n\t\t\tif (readHead < 0) {\n\t\t\t\treadHead += this.size;\n\t\t\t}\n\t\t\treturn this.buffer[channel][readHead];\n\t\t}\n\t}\n");ta("feedback-comb-filter",'\n\tclass FeedbackCombFilterWorklet extends SingleIOProcessor {\n\n\t\tconstructor(options) {\n\t\t\tsuper(options);\n\t\t\tthis.delayLine = new DelayLine(this.sampleRate, options.channelCount || 2);\n\t\t}\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: "delayTime",\n\t\t\t\tdefaultValue: 0.1,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 1,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}, {\n\t\t\t\tname: "feedback",\n\t\t\t\tdefaultValue: 0.5,\n\t\t\t\tminValue: 0,\n\t\t\t\tmaxValue: 0.9999,\n\t\t\t\tautomationRate: "k-rate"\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, channel, parameters) {\n\t\t\tconst delayedSample = this.delayLine.get(channel, parameters.delayTime * this.sampleRate);\n\t\t\tthis.delayLine.push(channel, input + delayedSample * parameters.feedback);\n\t\t\treturn delayedSample;\n\t\t}\n\t}\n');class sa extends ea{constructor(){super(Di(sa.getDefaults(),arguments,["delayTime","resonance"])),this.name="FeedbackCombFilter";const t=Di(sa.getDefaults(),arguments,["delayTime","resonance"]);this.input=new ko({context:this.context}),this.output=new ko({context:this.context}),this.delayTime=new xo({context:this.context,value:t.delayTime,units:"time",minValue:0,maxValue:1,param:this._dummyParam,swappable:!0}),this.resonance=new xo({context:this.context,value:t.resonance,units:"normalRange",param:this._dummyParam,swappable:!0}),Ui(this,["resonance","delayTime"])}_audioWorkletName(){return"feedback-comb-filter"}static getDefaults(){return Object.assign(wo.getDefaults(),{delayTime:.1,resonance:.5})}onReady(t){bo(this.input,t,this.output);const e=t.parameters.get("delayTime");this.delayTime.setParam(e);const s=t.parameters.get("feedback");this.resonance.setParam(s)}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.delayTime.dispose(),this.resonance.dispose(),this}}class na extends wo{constructor(){super(Di(na.getDefaults(),arguments,["frequency","type"])),this.name="OnePoleFilter";const t=Di(na.getDefaults(),arguments,["frequency","type"]);this._frequency=t.frequency,this._type=t.type,this.input=new ko({context:this.context}),this.output=new ko({context:this.context}),this._createFilter()}static getDefaults(){return Object.assign(wo.getDefaults(),{frequency:880,type:"lowpass"})}_createFilter(){const t=this._filter,e=this.toFrequency(this._frequency),s=1/(2*Math.PI*e);if("lowpass"===this._type){const t=1/(s*this.context.sampleRate),e=t-1;this._filter=this.context.createIIRFilter([t,0],[1,e])}else{const t=1/(s*this.context.sampleRate)-1;this._filter=this.context.createIIRFilter([1,-1],[1,t])}this.input.chain(this._filter,this.output),t&&this.context.setTimeout(()=>{this.disposed||(this.input.disconnect(t),t.disconnect())},this.blockTime)}get frequency(){return this._frequency}set frequency(t){this._frequency=t,this._createFilter()}get type(){return this._type}set type(t){this._type=t,this._createFilter()}getFrequencyResponse(t=128){const e=new Float32Array(t);for(let s=0;s<t;s++){const n=19980*Math.pow(s/t,2)+20;e[s]=n}const s=new Float32Array(t),n=new Float32Array(t);return this._filter.getFrequencyResponse(e,s,n),s}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this._filter.disconnect(),this}}class ia extends wo{constructor(){super(Di(ia.getDefaults(),arguments,["delayTime","resonance","dampening"])),this.name="LowpassCombFilter";const t=Di(ia.getDefaults(),arguments,["delayTime","resonance","dampening"]);this._combFilter=this.output=new sa({context:this.context,delayTime:t.delayTime,resonance:t.resonance}),this.delayTime=this._combFilter.delayTime,this.resonance=this._combFilter.resonance,this._lowpass=this.input=new na({context:this.context,frequency:t.dampening,type:"lowpass"}),this._lowpass.connect(this._combFilter)}static getDefaults(){return Object.assign(wo.getDefaults(),{dampening:3e3,delayTime:.1,resonance:.5})}get dampening(){return this._lowpass.frequency}set dampening(t){this._lowpass.frequency=t}dispose(){return super.dispose(),this._combFilter.dispose(),this._lowpass.dispose(),this}}class oa extends Vr{constructor(){super(Di(oa.getDefaults(),arguments)),this.name="PluckSynth";const t=Di(oa.getDefaults(),arguments);this._noise=new Jo({context:this.context,type:"pink"}),this.attackNoise=t.attackNoise,this._lfcf=new ia({context:this.context,dampening:t.dampening,resonance:t.resonance}),this.resonance=t.resonance,this.release=t.release,this._noise.connect(this._lfcf),this._lfcf.connect(this.output)}static getDefaults(){return Ai(Vr.getDefaults(),{attackNoise:1,dampening:4e3,resonance:.7,release:1})}get dampening(){return this._lfcf.dampening}set dampening(t){this._lfcf.dampening=t}triggerAttack(t,e){const s=this.toFrequency(t);e=this.toSeconds(e);const n=1/s;return this._lfcf.delayTime.setValueAtTime(n,e),this._noise.start(e),this._noise.stop(e+n*this.attackNoise),this._lfcf.resonance.cancelScheduledValues(e),this._lfcf.resonance.setValueAtTime(this.resonance,e),this}triggerRelease(t){return this._lfcf.resonance.linearRampTo(0,this.release,t),this}dispose(){return super.dispose(),this._noise.dispose(),this._lfcf.dispose(),this}}class ra extends Vr{constructor(){super(Di(ra.getDefaults(),arguments,["voice","options"])),this.name="PolySynth",this._availableVoices=[],this._activeVoices=[],this._voices=[],this._gcTimeout=-1,this._averageActiveVoices=0;const t=Di(ra.getDefaults(),arguments,["voice","options"]);ti(!ui(t.voice),"DEPRECATED: The polyphony count is no longer the first argument.");const e=t.voice.getDefaults();this.options=Object.assign(e,t.options),this.voice=t.voice,this.maxPolyphony=t.maxPolyphony,this._dummyVoice=this._getNextAvailableVoice();const s=this._voices.indexOf(this._dummyVoice);this._voices.splice(s,1),this._gcTimeout=this.context.setInterval(this._collectGarbage.bind(this),1)}static getDefaults(){return Object.assign(Vr.getDefaults(),{maxPolyphony:32,options:{},voice:jr})}get activeVoices(){return this._activeVoices.length}_makeVoiceAvailable(t){this._availableVoices.push(t);const e=this._activeVoices.findIndex(e=>e.voice===t);this._activeVoices.splice(e,1)}_getNextAvailableVoice(){if(this._availableVoices.length)return this._availableVoices.shift();if(this._voices.length<this.maxPolyphony){const t=new this.voice(Object.assign(this.options,{context:this.context,onsilence:this._makeVoiceAvailable.bind(this)}));return t.connect(this.output),this._voices.push(t),t}ri("Max polyphony exceeded. Note dropped.")}_collectGarbage(){if(this._averageActiveVoices=Math.max(.95*this._averageActiveVoices,this.activeVoices),this._availableVoices.length&&this._voices.length>Math.ceil(this._averageActiveVoices+1)){const t=this._availableVoices.shift(),e=this._voices.indexOf(t);this._voices.splice(e,1),this.context.isOffline||t.dispose()}}_triggerAttack(t,e,s){t.forEach(t=>{const n=new No(this.context,t).toMidi(),i=this._getNextAvailableVoice();i&&(i.triggerAttack(t,e,s),this._activeVoices.push({midi:n,voice:i,released:!1}),this.log("triggerAttack",t,e))})}_triggerRelease(t,e){t.forEach(t=>{const s=new No(this.context,t).toMidi(),n=this._activeVoices.find(({midi:t,released:e})=>t===s&&!e);n&&(n.voice.triggerRelease(e),n.released=!0,this.log("triggerRelease",t,e))})}_scheduleEvent(t,e,s,n){ti(!this.disposed,"Synth was already disposed"),s<=this.now()?"attack"===t?this._triggerAttack(e,s,n):this._triggerRelease(e,s):this.context.setTimeout(()=>{this._scheduleEvent(t,e,s,n)},s-this.now())}triggerAttack(t,e,s){Array.isArray(t)||(t=[t]);const n=this.toSeconds(e);return this._scheduleEvent("attack",t,n,s),this}triggerRelease(t,e){Array.isArray(t)||(t=[t]);const s=this.toSeconds(e);return this._scheduleEvent("release",t,s),this}triggerAttackRelease(t,e,s,n){const i=this.toSeconds(s);if(this.triggerAttack(t,i,n),di(e)){ti(di(t),"If the duration is an array, the notes must also be an array"),t=t;for(let s=0;s<t.length;s++){const n=e[Math.min(s,e.length-1)],o=this.toSeconds(n);ti(o>0,"The duration must be greater than 0"),this.triggerRelease(t[s],i+o)}}else{const s=this.toSeconds(e);ti(s>0,"The duration must be greater than 0"),this.triggerRelease(t,i+s)}return this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}set(t){const e=Mi(t,["onsilence","context"]);return this.options=Ai(this.options,e),this._voices.forEach(t=>t.set(e)),this._dummyVoice.set(e),this}get(){return this._dummyVoice.get()}releaseAll(t){const e=this.toSeconds(t);return this._activeVoices.forEach(({voice:t})=>{t.triggerRelease(e)}),this}dispose(){return super.dispose(),this._dummyVoice.dispose(),this._voices.forEach(t=>t.dispose()),this._activeVoices=[],this._availableVoices=[],this.context.clearInterval(this._gcTimeout),this}}class aa extends Vr{constructor(){super(Di(aa.getDefaults(),arguments,["urls","onload","baseUrl"],"urls")),this.name="Sampler",this._activeSources=new Map;const t=Di(aa.getDefaults(),arguments,["urls","onload","baseUrl"],"urls"),e={};Object.keys(t.urls).forEach(s=>{const n=parseInt(s,10);if(ti(_i(s)||ui(n)&&isFinite(n),"url key is neither a note or midi pitch: "+s),_i(s)){const n=new lo(this.context,s).toMidi();e[n]=t.urls[s]}else ui(n)&&isFinite(n)&&(e[n]=t.urls[n])}),this._buffers=new Vo({urls:e,onload:t.onload,baseUrl:t.baseUrl,onerror:t.onerror}),this.attack=t.attack,this.release=t.release,this.curve=t.curve,this._buffers.loaded&&Promise.resolve().then(t.onload)}static getDefaults(){return Object.assign(Vr.getDefaults(),{attack:0,baseUrl:"",curve:"exponential",onload:Zi,onerror:Zi,release:.1,urls:{}})}_findClosest(t){let e=0;for(;e<96;){if(this._buffers.has(t+e))return-e;if(this._buffers.has(t-e))return e;e++}throw new Error("No available buffers for note: "+t)}triggerAttack(t,e,s=1){return this.log("triggerAttack",t,e,s),Array.isArray(t)||(t=[t]),t.forEach(t=>{const n=ro(new lo(this.context,t).toFrequency()),i=Math.round(n),o=n-i,r=this._findClosest(i),a=i-r,c=this._buffers.get(a),h=no(r+o),u=new $o({url:c,context:this.context,curve:this.curve,fadeIn:this.attack,fadeOut:this.release,playbackRate:h}).connect(this.output);u.start(e,0,c.duration/h,s),di(this._activeSources.get(i))||this._activeSources.set(i,[]),this._activeSources.get(i).push(u),u.onended=()=>{if(this._activeSources&&this._activeSources.has(i)){const t=this._activeSources.get(i),e=t.indexOf(u);-1!==e&&t.splice(e,1)}}}),this}triggerRelease(t,e){return this.log("triggerRelease",t,e),Array.isArray(t)||(t=[t]),t.forEach(t=>{const s=new lo(this.context,t).toMidi();if(this._activeSources.has(s)&&this._activeSources.get(s).length){const t=this._activeSources.get(s);e=this.toSeconds(e),t.forEach(t=>{t.stop(e)}),this._activeSources.set(s,[])}}),this}releaseAll(t){const e=this.toSeconds(t);return this._activeSources.forEach(t=>{for(;t.length;){t.shift().stop(e)}}),this}sync(){return this._syncState()&&(this._syncMethod("triggerAttack",1),this._syncMethod("triggerRelease",1)),this}triggerAttackRelease(t,e,s,n=1){const i=this.toSeconds(s);return this.triggerAttack(t,i,n),di(e)?(ti(di(t),"notes must be an array when duration is array"),t.forEach((t,s)=>{const n=e[Math.min(s,e.length-1)];this.triggerRelease(t,i+this.toSeconds(n))})):this.triggerRelease(t,i+this.toSeconds(e)),this}add(t,e,s){if(ti(_i(t)||isFinite(t),"note must be a pitch or midi: "+t),_i(t)){const n=new lo(this.context,t).toMidi();this._buffers.add(n,e,s)}else this._buffers.add(t,e,s);return this}get loaded(){return this._buffers.loaded}dispose(){return super.dispose(),this._buffers.dispose(),this._activeSources.forEach(t=>{t.forEach(t=>t.dispose())}),this._activeSources.clear(),this}}vi([wr(0)],aa.prototype,"attack",void 0),vi([wr(0)],aa.prototype,"release",void 0);class ca extends vo{constructor(){super(Di(ca.getDefaults(),arguments,["callback","value"])),this.name="ToneEvent",this._state=new yo("stopped"),this._startOffset=0;const t=Di(ca.getDefaults(),arguments,["callback","value"]);this._loop=t.loop,this.callback=t.callback,this.value=t.value,this._loopStart=this.toTicks(t.loopStart),this._loopEnd=this.toTicks(t.loopEnd),this._playbackRate=t.playbackRate,this._probability=t.probability,this._humanize=t.humanize,this.mute=t.mute,this._playbackRate=t.playbackRate,this._state.increasing=!0,this._rescheduleEvents()}static getDefaults(){return Object.assign(vo.getDefaults(),{callback:Zi,humanize:!1,loop:!1,loopEnd:"1m",loopStart:0,mute:!1,playbackRate:1,probability:1,value:null})}_rescheduleEvents(t=-1){this._state.forEachFrom(t,t=>{let e;if("started"===t.state){-1!==t.id&&this.context.transport.clear(t.id);const s=t.time+Math.round(this.startOffset/this._playbackRate);if(!0===this._loop||ui(this._loop)&&this._loop>1){e=1/0,ui(this._loop)&&(e=this._loop*this._getLoopDuration());const n=this._state.getAfter(s);null!==n&&(e=Math.min(e,n.time-s)),e!==1/0&&(this._state.setStateAtTime("stopped",s+e+1,{id:-1}),e=new jo(this.context,e));const i=new jo(this.context,this._getLoopDuration());t.id=this.context.transport.scheduleRepeat(this._tick.bind(this),i,new jo(this.context,s),e)}else t.id=this.context.transport.schedule(this._tick.bind(this),new jo(this.context,s))}})}get state(){return this._state.getValueAtTime(this.context.transport.ticks)}get startOffset(){return this._startOffset}set startOffset(t){this._startOffset=t}get probability(){return this._probability}set probability(t){this._probability=t}get humanize(){return this._humanize}set humanize(t){this._humanize=t}start(t){const e=this.toTicks(t);return"stopped"===this._state.getValueAtTime(e)&&(this._state.add({id:-1,state:"started",time:e}),this._rescheduleEvents(e)),this}stop(t){this.cancel(t);const e=this.toTicks(t);if("started"===this._state.getValueAtTime(e)){this._state.setStateAtTime("stopped",e,{id:-1});const t=this._state.getBefore(e);let s=e;null!==t&&(s=t.time),this._rescheduleEvents(s)}return this}cancel(t){t=Oi(t,-1/0);const e=this.toTicks(t);return this._state.forEachFrom(e,t=>{this.context.transport.clear(t.id)}),this._state.cancel(e),this}_tick(t){const e=this.context.transport.getTicksAtTime(t);if(!this.mute&&"started"===this._state.getValueAtTime(e)){if(this.probability<1&&Math.random()>this.probability)return;if(this.humanize){let e=.02;pi(this.humanize)||(e=this.toSeconds(this.humanize)),t+=(2*Math.random()-1)*e}this.callback(t,this.value)}}_getLoopDuration(){return Math.round((this._loopEnd-this._loopStart)/this._playbackRate)}get loop(){return this._loop}set loop(t){this._loop=t,this._rescheduleEvents()}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._rescheduleEvents()}get loopEnd(){return new jo(this.context,this._loopEnd).toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t),this._loop&&this._rescheduleEvents()}get loopStart(){return new jo(this.context,this._loopStart).toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t),this._loop&&this._rescheduleEvents()}get progress(){if(this._loop){const t=this.context.transport.ticks,e=this._state.get(t);if(null!==e&&"started"===e.state){const s=this._getLoopDuration();return(t-e.time)%s/s}return 0}return 0}dispose(){return super.dispose(),this.cancel(),this._state.dispose(),this}}class ha extends vo{constructor(){super(Di(ha.getDefaults(),arguments,["callback","interval"])),this.name="Loop";const t=Di(ha.getDefaults(),arguments,["callback","interval"]);this._event=new ca({context:this.context,callback:this._tick.bind(this),loop:!0,loopEnd:t.interval,playbackRate:t.playbackRate,probability:t.probability}),this.callback=t.callback,this.iterations=t.iterations}static getDefaults(){return Object.assign(vo.getDefaults(),{interval:"4n",callback:Zi,playbackRate:1,iterations:1/0,probability:1,mute:!1,humanize:!1})}start(t){return this._event.start(t),this}stop(t){return this._event.stop(t),this}cancel(t){return this._event.cancel(t),this}_tick(t){this.callback(t)}get state(){return this._event.state}get progress(){return this._event.progress}get interval(){return this._event.loopEnd}set interval(t){this._event.loopEnd=t}get playbackRate(){return this._event.playbackRate}set playbackRate(t){this._event.playbackRate=t}get humanize(){return this._event.humanize}set humanize(t){this._event.humanize=t}get probability(){return this._event.probability}set probability(t){this._event.probability=t}get mute(){return this._event.mute}set mute(t){this._event.mute=t}get iterations(){return!0===this._event.loop?1/0:this._event.loop}set iterations(t){this._event.loop=t===1/0||t}dispose(){return super.dispose(),this._event.dispose(),this}}class ua extends ca{constructor(){super(Di(ua.getDefaults(),arguments,["callback","events"])),this.name="Part",this._state=new yo("stopped"),this._events=new Set;const t=Di(ua.getDefaults(),arguments,["callback","events"]);this._state.increasing=!0,t.events.forEach(t=>{di(t)?this.add(t[0],t[1]):this.add(t)})}static getDefaults(){return Object.assign(ca.getDefaults(),{events:[]})}start(t,e){const s=this.toTicks(t);if("started"!==this._state.getValueAtTime(s)){e=Oi(e,this._loop?this._loopStart:0),e=this._loop?Oi(e,this._loopStart):Oi(e,0);const t=this.toTicks(e);this._state.add({id:-1,offset:t,state:"started",time:s}),this._forEach(e=>{this._startNote(e,s,t)})}return this}_startNote(t,e,s){e-=s,this._loop?t.startOffset>=this._loopStart&&t.startOffset<this._loopEnd?(t.startOffset<s&&(e+=this._getLoopDuration()),t.start(new jo(this.context,e))):t.startOffset<this._loopStart&&t.startOffset>=s&&(t.loop=!1,t.start(new jo(this.context,e))):t.startOffset>=s&&t.start(new jo(this.context,e))}get startOffset(){return this._startOffset}set startOffset(t){this._startOffset=t,this._forEach(t=>{t.startOffset+=this._startOffset})}stop(t){const e=this.toTicks(t);return this._state.cancel(e),this._state.setStateAtTime("stopped",e),this._forEach(e=>{e.stop(t)}),this}at(t,e){const s=new mo(this.context,t).toTicks(),n=new jo(this.context,1).toSeconds(),i=this._events.values();let o=i.next();for(;!o.done;){const t=o.value;if(Math.abs(s-t.startOffset)<n)return ci(e)&&(t.value=e),t;o=i.next()}return ci(e)?(this.add(t,e),this.at(t)):null}add(t,e){t instanceof Object&&Reflect.has(t,"time")&&(t=(e=t).time);const s=this.toTicks(t);let n;return e instanceof ca?(n=e,n.callback=this._tick.bind(this)):n=new ca({callback:this._tick.bind(this),context:this.context,value:e}),n.startOffset=s,n.set({humanize:this.humanize,loop:this.loop,loopEnd:this.loopEnd,loopStart:this.loopStart,playbackRate:this.playbackRate,probability:this.probability}),this._events.add(n),this._restartEvent(n),this}_restartEvent(t){this._state.forEach(e=>{"started"===e.state?this._startNote(t,e.time,e.offset):t.stop(new jo(this.context,e.time))})}remove(t,e){return li(t)&&t.hasOwnProperty("time")&&(t=(e=t).time),t=this.toTicks(t),this._events.forEach(s=>{s.startOffset===t&&(ai(e)||ci(e)&&s.value===e)&&(this._events.delete(s),s.dispose())}),this}clear(){return this._forEach(t=>t.dispose()),this._events.clear(),this}cancel(t){return this._forEach(e=>e.cancel(t)),this._state.cancel(this.toTicks(t)),this}_forEach(t){return this._events&&this._events.forEach(e=>{e instanceof ua?e._forEach(t):t(e)}),this}_setAll(t,e){this._forEach(s=>{s[t]=e})}_tick(t,e){this.mute||this.callback(t,e)}_testLoopBoundries(t){this._loop&&(t.startOffset<this._loopStart||t.startOffset>=this._loopEnd)?t.cancel(0):"stopped"===t.state&&this._restartEvent(t)}get probability(){return this._probability}set probability(t){this._probability=t,this._setAll("probability",t)}get humanize(){return this._humanize}set humanize(t){this._humanize=t,this._setAll("humanize",t)}get loop(){return this._loop}set loop(t){this._loop=t,this._forEach(e=>{e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.loop=t,this._testLoopBoundries(e)})}get loopEnd(){return new jo(this.context,this._loopEnd).toSeconds()}set loopEnd(t){this._loopEnd=this.toTicks(t),this._loop&&this._forEach(e=>{e.loopEnd=t,this._testLoopBoundries(e)})}get loopStart(){return new jo(this.context,this._loopStart).toSeconds()}set loopStart(t){this._loopStart=this.toTicks(t),this._loop&&this._forEach(t=>{t.loopStart=this.loopStart,this._testLoopBoundries(t)})}get playbackRate(){return this._playbackRate}set playbackRate(t){this._playbackRate=t,this._setAll("playbackRate",t)}get length(){return this._events.size}dispose(){return super.dispose(),this.clear(),this}}function*la(t){let e=0;for(;e<t.length;)e=fa(e,t),yield t[e],e++}function*pa(t){let e=t.length-1;for(;e>=0;)e=fa(e,t),yield t[e],e--}function*da(t,e){for(;;)yield*e(t)}function fa(t,e){return Vi(t,0,e.length-1)}function*_a(t,e){let s=e?0:t.length-1;for(;;)s=fa(s,t),yield t[s],e?(s++,s>=t.length-1&&(e=!1)):(s--,s<=0&&(e=!0))}function*ma(t){let e=0,s=0;for(;e<t.length;)e=fa(e,t),yield t[e],s++,e+=s%2?2:-1}function*ga(t){let e=t.length-1,s=0;for(;e>=0;)e=fa(e,t),yield t[e],s++,e+=s%2?-2:1}function*va(t){const e=[];for(let s=0;s<t.length;s++)e.push(s);for(;e.length>0;){const s=fa(e.splice(Math.floor(e.length*Math.random()),1)[0],t);yield t[s]}}function*ya(t,e="up",s=0){switch(ti(t.length>0,"The array must have more than one value in it"),e){case"up":yield*da(t,la);case"down":yield*da(t,pa);case"upDown":yield*_a(t,!0);case"downUp":yield*_a(t,!1);case"alternateUp":yield*da(t,ma);case"alternateDown":yield*da(t,ga);case"random":yield*function*(t){for(;;){const e=Math.floor(Math.random()*t.length);yield t[e]}}(t);case"randomOnce":yield*da(t,va);case"randomWalk":yield*function*(t){let e=Math.floor(Math.random()*t.length);for(;;)0===e?e++:e===t.length-1||Math.random()<.5?e--:e++,yield t[e]}(t)}}class xa extends ha{constructor(){super(Di(xa.getDefaults(),arguments,["callback","values","pattern"])),this.name="Pattern";const t=Di(xa.getDefaults(),arguments,["callback","values","pattern"]);this.callback=t.callback,this._values=t.values,this._pattern=ya(t.values,t.pattern),this._type=t.pattern}static getDefaults(){return Object.assign(ha.getDefaults(),{pattern:"up",values:[],callback:Zi})}_tick(t){const e=this._pattern.next();this._value=e.value,this.callback(t,this._value)}get values(){return this._values}set values(t){this._values=t,this.pattern=this._type}get value(){return this._value}get pattern(){return this._type}set pattern(t){this._type=t,this._pattern=ya(this._values,this._type)}}class wa extends ca{constructor(){super(Di(wa.getDefaults(),arguments,["callback","events","subdivision"])),this.name="Sequence",this._part=new ua({callback:this._seqCallback.bind(this),context:this.context}),this._events=[],this._eventsArray=[];const t=Di(wa.getDefaults(),arguments,["callback","events","subdivision"]);this._subdivision=this.toTicks(t.subdivision),this.events=t.events,this.loop=t.loop,this.loopStart=t.loopStart,this.loopEnd=t.loopEnd,this.playbackRate=t.playbackRate,this.probability=t.probability,this.humanize=t.humanize,this.mute=t.mute,this.playbackRate=t.playbackRate}static getDefaults(){return Object.assign(Mi(ca.getDefaults(),["value"]),{events:[],loop:!0,loopEnd:0,loopStart:0,subdivision:"8n"})}_seqCallback(t,e){null!==e&&this.callback(t,e)}get events(){return this._events}set events(t){this.clear(),this._eventsArray=t,this._events=this._createSequence(this._eventsArray),this._eventsUpdated()}start(t,e){return this._part.start(t,e?this._indexTime(e):e),this}stop(t){return this._part.stop(t),this}get subdivision(){return new jo(this.context,this._subdivision).toSeconds()}_createSequence(t){return new Proxy(t,{get:(t,e)=>t[e],set:(t,e,s)=>(fi(e)&&isFinite(parseInt(e,10))&&di(s)?t[e]=this._createSequence(s):t[e]=s,this._eventsUpdated(),!0)})}_eventsUpdated(){this._part.clear(),this._rescheduleSequence(this._eventsArray,this._subdivision,this.startOffset),this.loopEnd=this.loopEnd}_rescheduleSequence(t,e,s){t.forEach((t,n)=>{const i=n*e+s;if(di(t))this._rescheduleSequence(t,e/t.length,i);else{const e=new jo(this.context,i,"i").toSeconds();this._part.add(e,t)}})}_indexTime(t){return new jo(this.context,t*this._subdivision+this.startOffset).toSeconds()}clear(){return this._part.clear(),this}dispose(){return super.dispose(),this._part.dispose(),this}get loop(){return this._part.loop}set loop(t){this._part.loop=t}get loopStart(){return this._loopStart}set loopStart(t){this._loopStart=t,this._part.loopStart=this._indexTime(t)}get loopEnd(){return this._loopEnd}set loopEnd(t){this._loopEnd=t,this._part.loopEnd=0===t?this._indexTime(this._eventsArray.length):this._indexTime(t)}get startOffset(){return this._part.startOffset}set startOffset(t){this._part.startOffset=t}get playbackRate(){return this._part.playbackRate}set playbackRate(t){this._part.playbackRate=t}get probability(){return this._part.probability}set probability(t){this._part.probability=t}get progress(){return this._part.progress}get humanize(){return this._part.humanize}set humanize(t){this._part.humanize=t}get length(){return this._part.length}}class ba extends wo{constructor(){super(Object.assign(Di(ba.getDefaults(),arguments,["fade"]))),this.name="CrossFade",this._panner=this.context.createStereoPanner(),this._split=this.context.createChannelSplitter(2),this._g2a=new Cr({context:this.context}),this.a=new ko({context:this.context,gain:0}),this.b=new ko({context:this.context,gain:0}),this.output=new ko({context:this.context}),this._internalChannels=[this.a,this.b];const t=Di(ba.getDefaults(),arguments,["fade"]);this.fade=new Do({context:this.context,units:"normalRange",value:t.fade}),Ui(this,"fade"),this.context.getConstant(1).connect(this._panner),this._panner.connect(this._split),this._panner.channelCount=1,this._panner.channelCountMode="explicit",To(this._split,this.a.gain,0),To(this._split,this.b.gain,1),this.fade.chain(this._g2a,this._panner.pan),this.a.connect(this.output),this.b.connect(this.output)}static getDefaults(){return Object.assign(wo.getDefaults(),{fade:.5})}dispose(){return super.dispose(),this.a.dispose(),this.b.dispose(),this.output.dispose(),this.fade.dispose(),this._g2a.dispose(),this._panner.disconnect(),this._split.disconnect(),this}}class Ta extends wo{constructor(t){super(t),this.name="Effect",this._dryWet=new ba({context:this.context}),this.wet=this._dryWet.fade,this.effectSend=new ko({context:this.context}),this.effectReturn=new ko({context:this.context}),this.input=new ko({context:this.context}),this.output=this._dryWet,this.input.fan(this._dryWet.a,this.effectSend),this.effectReturn.connect(this._dryWet.b),this.wet.setValueAtTime(t.wet,0),this._internalChannels=[this.effectReturn,this.effectSend],Ui(this,"wet")}static getDefaults(){return Object.assign(wo.getDefaults(),{wet:1})}connectEffect(t){return this._internalChannels.push(t),this.effectSend.chain(t,this.effectReturn),this}dispose(){return super.dispose(),this._dryWet.dispose(),this.effectSend.dispose(),this.effectReturn.dispose(),this.wet.dispose(),this}}class Sa extends Ta{constructor(t){super(t),this.name="LFOEffect",this._lfo=new yr({context:this.context,frequency:t.frequency,amplitude:t.depth}),this.depth=this._lfo.amplitude,this.frequency=this._lfo.frequency,this.type=t.type,Ui(this,["frequency","depth"])}static getDefaults(){return Object.assign(Ta.getDefaults(),{frequency:1,type:"sine",depth:1})}start(t){return this._lfo.start(t),this}stop(t){return this._lfo.stop(t),this}sync(){return this._lfo.sync(),this}unsync(){return this._lfo.unsync(),this}get type(){return this._lfo.type}set type(t){this._lfo.type=t}dispose(){return super.dispose(),this._lfo.dispose(),this.frequency.dispose(),this.depth.dispose(),this}}class ka extends Sa{constructor(){super(Di(ka.getDefaults(),arguments,["frequency","baseFrequency","octaves"])),this.name="AutoFilter";const t=Di(ka.getDefaults(),arguments,["frequency","baseFrequency","octaves"]);this.filter=new Wr(Object.assign(t.filter,{context:this.context})),this.connectEffect(this.filter),this._lfo.connect(this.filter.frequency),this.octaves=t.octaves,this.baseFrequency=t.baseFrequency}static getDefaults(){return Object.assign(Sa.getDefaults(),{baseFrequency:200,octaves:2.6,filter:{type:"lowpass",rolloff:-12,Q:1}})}get baseFrequency(){return this._lfo.min}set baseFrequency(t){this._lfo.min=this.toFrequency(t),this.octaves=this._octaves}get octaves(){return this._octaves}set octaves(t){this._octaves=t,this._lfo.max=this._lfo.min*Math.pow(2,t)}dispose(){return super.dispose(),this.filter.dispose(),this}}class Ca extends wo{constructor(){super(Object.assign(Di(Ca.getDefaults(),arguments,["pan"]))),this.name="Panner",this._panner=this.context.createStereoPanner(),this.input=this._panner,this.output=this._panner;const t=Di(Ca.getDefaults(),arguments,["pan"]);this.pan=new xo({context:this.context,param:this._panner.pan,value:t.pan,minValue:-1,maxValue:1}),this._panner.channelCount=t.channelCount,this._panner.channelCountMode="explicit",Ui(this,"pan")}static getDefaults(){return Object.assign(wo.getDefaults(),{pan:0,channelCount:1})}dispose(){return super.dispose(),this._panner.disconnect(),this.pan.dispose(),this}}class Aa extends Sa{constructor(){super(Di(Aa.getDefaults(),arguments,["frequency"])),this.name="AutoPanner";const t=Di(Aa.getDefaults(),arguments,["frequency"]);this._panner=new Ca({context:this.context,channelCount:t.channelCount}),this.connectEffect(this._panner),this._lfo.connect(this._panner.pan),this._lfo.min=-1,this._lfo.max=1}static getDefaults(){return Object.assign(Sa.getDefaults(),{channelCount:1})}dispose(){return super.dispose(),this._panner.dispose(),this}}class Da extends wo{constructor(){super(Di(Da.getDefaults(),arguments,["smoothing"])),this.name="Follower";const t=Di(Da.getDefaults(),arguments,["smoothing"]);this._abs=this.input=new kr({context:this.context}),this._lowpass=this.output=new na({context:this.context,frequency:1/this.toSeconds(t.smoothing),type:"lowpass"}),this._abs.connect(this._lowpass),this._smoothing=t.smoothing}static getDefaults(){return Object.assign(wo.getDefaults(),{smoothing:.05})}get smoothing(){return this._smoothing}set smoothing(t){this._smoothing=t,this._lowpass.frequency=1/this.toSeconds(this.smoothing)}dispose(){return super.dispose(),this._abs.dispose(),this._lowpass.dispose(),this}}class Oa extends Ta{constructor(){super(Di(Oa.getDefaults(),arguments,["baseFrequency","octaves","sensitivity"])),this.name="AutoWah";const t=Di(Oa.getDefaults(),arguments,["baseFrequency","octaves","sensitivity"]);this._follower=new Da({context:this.context,smoothing:t.follower}),this._sweepRange=new Rr({context:this.context,min:0,max:1,exponent:.5}),this._baseFrequency=this.toFrequency(t.baseFrequency),this._octaves=t.octaves,this._inputBoost=new ko({context:this.context}),this._bandpass=new Wr({context:this.context,rolloff:-48,frequency:0,Q:t.Q}),this._peaking=new Wr({context:this.context,type:"peaking"}),this._peaking.gain.value=t.gain,this.gain=this._peaking.gain,this.Q=this._bandpass.Q,this.effectSend.chain(this._inputBoost,this._follower,this._sweepRange),this._sweepRange.connect(this._bandpass.frequency),this._sweepRange.connect(this._peaking.frequency),this.effectSend.chain(this._bandpass,this._peaking,this.effectReturn),this._setSweepRange(),this.sensitivity=t.sensitivity,Ui(this,["gain","Q"])}static getDefaults(){return Object.assign(Ta.getDefaults(),{baseFrequency:100,octaves:6,sensitivity:0,Q:2,gain:2,follower:.2})}get octaves(){return this._octaves}set octaves(t){this._octaves=t,this._setSweepRange()}get follower(){return this._follower.smoothing}set follower(t){this._follower.smoothing=t}get baseFrequency(){return this._baseFrequency}set baseFrequency(t){this._baseFrequency=this.toFrequency(t),this._setSweepRange()}get sensitivity(){return so(1/this._inputBoost.gain.value)}set sensitivity(t){this._inputBoost.gain.value=1/eo(t)}_setSweepRange(){this._sweepRange.min=this._baseFrequency,this._sweepRange.max=Math.min(this._baseFrequency*Math.pow(2,this._octaves),this.context.sampleRate/2)}dispose(){return super.dispose(),this._follower.dispose(),this._sweepRange.dispose(),this._bandpass.dispose(),this._peaking.dispose(),this._inputBoost.dispose(),this}}ta("bit-crusher","\n\tclass BitCrusherWorklet extends SingleIOProcessor {\n\n\t\tstatic get parameterDescriptors() {\n\t\t\treturn [{\n\t\t\t\tname: \"bits\",\n\t\t\t\tdefaultValue: 12,\n\t\t\t\tminValue: 1,\n\t\t\t\tmaxValue: 16,\n\t\t\t\tautomationRate: 'k-rate'\n\t\t\t}];\n\t\t}\n\n\t\tgenerate(input, _channel, parameters) {\n\t\t\tconst step = Math.pow(0.5, parameters.bits - 1);\n\t\t\tconst val = step * Math.floor(input / step + 0.5);\n\t\t\treturn val;\n\t\t}\n\t}\n");class Ma extends Ta{constructor(){super(Di(Ma.getDefaults(),arguments,["bits"])),this.name="BitCrusher";const t=Di(Ma.getDefaults(),arguments,["bits"]);this._bitCrusherWorklet=new Ea({context:this.context,bits:t.bits}),this.connectEffect(this._bitCrusherWorklet),this.bits=this._bitCrusherWorklet.bits}static getDefaults(){return Object.assign(Ta.getDefaults(),{bits:4})}dispose(){return super.dispose(),this._bitCrusherWorklet.dispose(),this}}class Ea extends ea{constructor(){super(Di(Ea.getDefaults(),arguments)),this.name="BitCrusherWorklet";const t=Di(Ea.getDefaults(),arguments);this.input=new ko({context:this.context}),this.output=new ko({context:this.context}),this.bits=new xo({context:this.context,value:t.bits,units:"positive",minValue:1,maxValue:16,param:this._dummyParam,swappable:!0})}static getDefaults(){return Object.assign(ea.getDefaults(),{bits:12})}_audioWorkletName(){return"bit-crusher"}onReady(t){bo(this.input,t,this.output);const e=t.parameters.get("bits");this.bits.setParam(e)}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.bits.dispose(),this}}class Ra extends Ta{constructor(){super(Di(Ra.getDefaults(),arguments,["order"])),this.name="Chebyshev";const t=Di(Ra.getDefaults(),arguments,["order"]);this._shaper=new rr({context:this.context,length:4096}),this._order=t.order,this.connectEffect(this._shaper),this.order=t.order,this.oversample=t.oversample}static getDefaults(){return Object.assign(Ta.getDefaults(),{order:1,oversample:"none"})}_getCoefficient(t,e,s){return s.has(e)||(0===e?s.set(e,0):1===e?s.set(e,t):s.set(e,2*t*this._getCoefficient(t,e-1,s)-this._getCoefficient(t,e-2,s))),s.get(e)}get order(){return this._order}set order(t){this._order=t,this._shaper.setMap(e=>this._getCoefficient(e,t,new Map))}get oversample(){return this._shaper.oversample}set oversample(t){this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.dispose(),this}}class qa extends wo{constructor(){super(Di(qa.getDefaults(),arguments,["channels"])),this.name="Split";const t=Di(qa.getDefaults(),arguments,["channels"]);this._splitter=this.input=this.output=this.context.createChannelSplitter(t.channels),this._internalChannels=[this._splitter]}static getDefaults(){return Object.assign(wo.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._splitter.disconnect(),this}}class Fa extends wo{constructor(){super(Di(Fa.getDefaults(),arguments,["channels"])),this.name="Merge";const t=Di(Fa.getDefaults(),arguments,["channels"]);this._merger=this.output=this.input=this.context.createChannelMerger(t.channels)}static getDefaults(){return Object.assign(wo.getDefaults(),{channels:2})}dispose(){return super.dispose(),this._merger.disconnect(),this}}class Ia extends wo{constructor(t){super(t),this.name="StereoEffect",this.input=new ko({context:this.context}),this.input.channelCount=2,this.input.channelCountMode="explicit",this._dryWet=this.output=new ba({context:this.context,fade:t.wet}),this.wet=this._dryWet.fade,this._split=new qa({context:this.context,channels:2}),this._merge=new Fa({context:this.context,channels:2}),this.input.connect(this._split),this.input.connect(this._dryWet.a),this._merge.connect(this._dryWet.b),Ui(this,["wet"])}connectEffectLeft(...t){this._split.connect(t[0],0,0),bo(...t),To(t[t.length-1],this._merge,0,0)}connectEffectRight(...t){this._split.connect(t[0],1,0),bo(...t),To(t[t.length-1],this._merge,0,1)}static getDefaults(){return Object.assign(wo.getDefaults(),{wet:1})}dispose(){return super.dispose(),this._dryWet.dispose(),this._split.dispose(),this._merge.dispose(),this}}class Va extends Ia{constructor(t){super(t),this.feedback=new Do({context:this.context,value:t.feedback,units:"normalRange"}),this._feedbackL=new ko({context:this.context}),this._feedbackR=new ko({context:this.context}),this._feedbackSplit=new qa({context:this.context,channels:2}),this._feedbackMerge=new Fa({context:this.context,channels:2}),this._merge.connect(this._feedbackSplit),this._feedbackMerge.connect(this._split),this._feedbackSplit.connect(this._feedbackL,0,0),this._feedbackL.connect(this._feedbackMerge,0,0),this._feedbackSplit.connect(this._feedbackR,1,0),this._feedbackR.connect(this._feedbackMerge,0,1),this.feedback.fan(this._feedbackL.gain,this._feedbackR.gain),Ui(this,["feedback"])}static getDefaults(){return Object.assign(Ia.getDefaults(),{feedback:.5})}dispose(){return super.dispose(),this.feedback.dispose(),this._feedbackL.dispose(),this._feedbackR.dispose(),this._feedbackSplit.dispose(),this._feedbackMerge.dispose(),this}}class Na extends Va{constructor(){super(Di(Na.getDefaults(),arguments,["frequency","delayTime","depth"])),this.name="Chorus";const t=Di(Na.getDefaults(),arguments,["frequency","delayTime","depth"]);this._depth=t.depth,this._delayTime=t.delayTime/1e3,this._lfoL=new yr({context:this.context,frequency:t.frequency,min:0,max:1}),this._lfoR=new yr({context:this.context,frequency:t.frequency,min:0,max:1,phase:180}),this._delayNodeL=new Fo({context:this.context}),this._delayNodeR=new Fo({context:this.context}),this.frequency=this._lfoL.frequency,Ui(this,["frequency"]),this._lfoL.frequency.connect(this._lfoR.frequency),this.connectEffectLeft(this._delayNodeL),this.connectEffectRight(this._delayNodeR),this._lfoL.connect(this._delayNodeL.delayTime),this._lfoR.connect(this._delayNodeR.delayTime),this.depth=this._depth,this.type=t.type,this.spread=t.spread}static getDefaults(){return Object.assign(Va.getDefaults(),{frequency:1.5,delayTime:3.5,depth:.7,type:"sine",spread:180,feedback:0,wet:.5})}get depth(){return this._depth}set depth(t){this._depth=t;const e=this._delayTime*t;this._lfoL.min=Math.max(this._delayTime-e,0),this._lfoL.max=this._delayTime+e,this._lfoR.min=Math.max(this._delayTime-e,0),this._lfoR.max=this._delayTime+e}get delayTime(){return 1e3*this._delayTime}set delayTime(t){this._delayTime=t/1e3,this.depth=this._depth}get type(){return this._lfoL.type}set type(t){this._lfoL.type=t,this._lfoR.type=t}get spread(){return this._lfoR.phase-this._lfoL.phase}set spread(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}start(t){return this._lfoL.start(t),this._lfoR.start(t),this}stop(t){return this._lfoL.stop(t),this._lfoR.stop(t),this}sync(){return this._lfoL.sync(),this._lfoR.sync(),this}unsync(){return this._lfoL.unsync(),this._lfoR.unsync(),this}dispose(){return super.dispose(),this._lfoL.dispose(),this._lfoR.dispose(),this._delayNodeL.dispose(),this._delayNodeR.dispose(),this.frequency.dispose(),this}}class Pa extends Ta{constructor(){super(Di(Pa.getDefaults(),arguments,["distortion"])),this.name="Distortion";const t=Di(Pa.getDefaults(),arguments,["distortion"]);this._shaper=new rr({context:this.context,length:4096}),this._distortion=t.distortion,this.connectEffect(this._shaper),this.distortion=t.distortion,this.oversample=t.oversample}static getDefaults(){return Object.assign(Ta.getDefaults(),{distortion:.4,oversample:"none"})}get distortion(){return this._distortion}set distortion(t){this._distortion=t;const e=100*t,s=Math.PI/180;this._shaper.setMap(t=>Math.abs(t)<.001?0:(3+e)*t*20*s/(Math.PI+e*Math.abs(t)))}get oversample(){return this._shaper.oversample}set oversample(t){this._shaper.oversample=t}dispose(){return super.dispose(),this._shaper.dispose(),this}}class ja extends Ta{constructor(t){super(t),this.name="FeedbackEffect",this._feedbackGain=new ko({context:this.context,gain:t.feedback,units:"normalRange"}),this.feedback=this._feedbackGain.gain,Ui(this,"feedback"),this.effectReturn.chain(this._feedbackGain,this.effectSend)}static getDefaults(){return Object.assign(Ta.getDefaults(),{feedback:.125})}dispose(){return super.dispose(),this._feedbackGain.dispose(),this.feedback.dispose(),this}}class La extends ja{constructor(){super(Di(La.getDefaults(),arguments,["delayTime","feedback"])),this.name="FeedbackDelay";const t=Di(La.getDefaults(),arguments,["delayTime","feedback"]);this._delayNode=new Fo({context:this.context,delayTime:t.delayTime,maxDelay:t.maxDelay}),this.delayTime=this._delayNode.delayTime,this.connectEffect(this._delayNode),Ui(this,"delayTime")}static getDefaults(){return Object.assign(ja.getDefaults(),{delayTime:.25,maxDelay:1})}dispose(){return super.dispose(),this._delayNode.dispose(),this.delayTime.dispose(),this}}class za extends wo{constructor(t){super(t),this.name="PhaseShiftAllpass",this.input=new ko({context:this.context}),this.output=new ko({context:this.context}),this.offset90=new ko({context:this.context});this._bank0=this._createAllPassFilterBank([.6923878,.9360654322959,.988229522686,.9987488452737]),this._bank1=this._createAllPassFilterBank([.4021921162426,.856171088242,.9722909545651,.9952884791278]),this._oneSampleDelay=this.context.createIIRFilter([0,1],[1,0]),bo(this.input,...this._bank0,this._oneSampleDelay,this.output),bo(this.input,...this._bank1,this.offset90)}_createAllPassFilterBank(t){return t.map(t=>{const e=[[t*t,0,-1],[1,0,-t*t]];return this.context.createIIRFilter(e[0],e[1])})}dispose(){return super.dispose(),this.input.dispose(),this.output.dispose(),this.offset90.dispose(),this._bank0.forEach(t=>t.disconnect()),this._bank1.forEach(t=>t.disconnect()),this._oneSampleDelay.disconnect(),this}}class Ba extends Ta{constructor(){super(Di(Ba.getDefaults(),arguments,["frequency"])),this.name="FrequencyShifter";const t=Di(Ba.getDefaults(),arguments,["frequency"]);this.frequency=new Do({context:this.context,units:"frequency",value:t.frequency,minValue:-this.context.sampleRate/2,maxValue:this.context.sampleRate/2}),this._sine=new nr({context:this.context,type:"sine"}),this._cosine=new ir({context:this.context,phase:-90,type:"sine"}),this._sineMultiply=new cr({context:this.context}),this._cosineMultiply=new cr({context:this.context}),this._negate=new Ar({context:this.context}),this._add=new mr({context:this.context}),this._phaseShifter=new za({context:this.context}),this.effectSend.connect(this._phaseShifter),this.frequency.fan(this._sine.frequency,this._cosine.frequency),this._phaseShifter.offset90.connect(this._cosineMultiply),this._cosine.connect(this._cosineMultiply.factor),this._phaseShifter.connect(this._sineMultiply),this._sine.connect(this._sineMultiply.factor),this._sineMultiply.connect(this._negate),this._cosineMultiply.connect(this._add),this._negate.connect(this._add.addend),this._add.connect(this.effectReturn);const e=this.immediate();this._sine.start(e),this._cosine.start(e)}static getDefaults(){return Object.assign(Ta.getDefaults(),{frequency:0})}dispose(){return super.dispose(),this.frequency.dispose(),this._add.dispose(),this._cosine.dispose(),this._cosineMultiply.dispose(),this._negate.dispose(),this._phaseShifter.dispose(),this._sine.dispose(),this._sineMultiply.dispose(),this}}const Wa=[1557/44100,1617/44100,1491/44100,1422/44100,1277/44100,1356/44100,1188/44100,1116/44100],Ga=[225,556,441,341];class Ua extends Ia{constructor(){super(Di(Ua.getDefaults(),arguments,["roomSize","dampening"])),this.name="Freeverb",this._combFilters=[],this._allpassFiltersL=[],this._allpassFiltersR=[];const t=Di(Ua.getDefaults(),arguments,["roomSize","dampening"]);this.roomSize=new Do({context:this.context,value:t.roomSize,units:"normalRange"}),this._allpassFiltersL=Ga.map(t=>{const e=this.context.createBiquadFilter();return e.type="allpass",e.frequency.value=t,e}),this._allpassFiltersR=Ga.map(t=>{const e=this.context.createBiquadFilter();return e.type="allpass",e.frequency.value=t,e}),this._combFilters=Wa.map((e,s)=>{const n=new ia({context:this.context,dampening:t.dampening,delayTime:e});return s<Wa.length/2?this.connectEffectLeft(n,...this._allpassFiltersL):this.connectEffectRight(n,...this._allpassFiltersR),this.roomSize.connect(n.resonance),n}),Ui(this,["roomSize"])}static getDefaults(){return Object.assign(Ia.getDefaults(),{roomSize:.7,dampening:3e3})}get dampening(){return this._combFilters[0].dampening}set dampening(t){this._combFilters.forEach(e=>e.dampening=t)}dispose(){return super.dispose(),this._allpassFiltersL.forEach(t=>t.disconnect()),this._allpassFiltersR.forEach(t=>t.disconnect()),this._combFilters.forEach(t=>t.dispose()),this.roomSize.dispose(),this}}const Qa=[.06748,.06404,.08212,.09004],Za=[.773,.802,.753,.733],Xa=[347,113,37];class Ya extends Ia{constructor(){super(Di(Ya.getDefaults(),arguments,["roomSize"])),this.name="JCReverb",this._allpassFilters=[],this._feedbackCombFilters=[];const t=Di(Ya.getDefaults(),arguments,["roomSize"]);this.roomSize=new Do({context:this.context,value:t.roomSize,units:"normalRange"}),this._scaleRoomSize=new gr({context:this.context,min:-.733,max:.197}),this._allpassFilters=Xa.map(t=>{const e=this.context.createBiquadFilter();return e.type="allpass",e.frequency.value=t,e}),this._feedbackCombFilters=Qa.map((t,e)=>{const s=new sa({context:this.context,delayTime:t});return this._scaleRoomSize.connect(s.resonance),s.resonance.value=Za[e],e<Qa.length/2?this.connectEffectLeft(...this._allpassFilters,s):this.connectEffectRight(...this._allpassFilters,s),s}),this.roomSize.connect(this._scaleRoomSize),Ui(this,["roomSize"])}static getDefaults(){return Object.assign(Ia.getDefaults(),{roomSize:.5})}dispose(){return super.dispose(),this._allpassFilters.forEach(t=>t.disconnect()),this._feedbackCombFilters.forEach(t=>t.dispose()),this.roomSize.dispose(),this._scaleRoomSize.dispose(),this}}class Ha extends Va{constructor(t){super(t),this._feedbackL.disconnect(),this._feedbackL.connect(this._feedbackMerge,0,1),this._feedbackR.disconnect(),this._feedbackR.connect(this._feedbackMerge,0,0),Ui(this,["feedback"])}}class $a extends Ha{constructor(){super(Di($a.getDefaults(),arguments,["delayTime","feedback"])),this.name="PingPongDelay";const t=Di($a.getDefaults(),arguments,["delayTime","feedback"]);this._leftDelay=new Fo({context:this.context,maxDelay:t.maxDelay}),this._rightDelay=new Fo({context:this.context,maxDelay:t.maxDelay}),this._rightPreDelay=new Fo({context:this.context,maxDelay:t.maxDelay}),this.delayTime=new Do({context:this.context,units:"time",value:t.delayTime}),this.connectEffectLeft(this._leftDelay),this.connectEffectRight(this._rightPreDelay,this._rightDelay),this.delayTime.fan(this._leftDelay.delayTime,this._rightDelay.delayTime,this._rightPreDelay.delayTime),this._feedbackL.disconnect(),this._feedbackL.connect(this._rightDelay),Ui(this,["delayTime"])}static getDefaults(){return Object.assign(Ha.getDefaults(),{delayTime:.25,maxDelay:1})}dispose(){return super.dispose(),this._leftDelay.dispose(),this._rightDelay.dispose(),this._rightPreDelay.dispose(),this.delayTime.dispose(),this}}class Ja extends ja{constructor(){super(Di(Ja.getDefaults(),arguments,["pitch"])),this.name="PitchShift";const t=Di(Ja.getDefaults(),arguments,["pitch"]);this._frequency=new Do({context:this.context}),this._delayA=new Fo({maxDelay:1,context:this.context}),this._lfoA=new yr({context:this.context,min:0,max:.1,type:"sawtooth"}).connect(this._delayA.delayTime),this._delayB=new Fo({maxDelay:1,context:this.context}),this._lfoB=new yr({context:this.context,min:0,max:.1,type:"sawtooth",phase:180}).connect(this._delayB.delayTime),this._crossFade=new ba({context:this.context}),this._crossFadeLFO=new yr({context:this.context,min:0,max:1,type:"triangle",phase:90}).connect(this._crossFade.fade),this._feedbackDelay=new Fo({delayTime:t.delayTime,context:this.context}),this.delayTime=this._feedbackDelay.delayTime,Ui(this,"delayTime"),this._pitch=t.pitch,this._windowSize=t.windowSize,this._delayA.connect(this._crossFade.a),this._delayB.connect(this._crossFade.b),this._frequency.fan(this._lfoA.frequency,this._lfoB.frequency,this._crossFadeLFO.frequency),this.effectSend.fan(this._delayA,this._delayB),this._crossFade.chain(this._feedbackDelay,this.effectReturn);const e=this.now();this._lfoA.start(e),this._lfoB.start(e),this._crossFadeLFO.start(e),this.windowSize=this._windowSize}static getDefaults(){return Object.assign(ja.getDefaults(),{pitch:0,windowSize:.1,delayTime:0,feedback:0})}get pitch(){return this._pitch}set pitch(t){this._pitch=t;let e=0;t<0?(this._lfoA.min=0,this._lfoA.max=this._windowSize,this._lfoB.min=0,this._lfoB.max=this._windowSize,e=no(t-1)+1):(this._lfoA.min=this._windowSize,this._lfoA.max=0,this._lfoB.min=this._windowSize,this._lfoB.max=0,e=no(t)-1),this._frequency.value=e*(1.2/this._windowSize)}get windowSize(){return this._windowSize}set windowSize(t){this._windowSize=this.toSeconds(t),this.pitch=this._pitch}dispose(){return super.dispose(),this._frequency.dispose(),this._delayA.dispose(),this._delayB.dispose(),this._lfoA.dispose(),this._lfoB.dispose(),this._crossFade.dispose(),this._crossFadeLFO.dispose(),this._feedbackDelay.dispose(),this}}class Ka extends Ia{constructor(){super(Di(Ka.getDefaults(),arguments,["frequency","octaves","baseFrequency"])),this.name="Phaser";const t=Di(Ka.getDefaults(),arguments,["frequency","octaves","baseFrequency"]);this._lfoL=new yr({context:this.context,frequency:t.frequency,min:0,max:1}),this._lfoR=new yr({context:this.context,frequency:t.frequency,min:0,max:1,phase:180}),this._baseFrequency=this.toFrequency(t.baseFrequency),this._octaves=t.octaves,this.Q=new Do({context:this.context,value:t.Q,units:"positive"}),this._filtersL=this._makeFilters(t.stages,this._lfoL),this._filtersR=this._makeFilters(t.stages,this._lfoR),this.frequency=this._lfoL.frequency,this.frequency.value=t.frequency,this.connectEffectLeft(...this._filtersL),this.connectEffectRight(...this._filtersR),this._lfoL.frequency.connect(this._lfoR.frequency),this.baseFrequency=t.baseFrequency,this.octaves=t.octaves,this._lfoL.start(),this._lfoR.start(),Ui(this,["frequency","Q"])}static getDefaults(){return Object.assign(Ia.getDefaults(),{frequency:.5,octaves:3,stages:10,Q:10,baseFrequency:350})}_makeFilters(t,e){const s=[];for(let n=0;n<t;n++){const t=this.context.createBiquadFilter();t.type="allpass",this.Q.connect(t.Q),e.connect(t.frequency),s.push(t)}return s}get octaves(){return this._octaves}set octaves(t){this._octaves=t;const e=this._baseFrequency*Math.pow(2,t);this._lfoL.max=e,this._lfoR.max=e}get baseFrequency(){return this._baseFrequency}set baseFrequency(t){this._baseFrequency=this.toFrequency(t),this._lfoL.min=this._baseFrequency,this._lfoR.min=this._baseFrequency,this.octaves=this._octaves}dispose(){return super.dispose(),this.Q.dispose(),this._lfoL.dispose(),this._lfoR.dispose(),this._filtersL.forEach(t=>t.disconnect()),this._filtersR.forEach(t=>t.disconnect()),this.frequency.dispose(),this}}class tc extends Ta{constructor(){super(Di(tc.getDefaults(),arguments,["decay"])),this.name="Reverb",this._convolver=this.context.createConvolver(),this.ready=Promise.resolve();const t=Di(tc.getDefaults(),arguments,["decay"]);this._decay=t.decay,this._preDelay=t.preDelay,this.generate(),this.connectEffect(this._convolver)}static getDefaults(){return Object.assign(Ta.getDefaults(),{decay:1.5,preDelay:.01})}get decay(){return this._decay}set decay(t){ei(t=this.toSeconds(t),.001),this._decay=t,this.generate()}get preDelay(){return this._preDelay}set preDelay(t){ei(t=this.toSeconds(t),0),this._preDelay=t,this.generate()}generate(){return yi(this,void 0,void 0,(function*(){const t=this.ready,e=new Yi(2,this._decay+this._preDelay,this.context.sampleRate),s=new Jo({context:e}),n=new Jo({context:e}),i=new Fa({context:e});s.connect(i,0,0),n.connect(i,0,1);const o=new ko({context:e}).toDestination();i.connect(o),s.start(0),n.start(0),o.gain.setValueAtTime(0,0),o.gain.setValueAtTime(1,this._preDelay),o.gain.exponentialApproachValueAtTime(0,this._preDelay,this.decay);const r=e.render();return this.ready=r.then(Zi),yield t,this._convolver.buffer=(yield r).get(),this}))}dispose(){return super.dispose(),this._convolver.disconnect(),this}}class ec extends wo{constructor(){super(Di(ec.getDefaults(),arguments)),this.name="MidSideSplit",this._split=this.input=new qa({channels:2,context:this.context}),this._midAdd=new mr({context:this.context}),this.mid=new cr({context:this.context,value:Math.SQRT1_2}),this._sideSubtract=new Dr({context:this.context}),this.side=new cr({context:this.context,value:Math.SQRT1_2}),this._split.connect(this._midAdd,0),this._split.connect(this._midAdd.addend,1),this._split.connect(this._sideSubtract,0),this._split.connect(this._sideSubtract.subtrahend,1),this._midAdd.connect(this.mid),this._sideSubtract.connect(this.side)}dispose(){return super.dispose(),this.mid.dispose(),this.side.dispose(),this._midAdd.dispose(),this._sideSubtract.dispose(),this._split.dispose(),this}}class sc extends wo{constructor(){super(Di(sc.getDefaults(),arguments)),this.name="MidSideMerge",this.mid=new ko({context:this.context}),this.side=new ko({context:this.context}),this._left=new mr({context:this.context}),this._leftMult=new cr({context:this.context,value:Math.SQRT1_2}),this._right=new Dr({context:this.context}),this._rightMult=new cr({context:this.context,value:Math.SQRT1_2}),this._merge=this.output=new Fa({context:this.context}),this.mid.fan(this._left),this.side.connect(this._left.addend),this.mid.connect(this._right),this.side.connect(this._right.subtrahend),this._left.connect(this._leftMult),this._right.connect(this._rightMult),this._leftMult.connect(this._merge,0,0),this._rightMult.connect(this._merge,0,1)}dispose(){return super.dispose(),this.mid.dispose(),this.side.dispose(),this._leftMult.dispose(),this._rightMult.dispose(),this._left.dispose(),this._right.dispose(),this}}class nc extends Ta{constructor(t){super(t),this.name="MidSideEffect",this._midSideMerge=new sc({context:this.context}),this._midSideSplit=new ec({context:this.context}),this._midSend=this._midSideSplit.mid,this._sideSend=this._midSideSplit.side,this._midReturn=this._midSideMerge.mid,this._sideReturn=this._midSideMerge.side,this.effectSend.connect(this._midSideSplit),this._midSideMerge.connect(this.effectReturn)}connectEffectMid(...t){this._midSend.chain(...t,this._midReturn)}connectEffectSide(...t){this._sideSend.chain(...t,this._sideReturn)}dispose(){return super.dispose(),this._midSideSplit.dispose(),this._midSideMerge.dispose(),this._midSend.dispose(),this._sideSend.dispose(),this._midReturn.dispose(),this._sideReturn.dispose(),this}}class ic extends nc{constructor(){super(Di(ic.getDefaults(),arguments,["width"])),this.name="StereoWidener";const t=Di(ic.getDefaults(),arguments,["width"]);this.width=new Do({context:this.context,value:t.width,units:"normalRange"}),Ui(this,["width"]),this._twoTimesWidthMid=new cr({context:this.context,value:2}),this._twoTimesWidthSide=new cr({context:this.context,value:2}),this._midMult=new cr({context:this.context}),this._twoTimesWidthMid.connect(this._midMult.factor),this.connectEffectMid(this._midMult),this._oneMinusWidth=new Dr({context:this.context}),this._oneMinusWidth.connect(this._twoTimesWidthMid),To(this.context.getConstant(1),this._oneMinusWidth),this.width.connect(this._oneMinusWidth.subtrahend),this._sideMult=new cr({context:this.context}),this.width.connect(this._twoTimesWidthSide),this._twoTimesWidthSide.connect(this._sideMult.factor),this.connectEffectSide(this._sideMult)}static getDefaults(){return Object.assign(nc.getDefaults(),{width:.5})}dispose(){return super.dispose(),this.width.dispose(),this._midMult.dispose(),this._sideMult.dispose(),this._twoTimesWidthMid.dispose(),this._twoTimesWidthSide.dispose(),this._oneMinusWidth.dispose(),this}}class oc extends Ia{constructor(){super(Di(oc.getDefaults(),arguments,["frequency","depth"])),this.name="Tremolo";const t=Di(oc.getDefaults(),arguments,["frequency","depth"]);this._lfoL=new yr({context:this.context,type:t.type,min:1,max:0}),this._lfoR=new yr({context:this.context,type:t.type,min:1,max:0}),this._amplitudeL=new ko({context:this.context}),this._amplitudeR=new ko({context:this.context}),this.frequency=new Do({context:this.context,value:t.frequency,units:"frequency"}),this.depth=new Do({context:this.context,value:t.depth,units:"normalRange"}),Ui(this,["frequency","depth"]),this.connectEffectLeft(this._amplitudeL),this.connectEffectRight(this._amplitudeR),this._lfoL.connect(this._amplitudeL.gain),this._lfoR.connect(this._amplitudeR.gain),this.frequency.fan(this._lfoL.frequency,this._lfoR.frequency),this.depth.fan(this._lfoR.amplitude,this._lfoL.amplitude),this.spread=t.spread}static getDefaults(){return Object.assign(Ia.getDefaults(),{frequency:10,type:"sine",depth:.5,spread:180})}start(t){return this._lfoL.start(t),this._lfoR.start(t),this}stop(t){return this._lfoL.stop(t),this._lfoR.stop(t),this}sync(){return this._lfoL.sync(),this._lfoR.sync(),this.context.transport.syncSignal(this.frequency),this}unsync(){return this._lfoL.unsync(),this._lfoR.unsync(),this.context.transport.unsyncSignal(this.frequency),this}get type(){return this._lfoL.type}set type(t){this._lfoL.type=t,this._lfoR.type=t}get spread(){return this._lfoR.phase-this._lfoL.phase}set spread(t){this._lfoL.phase=90-t/2,this._lfoR.phase=t/2+90}dispose(){return super.dispose(),this._lfoL.dispose(),this._lfoR.dispose(),this._amplitudeL.dispose(),this._amplitudeR.dispose(),this.frequency.dispose(),this.depth.dispose(),this}}class rc extends Ta{constructor(){super(Di(rc.getDefaults(),arguments,["frequency","depth"])),this.name="Vibrato";const t=Di(rc.getDefaults(),arguments,["frequency","depth"]);this._delayNode=new Fo({context:this.context,delayTime:0,maxDelay:t.maxDelay}),this._lfo=new yr({context:this.context,type:t.type,min:0,max:t.maxDelay,frequency:t.frequency,phase:-90}).start().connect(this._delayNode.delayTime),this.frequency=this._lfo.frequency,this.depth=this._lfo.amplitude,this.depth.value=t.depth,Ui(this,["frequency","depth"]),this.effectSend.chain(this._delayNode,this.effectReturn)}static getDefaults(){return Object.assign(Ta.getDefaults(),{maxDelay:.005,frequency:5,depth:.1,type:"sine"})}get type(){return this._lfo.type}set type(t){this._lfo.type=t}dispose(){return super.dispose(),this._delayNode.dispose(),this._lfo.dispose(),this.frequency.dispose(),this.depth.dispose(),this}}class ac extends wo{constructor(){super(Di(ac.getDefaults(),arguments,["type","size"])),this.name="Analyser",this._analysers=[],this._buffers=[];const t=Di(ac.getDefaults(),arguments,["type","size"]);this.input=this.output=this._gain=new ko({context:this.context}),this._split=new qa({context:this.context,channels:t.channels}),this.input.connect(this._split),ei(t.channels,1);for(let e=0;e<t.channels;e++)this._analysers[e]=this.context.createAnalyser(),this._split.connect(this._analysers[e],e,0);this.size=t.size,this.type=t.type}static getDefaults(){return Object.assign(wo.getDefaults(),{size:1024,smoothing:.8,type:"fft",channels:1})}getValue(){return this._analysers.forEach((t,e)=>{const s=this._buffers[e];"fft"===this._type?t.getFloatFrequencyData(s):"waveform"===this._type&&t.getFloatTimeDomainData(s)}),1===this.channels?this._buffers[0]:this._buffers}get size(){return this._analysers[0].frequencyBinCount}set size(t){this._analysers.forEach((e,s)=>{e.fftSize=2*t,this._buffers[s]=new Float32Array(t)})}get channels(){return this._analysers.length}get type(){return this._type}set type(t){ti("waveform"===t||"fft"===t,"Analyser: invalid type: "+t),this._type=t}get smoothing(){return this._analysers[0].smoothingTimeConstant}set smoothing(t){this._analysers.forEach(e=>e.smoothingTimeConstant=t)}dispose(){return super.dispose(),this._analysers.forEach(t=>t.disconnect()),this._split.dispose(),this._gain.dispose(),this}}class cc extends wo{constructor(){super(Di(cc.getDefaults(),arguments)),this.name="MeterBase",this.input=this.output=this._analyser=new ac({context:this.context,size:256,type:"waveform"})}dispose(){return super.dispose(),this._analyser.dispose(),this}}class hc extends cc{constructor(){super(Di(hc.getDefaults(),arguments,["smoothing"])),this.name="Meter",this._rms=0;const t=Di(hc.getDefaults(),arguments,["smoothing"]);this.input=this.output=this._analyser=new ac({context:this.context,size:256,type:"waveform",channels:t.channels}),this.smoothing=t.smoothing,this.normalRange=t.normalRange}static getDefaults(){return Object.assign(cc.getDefaults(),{smoothing:.8,normalRange:!1,channels:1})}getLevel(){return ri("'getLevel' has been changed to 'getValue'"),this.getValue()}getValue(){const t=this._analyser.getValue(),e=(1===this.channels?[t]:t).map(t=>{const e=t.reduce((t,e)=>t+e*e,0),s=Math.sqrt(e/t.length);return this._rms=Math.max(s,this._rms*this.smoothing),this.normalRange?this._rms:so(this._rms)});return 1===this.channels?e[0]:e}get channels(){return this._analyser.channels}dispose(){return super.dispose(),this._analyser.dispose(),this}}class uc extends cc{constructor(){super(Di(uc.getDefaults(),arguments,["size"])),this.name="FFT";const t=Di(uc.getDefaults(),arguments,["size"]);this.normalRange=t.normalRange,this._analyser.type="fft",this.size=t.size}static getDefaults(){return Object.assign(wo.getDefaults(),{normalRange:!1,size:1024,smoothing:.8})}getValue(){return this._analyser.getValue().map(t=>this.normalRange?eo(t):t)}get size(){return this._analyser.size}set size(t){this._analyser.size=t}get smoothing(){return this._analyser.smoothing}set smoothing(t){this._analyser.smoothing=t}getFrequencyOfIndex(t){return ti(0<=t&&t<this.size,"index must be greater than or equal to 0 and less than "+this.size),t*this.context.sampleRate/(2*this.size)}}class lc extends cc{constructor(){super(Di(lc.getDefaults(),arguments)),this.name="DCMeter",this._analyser.type="waveform",this._analyser.size=256}getValue(){return this._analyser.getValue()[0]}}class pc extends cc{constructor(){super(Di(pc.getDefaults(),arguments,["size"])),this.name="Waveform";const t=Di(pc.getDefaults(),arguments,["size"]);this._analyser.type="waveform",this.size=t.size}static getDefaults(){return Object.assign(cc.getDefaults(),{size:1024})}getValue(){return this._analyser.getValue()}get size(){return this._analyser.size}set size(t){this._analyser.size=t}}class dc extends wo{constructor(){super(Di(dc.getDefaults(),arguments,["solo"])),this.name="Solo";const t=Di(dc.getDefaults(),arguments,["solo"]);this.input=this.output=new ko({context:this.context}),dc._allSolos.has(this.context)||dc._allSolos.set(this.context,new Set),dc._allSolos.get(this.context).add(this),this.solo=t.solo}static getDefaults(){return Object.assign(wo.getDefaults(),{solo:!1})}get solo(){return this._isSoloed()}set solo(t){t?this._addSolo():this._removeSolo(),dc._allSolos.get(this.context).forEach(t=>t._updateSolo())}get muted(){return 0===this.input.gain.value}_addSolo(){dc._soloed.has(this.context)||dc._soloed.set(this.context,new Set),dc._soloed.get(this.context).add(this)}_removeSolo(){dc._soloed.has(this.context)&&dc._soloed.get(this.context).delete(this)}_isSoloed(){return dc._soloed.has(this.context)&&dc._soloed.get(this.context).has(this)}_noSolos(){return!dc._soloed.has(this.context)||dc._soloed.has(this.context)&&0===dc._soloed.get(this.context).size}_updateSolo(){this._isSoloed()||this._noSolos()?this.input.gain.value=1:this.input.gain.value=0}dispose(){return super.dispose(),dc._allSolos.get(this.context).delete(this),this._removeSolo(),this}}dc._allSolos=new Map,dc._soloed=new Map;class fc extends wo{constructor(){super(Di(fc.getDefaults(),arguments,["pan","volume"])),this.name="PanVol";const t=Di(fc.getDefaults(),arguments,["pan","volume"]);this._panner=this.input=new Ca({context:this.context,pan:t.pan,channelCount:t.channelCount}),this.pan=this._panner.pan,this._volume=this.output=new Go({context:this.context,volume:t.volume}),this.volume=this._volume.volume,this._panner.connect(this._volume),this.mute=t.mute,Ui(this,["pan","volume"])}static getDefaults(){return Object.assign(wo.getDefaults(),{mute:!1,pan:0,volume:0,channelCount:1})}get mute(){return this._volume.mute}set mute(t){this._volume.mute=t}dispose(){return super.dispose(),this._panner.dispose(),this.pan.dispose(),this._volume.dispose(),this.volume.dispose(),this}}class _c extends wo{constructor(){super(Di(_c.getDefaults(),arguments,["volume","pan"])),this.name="Channel";const t=Di(_c.getDefaults(),arguments,["volume","pan"]);this._solo=this.input=new dc({solo:t.solo,context:this.context}),this._panVol=this.output=new fc({context:this.context,pan:t.pan,volume:t.volume,mute:t.mute,channelCount:t.channelCount}),this.pan=this._panVol.pan,this.volume=this._panVol.volume,this._solo.connect(this._panVol),Ui(this,["pan","volume"])}static getDefaults(){return Object.assign(wo.getDefaults(),{pan:0,volume:0,mute:!1,solo:!1,channelCount:1})}get solo(){return this._solo.solo}set solo(t){this._solo.solo=t}get muted(){return this._solo.muted||this.mute}get mute(){return this._panVol.mute}set mute(t){this._panVol.mute=t}_getBus(t){return _c.buses.has(t)||_c.buses.set(t,new ko({context:this.context})),_c.buses.get(t)}send(t,e=0){const s=this._getBus(t),n=new ko({context:this.context,units:"decibels",gain:e});return this.connect(n),n.connect(s),n}receive(t){return this._getBus(t).connect(this),this}dispose(){return super.dispose(),this._panVol.dispose(),this.pan.dispose(),this.volume.dispose(),this._solo.dispose(),this}}_c.buses=new Map;class mc extends wo{constructor(){super(Di(mc.getDefaults(),arguments)),this.name="Mono",this.input=new ko({context:this.context}),this._merge=this.output=new Fa({channels:2,context:this.context}),this.input.connect(this._merge,0,0),this.input.connect(this._merge,0,1)}dispose(){return super.dispose(),this._merge.dispose(),this.input.dispose(),this}}class gc extends wo{constructor(){super(Di(gc.getDefaults(),arguments,["lowFrequency","highFrequency"])),this.name="MultibandSplit",this.input=new ko({context:this.context}),this.output=void 0,this.low=new Wr({context:this.context,frequency:0,type:"lowpass"}),this._lowMidFilter=new Wr({context:this.context,frequency:0,type:"highpass"}),this.mid=new Wr({context:this.context,frequency:0,type:"lowpass"}),this.high=new Wr({context:this.context,frequency:0,type:"highpass"}),this._internalChannels=[this.low,this.mid,this.high];const t=Di(gc.getDefaults(),arguments,["lowFrequency","highFrequency"]);this.lowFrequency=new Do({context:this.context,units:"frequency",value:t.lowFrequency}),this.highFrequency=new Do({context:this.context,units:"frequency",value:t.highFrequency}),this.Q=new Do({context:this.context,units:"positive",value:t.Q}),this.input.fan(this.low,this.high),this.input.chain(this._lowMidFilter,this.mid),this.lowFrequency.fan(this.low.frequency,this._lowMidFilter.frequency),this.highFrequency.fan(this.mid.frequency,this.high.frequency),this.Q.connect(this.low.Q),this.Q.connect(this._lowMidFilter.Q),this.Q.connect(this.mid.Q),this.Q.connect(this.high.Q),Ui(this,["high","mid","low","highFrequency","lowFrequency"])}static getDefaults(){return Object.assign(wo.getDefaults(),{Q:1,highFrequency:2500,lowFrequency:400})}dispose(){return super.dispose(),Qi(this,["high","mid","low","highFrequency","lowFrequency"]),this.low.dispose(),this._lowMidFilter.dispose(),this.mid.dispose(),this.high.dispose(),this.lowFrequency.dispose(),this.highFrequency.dispose(),this.Q.dispose(),this}}class vc extends wo{constructor(){super(...arguments),this.name="Listener",this.positionX=new xo({context:this.context,param:this.context.rawContext.listener.positionX}),this.positionY=new xo({context:this.context,param:this.context.rawContext.listener.positionY}),this.positionZ=new xo({context:this.context,param:this.context.rawContext.listener.positionZ}),this.forwardX=new xo({context:this.context,param:this.context.rawContext.listener.forwardX}),this.forwardY=new xo({context:this.context,param:this.context.rawContext.listener.forwardY}),this.forwardZ=new xo({context:this.context,param:this.context.rawContext.listener.forwardZ}),this.upX=new xo({context:this.context,param:this.context.rawContext.listener.upX}),this.upY=new xo({context:this.context,param:this.context.rawContext.listener.upY}),this.upZ=new xo({context:this.context,param:this.context.rawContext.listener.upZ})}static getDefaults(){return Object.assign(wo.getDefaults(),{positionX:0,positionY:0,positionZ:0,forwardX:0,forwardY:0,forwardZ:-1,upX:0,upY:1,upZ:0})}dispose(){return super.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this.forwardX.dispose(),this.forwardY.dispose(),this.forwardZ.dispose(),this.upX.dispose(),this.upY.dispose(),this.upZ.dispose(),this}}ji(t=>{t.listener=new vc({context:t})}),zi(t=>{t.listener.dispose()});class yc extends wo{constructor(){super(Di(yc.getDefaults(),arguments,["positionX","positionY","positionZ"])),this.name="Panner3D";const t=Di(yc.getDefaults(),arguments,["positionX","positionY","positionZ"]);this._panner=this.input=this.output=this.context.createPanner(),this.panningModel=t.panningModel,this.maxDistance=t.maxDistance,this.distanceModel=t.distanceModel,this.coneOuterGain=t.coneOuterGain,this.coneOuterAngle=t.coneOuterAngle,this.coneInnerAngle=t.coneInnerAngle,this.refDistance=t.refDistance,this.rolloffFactor=t.rolloffFactor,this.positionX=new xo({context:this.context,param:this._panner.positionX,value:t.positionX}),this.positionY=new xo({context:this.context,param:this._panner.positionY,value:t.positionY}),this.positionZ=new xo({context:this.context,param:this._panner.positionZ,value:t.positionZ}),this.orientationX=new xo({context:this.context,param:this._panner.orientationX,value:t.orientationX}),this.orientationY=new xo({context:this.context,param:this._panner.orientationY,value:t.orientationY}),this.orientationZ=new xo({context:this.context,param:this._panner.orientationZ,value:t.orientationZ})}static getDefaults(){return Object.assign(wo.getDefaults(),{coneInnerAngle:360,coneOuterAngle:360,coneOuterGain:0,distanceModel:"inverse",maxDistance:1e4,orientationX:0,orientationY:0,orientationZ:0,panningModel:"equalpower",positionX:0,positionY:0,positionZ:0,refDistance:1,rolloffFactor:1})}setPosition(t,e,s){return this.positionX.value=t,this.positionY.value=e,this.positionZ.value=s,this}setOrientation(t,e,s){return this.orientationX.value=t,this.orientationY.value=e,this.orientationZ.value=s,this}get panningModel(){return this._panner.panningModel}set panningModel(t){this._panner.panningModel=t}get refDistance(){return this._panner.refDistance}set refDistance(t){this._panner.refDistance=t}get rolloffFactor(){return this._panner.rolloffFactor}set rolloffFactor(t){this._panner.rolloffFactor=t}get distanceModel(){return this._panner.distanceModel}set distanceModel(t){this._panner.distanceModel=t}get coneInnerAngle(){return this._panner.coneInnerAngle}set coneInnerAngle(t){this._panner.coneInnerAngle=t}get coneOuterAngle(){return this._panner.coneOuterAngle}set coneOuterAngle(t){this._panner.coneOuterAngle=t}get coneOuterGain(){return this._panner.coneOuterGain}set coneOuterGain(t){this._panner.coneOuterGain=t}get maxDistance(){return this._panner.maxDistance}set maxDistance(t){this._panner.maxDistance=t}dispose(){return super.dispose(),this._panner.disconnect(),this.orientationX.dispose(),this.orientationY.dispose(),this.orientationZ.dispose(),this.positionX.dispose(),this.positionY.dispose(),this.positionZ.dispose(),this}}class xc extends wo{constructor(){super(Di(xc.getDefaults(),arguments)),this.name="Recorder";const t=Di(xc.getDefaults(),arguments);this.input=new ko({context:this.context}),ti(xc.supported,"Media Recorder API is not available"),this._stream=this.context.createMediaStreamDestination(),this.input.connect(this._stream),this._recorder=new MediaRecorder(this._stream.stream,{mimeType:t.mimeType})}static getDefaults(){return wo.getDefaults()}get mimeType(){return this._recorder.mimeType}static get supported(){return null!==mi&&Reflect.has(mi,"MediaRecorder")}get state(){return"inactive"===this._recorder.state?"stopped":"paused"===this._recorder.state?"paused":"started"}start(){return yi(this,void 0,void 0,(function*(){ti("started"!==this.state,"Recorder is already started");const t=new Promise(t=>{const e=()=>{this._recorder.removeEventListener("start",e,!1),t()};this._recorder.addEventListener("start",e,!1)});return this._recorder.start(),yield t}))}stop(){return yi(this,void 0,void 0,(function*(){ti("stopped"!==this.state,"Recorder is not started");const t=new Promise(t=>{const e=s=>{this._recorder.removeEventListener("dataavailable",e,!1),t(s.data)};this._recorder.addEventListener("dataavailable",e,!1)});return this._recorder.stop(),yield t}))}pause(){return ti("started"===this.state,"Recorder must be started"),this._recorder.pause(),this}dispose(){return super.dispose(),this.input.dispose(),this._stream.disconnect(),this}}class wc extends wo{constructor(){super(Di(wc.getDefaults(),arguments,["threshold","ratio"])),this.name="Compressor",this._compressor=this.context.createDynamicsCompressor(),this.input=this._compressor,this.output=this._compressor;const t=Di(wc.getDefaults(),arguments,["threshold","ratio"]);this.threshold=new xo({minValue:this._compressor.threshold.minValue,maxValue:this._compressor.threshold.maxValue,context:this.context,convert:!1,param:this._compressor.threshold,units:"decibels",value:t.threshold}),this.attack=new xo({minValue:this._compressor.attack.minValue,maxValue:this._compressor.attack.maxValue,context:this.context,param:this._compressor.attack,units:"time",value:t.attack}),this.release=new xo({minValue:this._compressor.release.minValue,maxValue:this._compressor.release.maxValue,context:this.context,param:this._compressor.release,units:"time",value:t.release}),this.knee=new xo({minValue:this._compressor.knee.minValue,maxValue:this._compressor.knee.maxValue,context:this.context,convert:!1,param:this._compressor.knee,units:"decibels",value:t.knee}),this.ratio=new xo({minValue:this._compressor.ratio.minValue,maxValue:this._compressor.ratio.maxValue,context:this.context,convert:!1,param:this._compressor.ratio,units:"positive",value:t.ratio}),Ui(this,["knee","release","attack","ratio","threshold"])}static getDefaults(){return Object.assign(wo.getDefaults(),{attack:.003,knee:30,ratio:12,release:.25,threshold:-24})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.disconnect(),this.attack.dispose(),this.release.dispose(),this.threshold.dispose(),this.ratio.dispose(),this.knee.dispose(),this}}class bc extends wo{constructor(){super(Object.assign(Di(bc.getDefaults(),arguments,["threshold","smoothing"]))),this.name="Gate";const t=Di(bc.getDefaults(),arguments,["threshold","smoothing"]);this._follower=new Da({context:this.context,smoothing:t.smoothing}),this._gt=new Mr({context:this.context,value:eo(t.threshold)}),this.input=new ko({context:this.context}),this._gate=this.output=new ko({context:this.context}),this.input.connect(this._gate),this.input.chain(this._follower,this._gt,this._gate.gain)}static getDefaults(){return Object.assign(wo.getDefaults(),{smoothing:.1,threshold:-40})}get threshold(){return so(this._gt.value)}set threshold(t){this._gt.value=eo(t)}get smoothing(){return this._follower.smoothing}set smoothing(t){this._follower.smoothing=t}dispose(){return super.dispose(),this.input.dispose(),this._follower.dispose(),this._gt.dispose(),this._gate.dispose(),this}}class Tc extends wo{constructor(){super(Object.assign(Di(Tc.getDefaults(),arguments,["threshold"]))),this.name="Limiter";const t=Di(Tc.getDefaults(),arguments,["threshold"]);this._compressor=this.input=this.output=new wc({context:this.context,ratio:20,attack:.003,release:.01,threshold:t.threshold}),this.threshold=this._compressor.threshold,Ui(this,"threshold")}static getDefaults(){return Object.assign(wo.getDefaults(),{threshold:-12})}get reduction(){return this._compressor.reduction}dispose(){return super.dispose(),this._compressor.dispose(),this.threshold.dispose(),this}}class Sc extends wo{constructor(){super(Object.assign(Di(Sc.getDefaults(),arguments))),this.name="MidSideCompressor";const t=Di(Sc.getDefaults(),arguments);this._midSideSplit=this.input=new ec({context:this.context}),this._midSideMerge=this.output=new sc({context:this.context}),this.mid=new wc(Object.assign(t.mid,{context:this.context})),this.side=new wc(Object.assign(t.side,{context:this.context})),this._midSideSplit.mid.chain(this.mid,this._midSideMerge.mid),this._midSideSplit.side.chain(this.side,this._midSideMerge.side),Ui(this,["mid","side"])}static getDefaults(){return Object.assign(wo.getDefaults(),{mid:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16},side:{ratio:6,threshold:-30,release:.25,attack:.03,knee:10}})}dispose(){return super.dispose(),this.mid.dispose(),this.side.dispose(),this._midSideSplit.dispose(),this._midSideMerge.dispose(),this}}class kc extends wo{constructor(){super(Object.assign(Di(kc.getDefaults(),arguments))),this.name="MultibandCompressor";const t=Di(kc.getDefaults(),arguments);this._splitter=this.input=new gc({context:this.context,lowFrequency:t.lowFrequency,highFrequency:t.highFrequency}),this.lowFrequency=this._splitter.lowFrequency,this.highFrequency=this._splitter.highFrequency,this.output=new ko({context:this.context}),this.low=new wc(Object.assign(t.low,{context:this.context})),this.mid=new wc(Object.assign(t.mid,{context:this.context})),this.high=new wc(Object.assign(t.high,{context:this.context})),this._splitter.low.chain(this.low,this.output),this._splitter.mid.chain(this.mid,this.output),this._splitter.high.chain(this.high,this.output),Ui(this,["high","mid","low","highFrequency","lowFrequency"])}static getDefaults(){return Object.assign(wo.getDefaults(),{lowFrequency:250,highFrequency:2e3,low:{ratio:6,threshold:-30,release:.25,attack:.03,knee:10},mid:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16},high:{ratio:3,threshold:-24,release:.03,attack:.02,knee:16}})}dispose(){return super.dispose(),this._splitter.dispose(),this.low.dispose(),this.mid.dispose(),this.high.dispose(),this.output.dispose(),this}}class Cc extends wo{constructor(){super(Di(Cc.getDefaults(),arguments,["low","mid","high"])),this.name="EQ3",this.output=new ko({context:this.context}),this._internalChannels=[];const t=Di(Cc.getDefaults(),arguments,["low","mid","high"]);this.input=this._multibandSplit=new gc({context:this.context,highFrequency:t.highFrequency,lowFrequency:t.lowFrequency}),this._lowGain=new ko({context:this.context,gain:t.low,units:"decibels"}),this._midGain=new ko({context:this.context,gain:t.mid,units:"decibels"}),this._highGain=new ko({context:this.context,gain:t.high,units:"decibels"}),this.low=this._lowGain.gain,this.mid=this._midGain.gain,this.high=this._highGain.gain,this.Q=this._multibandSplit.Q,this.lowFrequency=this._multibandSplit.lowFrequency,this.highFrequency=this._multibandSplit.highFrequency,this._multibandSplit.low.chain(this._lowGain,this.output),this._multibandSplit.mid.chain(this._midGain,this.output),this._multibandSplit.high.chain(this._highGain,this.output),Ui(this,["low","mid","high","lowFrequency","highFrequency"]),this._internalChannels=[this._multibandSplit]}static getDefaults(){return Object.assign(wo.getDefaults(),{high:0,highFrequency:2500,low:0,lowFrequency:400,mid:0})}dispose(){return super.dispose(),Qi(this,["low","mid","high","lowFrequency","highFrequency"]),this._multibandSplit.dispose(),this.lowFrequency.dispose(),this.highFrequency.dispose(),this._lowGain.dispose(),this._midGain.dispose(),this._highGain.dispose(),this.low.dispose(),this.mid.dispose(),this.high.dispose(),this.Q.dispose(),this}}class Ac extends wo{constructor(){super(Di(Ac.getDefaults(),arguments,["url","onload"])),this.name="Convolver",this._convolver=this.context.createConvolver();const t=Di(Ac.getDefaults(),arguments,["url","onload"]);this._buffer=new Xi(t.url,e=>{this.buffer=e,t.onload()}),this.input=new ko({context:this.context}),this.output=new ko({context:this.context}),this._buffer.loaded&&(this.buffer=this._buffer),this.normalize=t.normalize,this.input.chain(this._convolver,this.output)}static getDefaults(){return Object.assign(wo.getDefaults(),{normalize:!0,onload:Zi})}load(t){return yi(this,void 0,void 0,(function*(){this.buffer=yield this._buffer.load(t)}))}get buffer(){return this._buffer.length?this._buffer:null}set buffer(t){t&&this._buffer.set(t),this._convolver.buffer&&(this.input.disconnect(),this._convolver.disconnect(),this._convolver=this.context.createConvolver(),this.input.chain(this._convolver,this.output));const e=this._buffer.get();this._convolver.buffer=e||null}get normalize(){return this._convolver.normalize}set normalize(t){this._convolver.normalize=t}dispose(){return super.dispose(),this._buffer.dispose(),this._convolver.disconnect(),this}}function Dc(){return Ji().now()}function Oc(){return Ji().immediate()}const Mc=Ji().transport;function Ec(){return Ji().transport}const Rc=Ji().destination,qc=Ji().destination;function Fc(){return Ji().destination}const Ic=Ji().listener;function Vc(){return Ji().listener}const Nc=Ji().draw;function Pc(){return Ji().draw}const jc=Ji();function Lc(){return Xi.loaded()}const zc=Xi,Bc=Vo,Wc=$o}])}));

},{}],2:[function(require,module,exports){
/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );

},{}],3:[function(require,module,exports){
//. browserify main.js -o bundle.js

const Tone = require('Tone');
const { ajax } = require('jquery');
let melody = undefined;

const main_el = document.getElementById('main');
const piano_roll_el = document.getElementById('piano-roll');
const notes_el = document.getElementById('notes-container');
const notes_bg_el = document.getElementById('notes-bg');

function createNote(note) {
    let el = document.createElement('div');
    el.style.top = `calc(var(--piano-note-height) * ${95 - note.midi} + var(--piano-notes-vertical-gap))`;
    el.style.left = `calc(var(--piano-note-width) * ${note.time} * var(--piano-scale))`;
    el.style.width = `calc(var(--piano-note-width) * ${note.duration} * var(--piano-scale) - var(--piano-notes-horizontal-gap))`;
    // el.innerHTML = note.name;
    // el.style.opacity = `${(note.velocity / 2) + .5}`;
    el.className = 'some-note';

    notes_el.appendChild(el);
}

const synth = new Tone.PolySynth({maxPolyphony: 64}).toDestination();
synth.sync();

const sampler = new Tone.Sampler({
    urls: {
        "C4": "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();
sampler.sync();

let instrument = sampler;

let length = 0;

async function loadMelody() {
    let json = await ajax('http://localhost:3000/melody');
    console.log(json);
    melody = json;

    melody.tracks.forEach(track => {
        track.notes.forEach(note => {
            if (note.duration <= 0) return;
            instrument.triggerAttackRelease(note.name, note.duration, note.time, note.velocity);
            createNote(note);

            let end = note.time + note.duration;
            if (length < end) {
                length = end;
            }
        });
    });

    notes_bg_el.style.width = `calc(var(--piano-note-width) * ${length} * var(--piano-scale) + var(--piano-note-width) + 24px`;
}
loadMelody();

let playing = false;
let in_piano_roll = true;
document.addEventListener('keypress', e => {
    if (!in_piano_roll) return;
    if (e.key == ' ') {
        e.preventDefault(); 
        if (e.ctrlKey) {
            console.log('restarting');
            if (playing) {
                stop();
                playing = false;
            }
            play();
            playing = true;
        } else if (!playing) {
            play();
            playing = true;
        } else {
            pause();
            playing = false;
        }
    }
});

main_el.addEventListener('mouseenter', () => {
    in_piano_roll = true;
});

main_el.addEventListener('mouseleave', () => {
    in_piano_roll = false;
});

async function play() {
    if (melody == undefined) {
        console.log("mellody hasn'y loaded yet");
        return;
    }

    await Tone.start()
	console.log('audio is ready')

    Tone.Transport.bpm.value = document.getElementById('bpm').value;
    Tone.Transport.start();
}

document.getElementById('bpm').addEventListener('input', e => {
    Tone.Transport.bpm.value = e.currentTarget.value;
});

async function stop() {
    console.log('stopping');
    Tone.Transport.stop();
}

async function pause() {
    console.log('pausing');
    Tone.Transport.pause();
}
},{"Tone":1,"jquery":2}]},{},[3]);
