export const strToNumberString = (val:string): string => {
  return  val.replace(/[^0-9.-]+/g, "")
}

