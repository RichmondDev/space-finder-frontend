import { User, UserAttribute } from "../model/Model";

export class AuthService {
  public async login(
    userName: string,
    password: string
  ): Promise<User | undefined> {
    if (userName === "Richmond" && password === "ToroCloud123") {
      return {
        userName: userName,
        email: "some@email.com",
      };
    } else {
      return undefined;
    }
  }
  public async getUserAttributes(user: User): Promise<UserAttribute[]> {
    const result: UserAttribute[] = [];
    result.push({
      Name: "Description",
      Value: "",
    });
    result.push({
      Name: "Job",
      Value: "Software Engineer",
    });
    result.push({
      Name: "Age",
      Value: "22",
    });
    result.push({
      Name: "Experience",
      Value: "3 years",
    });
    return result;
  }
}
