/*This algotihm map an array of objects*/
const employees = [
    {   
        id: "1", 
        name: "Javier", 
        typeEmployee: "Developer",
        Salari: "500USD"
    },
    {
        id: "2", 
        name: "Jorge", 
        typeEmployee: "AzuranceFlow",
        Salari: "200USD"
    },
    {
        id: "3", 
        name: "Marcus", 
        typeEmployee: "flowManager",
        Salari: "300USD"
    },
    {
        id: "4", 
        name: "Axel", 
        typeEmployee: "CaptureData",
        Salari: "500USD"
    },
    {
        id: "5", 
        name: "Dantus", 
        typeEmployee: "DataAnalyst",
        Salari: "100USD"
    }
];
const getDataEmploye = () =>{
    const salaries = [...new Set(employees.flatMap(({Salari}) => Salari))];
}