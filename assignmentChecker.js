//this files store the main computation and comparison functions 
//needed for the assignemnet checker. it also houses the functions to generate datasets

//import PRNG from PRNG.js;
//function prototypes
/*
//function to take in a seedvalue and dataset and returns 
// all the datasets for the specific combination 
function getDataset(seedvalue, dataSet)

//  Take in the size, mean and standard deviation and create a normal
//  distribution that meets the specified mean, standard deviation and size
function 1varNormalDisGen(n, mu, sd)

// Takes in the size, mean, standard deviation and a flux for each.
// Then the generator will a one variable normal distribution with a 
// mean, standard deviation and size within the flux range for each.
function gen1VarSpecificSet(size, sizeFlux, mean, meanFlux, SD, SDFlux)

// Takes in the mean and standard deviation of 2 sets and the correlation
// between those sets. The function returns an ordered pair of points with
// those specified requirement
function 2varNormalDisGen(mu1, sd1, mu2, sd2, cor)

// Takes in the specified mean and standard deviation and 
// flux range for each, for 2 datasets. Takes in the size 
// and correlation desired as well as the correlation flux 
// range. Finally takes in the output arrays for X and Y.
// The function uses 2varNormalDisGen and generates 2 dataset 
// with the specifed requirments within the specified flux ranges
function gen2VarSpecificSet(size, mu1, mu1Flux, sd1, sd1Flux, mu2, 
    mu2Flux, sd2, sd2Flux, cor, corFlux, outputX, outputY)

//generates a set of score, Temp/KWH, Production line, Test 1 Test 2, and Mice data
function genAllDataSet()

// takes in an array and calculates and returns the mean
function calcMean(ray)

// takes in an array and calculates and returns the Standard Deviation
function calcSD(ray)

// Takes in 2 arrays and the length of the arrays.
// Then calculates and returns the correlation between the 2 arrays
function calcCorrelation(ray, arr, len)

// takes in an array and calculates the median of the array
function calcMedian(ray)

// takes in an array and a percentile and then 
// calculates the precentile for that array
function calcPrecentile(ray, percent)

//Takes in an X data set and a Y data set 
// then calculates the regression equation 
function calcRegression(xdata, ydata)

//takes in an array and calculates the 
// confidence interval of the mean at 95%
function confMean95(ray)

// Takes in an X data set and a Y data set and calculates 
// the confidence interval of the slope at the 95% confidence level
function confReg95(xdata, ydata)

//return the validation code
function validCode(input)

//function designed to read in values of assignment one, 
// compare to correct answers and return a boolean array
function assignment1()

//return the correct answer for assignment 1 with dataset number and seedvalue
function assignment1answers(dataSet, seedvalue)

//function designed to read in values of assignment two, 
// compare to correct answers and return a boolean array
function assignment2()

//function to return correct answers for 
// assignment 2 for a specific dataset and seedvalue
function assignment2answers(dataSet, seedvalue)

//function designed to read in values of assignment one, 
// compare to correct answers and return a boolean array
function assignment3()

//function to return correct answers for 
// assignment 3 for a specific dataset and seedvalue
function assignment3answers(dataSet, seedvalue)*/

//declare univseral variables
decP = 3; 
let seedValue; 
let scoreData = []; 
let kwhXData = []; 
let kwhYData = []; 
let prod1Data = []; 
let prod2Data = []; 
let prod3Data = []; 
let t1Data = []; 
let t2Data = []; 
let miceData = []; 
let dataSet = 0; 
let normalDist = []; 


