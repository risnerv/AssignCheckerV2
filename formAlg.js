//this files contains the algorithms needed for each form

//import assignmentChecker from assignmentChecker;
//import PRNG from PRNG;

//function prodo types
/*
//the algorithm to read in the input values, preform the operations 
//and return correct and incorrect values and 
//possibly the validation code for assignment 1
function assignment1Alg()

//the algorithm to read in the input values, preform the operations 
//and return correct and incorrect values and 
//possibly the validation code for assignment 2
function assignment2Alg()

//the algorithm to read in the input values, preform the operations 
//and return correct and incorrect values and 
//possibly the validation code for assignment 2
function assignment3Alg()

//the algorithm to preform the necessary operations on 
//the instructor for the By Assignment Request and returns a string
function byAssignment(request, assignment, schoolCode, year)

//the algorithm to perform the necessary operations to return
//the requested values for a specific combination of dataset and assignment
function bySpecifcAlg()

//the algorithm to perform the necessary operations to return
//the requested values for a specific dataset
function byDataSetAlg() 

//the algorithm to take the byAssignment function 
//and computes the request on the instructor page for a specific assignment
function byAssignmentAlg()

//the algorithm to calc and return datasets for a 
//combination of year, school code and dataset number
function datasetAlg()*/








//the algorithm to read in the input values, preform the operations 
//and return correct and incorrect values and 
//possibly the validation code for assignment 1
function assignment1Alg()
{
        // Retrieve input value
        dataSet = parseInt(document.getElementById('dataset').value); 
        seedValue = parseInt(document.getElementById('school').value) * parseInt(document.getElementById('year').value);
        userMean = parseFloat(document.getElementById('mean').value); 
        userSD = parseFloat(document.getElementById('sd').value); 
        userCorr = parseFloat(document.getElementById('corr').value);

        //if dataset number, school code, or year is blank return error
        if(dataset == '' || school == '' || year =='')
        {
        // return error code
        outputDiv.textContent = 'Please enter a Data Set Number, School Code AND Year.'
        }
         //if the dataset number, school code, and year all valid
        else
        {
            //call assignment1 function and store the correct and incorrect values in the newData
            newData = assignment1();

            //print valid or invalid by each data input
            //if the first input is correct else if the first input is incorrect
            document.getElementById('meanResult').textContent = newData[0] ? 'Valid' : 'Invalid';
            //if the second input is correct else if the second input is incorrect
                document.getElementById('sdResult').textContent = newData[1] ? 'Valid' : 'Invalid';
            //if the third input is correct else if the third input is incorrect
                document.getElementById('corrResult').textContent = newData[2] ? 'Valid' : 'Invalid';

            //if all inputs are correct print validation code
            if(newData[0] && newData[1] && newData[2])
            {
                //call validation code to return the correct code for the dataset,
                // school, and year for assignment 1
                console.log("Seed Value is ", datasetIP.value * schoolIP.value * yearIP.value)
                outputDiv.textContent = "validation code:" +  validCode(datasetIP.value * schoolIP.value * yearIP.value); 
            }
      }
      //clear inputs
      //document.getElementById('inputFormAssign1').reset();
}

//the algorithm to read in the input values, preform the operations 
//and return correct and incorrect values and 
//possibly the validation code for assignment 2
function assignment2Alg()
{
    
        // Retrieve input value
        dataSet = parseInt(document.getElementById('dataset').value); 
        seedValue = parseInt(document.getElementById('school').value) * parseInt(document.getElementById('year').value);
        userIQ = parseFloat(document.getElementById('iQ').value); 
        user9th = parseFloat(document.getElementById('ninth').value); 
        userMedian = parseFloat(document.getElementById('median').value);
        userregA = parseFloat(document.getElementById('regresA').value);
        userregB = parseFloat(document.getElementById('regresB').value);

        //if dataset number, school code, or year is blank return error
        if(dataset == '' || school == '' || year == '')
        {
        // return error code
        outputDiv.textContent = 'Please enter a Data Set Number, School Code AND Year.';
        }
         //if the dataset number, school code, and year all valid
        else
      {
         //call assignment2 function and store the correct and incorrect values in the newData
            newData = assignment2(); 


        //print valid or invalid by each data input
            //if the first input is correct else if the first input is incorrect
                document.getElementById('iQResult').textContent = newData[0] ? 'Valid' : 'Invalid';
            //if the second input is correct else if the second input is incorrect
                document.getElementById('ninthResult').textContent = newData[1] ? 'Valid' : 'Invalid';
            //if the third input is correct else if the third input is incorrect
                document.getElementById('medianResult').textContent = newData[2] ? 'Valid' : 'Invalid';
            //if the fourth input is correct else if the fourth input is incorrect
                document.getElementById('regresAResult').textContent = newData[3] ? 'Valid' : 'Invalid';
            //if the fifth input is correct else if the fifth input is incorrect
                document.getElementById('regresBResult').textContent = newData[4] ? 'Valid' : 'Invalid';


        //if all inputs are correct print validation code
        if(newData[0] && newData[1] && newData[2] && newData[3] && newData[4])
        {
            //call validation code to return the correct code for the dataset,
            // school, and year for assignment 2
            outputDiv.textContent = 'Validation Code:'+ validCode(datasetIP.value * schoolIP.value * yearIP.value* 2); 
        }
      }
        // Optionally clear the input field after submission
        //inputField.value = '';
    
}

