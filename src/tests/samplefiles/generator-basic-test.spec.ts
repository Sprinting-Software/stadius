import { client, hideFields } from "stadius";
describe("generator-basic-test", () => {
  it("test 1", async () => {
    const response = await client.GET("https://swapi.dev/api/people/1", {});
    expect(response.statusCode).toBe(200);
    hideFields(response.body);
    const expected = {
      name: "Luke Skywalker",
      height: "172",
      mass: "77",
      hair_color: "blond",
      skin_color: "fair",
      eye_color: "blue",
      birth_year: "19BBY",
      gender: "male",
      homeworld: "https://swapi.dev/api/planets/1/",
      films: [
        "https://swapi.dev/api/films/1/",
        "https://swapi.dev/api/films/2/",
        "https://swapi.dev/api/films/3/",
        "https://swapi.dev/api/films/6/",
      ],
      species: [],
      vehicles: [
        "https://swapi.dev/api/vehicles/14/",
        "https://swapi.dev/api/vehicles/30/",
      ],
      starships: [
        "https://swapi.dev/api/starships/12/",
        "https://swapi.dev/api/starships/22/",
      ],
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      url: "https://swapi.dev/api/people/1/",
    };
    hideFields(expected);
    expect(response.body).toMatchObject(expected);
  });

  it("test 2", async () => {
    const response = await client.POST(
      "https://swapi.dev/api/people/2",
      {},
      { foo: "Bar" }
    );
    expect(response.statusCode).toBe(405);
  });
});