//function to take in a seedvalue and dataset and returns all the 
// datasets for the specific combination 
function getDataset(seedvalue, dataSet)
{
    seedValue = seedvalue;
// clear storage
    scoreData = [];
    kwhXData = [];
    kwhYData = [];
    prod1Data = [];
    prod2Data = [];
    prod3Data = [];
    t1Data = [];
    t2Data = [];
    miceData = [];
   //create new instance of the random number generator
    prng = new PRNG(seedvalue);

    //Call the function to generate all the datasets
    genAllDataSet(); 
    
    //return string of formated datasets and labels
    let returnString = ("Data Set Number: \n" + dataSet +
        "\n\nScore Data: \n" + scoreData +
       "\n\nTemp KWH Data: \n" + kwhXData + "\n" + kwhYData +
       "\n\nProduction Line Data: \n" + prod1Data + "\n" + prod2Data + "\n" + prod3Data +
       "\n\nTest 1 Test 2 Data: \n" + t1Data + "\n" + t2Data +
       "\n\nMice Data: \n" + miceData[0] + " of 50 Vaccinated mice got the disease.\n" + miceData[1] + " of 50 Unvaccinated mice got the disease.") 

    return returnString;

    //return "something"; 
}

//  Take in the size, mean and standard deviation and create a normal
//  distribution that meets the specified mean, standard deviation and size
function OnevarNormalDisGen(n, mu, sd)
{
    let normalDist =[];
    // generates n data point
    for(i = 0; i<n ; i++)
    {
        datapoint = 0;
        // generates 12 random numbers calculates the average
        for(j = 0; j<12; j++)
        {
            datapoint = datapoint + prng.next()-1/2;
        }
        //multiple the point by the SD and add the mean
        normalDist.push(Math.round(datapoint * sd + mu)); 
    }

    //returns the distribution
    return normalDist; 

}

// Takes in the size, mean, standard deviation and a flux for each.
// Then the generator will a one variable normal distribution with a 
// mean, standard deviation and size within the flux range for each.
function gen1VarSpecificSet(size, sizeFlux, mean, meanFlux, SD, SDFlux)
{
    // generates the size, mean, and standard deviation with in the specifed range
    size = (seedValue * 7 % (2*sizeFlux)) - sizeFlux + size;
    mean = (seedValue * 7 % (2*meanFlux)) - meanFlux + mean;
    SD = (seedValue * 7 % (2*SDFlux)) - SDFlux + SD;
    
    // calls the normal distribution generator and returns a normal
    // distribution with the generated size, mean, and standard deviation
    return OnevarNormalDisGen(size, mean, SD);
}

// Takes in the mean and standard deviation of 2 sets and the correlation
// between those sets. The function returns an ordered pair of points with
// those specified requirement
function TwovarNormalDisGen(mu1, sd1, mu2, sd2, cor)
{
    xdatapoint = 0;
    ydatapoint = 0;

    // generates and takes the average or 12 random numbers
    // for both x and y values
    for(j= 0; j<12; j++)
    {
        xdatapoint = xdatapoint + prng.next()-1/2; 
        ydatapoint = ydatapoint + prng.next()-1/2;
    }

    // adjust the pair of point to the specified means, sd's and correlation
    ydatapoint = xdatapoint * cor + ydatapoint * (Math.sqrt(1 - cor * cor));
    xdatapoint = xdatapoint * sd1 + mu1;
    ydatapoint = ydatapoint * sd2 + mu2;

    // returns the pair of point
    return [xdatapoint, ydatapoint];

}