//the algorithm to read in the input values, preform the operations 
//and return correct and incorrect values and 
//possibly the validation code for assignment 2
function assignment3Alg()
{
    // Retrieve input value
    dataSet = parseInt(document.getElementById('dataset').value); 
    seedValue = parseInt(document.getElementById('school').value) * parseInt(document.getElementById('year').value);
    userMean = parseFloat(document.getElementById('mean').value); 
    userConf = parseFloat(document.getElementById('conf').value); 
    userincdec = parseFloat(document.getElementById('inc/dec').value);
    userSlope = parseFloat(document.getElementById('slope').value);
    userconfSlope = parseFloat(document.getElementById('confSlope').value);

        //if dataset number, school code, or year is blank return error
        if(dataset == '' || school == '' || year == '')
        {
        // return error code
        outputDiv.textContent = 'Please enter a Data Set Number, School Code AND Year.';
        }
         //if the dataset number, school code, and year all valid
        else
  {
    //call assignment3 function and store the correct and incorrect values in the newData
            newData = assignment3(); 


        //print valid or invalid by each data input
            //if the first input is correct else if the first input is incorrect
                document.getElementById('meanResult').textContent = newData[0] ? 'Valid' : 'Invalid';
            //if the second input is correct else if the second input is incorrect
                document.getElementById('confResult').textContent = newData[1] ? 'Valid' : 'Invalid';
            //if the third input is correct else if the third input is incorrect
                document.getElementById('inc/decResult').textContent = newData[2] ? 'Valid' : 'Invalid';
            //if the fourth input is correct else if the fourth input is incorrect
                document.getElementById('slopeResult').textContent = newData[3] ? 'Valid' : 'Invalid';
            //if the fifth input is correct else if the fifth input is incorrect
                document.getElementById('confSlopeResult').textContent = newData[4] ? 'Valid' : 'Invalid';

        //if all inputs are correct print validation code
        if(newData[0] && newData[1] && newData[2] && newData[3] && newData[4])
        {
            //call validation code to return the correct code for the dataset,
            // school, and year for assignment 3
            outputDiv.textContent = 'Validation Code:' + validCode(datasetIP.value * schoolIP.value * yearIP.value* 3);
        }
  }
   //clear
   //inputField.value = '';
}

