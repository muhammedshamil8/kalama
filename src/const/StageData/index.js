const colors = ['#3592BA', '#00A99D', '#8DC63F'];

const dates = [
    '19-01-25',
    '20-01-25',
    '21-01-25',
    '22-01-25',
    '23-01-25',
    '24-01-25',
];


const stages = {
    '19-01-25': [
        { id: 101, name: 'Main Arena', stage: 'Stage 1', color: colors[0] },
        { id: 102, name: 'Community Hall', stage: 'Stage 2', color: colors[1] },
        { id: 103, name: 'Green Lounge', stage: 'Stage 3', color: colors[2] },
    ],
    '20-01-25': [
        { id: 201, name: 'The Plaza', stage: 'Stage 1', color: colors[0] },
        { id: 202, name: 'Concert Hall', stage: 'Stage 2', color: colors[1] },
    ],
    '21-01-25': [
        { id: 301, name: 'Sports Complex', stage: 'Stage 1', color: colors[0] },
        { id: 302, name: 'Event Deck', stage: 'Stage 2', color: colors[1] },
        { id: 303, name: 'Sky Dome', stage: 'Stage 3', color: colors[2] },
        { id: 304, name: 'Open Field', stage: 'Stage 4', color: colors[0] },
    ],
    '22-01-25': [
        { id: 401, name: 'Grand Ballroom', stage: 'Stage 1', color: colors[0] },
        { id: 402, name: 'Clubhouse', stage: 'Stage 2', color: colors[1] },
    ],
    '23-01-25': [
        { id: 501, name: 'Riverside Pavilion', stage: 'Stage 1', color: colors[0] },
        { id: 502, name: 'Community Theater', stage: 'Stage 2', color: colors[1] },
        { id: 503, name: 'Garden Tent', stage: 'Stage 3', color: colors[2] },
    ],
    '24-01-25': [
        { id: 601, name: 'Amphitheater', stage: 'Stage 1', color: colors[0] },
        { id: 602, name: 'Innovation Hub', stage: 'Stage 2', color: colors[1] },
        { id: 603, name: 'Creative Studio', stage: 'Stage 3', color: colors[2] },
        { id: 604, name: 'Workshop Area', stage: 'Stage 4', color: colors[0] },
    ],
};


const programs = {
    101: [
        { id: 1, time: '10:00 AM', name: 'Opening Ceremony' },
        { id: 2, time: '11:30 AM', name: 'Keynote Speech' },
    ],
    102: [
        { id: 1, time: '10:15 AM', name: 'Workshop A' },
        { id: 2, time: '12:00 PM', name: 'Workshop B' },
    ],
    103: [
        { id: 1, time: '9:00 AM', name: 'Morning Yoga' },
        { id: 2, time: '11:00 AM', name: 'Art Workshop' },
    ],
    201: [
        { id: 1, time: '10:30 AM', name: 'Panel Discussion' },
        { id: 2, time: '1:00 PM', name: 'Networking Lunch' },
    ],
    202: [
        { id: 1, time: '10:45 AM', name: 'Startup Pitch' },
        { id: 2, time: '12:30 PM', name: 'Tech Showcase' },
    ],
    301: [
        { id: 1, time: '8:00 AM', name: 'Sports Meet' },
        { id: 2, time: '10:30 AM', name: 'Fitness Workshop' },
    ],
    302: [
        { id: 1, time: '11:00 AM', name: 'Book Launch' },
        { id: 2, time: '1:30 PM', name: 'Meet & Greet' },
    ],
    303: [
        { id: 1, time: '9:30 AM', name: 'Photography Workshop' },
        { id: 2, time: '12:00 PM', name: 'Lunch Break' },
    ],
    304: [
        { id: 1, time: '2:00 PM', name: 'Music Fest' },
        { id: 2, time: '4:00 PM', name: 'Dance Performance' },
    ],
    401: [
        { id: 1, time: '11:00 AM', name: 'Corporate Seminar' },
        { id: 2, time: '3:00 PM', name: 'Panel Discussion' },
    ],
    402: [
        { id: 1, time: '1:00 PM', name: 'Theater Rehearsal' },
        { id: 2, time: '5:00 PM', name: 'Performance Showcase' },
    ],
    501: [
        { id: 1, time: '10:00 AM', name: 'River Cleanup Drive' },
        { id: 2, time: '12:30 PM', name: 'Eco Seminar' },
    ],
    502: [
        { id: 1, time: '11:30 AM', name: 'Community Lunch' },
        { id: 2, time: '2:30 PM', name: 'Live Music' },
    ],
    503: [
        { id: 1, time: '9:00 AM', name: 'Gardening Workshop' },
        { id: 2, time: '11:00 AM', name: 'Painting Session' },
    ],
    601: [
        { id: 1, time: '10:30 AM', name: 'Drama Rehearsal' },
        { id: 2, time: '12:00 PM', name: 'Play Performance' },
    ],
    602: [
        { id: 1, time: '1:30 PM', name: 'Tech Talk' },
        { id: 2, time: '4:00 PM', name: 'Innovation Awards' },
    ],
    603: [
        { id: 1, time: '2:00 PM', name: 'Creative Writing' },
        { id: 2, time: '3:30 PM', name: 'Film Screening' },
    ],
    604: [
        { id: 1, time: '11:00 AM', name: 'DIY Workshop' },
        { id: 2, time: '1:30 PM', name: 'Hands-on Training' },
    ],
};

function getStageDetails(stageId, date) {
    const stage = stages[date]?.find(stage => stage.id === stageId);
    const programsForStage = programs[stageId] || [];

    if (!stage) {
        return `No stage found for ID ${stageId} on ${date}`;
    }

    return {
        name: stage.name,
        color: stage.color,
        location: stage.stage,
        programs: programsForStage
    };
}

export { stages, programs, dates , getStageDetails };