// Takes in the specified mean and standard deviation and 
// flux range for each, for 2 datasets. Takes in the size 
// and correlation desired as well as the correlation flux 
// range. Finally takes in the output arrays for X and Y.
// The function uses 2varNormalDisGen and generates 2 dataset 
// with the specifed requirments within the specified flux ranges
function gen2VarSpecificSet(size, mu1, mu1Flux, sd1, sd1Flux, mu2, 
    mu2Flux, sd2, sd2Flux, cor, corFlux, outputX, outputY)
{
    // generates the mean, and standard deviation with in the 
    // specifed range for both the x and y datasets. Generates 
    // the correlation with the correlation flux range
    mu1 = (seedValue * 7 % (2*mu1Flux)) - mu1Flux + mu1;
    mu2 = (seedValue * 7 % (2*mu2Flux)) - mu2Flux + mu2;
    sd1 = (seedValue * 7 % (2*sd1Flux)) - sd1Flux + sd1;
    sd2 = (seedValue * 7 % (2*sd2Flux)) - sd2Flux + sd2;
    cor = ((seedValue * 7 % (2*corFlux*100)) - corFlux*100)/100 + cor;

    // for index from 0 to the size generates the pair of datapoints 
    // with the generated means, standard deviations, and correlation
    for(i=0; i<size; i++)
    {
        // calls 2varNormalDisGen and generates a pair of data points 
        // with the generated means, standard deviations, and correlation
        dataPairs = TwovarNormalDisGen(mu1, sd1, mu2, sd2, cor);
        outputX.push(Math.round(dataPairs[0]));
        outputY.push(Math.round(dataPairs[1]));
    }
}

//generates a set of score, Temp/KWH, Production line, Test 1 Test 2, and Mice data
function genAllDataSet()
{

    // calls gen1VarSpecificSet to generate score data
    scoreData = gen1VarSpecificSet(38, 3, 78, 2, 4, 0.5);
    // generates and stores the kwhXData and kwhYData using gen2VarSpecificSet
    gen2VarSpecificSet(20, 29, 2, 5.5, 1.5, 63, 3, 4, 2, .8, .15, kwhXData, kwhYData);
    // calls gen1VarSpecificSet to generate prod1Data
    prod1Data = gen1VarSpecificSet(6, 0, 63, 2, 5, 1);
    // calls gen1VarSpecificSet to generate prod2Data
    prod2Data = gen1VarSpecificSet(6, 0, 75, 2, 5, 1);
    // calls gen1VarSpecificSet to generate prod3Data
    prod3Data = gen1VarSpecificSet(6, 0, 69, 2, 5, 1);
    // calls gen1VarSpecificSet to generate t1Data
    t1Data = gen1VarSpecificSet(10, 0, 70, 1, 5, 1);
    // calls gen1VarSpecificSet to generate t2Data
    t2Data = gen1VarSpecificSet(10, 0, 68, 1, 5, 1);
    miceData = [7 + prng.nextInt(-3,3), 13 + prng.nextInt(-3,3)];
}

// takes in an array and calculates and returns the mean
function calcMean(ray){
    avg = 0 
    // for each value in the ray add to the avg value
    for(i = 0; i < ray.length; i++)
    {
        avg = avg + ray[i]; 
    }

    //returns the average
    return avg / ray.length;
}

// takes in an array and calculates and returns the Standard Deviation
function calcSD(ray){
    // calls calcMean to calculate the mean of the array
    let mean = calcMean(ray); 
    let SD = 0;
    
    //for each value in the array find the difference between 
    // the mean and the datapoint, square the value and adds to SD
    for(i = 0; i < ray.length; i++) 
    {
        SD = SD + (Math.pow((mean - ray[i]), 2)); 
    }
    // last steps in calculating the standard deviation
    SD = SD / (ray.length - 1); 
    return Math.sqrt(SD); 
}

// Takes in 2 arrays and the length of the arrays.
// Then calculates and returns the correlation between the 2 arrays
function calcCorrelation(ray, arr, len)
{
   //calc covariance
   let meanRay = calcMean(ray);
   let meanarr = calcMean(arr);
   let covar = 0;
   //at each index in our array calculate the individual 
   //covariance and add to the total covariance
   for(i = 0; i < len; i++)
   {
       covar = covar + ((ray[i] - meanRay) * (arr[i] - meanarr)); 
   }
   
   // divid our sum by one less than the number of datapoints
   covar = covar / (ray.length - 1);
   
   //calculate the SD of ray
   let raySD = calcSD(ray); 
   //calc the SD of arr
   let arrSD = calcSD(arr); 

   //calc correlation
   return covar/(raySD * arrSD); 
}

