import { render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import Home from "./page";

vi.mock("next/image", () => ({
  default: ({
    alt,
  }: {
    alt: string;
  }) => <span role="img" aria-label={alt} />,
}));

describe("Homepage", () => {
  test("renders the expected starter heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: /to get started, edit the page\.tsx file/i,
    });

    expect(heading).toBeInTheDocument();
  });

  test("provides a documentation link", () => {
    render(<Home />);

    const documentationLink = screen.getByRole("link", {
      name: "Documentation",
    });

    expect(documentationLink).toHaveAttribute(
      "href",
      "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    );
  });
});