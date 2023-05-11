export function checkIIN (iin:string):boolean|undefined {
  if (iin.length !== 12) {
    return false;
  }

  let checkSum = 0;

  for (let i = 0; i < 11; i++) {
    const num = Number(iin[i]);
    checkSum += (i + 1) * num;
  }

  let remainder = checkSum % 11;
  if (remainder === 10) {
    checkSum = 0;
    for (let j = 0; j < 11; j++) {
      let totalCheckSum = (j + 3) % 11;
      if (totalCheckSum === 0) {
        totalCheckSum = 11;
      }
      checkSum = checkSum + totalCheckSum * Number(iin[j]);
    }

    remainder = checkSum % 11;
    if (remainder === 10) {
      return false;
    }
  }

  return remainder === Number(iin.charAt(iin.length - 1));
}
