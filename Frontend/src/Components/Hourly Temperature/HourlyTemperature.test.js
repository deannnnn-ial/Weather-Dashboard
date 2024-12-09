import { render, screen } from "@testing-library/react";
import { HourlyTemperature } from "./HourlyTemperature";
beforeEach(() => {
  sessionStorage.setItem("lat", "40.7128");
  sessionStorage.setItem("lon", "-74.0060");
  sessionStorage.setItem("name", "New York");
});


describe("HourlyTemperature Component", () => {
  it("renders a loading message initially", () => {
    render(<HourlyTemperature />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});

it("displays an error message when an error occurs", () => {
  // Mocking sessionStorage values
  sessionStorage.removeItem("lat");
  sessionStorage.removeItem("lon");

  render(<HourlyTemperature />);

  expect(
    screen.getByText("Error: Missing latitude or longitude in session storage")
  ).toBeInTheDocument();
});

import { act } from "react-dom/test-utils";

it("displays hourly data when fetched successfully", async () => {
  // Mock sessionStorage values
  sessionStorage.setItem("lat", "40.7128");
  sessionStorage.setItem("lon", "-74.0060");
  sessionStorage.setItem("name", "New York");

  // Mocking fetch
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      json: () =>
        Promise.resolve({
          hourly: [
            { dt: 1633035600, temp: 68.5, weather: [{ description: "clear sky" }] },
            { dt: 1633039200, temp: 70.3, weather: [{ description: "few clouds" }] },
          ],
        }),
    })
  );

  await act(async () => {
    render(<HourlyTemperature />);
  });

  expect(screen.getByText("12-Hour Forecast for New York")).toBeInTheDocument();
  expect(screen.getByText("68.5°F")).toBeInTheDocument();
  expect(screen.getByText("clear sky")).toBeInTheDocument();
  expect(screen.getByText("70.3°F")).toBeInTheDocument();
  expect(screen.getByText("few clouds")).toBeInTheDocument();

  // Cleanup mock
  global.fetch.mockRestore();
});
  