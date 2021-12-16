
import SignUpPage from './SignUpPage';
import '@testing-library/jest-dom/extend-expect'; 
import {render,screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import axios from 'axios';





// test("test-name",() => {
    
// })

describe("Sign Up Page", () => {
  describe("Layout", () => {
    it("has header", () => {
      render(<SignUpPage />);
      const header = screen.queryByRole("heading", { name: "Sign Up" });
      expect(header).toBeInTheDocument();
    });
    it("has username input",()=>{
       render(<SignUpPage/>);
       const input = screen.getByLabelText("UserName");
       expect(input).toBeInTheDocument();

    })
    it("has email input",()=>{
        render(<SignUpPage/>);
        const input = screen.getByLabelText("Email");
        expect(input).toBeInTheDocument();
 
     })
     it("has password input",()=>{
        render(<SignUpPage/>);
        const input = screen.getByLabelText("Password");
        expect(input).toBeInTheDocument();
 
     })
     it("has password input type : passwrd",()=>{
        render(<SignUpPage/>);
        const input = screen.getByLabelText("Password");
        expect(input.type).toBe('password');
 
     })
     it("has repeat password input",()=>{
        render(<SignUpPage/>);
        const input = screen.getByLabelText("Password Repeat");
        expect(input).toBeInTheDocument();
 
     })
     it("has repeat password input type : passwrd",()=>{
        render(<SignUpPage/>);
        const input = screen.getByLabelText("Password Repeat");
        expect(input.type).toBe('password');
 
     });
     it("has SignUp Button", () => {
        render(<SignUpPage />);
        const button = screen.queryByRole("button", { name: "Sign Up" });
        expect(button).toBeInTheDocument();
      });
      it("has SignUp Button disabled initially", () => {
        render(<SignUpPage />);
        const button = screen.queryByRole("button", { name: "Sign Up" });
        expect(button).toBeDisabled();
      });
  });

  describe("Interactions",() => {
      it("button enables when  pswd inputs populated",() => {
          render(<SignUpPage/>)
          const passwordInput = screen.getByLabelText('Password');
          const passwordRepInput = screen.getByLabelText('Password Repeat');
          userEvent.type(passwordInput,"P4assword");
          userEvent.type(passwordRepInput,"P4assword");
          const button = screen.queryByRole('button',{name:'Sign Up'});
          expect(button).toBeEnabled();

      });
      it("send username,email & password after clicking button",() => {
         render(<SignUpPage/>)
         const emailInput = screen.getByLabelText('Email');
         const userNameInput = screen.getByLabelText('UserName');
         const passwordInput = screen.getByLabelText('Password');
         const passwordRepInput = screen.getByLabelText('Password Repeat');
         userEvent.type(emailInput,"user1@mail.com");
         userEvent.type(userNameInput,"user1");
         userEvent.type(passwordInput,"P4assword");
         userEvent.type(passwordRepInput,"P4assword");
         const button = screen.queryByRole('button',{name:'Sign Up'});
         
       const mockFunction = jest.fn();
       axios.post = mockFunction;



         
         userEvent.click(button);
         const firstCallOfMockFunction = mockFunction.mock.calls[0];
         const body = firstCallOfMockFunction[1];
         expect(body).toEqual({
            username:'user1',
            email:'user1@mail.com',
            password:'P4assword'
         })         


     })


  })
}); 




