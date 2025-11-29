import { expect, test, vi, afterAll, afterEach } from "vitest";
import { render, renderHook, cleanup, waitFor } from "@testing-library/react";
import createFetchMocker from "vitest-fetch-mock";
import { useGetPizzaOfTheDay } from "../GetPizzaOfTheDay";

const fetchMocker = createFetchMocker(vi);
fetchMocker.enableMocks();

afterEach(cleanup);

const testPizza = {
  id: "something",
  name: "wierd",
  category: "happening",
  descriptiong: "hereeee",
  image: "/public/pizzas/calabrese.webp",
  size: { S: 12, M: 14, L: 30 },
};

test("gives null when frist calls", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => useGetPizzaOfTheDay());
  expect(result.current).toBeNull();
});
test("to call the API and give back the pizza of the day", async () => {
  fetch.mockResponseOnce(JSON.stringify(testPizza));
  const { result } = renderHook(() => useGetPizzaOfTheDay(""));
  await waitFor(() => {
    expect(result.current).toEqual(testPizza);
  });
  expect(fetchMocker).toBeCalledWith("/api/pizza-of-the-day");
});
