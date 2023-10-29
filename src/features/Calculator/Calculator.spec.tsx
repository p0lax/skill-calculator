import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Calculator } from "./Calculator";

describe("Calculator", () => {
  test("render Calculator correctly", () => {
    render(<Calculator />);
    expect(
      screen.getByText(
        "TitanStar Legends - Rune Master Loadout Talent Calculator 9000"
      )
    ).toBeDefined();

    expect(screen.getAllByTestId("skill-tree")).toHaveLength(2);
    expect(screen.getAllByTestId("skill-item")).toHaveLength(8);
    expect(screen.getByText("Points Spent")).toBeDefined();
  });

  test("assigns point succuessfully", () => {
    render(<Calculator />);
    fireEvent.click(screen.getAllByTestId("skill-item")[0]);
    expect(screen.getByTestId("points-counter").textContent).toBe("1 / 6");
  });

  test("removes assigned point", () => {
    render(<Calculator />);
    fireEvent.click(screen.getAllByTestId("skill-item")[0]);
    expect(screen.getByTestId("points-counter").textContent).toBe("1 / 6");
    fireEvent.contextMenu(screen.getAllByTestId("skill-item")[0]);
    expect(screen.getByTestId("points-counter").textContent).toBe("0 / 6");
  });

  test("does not assig point to skill if previous skill is not selected", () => {
    render(<Calculator />);
    fireEvent.click(screen.getAllByTestId("skill-item")[2]);
    expect(screen.getByTestId("points-counter").textContent).toBe("0 / 6");
  });

  test("does not remove assigned point if previous skill is selected", () => {
    render(<Calculator />);
    fireEvent.click(screen.getAllByTestId("skill-item")[0]);
    fireEvent.click(screen.getAllByTestId("skill-item")[1]);
    expect(screen.getByTestId("points-counter").textContent).toBe("2 / 6");
    fireEvent.contextMenu(screen.getAllByTestId("skill-item")[0]);
    expect(screen.getByTestId("points-counter").textContent).toBe("2 / 6");
  });

  test("does not allow assigning more than 6 points", () => {
    window.alert = vi.fn();
    render(<Calculator />);
    fireEvent.click(screen.getAllByTestId("skill-item")[0]);
    fireEvent.click(screen.getAllByTestId("skill-item")[1]);
    fireEvent.click(screen.getAllByTestId("skill-item")[2]);
    fireEvent.click(screen.getAllByTestId("skill-item")[3]);
    fireEvent.click(screen.getAllByTestId("skill-item")[4]);
    fireEvent.click(screen.getAllByTestId("skill-item")[5]);
    fireEvent.click(screen.getAllByTestId("skill-item")[6]);
    expect(window.alert).toHaveBeenCalled();
    expect(screen.getByTestId("points-counter").textContent).toBe("6 / 6");
  });
});