// takes in an array and calculates the median of the array
function calcMedian(ray)
{
    let copy = ray.slice();
    let sorted = [];
    let x0 = copy[0];
    let index = 0;
    let current = 0;
    let sort = false;

    //repeat until the array is sorted
    while (sort == false)
        {
            //take the next index not sorted 
            x0 = copy[0];
    
            //compare each value left in the copy array
            for(let i = 0; i < copy.length; i++)
            {
                // the copy array is smaller than our comparison
                // make the comparison the value at that index
                if (copy[i]<x0)
                {
                    x0 = copy[i];
                    index = i;
                }
            }
            //comparison value is now in our sorted list
            sorted[current] = x0;
            //move our point up one
            current++;
            //move all of our values past our index over one
            for(let j = index; j < copy.length-1; j++)
            {
                copy[j]=copy[j+1];
            }
            copy.pop();
            //check to see if there is anything left to compare
            if (copy.length<1)
                sort = true;
        }
    //if copy length is even, calc the average of the 2 points
    if(sorted.length % 2 == 0)
        return sorted[sorted.length/2]+sorted[(sorted.length-2)/2];
    //if copy length is odd, find the middle
    else
        return sorted[(sorted.length-1)/2];
}

// takes in an array and a percentile and then 
// calculates the precentile for that array
function calcPrecentile(ray, percent)
{/*
    //create variables
    let copy = ray.slice();
    let sorted = [];
    let x0 = copy[0];
    let index = 0;
    let current = 0;
    let sort = false;
    
    
    //while still unsorted 
    while (sort == false)
    {
        //take the next index not sorted 
        x0 = copy[0];

        //compare each value left in the copy array
        for(let i = 0; i < copy.length; i++)
        {
            // the copy array is smaller than our comparison
            // make the comparison the value at that index
            if (copy[i]<x0)
            {
                x0 = copy[i];
                index = i;
            }
        }
        //comparison value is now in our sorted list
        sorted[current] = x0;
        //move our point up one
        current++;
        //move all of our values past our index over one
        for(let j = index; j < copy.length-1; j++)
        {
            copy[j]=copy[j+1];
        }
        copy.pop();
        //check to see if there is anything left to compare
        if (copy.length<1)
            sort = true;
    }
    let pos = (sorted.length + 1) * percent;

    if (Number.isInteger(pos)) {
        return sorted[pos - 1]; // no interpolation needed
    }

    if (pos < 1) return sorted[0];
    if (pos > sorted.length) return sorted[sorted.length - 1];

    let lower = Math.floor(pos) - 1;
    let upper = lower + 1;
    let frac = pos - Math.floor(pos);

    return sorted[lower] + frac * (sorted[upper] - sorted[lower]);
    //calc position based on precentage
    //let pos =(sorted.length+1) * percent;
    //calc and return the precentile
    //return (sorted[Math.floor(pos)-1] + (pos - Math.floor(pos))*sorted[Math.floor(pos)]);
    //return (sorted[Math.floor(pos)-1] + (pos - Math.floor(pos))*(sorted[Math.floor(pos)]-sorted[Math.floor(pos)-1]));*/
    if (percent <= 0 || percent >= 1 || ray.length === 0) {
        throw new Error("Percent must be between 0 and 1 (exclusive), and array must be non-empty.");
    }

    let copy = ray.slice();
    let sorted = [];

    while (copy.length > 0) {
        let x0 = copy[0];
        let index = 0;
        for (let i = 0; i < copy.length; i++) {
            if (copy[i] < x0) {
                x0 = copy[i];
                index = i;
            }
        }
        sorted.push(x0);
        for (let j = index; j < copy.length - 1; j++) {
            copy[j] = copy[j + 1];
        }
        copy.pop();
    }

    let pos = (sorted.length + 1) * percent;

    if (Number.isInteger(pos)) {
        return sorted[pos - 1]; // no interpolation needed
    }

    if (pos < 1) return sorted[0];
    if (pos > sorted.length) return sorted[sorted.length - 1];

    let lower = Math.floor(pos) - 1;
    let upper = lower + 1;
    let frac = pos - Math.floor(pos);

    return sorted[lower] + frac * (sorted[upper] - sorted[lower]);
}