//the algorithm to preform the necessary operations on 
//the instructor for the By Assignment Request and returns a string
function byAssignment(request, assignment, schoolCode, year)
{
    let myRequest=parseInt(request);
    console.log(myRequest - 4);

    //create a string for the return
    let table ="";
    // if requesting a just the validation codes
    if(request == 1)
    { 
        // if the assignment is assignment 1, 2 or 3
        if (assignment < 4)
        {
            //for datasets 1 through 25 add validation code to the return string
            for (let i = 1; i <= 25; i++)
            {
                //add the dataset number and validation code for the assignment 
                //to the string calling validCode and add a new line
                table = table + "Dataset: " + i + " Validation Code: " 
                + validCode(schoolCode*year*i*assignment) + "\n";
            }
        }
        //if the assignment has not yet been coded return error message
        else  
            table = "Assignment coded soon";
    }
    //if requesting just the correct answers
    else if (request == 2)
    {
        //if it is the first assignment they are requesting 
        if (assignment == 1)
        {
            //for datasets 1 through 25 add the answer to the return string
            for (let i = 1; i <= 25; i++)
                {
                    //add the dataset and answers to assignment 1 calling 
                    //assignment1answers function and then adding a new line
                    table = table + "Dataset: " + i + " Answers: " + 
                    assignment1answers(i,schoolCode*year*i) + "\n"; 
                }
        }
        //if it is the second assignment they are requesting
        else if (assignment == 2)
        {
            for (let i = 1; i <= 25; i++)
                {
                    //add the dataset and answers to assignment 2 calling 
                    //assignment3answers function and then adding a new line
                    table = table + "Dataset: " + i + " Answers: " + 
                    assignment2answers(i,schoolCode*year*i) + "\n"; 
                }
        }
        //if it is the third assignemtn they are requesting
        else if (assignment == 3)
        {
            for (let i = 1; i <=25; i++)
                {
                    //add the dataset and answers to assignment 3 calling 
                    //assignment3answers function and then adding a new line
                    table = table + "Dataset: " + i + " Answers: " + 
                    assignment3answers(i,schoolCode*year*i) + "\n"; 
                }
        }
        //if the assignment is greater than 3 and has not yet been coded, return string is error code
        else
            table = "assignment coded soon"
    }
    // if requesting the validation code and answers 
    else 
    {
        //if for assignment 1
        if (assignment == 1)
        {
            //for dataset 1 through 25 return the dataset, answers, 
            //and validation code calling assignment1answers and 
            //validCode and adding a new line
            for (let i = 1; i <= 25; i++)
                {
                    table = table + "Dataset: " + i + " Answers: " + 
                    assignment1answers(i,schoolCode*year*i) + " Validation Code: " + 
                    validCode(schoolCode*year*i*assignment) + "\n"; 
                }
        }
        // if for assignment 2
        else if (assignment == 2)
        {
            //for dataset 1 through 25 return the dataset, answers, 
            //and validation code calling assignment1answers and 
            //validCode and adding a new line
            for (let i = 1; i <= 25; i++)
                {
                    table = table + "Dataset: " + i + " Answers: " + 
                    assignment2answers(i,schoolCode*year*i) + " Validation Code: " + 
                    validCode(schoolCode*year*i*assignment) + "\n" ;
                }
        }
        // if for assignment 3
        else if (assignment == 3)
        {
            //for dataset 1 through 25 return the dataset, answers, 
            //and validation code calling assignment1answers and 
            //validCode and adding a new line
            for (let i = 1; i <= 25; i++)
                {
                    table = table + "Dataset: " + i + " Answers: " + 
                    assignment3answers(i,schoolCode*year*i) + " Validation Code: " + 
                    validCode(schoolCode*year*i*assignment) + "\n" 
                }
        }
        //if for an assignment not yet coded return message
        else
            table = "assignment coded soon"; 
    }

//return our string
return table
}

