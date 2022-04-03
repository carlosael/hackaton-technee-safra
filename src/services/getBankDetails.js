async function getBankDetails(setLoanTypes) {
  try {
    const response = await fetch("https://api.safra.com.br/open-banking/products-services/v1/business-loans", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    setLoanTypes(data.data.brand.companies[0].businessLoans);
  } catch (error) {
    console.log(error);
  }
}

export default getBankDetails;
