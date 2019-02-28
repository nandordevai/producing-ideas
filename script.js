const ideas = [
    'Use a different reverb.',
    'Use slow autopan.',
    'Trigger the arpeggiator with a rhythmic line.',
    'Arpeggiators can be used anywhere (even on a drum track).',
    'Don’t forget about glide & legato.',
    'Reverb sandwich: put modulation effects between two reverbs.',
    'Create two pitch shifted delays with slightly different settings and pan them to the left and right.',
    'Use sidechain compression on a send effect.',
    'Randomly separate individual long notes in a pad into shorter ones touching each other.',
    'Automate filter gate wet amount or filter LFO amount.',
    'Put a random arpeggiator after a normal one. Set different rate, gate, steps, distance etc. values.',
    'Create a random patch or select one randomly.',
    'Load a random sample into a sampler and play with it.',
    'Layer samples.',
    'Combine a flanger with drums (especially hihats) or percussion.',
    'Slice it into small parts.',
    'Automate time-based parameters.',
];

const x = Math.floor(Math.random() * ideas.length);

document.querySelector('.idea').innerHTML = `
    <span class="num">#${x + 1}</span>
    <p>${ideas[x].replace('. ', '.<br>')}</p>`;