//the algorithm to perform the necessary operations to return
//the requested values for a specific combination of dataset and assignment
function bySpecificAlg()
{

        
        //retrieve input
        dataSet = parseInt(document.getElementById('dataset').value); 
        assignment = parseFloat(document.getElementById('assignment').value); 
        school = parseFloat(document.getElementById('school').value); 
        year = parseFloat(document.getElementById('year').value);
        passkey = parseFloat(document.getElementById('pass').value);
       const search = document.getElementById('search');

        //if dataset value, assignment number, school code, year, or search request is blank or if passkey is incorrect return error message
        if(dataset == '' || assignment == '' || school == '' || year == '' || search == '' || passkey != 9728061087)
        {
            outputDiv.textContent =  "Please enter a valid Data Set Number, Year, School Code, return request and the passkey."; 
        }
        //if passkey is correct and inputs for dataset, assignment number, school code, year, and search request are valid
        else
        {
            seedValue = school * year;
            //if search request is for validation code
            if (search.value === 'validCode')
            {

                
                //if requesting assignment 1
                if(assignment == 1)
                {
                    //retrieve validation code using validCode
                    assign1Code = validCode(dataSet*seedValue); 

                    //display the validation code
                    outputDiv.textContent =  "The validation codes for assignment 1 for dataset "+ dataSet+
                                        " is "+ assign1Code; 
                }
                //if requesting assignment 2
                else if (assignment == 2)
                {
                    //retrieve validation code using validCode
                    assign2Code = validCode(dataSet*seedValue*2);

                    //display the validation code
                    outputDiv.textContent =  "The validation codes for assignment 2 for dataset"+ dataSet+
                                    " is "+ assign2Code; 
                }   
                //if requesting assignment 3        
                else if (assignment == 3)
                {
                    //retrieve validation code using validCode
                    assign3Code = validCode(dataSet*seedValue*3); 

                    //display the validation code
                    outputDiv.textContent =  "The validation codes for assignment 3 for dataset"+ dataSet+ 
                                    " is "+ assign3Code; 
                }
                //if the assignment is not yet coded
                else
                {

                    outputDiv.textContent =  "This assignment will be coded soon";
                }
            }
            //if search request is for correct answers
            else if (search.value === 'correct')
            {
                // if requesting assignment 1
                if(assignment == 1)
                {
                    //call assignment1answers function and display answers
                    outputDiv.textContent =  "The answers for assignment 1 for dataset "+ dataSet+ " is "+
                                    assignment1answers(dataSet, seedValue*dataSet); 
                }
                // if requesting assignment 2
                else if (assignment == 2)
                {
                    //call assignment2answers function and display answers
                    outputDiv.textContent =  "The answers code for assignment 2 for dataset "+ dataSet+ " is "+
                                    assignment2answers(dataSet, seedValue*dataSet); 
                }   
                // if requesting assignment 3        
                else if (assignmentIP.value == 3)
                {
                    //call assignment3answers function and display answers
                    outputDiv.textContent =  "The answers code for assignment 3 for dataset "+ dataSet+ " is "+
                                    assignment3answers(dataSet, seedValue*dataSet); 
                }
                // if requesting an assignment that has not yet been coded return error message
                else
                {
                    outputDiv.textContent =  "This assignment will be coded soon"; 
                }
            }
            //if requesting validation codes and answers
            else
            {
                //if requesting for assignment 1
                if(assignment ==1)
                {
                //retrieve validation code using validCode
                assign1Code = validCode(dataSet*seedValue); 

                //call assignment1answers function and display answers and validation code
                outputDiv.textContent =  "The validation code and answers for assignment 1 for dataset "+ dataSet+ 
                                    " are the following respectively: "+ assignment1answers(dataSet, seedValue*dataSet)+ ", "+ assign1Code; 
                }
                else if (assignmentIP.value == 2)
                {
                //retrieve validation code using validCode
                assign2Code = validCode(dataSet*seedValue*2) 

                //call assignment2answers function and display answers and validation code
                outputDiv.textContent =  "The validation code and answers for assignment 2 for dataset "+ dataSet+ 
                                    " are the following respectively: "+ assignment2answers(dataSet, seedValue*dataSet)+ ", "+ assign2Code; 
                }           
                else if (assignmentIP.value == 3)
                {
                //retrieve validation code using validCode
                assign3Code = validCode(dataSet*seedValue*3); 

                //call assignment3answers function and display answers and validation code
                outputDiv.textContent =  "The validation code and answers for assignment 3 for dataset "+ dataSet+ 
                                    " are the following respectively: "+ assignment3answers(dataSet, seedValue*dataSet)+ ", "+ assign3Code; 
                }
                //if assignment has not yet been coded display error message
                else
                {
                    outputDiv.textContent =  "This assignment will be coded soon"; 
                }                     
            }

        }
    //clear inputs
    //inputField.value = '';
}

