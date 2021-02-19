module.exports = {
  title: 'Title ipsum dolor',
  numbersRunningSpeedMilisecond: 1500,
  sections: [{
      icon: 'fas fa-check',
      number: {
        prefix: '±',
        value: 18,
        suffix: '$'
      },
      paragraph: 'Lorem ipsum dolor sit amet.'
  }, {
      icon: 'fas fa-money-bill-alt',
      number: {
        prefix: '>',
        value: 30,
        suffix: 'm$'
      },
      paragraph: 'Lorem ipsum dolor sit amet.'
  }, {
      icon: 'fas fa-user-check',
      number: {
        value: 4,
        suffix: 'k+'
      },
      paragraph: 'Lorem ipsum dolor sit amet.'
  }],
  style: {
    backgroundColor: '#000000',
    textColor: '#ffffff',
    numbersColor: '#c11d2a',
    titleFontSize: '48px',
    numbersFontSize: '52px',
  }
}