//Takes in an X data set and a Y data set 
// then calculates the regression equation 
function calcRegression(xdata, ydata)
{
    //call calcMean to calculate means for x and y data
    meanX = calcMean(xdata);
    meanY = calcMean(ydata);
    covarXY = 0;
    covarXX = 0;
    // at each data pair calc the covarXY and covarXX and add to corresponding sums
    for(i = 0; i < xdata.length; i++)
    {
        covarXY = covarXY + ((xdata[i] - meanX) * (ydata[i] - meanY));
        covarXX = covarXX + ((xdata[i] - meanX) * (xdata[i] - meanX));
    }
    //slope, intercept
    return[(covarXY/covarXX), meanY - meanX * (covarXY/covarXX)];
}

//takes in an array and calculates the 
// confidence interval of the mean at 95%
function confMean95(ray)
{
   let tvalue=0;

    //find the correct t value basesd on the length of the array
    switch(ray.length){
       //array is 30
        case 30:
            tvalue = 2.045229642;
            break;
        //array is 31
        case 31:
            tvalue = 2.042272456;
            break;
        //array is 32
        case 32:
            tvalue = 2.039513446;
            break;
        //array is 33
        case 33:
            tvalue = 2.036933343;
            break;
        //array is 34
        case 34:
            tvalue = 2.034515297;
            break;
        //array is 35
        case 35:
            tvalue = 2.032244509;
            break;
        //array is 36
        case 36:
            tvalue = 2.030107928;
            break;
        //array is 37
        case 37:
            tvalue = 2.028094001;
            break;
        //array is 38
        case 38:
            tvalue = 2.026192463;
            break;
        //array is 39
        case 39:
            tvalue = 2.024394164;
            break;
        //array is 40
        case 40:
            tvalue = 2.02269092;
            break;
    }

    //use the tvalue and multiple by the 
    //SD and divid by square root of the length of the array
    return tvalue * calcSD(ray) / Math.sqrt(ray.length);
}

// Takes in an X data set and a Y data set and calculates 
// the confidence interval of the slope at the 95% confidence level
function confReg95(xdata, ydata)
{
    let slopeErr = 0;
    let meanX = calcMean(xdata);
    let predY = [];
    let reg = calcRegression(xdata, ydata);

    //calculate the predicted value for each X input
    for(i = 0; i < xdata.length; i++)
    {
        predY[i] = reg[0] * xdata[i] + reg[1];
    }
    let sumx = 0;
    let sumy = 0;
    //calc the sum x and the sum y for each data point
    for(i = 0; i < xdata.length; i++)
    {
        sumx = sumx + (xdata[i] - meanX) * (xdata[i] - meanX);
        sumy = sumy + (ydata[i] - predY[i]) * (ydata[i] - predY[i]);
    }
    //calcuate the slope error
    slopeErr = sumy / (18 * sumx);
    slopeErr = Math.sqrt(slopeErr); 

    //Multiple times t-value
    slopeErr = slopeErr*2.10092204;
    return slopeErr;
}

//return the validation code
function validCode(input)
{
    validationCode = new PRNG(input);  

    return validationCode.nextInt(1000,9999);
}

