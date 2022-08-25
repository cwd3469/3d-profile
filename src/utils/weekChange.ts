function weekChange(week: string) {
  const weeks = [
    { name: 'MO', boo: false },
    { name: 'TU', boo: false },
    { name: 'WE', boo: false },
    { name: 'TH', boo: false },
    { name: 'FR', boo: false },
    { name: 'ST', boo: false },
    { name: 'SU', boo: false },
  ];
  const reWeeks = weeks.map((w, index) => {
    return w.name === week ? { name: w.name, boo: !w.boo } : { name: w.name, boo: w.boo };
  });

  return reWeeks;
}

export default weekChange;
