// Document elements
const ClearCodeButton = document.getElementById("serverinterfaceclearcodebutton")

const SendButton = document.getElementById("serverinterfacesendbutton")

const RefillButton = document.getElementById("serverinterfacerefillbutton")

const ClearOutputButton = document.getElementById("serverinterfaceclearoutputbutton")

const HelloWorldJavaScriptString = 'console.log("Hello, world!")'

const FrontEndConsoleLogs = document.querySelector(".serverinterfaceoutputlogs")

// Ace editor instantiation
let ServerInterface = ace.edit("serverinterfaceinputbox")

ServerInterface.setValue(HelloWorldJavaScriptString)

let AceLibraries = 
{

    init()
    {

        ServerInterface.setTheme("ace/theme/clouds")

        ServerInterface.session.setMode("ace/mode/javascript")

        ServerInterface.setOptions({

            fontSize: "12pt",
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            
        })

    }

}

// Log allocations

let ConsoleBuffer = []
let ConsoleBufferIndex = 0

/* Main */
AceLibraries.init()

function Display()
{
    if (ConsoleBuffer[ConsoleBufferIndex] === undefined)
    {
        
        ConsoleBuffer.push('<span style="color:#369369">error</span>: Invalid code entered. Please type it like this: <span style="color:#303060;">console.log("Your message, or API key/Password")</span>"')
        var newText = ConsoleBuffer[ConsoleBufferIndex]

    }
    else
    {

        var newText = '<span style="color:#303060">success</span>: ' + ConsoleBuffer[ConsoleBufferIndex]

    }

    FrontEndConsoleLogs.innerHTML += newText + "</br>"
    ConsoleBufferIndex++
}

SendButton.addEventListener
('click',

    () =>
    {
    
        var InputBoxContents = ServerInterface.getValue()
    
        try
        {

            new Function(InputBoxContents)()
            Display()

        } catch(err)
            {

                console.log(err)

            }

    }

)

ClearCodeButton.addEventListener
('click',

    () =>
    {

        try
        {

            ServerInterface.setValue("");

        } catch(err)
            {

                console.log(err)

            }

    }

)

RefillButton.addEventListener
('click',

    () =>
    {

        try
        {

            ServerInterface.setValue(HelloWorldJavaScriptString);

        } catch(err)
            {

                console.log(err)

            }

    }

)

ClearOutputButton.addEventListener
('click',

    () =>
    {

        try
        {

            FrontEndConsoleLogs.innerHTML = ""

        } catch(err)
            {

                console.log(err)

            }

    }

)