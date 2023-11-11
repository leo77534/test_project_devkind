# test_project_devkind
This is an authtication system project. User can sign up, log in the account and update the username and password.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)

## Installation
Clone the repository
git clone https://github.com/leo77534/test_project_devkind.git

## Usage
Run the application:  
  
1. Open the terminal and run:  
cd authapp  
npm run dev  
2. Open your browser and go to http://localhost:3000  
![Alt text](https://github.com/leo77534/test_project_devkind/blob/main/screenshot/Screenshot%202023-11-12%20at%201.07.41%20am.png?raw=true)

## Features
- Sign up
    
  Click Sign Up to the resgister page.  
  ![Alt text](https://github.com/leo77534/test_project_devkind/blob/main/screenshot/Screenshot%202023-11-12%20at%201.37.10%20am.png?raw=true)  
  Fill in username/email/password and checkbox(user is at least 18 years old) and click Sign Up  
  ![Alt text](https://github.com/leo77534/test_project_devkind/blob/main/screenshot/Screenshot%202023-11-12%20at%201.30.48%20am.png?raw=true)
- Log in
    
  After signing up, the account'data was post to mongoDB.  
  User can fill in the email and password, click Login to log in.  
  ![Alt text](https://github.com/leo77534/test_project_devkind/blob/main/screenshot/Screenshot%202023-11-12%20at%201.43.16%20am.png?raw=true)  
  User can see the homepage after login.   
  ![Alt text](https://github.com/leo77534/test_project_devkind/blob/main/screenshot/Screenshot%202023-11-12%20at%201.48.19%20am.png?raw=true)
  
  
- Update profile and change password

  Click Profile Page button to the profile page
  ![Alt text](https://github.com/leo77534/test_project_devkind/blob/main/screenshot/Screenshot%202023-11-12%20at%201.53.13%20am.png?raw=true)
  User can change username by filling in new username.  
  User can change password by filling in password and comfirm password.  
  (User must fill in the same email as they log in)  
  Click update to put the new username and password to mongoDB.
  (User must fill in all blanks)   
  Click Home Page to back to home page and click Sign out to back to login page.  
  User can log in with the new password.  

- Validate input

  All data enter by user will be validated.
  ![Alt text](https://github.com/leo77534/test_project_devkind/blob/main/screenshot/Screenshot%202023-11-12%20at%202.06.17%20am.png?raw=true)  
  For example, the system will warn user if they enter wrong email and password in login page.
  ![Alt text](https://github.com/leo77534/test_project_devkind/blob/main/screenshot/Screenshot%202023-11-12%20at%202.10.16%20am.png?raw=true)  
  Here is another example, the system will warn user if they keep the blank empty or they enter different password and comfirm password.

## Contact
For any inquiries, please contact zhaofaguo@gmail.com.