//function designed to read in values of assignment one, 
// compare to correct answers and return a boolean array
function assignment1()
{
    //intialize arrays
    let returnray = [];
    let correctRay = [false, false, false]; 
    //retrieve inputs
    const dataSet = parseInt(document.getElementById('dataset').value); 
    const seedValue = parseInt(document.getElementById('school').value) * parseInt(document.getElementById('year').value);
    const userMean = parseFloat(document.getElementById('mean').value); 
    const userSD = parseFloat(document.getElementById('sd').value); 
    const userCorr = parseFloat(document.getElementById('corr').value);

    //get the data with getDataSet
    getDataset((seedValue*dataSet), dataSet); 

    //calc the correct answers
    //calc mean with calcMean
    returnray[0] = Math.round((calcMean(scoreData))* 1e6)/ 1e6; 
    //calc SD with calcSD
    returnray[1] = Math.round((calcSD(scoreData))* 1e6)/ 1e6;
    //console.log("Mean in returnray[1]:", returnray[1]);
    //calc the correlation coef
    returnray[2] = Math.round(calcCorrelation(kwhXData, kwhYData, kwhXData.length)*1e6)/1e6;
    
    //if user mean is correct
    if(userMean == returnray[0])
        correctRay[0] = true; 
    //if user SD is correct
    if(userSD == returnray[1])
        correctRay[1] = true;
    //if user correlation coef is correct
    if(userCorr == returnray[2])
        correctRay[2] = true; 

    //return boolean of correct or not
    return correctRay; 
}

//return the correct answer for assignment 1 with dataset number and seedvalue
function assignment1answers(dataSet, seedvalue){
    let returnray = []; 

    //get the data for the dataset number and seedvalue
    getDataset((seedvalue), dataSet); 
    
    //calc the correct answers
    //calc mean with calcMean
    returnray[0] = Math.round(calcMean(scoreData)*1e6)/1e6; 
    //calc SD with calcSD
    returnray[1] = Math.round(calcSD(scoreData)*1e6)/1e6; 
    //calc the correlation coef
    returnray[2] = Math.round(calcCorrelation(kwhXData, kwhYData, kwhXData.length)*1e6)/1e6; 

    //return the correct array
    return returnray;
}
//function designed to read in values of assignment two, 
// compare to correct answers and return a boolean array
function assignment2()
{
    //intialize arrays
    let returnray = [] 
    let correctRay = [false, false, false, false, false] 
   
    //retrieve inputs
    const dataSet = parseInt(document.getElementById('dataset').value); 
    const seedValue = parseInt(document.getElementById('school').value) * parseInt(document.getElementById('year').value);
    const userIQ = parseFloat(document.getElementById('iQ').value); 
    const user9th = parseFloat(document.getElementById('ninth').value); 
    const userMedian = parseFloat(document.getElementById('median').value);
    const userregA = parseFloat(document.getElementById('regresA').value);
    const userregB = parseFloat(document.getElementById('regresB').value);

    //get the data for the specific dataset and seed values
    getDataset((seedValue*dataSet), dataSet);
    
    //calc the correct array
    //calc the IQR
    returnray[0] = calcPrecentile(scoreData,0.75) - calcPrecentile(scoreData,0.25);
    //calc the ninth decile
    returnray[1] = calcPrecentile(scoreData, 0.9);
    //calc median
    returnray[2] = calcMedian(scoreData);
    //calc Regression equation and store slope and intercept
    returnray[3] = Math.round(calcRegression(kwhXData, kwhYData)[0]*1e6)/1e6;
    returnray[4] = Math.round(calcRegression(kwhXData, kwhYData)[1]*1e6)/1e6;
    
    //if user IQR is correct
    if(userIQ == returnray[0])
        correctRay[0] = true;
    //if user ninth decile is correct
    if(user9th == returnray[1])
        correctRay[1] = true;
    console.log("Mean in returnray[1]:", returnray[1]);
    //if user median is correct
    if(userMedian == returnray[2])
        correctRay[2] = true;
    //if user regression slope is correct
    if(userregA == returnray[3])
        correctRay[3] = true;
    //if user regression intercept is correct
    if(userregB == returnray[4])
        correctRay[4] = true;

    //return boolean of correct or not
    return correctRay; 
}

