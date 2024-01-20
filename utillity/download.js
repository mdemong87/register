import jsPDF from "jspdf";

// utility/download.js



function downloadPDF(data) {

  console.log(data);
  // Create a new jsPDF instance
  const pdf = new jsPDF();


  // Existing data
  pdf.setFontSize(18);
  pdf.text(20, 20, 'Information:');
  pdf.setFontSize(13);
  pdf.text(20, 30, `Title: ${data.title}`);
  pdf.text(20, 40, `Name: ${"Mr. Md Emon Hossen"}`);
  pdf.text(20, 50, `Email: ${data.email}`);
  pdf.text(20, 60, `Agree: ${data.agree}`);
  pdf.text(20, 70, `Card: ${data.card}`);
  pdf.text(20, 80, `Card Number: ${data.cardNumber}`);
  pdf.text(20, 90, `Created At: ${data.createdAt}`);
  pdf.text(20, 100, `Criminal: ${data.criminal}`);
  pdf.text(20, 110, `Date of Birth: ${data.dateOfDate}`);
  pdf.text(20, 120, `Department: ${data.department}`);
  pdf.text(20, 130, `Emergency Contact Name: ${data.emergancyContactName}`);
  pdf.text(20, 140, `Emergency Contact Number: ${data.emergancyContactNumber}`);
  pdf.text(20, 150, `Expiry Date: ${data.expaireDate}`);
  pdf.text(20, 160, `First Name: ${data.fristName}`);
  pdf.text(20, 170, `Hear: ${data.hear}`);
  pdf.text(20, 180, `Insurance: ${data.insurance}`);
  pdf.text(20, 190, `Issue Date: ${data.issueDate}`);
  pdf.text(20, 200, `Mobile Number: ${data.mobileNumber}`);
  pdf.text(20, 210, `Month: ${data.month}`);
  pdf.text(20, 220, `Nationality: ${data.nationality}`);
  pdf.text(20, 230, `Permission: ${data.permission}`);
  pdf.text(20, 240, `Post Code: ${data.postCode}`);
  pdf.text(20, 250, `Tube Station: ${data.tubeStation}`);


  // You can continue this pattern for additional information

  // Save the PDF
  pdf.save('personal_information.pdf');
}
export default downloadPDF;
