//code for the StudentInfo starts from here
const dateofBirth= "16/09/2005";
const getStudentName = () =>
{

return "Sakar Shrestha";
}
const getCampusName = () =>
{return ("UEL Campus ")
}
//exporting functions & variable outside the module
exports.getName=getStudentName;
exports.Location=getCampusName;
exports.dob=dateofBirth;
// How to export function with parameters
exports.Studentgrade=(marks)=>
{
if (marks>50 && marks <70) return ("B grade");
else
return ("A grade");
};