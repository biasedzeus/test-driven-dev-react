
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
       const {container} =  render(<SignUpPage/>);
       const input = container.querySelector("input");
       expect(input).toBeInTheDocument();

    })
    it("has email input",()=>{
        const {container} =  render(<SignUpPage/>);
        const inputs = container.querySelectorAll("input");
        expect(inputs.length).toBe(2);
 
     })
  });
}); 



