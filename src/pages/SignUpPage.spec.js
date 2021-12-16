
import SignUpPage from './SignUpPage';
import '@testing-library/jest-dom/extend-expect'; 
import {render,screen} from '@testing-library/react';





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
  });
}); 




