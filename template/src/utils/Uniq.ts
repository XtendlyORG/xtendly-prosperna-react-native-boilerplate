export const Uniq = (array: any[]) => {
  return array.reduce((acc, current) => {
    const x = acc.find((item: any) => item.name === current.name)
    if (!x) {
      return acc.concat([current])
    } else {
      return acc
    }
  }, [])
}
