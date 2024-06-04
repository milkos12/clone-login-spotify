interface RequestBody {
    username: string;
    password: string;
}

interface ResponseBody {
    refresh: string;
    access: string;
}

async function api(data: RequestBody): Promise<ResponseBody> {
    const options: RequestInit = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Ensure `data` is not null
    };

    const response = await fetch('http://127.0.0.1:8000/v1/auth/tokends/', options);

    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseBody: ResponseBody = await response.json();
    return responseBody;
}

export async function login() {
    const usernameInput = document.getElementById('username') as HTMLInputElement | null;
    const passwordInput = document.getElementById('password') as HTMLInputElement | null;

    if (usernameInput && passwordInput) {
        const username: string = usernameInput.value;
        const password: string = passwordInput.value;

        const bodyRequest: RequestBody = {
            username: username,
            password: password
        }

        try {
            console.log(bodyRequest)
            const response: ResponseBody = await api(bodyRequest);
            return response;
        } catch (e) {
            console.log(`Error login fetch: ${e}`)
            putMessageError()
        }


    } else {
        throw "Error with inputs login username and password"
    }



}

function putMessageError() {
    
    // Get the element that displays error messages
    const messageInput = document.getElementById('message-error-inputs');
    console.log("-------------............-----------------"+messageInput)
    if(messageInput) {
        console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")
        // Remove the '-desactive' part of the class name and add '-active' to show the error message
        messageInput.className = messageInput.className.replace('-desactive', '-active');
    }
    
}