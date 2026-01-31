export const loginData = {
    // Valid login credentials
    validCredentials: {
        username: 'standard_user',
        password: 'secret_sauce',
        expectedUrl: 'https://www.saucedemo.com/inventory.html'
    },

        // Invalid credentials scenarios
        invalidUsername: {
            username: 'invalid_user',
            password: 'secret_sauce',
            expectedError: 'Epic sadface: Username and password do not match any user in this service',
        }
    };