//the algorithm to perform the necessary operations to return
//the requested values for a specific dataset
function byDataSetAlg()
{

    //retrieve input
    const dataSet = parseInt(document.getElementById('dataset').value); 
    //const assignment = parseFloat(document.getElementById('assignment').value); 
    const school = parseFloat(document.getElementById('school').value); 
    const year = parseFloat(document.getElementById('year').value);
    const passkey = parseFloat(document.getElementById('pass').value);
    const search = document.getElementById('search');

    //if dataset value, school code, year, or search request is blank or if passkey is incorrect return error message
    if(dataset == '' || school == '' || year == '' || search == '' || passkey != 9728061087)
    {
        outputDiv.textContent =  "Please enter a valid Data Set Number, Year, School Code, return request and the passkey."; 
    }
    //if passkey is correct and inputs for dataset, school code, year, and search request are valid
    else
    {
        let seedValue = school*year*dataSet;
        //if search request is for validation code
        if (search.value === 'validCode')
        {

            //call validCode to retrieve validation codes for assignments 1, 2 and 3
            let assign1Code = validCode(seedValue); 
            let assign2Code = validCode(seedValue*2); 
            let assign3Code = validCode(seedValue*3); 
            console.log("Testing:", assign1Code);
            console.log( "seedvalue is:", seedValue);
            //display codes
            outputDiv.textContent = "The validation codes for assignments 1, 2, and 3 for dataset "+ dataSet+
                              " are "+ assign1Code+ ", "+ assign2Code+ ",  and "+ assign3Code+ " respectively.";   
        }
        //if search request if for correct answers
        else if (search.value === 'correct')
        {
            //call assignment1answers, assignment2answers, and assignment3answers and display all answers 
            outputDiv.textContent =  "The correct answers for assignments 1, 2, and 3 for dataset "+ dataSet +
                " are the following respectively to assignment and input:"+ "\n"+
                assignment1answers(dataSet, seedValue)+ "\n"+ assignment2answers(dataSet, seedValue)+ "\n"+
                assignment3answers(dataSet, seedValue)+ "\n"; 
        }
        //if search request is for correct answers and validation codes
        else
        {
            //call validCode to retrieve validation codes for assignments 1, 2 and 3
            let assign1Code = validCode(seedValue); 
            let assign2Code = validCode(seedValue*2); 
            let assign3Code = validCode(seedValue*3); 

            //call assignment1answers, assignment2answers, and assignment3answers 
            //and display all answers and validation codes
            outputDiv.textContent =  "The validation codes for assignments 1, 2, and 3 for dataset " + dataSet + 
                " are " + assign1Code + ", " + assign2Code + ",  and "+ assign3Code+ " respectively."+ "\n"+
                "\n"+ "The correct answers for assignments 1, 2, and 3 "+ dataSet+
                " are the following respectively to assignment and input:"+ "\n"+
                assignment1answers(dataSet, seedValue)+ "\n"+ assignment2answers(dataSet, seedValue)+
                "\n"+ assignment3answers(dataSet, seedValue)+ "\n" ;
                                
      }

    }
    //clear inputs
    //inputField.value = '';
}

//the algorithm to take the byAssignment function 
//and computes the request on the instructor page for a specific assignment
function byAssignmentAlg()
{
    //retrieve inputs
    assignment = parseFloat(document.getElementById('assignment').value); 
    school = parseFloat(document.getElementById('school').value); 
    year = parseFloat(document.getElementById('year').value);
    passkey = parseFloat(document.getElementById('pass').value);
    const search = document.getElementById('search');
          
    //if assignment number, school code, year, or search request is blank or if passkey is incorrect return error message
    if(assignment == ''|| school == '' || year == '' || search == '' || passkey != 9728061087)
    {
        outputDiv.textContent =  "Please enter a valid Data Set Number, Year, School Code, return request and the passkey."; 
    }
    //if passkey is correct and inputs for assignment number, school code, year, and search request are valid
    else
    {
        console.log(search.value);
        //if search request is for validation code
        if (search.value === 'validCode')
        {
            //call byAssignment and display results
            outputDiv.textContent =  byAssignment(1, assignment, school, year);
        }          
        //if search request is for answers 
        else if (search.value === 'correct')
        {
            //call byAssignment and display results
            outputDiv.textContent =  byAssignment(2, assignment, school, year);
        }
        //if search request is for both validation codes and answers
        else
        {
            //call byAssignment and display results
            outputDiv.textContent =  byAssignment(3, assignment, school, year);
        }
    }
    //clear inputs
    //inputField.value = '';
}

function datasetAlg()
{

        // Retrieve input value
        const dataSet = parseInt(document.getElementById('dataset').value); 
        //assignment = parseFloat(document.getElementById('assignment').value); 
        const school = parseFloat(document.getElementById('school').value); 
        const year = parseFloat(document.getElementById('year').value);
        // passkey = parseFloat(document.getElementById('pass').value);
        //search = document.getElementById('search');
        const outputDiv = document.getElementById('output');

        //if any of the values are blank, display error code
        if(dataset == '' || school == '' || year == '')
        {
          outputDiv.textContent = 'Please enter a Data Set Number, School Code AND Year.';
        }
        else
        {
            let seedValue = school * year;
            let newData = getDataset(seedValue * dataSet, dataSet);

        //calc and store the dataset

        // Display the new data 
        outputDiv.textContent =  newData;

        // clear input
        inputField.value = '';
        }
}