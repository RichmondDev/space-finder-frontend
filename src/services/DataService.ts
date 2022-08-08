import { Space } from "../model/Model";

export class DataService {
  public async getSpaces(): Promise<Space[]> {
    const result: Space[] = [];
    result.push({
      location: "Boston",
      name: "Best Location",
      spaceId: "123",
    });
    result.push({
      location: "Miami",
      name: "Best Location",
      spaceId: "124",
    });
    result.push({
      location: "Dallas",
      name: "Best Location",
      spaceId: "125",
    });
    result.push({
      location: "Los Angeles",
      name: "Best Location",
      spaceId: "126",
    });
    return result;
  }

  public async reserveSpace(spaceId: string): Promise<string | undefined> {
    if (spaceId === "1234") {
      return "5555";
    } else {
      return undefined;
    }
  }
}
