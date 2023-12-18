function calculateNetSalary(basicSalary, benefits) {
    const relief = 2400;
    const NSSF_RATE = 0.05; 
  
    const grossSalary = basicSalary + benefits;
  
    let nhifDeduction;
  
    if (grossSalary <= 5999) {
      nhifDeduction = 150;
    } else if (grossSalary <= 7999) {
      nhifDeduction = 300;
    } else if (grossSalary <= 11999) {
      nhifDeduction = 400;
    } else if (grossSalary <= 14999) {
      nhifDeduction = 500;
    } else if (grossSalary <= 19999) {
      nhifDeduction = 600;
    } else if (grossSalary <= 24999) {
      nhifDeduction = 750;
    } else if (grossSalary <= 29999) {
      nhifDeduction = 850;
    } else if (grossSalary <= 34999) {
      nhifDeduction = 900;
    } else if (grossSalary <= 39999) {
      nhifDeduction = 950;
    } else if (grossSalary <= 44999) {
      nhifDeduction = 1000;
    } else if (grossSalary <= 49999) {
      nhifDeduction = 1100;
    } else if (grossSalary <= 59999) {
      nhifDeduction = 1200;
    } else if (grossSalary <= 69999) {
      nhifDeduction = 1300;
    } else if (grossSalary <= 79999) {
      nhifDeduction = 1400;
    } else if (grossSalary <= 89999) {
      nhifDeduction = 1500;
    } else if (grossSalary <= 99999) {
      nhifDeduction = 1600;
    } else if (grossSalary <= 119999) {
      nhifDeduction = 1700;
    } else {
      nhifDeduction = 1700;
    }
  
    const taxableIncome = grossSalary - relief;
  
    let payee;
    if (taxableIncome <= 24000) {
      payee = 0;
    } else if (taxableIncome <= 32333) {
      payee = (taxableIncome - 24000) * 0.1;
    } else if (taxableIncome <= 500000) {
      payee = 8324 * 0.1 + (taxableIncome - 32333) * 0.25;
    } else if (taxableIncome <= 800000) {
      payee = 8324 * 0.1 + 467667 * 0.25 + (taxableIncome - 500000) * 0.3;
    } else {
      payee = 8324 * 0.1 + 467667 * 0.25 + 300000 * 0.3 + (taxableIncome - 800000) * 0.35;
    }
  
    const nssfDeductions = grossSalary * NSSF_RATE;
  
    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeductions);
  
    return {
      grossSalary: grossSalary,
      payee: payee,
      nhifDeduction: nhifDeduction,
      nssfDeductions: nssfDeductions,
      netSalary: netSalary,
    };
  }
  
  const basicSalary = 70000;
  const benefits = 10000;
  
  const result = calculateNetSalary(basicSalary, benefits);
  console.log(result);
  