//function to return correct answers for 
// assignment 2 for a specific dataset and seedvalue
function assignment2answers(dataSet, seedvalue)
{
    //initalize array
    let returnray = []; 
    //retrieve the datasets for the specific seedvalue 
    getDataset((seedvalue), dataSet);
    
    //calc the correct array
    //calc the IQR
    returnray[0] = calcPrecentile(scoreData,0.75) - calcPrecentile(scoreData,0.25);
    //calc the ninth decile
    returnray[1] = calcPrecentile(scoreData, 0.9);
    //calc median
    returnray[2] = calcMedian(scoreData);
    //calc Regression equation and store slope and intercept
    returnray[3] = Math.round(calcRegression(kwhXData, kwhYData)[0]*1e6)/1e6;
    returnray[4] = Math.round(calcRegression(kwhXData, kwhYData)[1]*1e6)/1e6;

    //return correct answers
    return returnray; 
}

//function designed to read in values of assignment one, 
// compare to correct answers and return a boolean array
function assignment3()
{
    //intialize arrays
    let returnray = []; 
    let correctRay = [false, false, false, false]; 

    //retrieve inputs
    const dataSet = parseInt(document.getElementById('dataset').value); 
    const seedValue = parseInt(document.getElementById('school').value) * parseInt(document.getElementById('year').value);
    const userMean = parseFloat(document.getElementById('mean').value); 
    const userConf = parseFloat(document.getElementById('conf').value); 
    const userincdec = parseFloat(document.getElementById('inc/dec').value);
    const userSlope = parseFloat(document.getElementById('slope').value);
    const userconfSlope = parseFloat(document.getElementById('confSlope').value);

    //get the datasets
    getDataset((seedValue*dataSet), dataSet);

    //calc the scoredata mean with calcMean
    returnray[0] = Math.round(calcMean(scoreData)*1e6)/1e6;
    //calc the confidence interval with confMean95
    returnray[1] = Math.round(confMean95(scoreData)*1e6)/1e6; 
    //store the correct increase of decrease of slope
    returnray[2] = 1;
    //calc the slope of the regression equation with 
    // calcRegression and store as positive number
    returnray[3] = Math.round(Math.abs(calcRegression(kwhXData, kwhYData)[0])*1e6)/1e6; 
    //calc the confidence interval of the slope with confReg95
    returnray[4] = Math.round(confReg95(kwhXData, kwhYData)*1e6)/1e6; 
    
    //if user mean is correct
    if(userMean == returnray[0])
        correctRay[0] = true; 
    //if the user confidence interval is correct
    if(userConf == returnray[1])
        correctRay[1] = true; 
    //if the user increase/decrease relationship is correct
    if(userincdec == returnray[2])
        correctRay[2] = true; 
    //if the user slope is correct
    if(userSlope == returnray[3])
        correctRay[3] = true; 
    //if the user slope confidence interval is correct
    if(userconfSlope == returnray[4])
        correctRay[4] = true; 
    console.log("value in returnray[2]:", returnray[4]);

     //return boolean of correct or not
    return correctRay; 
}
//function to return correct answers for 
// assignment 3 for a specific dataset and seedvalue
function assignment3answers(dataSet, seedvalue)
{
    //intialize array
    let returnray = [];
   
    //get the data sets with getDataSet
    getDataset((seedvalue), dataSet);

    //calc the scoredata mean with calcMean
    returnray[0] = Math.round(calcMean(scoreData)*1e6)/1e6; 
    //calc the confidence interval with confMean95
    returnray[1] = Math.round(confMean95(scoreData)*1e6)/1e6; 
    //store the correct increase of decrease of slope
    returnray[2] = 1;
    //calc the slope of the regression equation with 
    // calcRegression and store as positive number
    returnray[3] = Math.round(Math.abs(calcRegression(kwhXData, kwhYData)[0])*1e6)/1e6; 
    //calc the confidence interval of the slope with confReg95
    returnray[4] = Math.round(confReg95(kwhXData, kwhYData)*1e6)/1e6; 

    //return correct answers
    return returnray; 
}

