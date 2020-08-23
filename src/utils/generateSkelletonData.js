const generate = (quantiy, prefix = 'sk') => {
  return [...Array(quantiy)].map((_,index) => ({
    id: `${prefix}_${index}`
  }))
}

export default generate
