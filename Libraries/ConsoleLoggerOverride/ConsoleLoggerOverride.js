/* override for base console class (not using lowercase console name, but still the same methodology)*/
let console =
(
    
    function(DeprecatedConsole)
    {

        return {

            logOneArgument: function (TextOut)
            {

                ConsoleBuffer.push(TextOut)

            },

            logManyArguments: function ()
            {},

            log: function (TextOut) // logs and returns the result from the deprecated console; the window.console
            {

                DeprecatedConsole.log(TextOut)
                let argsArray = Array.from(arguments) // stores arguments to the console
                // DeprecatedConsole.log(argsArray) displays the array in the designated browser console

                return argsArray.length === 1 ? this.logOneArgument(TextOut) : this.logManyArguments(argsArray)

                /* if the console log request contains multiple arguments, parse and separate, else return the one */

            }

        }

    }

) (window.console) // Uses window console