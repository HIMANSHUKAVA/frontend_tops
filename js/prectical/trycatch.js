 try {
            let num = 10;
            let divisor = 0;

            if (divisor === 0) {
                throw new Error("Division by zero is not allowed!");
            }

            let result = num / divisor;
            console.log("Result:", result);
        } 
        catch (error) {
            console.error("Error:", error.message);
            
        }