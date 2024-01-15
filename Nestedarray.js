const { name, study, photoType } = {
    name: 'Hasnat Hasan',
    study: {
        class: 'XI',
        college: 'Pubail Adarsha College',
        roll: 34
    },
    photoType: [
        { hi: 'hello', bell: 'shel' },
        { hi1: 'hello1', bell: 'shel1' },
        { hi2: 'hello2', bell: 'shel2' }
    ]
}

const consoli = photoType[0]['bell'];
console.log(consoli);