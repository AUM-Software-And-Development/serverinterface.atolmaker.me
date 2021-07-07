// Document elements
const ClearButton = document.getElementById("serverinterfaceclearbutton")

const SendButton = document.getElementById("serverinterfacesendbutton")

const RefillButton = document.getElementById("serverinterfacerefillbutton")

const HelloWorldJavaScriptString = "console.log('Hello, world!')";

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

/* Main */
AceLibraries.init()

SendButton.addEventListener
('click',

    () =>
    {
    
        var InputBoxContents = ServerInterface.getValue()
    
        try
        {

            new Function(InputBoxContents)()

        } catch(err)
            {

                console.log(err)

            }

    }

)

ClearButton.addEventListener
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