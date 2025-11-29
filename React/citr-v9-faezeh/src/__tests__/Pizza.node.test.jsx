import { render, cleanup } from "@testing-library/react";
import { expect, test, afterEach } from "vitest";
import Pizza from "../Pizza";

afterEach(cleanup);

test("alt test renderes on Pizza image", () => {
  const name = "my favorite pizza";
  const src = "https://www.istockphoto.com/photos/nature";

  const screen = render(
    <Pizza name={name} description="super cool pizza" pic={src} />,
  );

  const img = screen.getByRole("img");
  expect(img.src).toBe(src);
  expect(img.alt).toBe(name);
});

test("to have default image if none is provided", () => {
  const screen = render(
    <Pizza name="something else" description="something" />,
  );
  const img = screen.getByRole("img");
  expect(img.src).not.toBe("");
});
