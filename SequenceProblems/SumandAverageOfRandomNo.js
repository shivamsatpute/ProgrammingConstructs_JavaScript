let sum=0;
    for (let i = 0; i < 5; i++)
        {
          let  randomCheck =Math.floor(Math.random() * 90 + 10);
            sum=sum+randomCheck;
            console.log(+ randomCheck);
        }
        console.log("sum of the no is : " + sum);
        let average = sum/5;
        console.log("Average of five two digt random numbers is " + average);