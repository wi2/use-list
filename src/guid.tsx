//return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
function guid(): string {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  return [s4(), s4(), '-', s4(), '-', s4(), '-', s4(), '-', s4(), s4(), s4()].join('')
}

export default guid