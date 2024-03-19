const isLetter = (str: string) => {
  if (str.length === 0) return true;
  return /[A-Za-z0-9 ]/.test(str);
};

export { isLetter };
// ^.{1,50}$ // semua karakter

// [^#]* // semua karakter kecuali pagar