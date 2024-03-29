// Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.

//Loop
function DNAtoRNA(dna) {
  let rna = ""
  for (let base of dna) {
    base === "T" ? (rna += "U") : (rna += base)
  }
  return rna
}

//Split Join
function DNAtoRNA(dna) {
  return dna.split("T").join("U")
}

const DNAtoRNA = (dna) => dna.split("T").join("U")

//Replace All
function DNAtoRNA(dna) {
  return dna.replaceAll("T", "U")
}

const DNAtoRNA = (dna) => dna.replaceAll("T", "U")
